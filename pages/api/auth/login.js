import { supabase } from '../../../supabaseClient';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, username, password')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ 
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username
      } 
     });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
