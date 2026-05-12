import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "password";

  if (username === adminUser && password === adminPass) {
    const token = sign({ user: username }, JWT_SECRET, { expiresIn: "7d" });
    
    // Set cookie
    res.setHeader("Set-Cookie", serialize("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: "/"
    }));

    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
}
