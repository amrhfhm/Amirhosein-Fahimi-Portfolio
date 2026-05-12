import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { CASE_STUDIES } from "../constants/projects";
import { useEffect } from "react";

export default function CaseStudy() {
  const { id } = useParams();
  const project = id ? CASE_STUDIES[id] : null;

  // Find next project for the footer
  const projectIds = Object.keys(CASE_STUDIES);
  const currentIndex = projectIds.indexOf(id || "");
  const nextId = projectIds[(currentIndex + 1) % projectIds.length];
  const nextProject = CASE_STUDIES[nextId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project not found</h1>
          <Link to="/" className="text-[#25A9B3] hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEDE9] min-h-screen">
      {/* Background Noise & Gradients */}
      <div className="noise-bg" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header / Intro */}
      <header className="pt-32 md:pt-48 pb-16 md:pb-32 px-6 max-w-7xl mx-auto">
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

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-32 items-end">
            <div>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-[#25A9B3] mb-6 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter leading-[0.9] mb-8">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed font-sans font-light">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-black/10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 block mb-2">Role</span>
                <span className="text-sm font-bold text-black uppercase tracking-widest">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 block mb-2">Timeline</span>
                <span className="text-sm font-bold text-black uppercase tracking-widest">{project.timeline}</span>
              </div>
              {project.collaborators && (
                <div className="md:col-span-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 block mb-2">Collaborators</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.collaborators.map((c, i) => (
                      <span key={i} className="text-[11px] font-bold text-black uppercase tracking-widest opacity-80">
                        {c}{i < project.collaborators!.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.link && (
                <div className="col-span-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 block mb-2">Live Site</span>
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#25A9B3] uppercase tracking-widest group">
                    Visit Project <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="px-4 md:px-8 max-w-[1600px] mx-auto mb-24 md:mb-48"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden bg-black/5">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Storytelling Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-64 pb-32">
        {/* Overview & Problem */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 mb-48">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">Project Overview</h2>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-sans font-light">
              {project.overview}
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">The Challenge</h2>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-sans font-light">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Strategic Reasoning Section */}
        {project.thinking && project.thinking.length > 0 && (
          <div className="mb-48 space-y-24">
            <div className="flex items-center gap-4">
              <div className="h-px bg-black/10 flex-grow" />
              <div className="px-6 py-2 rounded-full border border-black/10 text-[11px] font-black uppercase tracking-[0.4em] text-black/50 whitespace-nowrap">
                Product Thinking
              </div>
              <div className="h-px bg-black/10 flex-grow" />
            </div>
            <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
              {project.thinking.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-6 group"
                >
                  <div className="text-[10px] font-black text-[#25A9B3] uppercase tracking-[0.3em]">0{i + 1}</div>
                  <h3 className="text-2xl md:text-4xl font-display font-medium tracking-tight leading-tight group-hover:text-[#25A9B3] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-lg text-black/60 leading-relaxed font-sans font-light">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Before & After Comparisons */}
        {project.comparisons && project.comparisons.length > 0 && (
          <div className="mb-48 space-y-16">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4">Evolution & Impact</h2>
               <p className="text-black/40 font-sans tracking-widest text-xs font-black uppercase">Before & After Comparisons</p>
            </div>
            
            {project.comparisons.map((comp, i) => (
              <div key={i} className="space-y-12">
                <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-center md:text-left">{comp.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-[32px] overflow-hidden bg-black/5 border border-black/5 grayscale opacity-60">
                      <img src={comp.before.image} alt="Before" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-3 px-2">
                      <span className="text-[10px] bg-red-500/10 text-red-600 px-2 py-0.5 rounded-full font-black uppercase tracking-widest leading-none">Previous</span>
                      <p className="text-sm text-black/50 font-sans italic">{comp.before.caption}</p>
                    </div>
                  </div>
                  {/* After */}
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-[32px] overflow-hidden bg-white shadow-xl border border-black/5">
                      <img src={comp.after.image} alt="After" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-3 px-2">
                       <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-black uppercase tracking-widest leading-none">Improved</span>
                       <p className="text-sm text-black/80 font-sans font-medium">{comp.after.caption}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-black/5 max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-black/70 leading-relaxed font-sans font-light italic text-center">
                      "{comp.reasoning}"
                    </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Sections */}
        {project.sections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`
              grid gap-16 items-center
              ${section.layout === 'split' ? 'md:grid-cols-2' : 'grid-cols-1'}
            `}
          >
            <div className={`space-y-8 ${idx % 2 === 1 && section.layout === 'split' ? 'md:order-2' : ''}`}>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight uppercase leading-none">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed font-sans font-light uppercase">
                {section.content}
              </p>
            </div>
            {section.image && (
              <div className={`
                rounded-[40px] overflow-hidden bg-black/5 border border-black/5
                ${section.layout === 'grid' ? 'aspect-video' : 'aspect-square md:aspect-[4/5]'}
                ${idx % 2 === 1 && section.layout === 'split' ? 'md:order-1' : ''}
              `}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </motion.div>
        ))}

        {/* Outcomes & Lessons */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight uppercase leading-none">Perspective</h2>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-sans font-light">
              This project reinforced that low conversion isn't always a UI problem. Sometimes the real friction lies in infrastructure, analytics gaps, or marketing misalignment.
            </p>
          </div>
          <div className="space-y-8">
             <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight uppercase leading-none">Outcome</h2>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-3xl border border-black/5">
                  <div className="text-3xl font-display font-medium text-[#25A9B3]">+30%</div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-black/30 mt-2">Conversion</div>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-black/5">
                  <div className="text-3xl font-display font-medium text-[#25A9B3]">-24%</div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-black/30 mt-2">Error Rate</div>
                </div>
             </div>
          </div>
        </div>

        {/* The Solution / End Result */}
        <div className="py-24 md:py-48 px-8 md:px-16 bg-[#121212] rounded-[60px] text-white overflow-hidden relative group">
          <div className="relative z-10 max-w-2xl">
             <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-6 block">The Result</span>
             <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-tight mb-8">
              A seamless experience for every user.
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans font-light">
              {project.solution}
            </p>
          </div>
          {/* Subtle accent glow */}
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#25A9B3]/20 blur-[150px] rounded-full group-hover:bg-[#25A9B3]/30 transition-colors duration-1000" />
        </div>
      </div>

      {/* Footer Navigation - Next Project */}
      <footer className="border-t border-black/5 py-32 md:py-48 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <Link to={`/project/${nextId}`} className="group block text-center md:text-left">
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
    </div>
  );
}
