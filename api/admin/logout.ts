import { serialize } from "cookie";

export default async function handler(req: any, res: any) {
  res.setHeader("Set-Cookie", serialize("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/"
  }));

  return res.status(200).json({ success: true });
}
