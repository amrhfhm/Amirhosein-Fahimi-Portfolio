import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Lock, User, Loader2, AlertCircle } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: `Server error: ${res.status}` }));
        setError(errorData.message || "Invalid credentials");
        return;
      }

      const data = await res.json();

      if (data.success) {
        navigate("/admin");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login fetch error:", err instanceof Error ? err.message : String(err));
      if (err instanceof Error && err.name === "TypeError" && err.message === "Failed to fetch") {
        setError("Cannot reach the server. Please check your connection or wait for the server to start.");
      } else {
        setError(err instanceof Error ? `Error: ${err.message}` : "An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EBEDE9] flex items-center justify-center p-6 uppercase selection:bg-black selection:text-white">
      <div className="noise-bg opacity-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-[40px] p-10 md:p-12 shadow-2xl shadow-black/5 border border-black/5">
          <div className="mb-12 text-center">
            <div className="w-16 h-16 bg-black text-white rounded-2.5xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/20">
              <Lock size={32} />
            </div>
            <h1 className="text-3xl font-display font-medium tracking-tight mb-2">Admin Portal</h1>
            <p className="text-sm text-black/40 tracking-widest font-bold">Secure Access Required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#F5F6F4] border-none rounded-2xl py-5 pl-14 pr-6 text-sm font-bold tracking-widest focus:ring-2 focus:ring-black/5 outline-none transition-all"
                  required
                />
              </div>

              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F5F6F4] border-none rounded-2xl py-5 pl-14 pr-6 text-sm font-bold tracking-widest focus:ring-2 focus:ring-black/5 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold leading-none border border-red-100"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white rounded-2xl py-5 text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl shadow-black/10"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "Authenticate"
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate("/")}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors"
            >
              ← Return Home
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
