import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackToTop } from "../components/BackToTop";
import { PROJECTS } from "../data/projects";
import { logEvent } from "../lib/analytics";

export default function CaseStudy() {
  const { id } = useParams();
  const trackedDepths = useRef<Set<number>>(new Set());
  
  const project = PROJECTS.find((p) => p.id === id);
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = currentIndex !== -1 ? PROJECTS[(currentIndex + 1) % PROJECTS.length] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    trackedDepths.current.clear();
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = Math.round((scrollPosition / scrollHeight) * 100);
      
      [25, 50, 75, 100].forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          logEvent("scroll_depth", { 
            projectId: id, 
            depth: depth 
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  const handleCTAClick = (label: string) => {
    logEvent("cta_click", { projectId: id, label });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EBEDE9]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project not found</h1>
          <Link to="/" className="text-[#25A9B3] hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEDE9] min-h-screen font-sans">
      <div className="noise-bg" />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-32 px-6 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors mb-16"
          >
            <ArrowLeft size={14} className="stroke-[3]" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
            <div>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-[#25A9B3] mb-6 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8">
                {project.title}
              </h1>
              {project.heroSubtitle && (
                <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed font-light mb-8">
                  {project.heroSubtitle}
                </p>
              )}
              {project.ctaEnabled && project.ctaLabel && project.ctaLink ? (
                <a 
                  href={project.ctaLink} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => handleCTAClick(project.ctaLabel)}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 hover:border-black transition-all mb-8"
                >
                  {project.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : project.figmaLink && (
                <a 
                  href={project.figmaLink} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => handleCTAClick("VIEW FIGMA FILE")}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 hover:border-black transition-all mb-8"
                >
                  VIEW FIGMA FILE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>

            {project.heroMockup && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 p-4 bg-white rounded-2xl shadow-2xl skew-x-[-1deg] skew-y-[1deg]">
                  {project.heroMockup && (
                    <img 
                      src={project.heroMockup} 
                      alt="Mockup" 
                      className="rounded-lg w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-[#25A9B3]/5 blur-3xl -z-0 rounded-full" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Section 2: Role & Outcome */}
      <section className="py-24 px-6 border-y border-black/5 bg-white/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#25A9B3]">Role & Responsibilities</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-black/70">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside pl-4 space-y-1" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-2" {...props} />
                }}
              >
                {project.roleResponsibilities || ""}
              </ReactMarkdown>

            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#25A9B3]">Outcome</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-black/70">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside pl-4 space-y-1" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-2" {...props} />
                }}
              >
                {project.outcome || ""}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 md:py-48 px-6 max-w-3xl mx-auto space-y-16 text-center">
        <div className="space-y-8">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-[#25A9B3]">Background</span>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">
            {project.backgroundTitle || "Background"}
          </h2>
        </div>
        <div className="text-lg md:text-xl text-black/60 leading-relaxed font-light prose prose-lg max-w-none mx-auto text-left">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.backgroundText || ""}</ReactMarkdown>
        </div>
        {project.backgroundImage && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden bg-black/5 mt-16"
          >
            <img 
              src={project.backgroundImage} 
              alt="Project Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-48 px-6 max-w-3xl mx-auto space-y-16 text-center">
        <div className="space-y-8">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-[#25A9B3]">PROBLEM</span>
          <div className="space-y-12">
            {project.problemSections && project.problemSections.map((section: any, idx: number) => (
              <div key={idx} className="text-left">
                <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">
                  {section.title}
                </h2>
                <div className="text-lg md:text-xl text-black/60 leading-relaxed font-light prose prose-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body || ""}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
        {project.problemImages && project.problemImages.length > 0 && (
          <div className={`grid gap-8 mt-16 ${project.problemImages.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {project.problemImages.map((img: string, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-video md:aspect-square rounded-[32px] overflow-hidden bg-black/5"
              >
                  {img && (
                    <img src={img} alt={`Problem illustration ${i + 1}`} className="w-full h-full object-cover" />
                  )}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-48 px-6 bg-white/40 border-y border-black/5">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4">Our Approach</h2>
            <p className="text-black/40 font-sans tracking-[0.4em] text-xs font-black uppercase">Process & Methodology</p>
          </div>

          <div className="space-y-24 md:space-y-48">
            {project.approachSteps && project.approachSteps.map((step: any, i: number) => (
              <div key={i} className={`grid ${step.image ? 'md:grid-cols-2' : ''} gap-16 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: step.image ? (i % 2 === 0 ? -40 : 40) : 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`space-y-8 ${step.image ? (i % 2 === 1 ? 'md:order-2' : '') : 'text-center max-w-3xl mx-auto'}`}
                >
                  <div className="text-xs font-black text-[#25A9B3] uppercase tracking-[0.5em]">Step 0{i + 1}</div>
                  <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight leading-none uppercase">
                    {step.title}
                  </h3>
                   {step.subtitle && <p className="text-xl text-black/60 font-light">{step.subtitle}</p>}
                  <div className={`text-lg md:text-xl text-black/60 leading-relaxed font-light prose prose-lg ${step.image ? 'max-w-none' : 'max-w-none mx-auto'}`}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{step.body || ""}</ReactMarkdown>
                  </div>
                </motion.div>
                {step.image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`rounded-[40px] overflow-hidden bg-black/5 aspect-[4/5] ${i % 2 === 1 ? 'md:order-1' : ''}`}
                  >
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 md:py-48 px-6 max-w-3xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-center">Impact</h2>
        <div className="space-y-12">
          {project.impactSections && project.impactSections.map((section: any, i: number) => (
             <div key={i}>
                <h3 className="text-2xl font-display font-medium mb-4 text-[#25A9B3]">{section.title}</h3>
                <div className="text-lg text-black/60 prose prose-lg max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body || ""}</ReactMarkdown></div>
             </div>
          ))}
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-16 text-center">Takeaway</h2>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-12 md:p-24 rounded-[60px] text-white space-y-12 max-w-4xl w-full text-center"
        >
           {project.takeawaySections && project.takeawaySections.map((section: any, i: number) => (
             <div key={i} className="mb-12 last:mb-0">
               <h3 className="text-2xl font-display font-medium mb-4 text-[#25A9B3]">{section.title}</h3>
               <div className="text-white/60 prose prose-invert mx-auto"><ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body || ""}</ReactMarkdown></div>
             </div>
           ))}
        </motion.div>
      </section>

      {/* Footer Navigation */}
      {nextProject && (
        <footer className="border-t border-black/5 py-32 md:py-48 px-6 bg-white/30 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to={`/project/${nextProject.id}`} className="group block text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 block mb-6">Up Next</span>
              <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                <h3 className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-700">
                  {nextProject.title}
                </h3>
                <div className="flex items-center gap-4 text-black/40 group-hover:text-black transition-colors">
                  <span className="text-sm font-black uppercase tracking-widest leading-none">View Case Study</span>
                  <ArrowRight size={40} className="stroke-[1] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </footer>
      )}
      <BackToTop />
    </div>
  );
}


