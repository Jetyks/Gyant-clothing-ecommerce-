// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
 */

import db from '../../db/conection';

export default async function handler(req, res) {
  try {
    // Intento de consulta sencilla a la base de datos
    const result = await db.raw('SELECT 1+1 AS result'); // Prueba si responde
    res.status(200).json({ message: 'Conexión exitosa', result: result.rows });
  } catch (error) {
    console.error('Error de conexión:', error);
    res.status(500).json({ message: 'Error al conectar con la base de datos', error: error.message });
  }
}