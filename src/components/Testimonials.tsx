import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

enum OperationType {
  LIST = 'list',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(collection(db, "testimonials"), orderBy("order", "asc"));
        const snap = await getDocs(q);
        setTestimonials(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, "testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const next = () => {
    setTestimonials(prev => {
      if (prev.length === 0) return prev;
      setActive((old) => (old + 1) % prev.length);
      return prev;
    });
  };

  const prev = () => {
    setTestimonials(prev => {
      if (prev.length === 0) return prev;
      setActive((old) => (old - 1 + prev.length) % prev.length);
      return prev;
    });
  };

  if (loading) {
    return (
      <section id="testimonials" className="bg-[#121212] py-40 flex items-center justify-center">
        <Loader2 className="animate-spin text-white/20" size={48} />
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-[#121212] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white tracking-tighter leading-[1.1]">
            Feedback from the people <br className="hidden md:block" /> I worked with
          </h2>
        </motion.div>
      </div>

      <div className="relative max-w-full px-6 flex items-center justify-center">
        {/* Navigation */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 lg:px-12 z-20 pointer-events-none">
          <button 
            onClick={prev}
            className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border-2 border-white/10 text-white/20 hover:border-white hover:text-white transition-all pointer-events-auto group"
            aria-label="Previous testimonial"
          >
             <ChevronLeft className="w-8 h-8 stroke-[1.5] group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border-2 border-white/10 text-white/20 hover:border-white hover:text-white transition-all pointer-events-auto group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 stroke-[1.5] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex gap-6 md:gap-10 items-center justify-center w-full max-w-7xl min-h-[550px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {[-1, 0, 1].map((offset) => {
              const index = (active + offset + testimonials.length) % testimonials.length;
              const t = testimonials[index];
              const isActive = offset === 0;

              return (
                <motion.div
                  key={`${t.id}-${index}-${offset}`}
                  initial={{ opacity: 0, scale: 0.8, x: offset * 50 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3, 
                    scale: isActive ? 1 : 0.8, 
                    x: 0,
                    zIndex: isActive ? 10 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -offset * 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`
                    relative w-full md:w-[450px] flex-shrink-0 rounded-[44px] p-8 md:p-12 transition-all duration-500 flex flex-col justify-between 
                    min-h-[480px] md:min-h-[520px]
                    ${isActive 
                      ? "bg-[#25A9B3] text-white shadow-2xl shadow-[#25A9B3]/20 border-[#25A9B3]" 
                      : "bg-[#F9F9F9] text-[#121212] hidden md:flex border-black/5"
                    }
                    border
                  `}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) prev();
                    else if (info.offset.x < -100) next();
                  }}
                >
                  <div className="relative">
                    <div className={`absolute -top-4 -left-2 ${isActive ? "text-white/10" : "text-[#25A9B3]/10"}`}>
                      <Quote className="w-12 h-12 fill-current" />
                    </div>
                    <p className={`text-lg md:text-xl leading-relaxed font-sans font-medium tracking-tight mt-8 ${isActive ? "text-white" : "text-black/70"}`}>
                      {t.text || t.quote}
                    </p>
                  </div>

                  <div className={`flex items-center gap-5 pt-8 border-t ${isActive ? "border-white/10" : "border-black/5"}`}>
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className={`w-14 h-14 rounded-full object-cover border-2 ${isActive ? "border-white/30" : "border-black/5"}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${isActive ? 'FFFFFF' : '25A9B3'}&color=${isActive ? '25A9B3' : 'FFFFFF'}&bold=true`;
                      }}
                    />
                    <div>
                      <h4 className="text-lg font-bold leading-none mb-1.5">{t.name}</h4>
                      <p className={`text-xs font-black uppercase tracking-widest ${isActive ? "text-white/60" : "text-black/40"}`}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-3 mt-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "w-10 bg-[#25A9B3]" : "w-1.5 bg-white/20"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
