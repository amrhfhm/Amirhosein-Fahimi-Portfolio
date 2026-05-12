import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/check");
        const data = await res.json();
        setAuthenticated(data.authenticated);
      } catch (err) {
        setAuthenticated(false);
      }
    };
    checkAuth();
  }, [location.pathname]);

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#EBEDE9] flex items-center justify-center">
        <Loader2 className="animate-spin text-black/20" size={48} />
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
