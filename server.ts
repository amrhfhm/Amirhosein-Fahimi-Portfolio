import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

console.log("Starting server in", process.env.NODE_ENV, "mode");

app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV });
});

// API Login route
app.post("/api/admin/login", (req, res) => {
  console.log("Login attempt:", req.body.username);
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "password";

  console.log("Expected:", adminUser, "Received:", username);

  if (username === adminUser && password === adminPass) {
    console.log("Login successful for:", username);
    const token = jwt.sign({ user: username }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// Check auth status
app.get("/api/admin/check", (req, res) => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ authenticated: false });

  try {
    jwt.verify(token, JWT_SECRET);
    return res.json({ authenticated: true });
  } catch (err) {
    return res.status(401).json({ authenticated: false });
  }
});

// Logout
app.post("/api/admin/logout", (req, res) => {
  res.clearCookie("admin_token");
  res.json({ success: true });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Global error handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("Global server error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
