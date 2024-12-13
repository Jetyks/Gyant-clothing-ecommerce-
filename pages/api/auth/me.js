import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Token no válido" });
  }
}
