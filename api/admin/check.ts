import { verify } from "jsonwebtoken";
import { parse } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

export default async function handler(req: any, res: any) {
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.admin_token;

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    verify(token, JWT_SECRET);
    return res.status(200).json({ authenticated: true });
  } catch (err) {
    return res.status(401).json({ authenticated: false });
  }
}
