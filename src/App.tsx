/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Admin from "./pages/Admin";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-black selection:text-white">
        {/* Background elements */}
        <div className="noise-bg" />
        <div className="fixed inset-0 bg-[#EBEDE9] -z-50" />
        
        {/* Mesh Gradients for atmosphere - much softer for light mode */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-40" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-40" />

        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={
            <>
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project/:id" element={<CaseStudy />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
