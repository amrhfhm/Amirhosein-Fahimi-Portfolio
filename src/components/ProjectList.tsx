import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: "gg10",
    displayId: "01",
    title: "GG10",
    category: "Gaming",
    description: "Led the end-to-end design of a gaming engagement platform from scratch, scaling the experience across 100+ screens with a custom Material 3 design system.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    accent: "bg-purple-500/10 text-purple-600"
  },
  {
    id: "personal-portfolio",
    displayId: "02",
    title: "Personal Portfolio Design",
    category: "AI",
    description: "Designed and developed a portfolio through an end-to-end AI-native workflow using Google AI Studio to translate prompts into production-ready interfaces.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    accent: "bg-blue-500/10 text-blue-600"
  },
  {
    id: "bit24-spot",
    displayId: "03",
    title: "Bit24 Spot Product",
    category: "Fintech/Crypto",
    description: "Reduced support complaints by improving the peer-to-peer crypto trading experience through usability testing and research-driven UX improvements",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2070&auto=format&fit=crop",
    accent: "bg-amber-500/10 text-amber-600"
  },
  {
    id: "bit24-kyc",
    displayId: "04",
    title: "Bit24 KYC Product",
    category: "Fintech/Crypto",
    description: "Increased registration conversion rates by optimizing the onboarding flow through behavioral analytics and UX improvements.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    accent: "bg-emerald-500/10 text-emerald-600"
  }
];

export default function ProjectList() {
  return (
    <section id="work" className="px-6 py-32 max-w-7xl mx-auto uppercase">
      <div className="grid gap-32">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Desktop Thumbnail */}
            <div className={`hidden md:block ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <Link to={`/project/${project.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 border border-black/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${project.accent} mb-6`}>
                {project.category}
              </div>
              <h3 className="text-3xl md:text-5xl font-sans font-medium mb-6 leading-tight group-hover:text-black transition-colors">
                {project.title}
              </h3>

              {/* Mobile Thumbnail */}
              <Link to={`/project/${project.id}`} className="block md:hidden mb-8 relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 border border-black/5">
                 <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90"
                />
              </Link>

              <p className="text-lg md:text-xl font-sans text-black/40 font-light mb-10 leading-relaxed normal-case">
                {project.description}
              </p>
              <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 group-hover:border-black transition-all">
                VIEW CASE STUDY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
