import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackToTop } from "../components/BackToTop";
import { PROJECTS } from "../data/projects";

export default function CaseStudySpot() {
  const project = PROJECTS.find((p) => p.id === "bit24-spot");
  const currentProject = project;
  const nextProject = currentProject 
    ? (PROJECTS.find(p => p.order === currentProject.order + 1) || PROJECTS.find(p => p.order === 0))
    : null;

  const getAccent = (category: string) => {
    if (category.toLowerCase().includes('gaming')) return "bg-purple-100 text-purple-900";
    if (category.toLowerCase().includes('ai')) return "bg-blue-100 text-blue-900";
    if (category.toLowerCase().includes('fintech')) return "bg-emerald-100 text-emerald-900";
    return "bg-slate-100 text-slate-900";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EBEDE9]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project not found</h1>
          <Link to="/" className="text-[#057B85] hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEDE9] min-h-screen font-sans">
      <div className="noise-bg" />

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-12 max-w-[1280px] mx-auto">
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
              <div className={`inline-block px-3 py-1 rounded-full text-[12px] font-bold tracking-widest ${getAccent(project.category)} mb-6`}>
                {project.category.toUpperCase()}
              </div>
              <h1 className="text-[60px] font-display font-medium tracking-tighter leading-tight text-[#242424] mb-8">
                {project.title}
              </h1>
              {project.heroSubtitle && (
                <p className="text-[18px] text-[#656161] leading-relaxed mb-12">
                  {project.heroSubtitle}
                </p>
              )}
              {project.ctaEnabled && project.ctaLabel && project.ctaLink ? (
                <a 
                  href={project.ctaLink} 
                  target={project.id === "personal-portfolio" ? undefined : "_blank"} 
                  rel={project.id === "personal-portfolio" ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 hover:border-black transition-all mb-12"
                >
                  {project.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : project.figmaLink && (
                <a 
                  href={project.figmaLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 hover:border-black transition-all mb-12"
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
                 className="relative flex justify-center lg:justify-start w-full max-w-none"
              >
                  {typeof project.heroMockup === 'string' && (
                    <img
                      src={project.heroMockup}
                      alt="Mockup"
                      className="w-full lg:w-[155%] xl:w-[165%] max-w-none h-auto drop-shadow-2xl lg:-ml-8"
                      referrerPolicy="no-referrer"
                    />
                  )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Section 2: Role & Outcome */}
      <section className="py-24 md:py-32 border-y border-black/5 bg-white/30">
        <div className="max-w-[1280px] mx-auto px-12 grid md:grid-cols-2 gap-16 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[28px] font-sans font-medium uppercase text-[#1A1A1A]">ROLE & RESPONSIBILITIES</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-[#656161]">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ children }) => <ul className="list-disc list-outside pl-4 space-y-1">{children}</ul>,
                  li: ({ children }) => <li className="mb-2 text-[16px]">{children}</li>
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
            <h2 className="text-[28px] font-sans font-medium uppercase text-[#1A1A1A]">OUTCOME</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-[#656161]">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ children }) => <ul className="list-disc list-outside pl-4 space-y-1">{children}</ul>,
                  li: ({ children }) => <li className="mb-2 text-[16px]">{children}</li>
                }}
              >
                {project.outcome || ""}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      {project.backgroundTitle && (
        <section className="py-24 md:py-32 px-12 max-w-[1280px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center w-full gap-10">
              <div className={project.backgroundImage ? 'w-full md:w-[62%]' : 'w-full'}>
                <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>BACKGROUND</span>
                <br />
                <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{project.backgroundTitle}<br /></span>
                <br />
                <div style={{ color: '#656161', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.backgroundText}</ReactMarkdown>
                </div>
              </div>
            {project.backgroundImage && (
              <img 
                className="w-full md:w-[19.46%] object-contain mt-8 md:mt-0 md:ml-auto"
                src={project.backgroundImage} 
                alt="Background"
              />
            )}
          </div>
        </section>
      )}

      {/* Problem Section */}
      {project.problemSections && project.problemSections.length > 0 && (
        <section className="px-12 max-w-[1280px] mx-auto w-full overflow-hidden" style={{ paddingTop: '64px', paddingBottom: '120px', paddingLeft: '48px', paddingRight: '48px' }}>
          <div style={{ width: '100%', position: 'relative' }}>
            <div style={{ width: '100%' }}>
              <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800' }}>PROBLEM</span>
              <br/>
              {project.problemSections.length > 1 && <br/>}
              {project.problemSections.map((section, index) => (
                <div key={index} style={{ marginTop: index === 0 ? '0' : '32px' }}>
                  <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700' }}>{section.title}<br/></span>
                  <br/>
                  <div style={{ color: '#656161', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach Section */}
      {project.approachSteps && project.approachSteps.length > 0 && (
        <section className="py-24 md:py-32 bg-white/40 border-y border-black/5">
          <div className="max-w-[1280px] mx-auto px-12 w-full">
            <div style={{ width: '100%', position: 'relative' }}>
              <div style={{ width: '100%' }}>
                <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>APPROACH</span>
                <div style={{ flexDirection: 'column', display: 'flex', gap: '150px', marginTop: '50px', width: '100%' }}>
                  {project.approachSteps.map((step, index) => (
                    <div key={index} style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                      <div>
                        {step.title && (
                          <>
                            <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>{step.title}</span>
                            <br/><br/>
                          </>
                        )}
                        {step.body && (
                          <div style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>
                            <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => {
                                  const getStringText = (node: any): string => {
                                    if (!node) return "";
                                    if (typeof node === "string") return node;
                                    if (typeof node === "number") return String(node);
                                    if (Array.isArray(node)) {
                                      return node.map(getStringText).join("");
                                    }
                                    if (node.props && node.props.children) {
                                      return getStringText(node.props.children);
                                    }
                                    return "";
                                  };

                                  const textContent = getStringText(children).trim();

                                  const targetStrings = [
                                    "01 — Clarifying technical boundaries and business intent.",
                                    "02 — Structuring a multi-step research framework to evaluate friction.",
                                    "03 — Running the UX Assessment.",
                                    "04 — Auditing the live order terminal against established principles.",
                                    "05 — Benchmarking industry-standard professional layouts.",
                                    "06 — Harvesting unlogged customer complaints from business heads.",
                                    "07 — Reviewing digital trace behavior of unmoderated users."
                                  ];

                                  if (targetStrings.includes(textContent)) {
                                    return (
                                      <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#242424', fontWeight: '700' }}>
                                        {children}
                                      </p>
                                    );
                                  }

                                  return <p>{children}</p>;
                                }
                              }}
                            >
                              {step.body}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                      {step.image && (
                        <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                          {step.isVideo ? (
                            <video 
                              src={step.image} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              style={{ width: '100%', borderRadius: '8px' }} 
                            />
                          ) : (
                            <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src={step.image} alt={step.title} />
                          )}
                          {step.subtitle && (
                            <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>{step.subtitle}</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* From Findings to Solutions Section */}
      <section className="py-24 md:py-32 px-12 max-w-[1280px] mx-auto w-full overflow-hidden">
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ width: '100%' }}>
            <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>FROM FINDINGS TO SOLUTIONS</span>
            <br/><br/>
            <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Selected design interventions developed from the research findings and prioritized for implementation.</span>
            <br/><br/>
            <div style={{ color: '#656161', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.6' }}>
              Following the research phase, the findings were translated into a series of design improvements targeting the highest-impact usability issues. The examples below highlight a selection of the changes introduced to simplify critical workflows, reduce friction, and improve task completion confidence.
            </div>
            <div style={{ marginTop: '48px', width: '100%' }}>
              <img 
                src="https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780316285/spot_before_after_sckgem.png" 
                alt="From Findings to Solutions - Spot Trading Redesign" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {(project.impactSections && project.impactSections.length > 0) || project.impactImage ? (
        <section className="py-20 md:py-28 px-12 max-w-[1280px] mx-auto">
          <div style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch' }}>
              <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>IMPACT</span>
              <br />
              {project.impactSections?.map((section, index) => (
                <div key={index}>
                  <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{section.title}<br/></span>
                  <br />
                  <div style={{ color: '#656161', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            {project.impactImage && (
              <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src={project.impactImage} alt="Impact" />
            )}
          </div>
        </section>
      ) : null}

      {/* Takeaway Section */}
      {project.takeawaySections && project.takeawaySections.length > 0 && (
        <section className="px-12 max-w-[1280px] mx-auto" style={{ paddingTop: '64px', paddingBottom: '120px', paddingLeft: '48px', paddingRight: '48px' }}>
          <div style={{ width: '100%' }}>
            <span style={{ color: '#1A1A1A', fontSize: '28px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>TAKEAWAY</span>
            <div style={{ marginTop: '0' }}>
              {project.takeawaySections.map((section, index) => (
                <div key={index} style={{ marginTop: index === 0 ? '0' : '48px' }}>
                  <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', display: 'block', marginBottom: '12px' }}>{section.title}</span>
                  <div style={{ color: '#656161', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => <p style={{ margin: '0 0 8px 0' }}>{children}</p>
                      }}
                    >
                      {section.body}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


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
