/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyGG10 from "./pages/CaseStudyGG10";
import CaseStudySpot from "./pages/CaseStudySpot";
import CaseStudyKYC from "./pages/CaseStudyKYC";
import CaseStudyPortfolio from "./pages/CaseStudyPortfolio";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import Meta from "./components/Meta";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { logEvent } from "./lib/analytics";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    logEvent("page_view", { page: location.pathname });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTracker />
      <Meta />
      <div className="relative selection:bg-black selection:text-white">
        {/* Background elements */}
        <div className="noise-bg" />
        <div className="fixed inset-0 bg-[#EBEDE9] -z-50" />
        
        {/* Removed circular background decorators */}

        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/project/gg10" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <CaseStudyGG10 />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/project/bit24-spot" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <CaseStudySpot />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/project/bit24-kyc" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <CaseStudyKYC />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/project/personal-portfolio" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <CaseStudyPortfolio />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/project/:id" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <CaseStudy />
              </main>
              <Footer />
            </div>
          } />
          {/* Fallback to Home */}
          <Route path="*" element={
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
