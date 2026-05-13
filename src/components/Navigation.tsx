import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    if (id) {
      e.preventDefault();
      setIsMenuOpen(false);
      
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${id}`);
        // Small delay to allow navigation and rendering before scrolling
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 px-8 lg:px-12 
        flex items-center justify-between transition-all duration-500
        ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-xl border-b border-black/5 h-20" : "h-28 lg:h-32"}
      `}
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center relative z-50 h-full"
      >
        <Link 
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter text-[#121212] cursor-pointer hover:opacity-70 transition-opacity text-left whitespace-nowrap leading-none"
        >
          Amirhosein Fahimi
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex items-center gap-12 text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-black/60 leading-none h-full"
      >
        <a href="/#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-black transition-all">Projects</a>
        <a href="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-black transition-all">Testimonials</a>
        <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-black transition-all">Contact</a>
        <a href="https://drive.google.com/file/d/1kd0vNhoYlFwiYvLiwcFIviO8NFsZfTmm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all">Resume</a>
      </motion.div>

      {/* Mobile menu indicator */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1"
      >
        <motion.div 
          animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-black origin-center transition-all" 
        />
        <motion.div 
          animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="w-full h-0.5 bg-black transition-all" 
        />
        <motion.div 
          animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-black origin-center transition-all" 
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/5 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-black/5 p-8 shadow-2xl flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { label: "Projects", href: "/#work", id: "work" },
                { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
                { label: "Contact", href: "/#contact", id: "contact" },
                { label: "Resume", href: "https://drive.google.com/file/d/1kd0vNhoYlFwiYvLiwcFIviO8NFsZfTmm/view?usp=sharing" }
              ].map((item, i) => (
                item.href.startsWith('http') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-display font-medium tracking-tight text-[#121212] hover:opacity-50 transition-opacity"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={(e) => {
                      if (item.id) {
                        handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.id);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                    className="text-2xl font-display font-medium tracking-tight text-[#121212] hover:opacity-50 transition-opacity"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              <div className="mt-4 pt-6 border-t border-black/5">
                <p className="text-[10px] text-black/40 font-black uppercase tracking-widest leading-relaxed">
                  Based in Iran — Working Worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
