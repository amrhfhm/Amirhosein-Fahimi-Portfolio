import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  extra: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kamran Kaviani",
    role: "Chief Product Officer",
    extra: "Managed Amirhosein directly at Bit24",
    quote: "AmirHossein is a gifted and dedicated UX Researcher with a talent for uncovering valuable user insights. His expertise in conducting deep user interviews, usability tests, and heuristic evaluations has been instrumental in enhancing our product's user experience. AmirHossein’s ability to translate complex research findings into actionable recommendations makes him a valuable asset to any design team.",
    avatar: "/Kamran.png"
  },
  {
    id: 2,
    name: "Melika Mirazizi",
    role: "Product Manager",
    extra: "Managed Amirhosein directly at FEEL",
    quote: "I worked with him on several occasion, like FEEL AmirHosein is an incredibly disciplined product designer who approaches every task with a positive attitude and a strong sense of ownership. He is highly adaptive and flexible, able to seamlessly adjust to changing circumstances and requirements. He has a keen understanding of user-centric design principles and always strives to achieve the best possible results for both the end user and the team.",
    avatar: "/Melika.png"
  },
  {
    id: 3,
    name: "Yasaman Zarezadeh",
    role: "Scrum Master",
    extra: "Worked with Amirhosein on different teams",
    quote: "Amirhossein was one of my most passionate and highly skilled colleagues in Espad. With a deep under-standing of UX and his UI skills in Figma, he was able to design many brilliant frames for our website and application which were innovative. He had to design tricky frames for a complicated business, yet he was successful in creating simple and user-friendly frames for a very pleasant user experience.",
    avatar: "/Yasaman.png"
  },
  {
    id: 4,
    name: "Hadis Hosseini",
    role: "Product Designer",
    extra: "Worked with Amirhosein on the same team",
    quote: "Amirhosein is a very supportive, empathetic, and encouraging team leader who truly comprehends his colleagues' work circumstances. He strives to maintain a work environment free from anxiety and tension. In addition to emphasizing the importance of meetings' organization, he pays attention to all the details and aspects. All of these factors have led me to learn from and enjoy working alongside him.",
    avatar: "/Hadis.png"
  },
  {
    id: 5,
    name: "Yalda Nasirian",
    role: "UX/UI Designer",
    extra: "Reported to Amirhosein directly",
    quote: "Amirhosein is a leader who helps others around his grow. He mentored me during our time together by having an open feedback loop for our projects. I've learned so much from working with him; he helped me to become a better professional. He was always reliable and professional, and at stressful times he was a positive influence on all of us.",
    avatar: "/Yalda.png"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

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
              const index = (active + offset + TESTIMONIALS.length) % TESTIMONIALS.length;
              const t = TESTIMONIALS[index];
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
                      {t.quote}
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
        {TESTIMONIALS.map((_, i) => (
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
