import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackToTop } from "../components/BackToTop";
import { PROJECTS } from "../data/projects";

export default function CaseStudy() {
  const { id } = useParams();
  
  const project = PROJECTS.find((p) => p.id === id);
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = currentIndex !== -1 ? PROJECTS[(currentIndex + 1) % PROJECTS.length] : null;

  const getAccent = (category: string) => {
    if (category.toLowerCase().includes('gaming')) return "bg-purple-100 text-purple-900";
    if (category.toLowerCase().includes('ai')) return "bg-blue-100 text-blue-900";
    if (category.toLowerCase().includes('fintech')) return "bg-emerald-100 text-emerald-900";
    return "bg-slate-100 text-slate-900";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
                  target="_blank" 
                  rel="noreferrer"
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
              
              {/* Audio Players Placeholder - Removed */}
            </div>

            {project.heroMockup && (
              <motion.div
 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex justify-center"
              >
                  {project.heroMockup && (
                    <img 
                      src={project.heroMockup} 
                      alt="Mockup" 
                      className="w-full lg:w-[150%] h-auto drop-shadow-2xl"
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
            <h2 className="text-[20px] font-sans font-medium uppercase text-[#242424]">ROLE & RESPONSIBILITIES</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-[#656161]">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside pl-4 space-y-1" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-2 text-[16px]" {...props} />
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
            <h2 className="text-[20px] font-sans font-medium uppercase text-[#242424]">OUTCOME</h2>
            <div className="prose prose-sm md:prose-base max-w-none text-[#656161]">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside pl-4 space-y-1" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-2 text-[16px]" {...props} />
                }}
              >
                {project.outcome || ""}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 md:py-32 px-12 max-w-[1280px] mx-auto overflow-hidden">
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '40px' }}>
          <div style={{ width: '62%' }}>
            <span style={{ color: '#242424', fontSize: '20px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>BACKGROUND</span>
            <br />
            <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>A greenfield gaming platform targeting teenage Call of Duty players in the Iranian market<br /></span>
            <br />
            <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>GG10 was a freelance contract to design a competitive gaming platform from scratch — covering team formation, tournaments, and stat tracking, built for mobile web. I was the sole designer, working remotely with a business owner, PM, and two developers. No existing design, no design system, no visual language — everything started from zero. The target users were teenage gamers as young as 12, which meant the experience had to be bold, simple, and low-friction from day one.</span>
          </div>
          <img 
            style={{ width: '24.32%', objectFit: 'contain', marginLeft: 'auto' }} 
            src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779191252/home_ui_screen_nvphq8.png" 
            alt="Foreground"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 px-12 max-w-[1280px] mx-auto w-full overflow-hidden">
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ width: '100%' }}>
            <span style={{ color: '#242424', fontSize: '20px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>PROBLEM</span>
            <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              <br/>Building a gaming platform from zero — no existing design, no validated direction, no blueprint<br/>
            </span>
            <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
              <br/>GG10 started with a business hypothesis, not a broken experience to fix. The business owner had a vision, early sketches, and reference docs — but no defined scope, no design direction, and no visual identity. The challenge was threefold: translating a raw business idea into structured user flows, designing for teenagers as young as 12 whose visual bar is set by global gaming platforms, and keeping two developers continuously unblocked with ready-to-build specs throughout. The real risk was misalignment — a direction that drifted from business intent, a component library that couldn't scale, or documentation too vague to implement accurately.
            </span><span style={{ color: 'black', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
              <br/></span>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div style={{ width: '100%', position: 'relative' }}>
            <div style={{ width: '100%' }}>
              <span style={{ color: 'black', fontSize: '20px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>APPROACH</span>
              <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}><br/>01 — Immerse in the domain before touching Figma<br/></span>
              <span style={{ color: '#242424', fontSize: '20px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}><br/></span>
              <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>I began by reading the business owner's product documentation in full and annotating it with questions and assumptions. This back-and-forth helped me build a mental model of what GG10 actually needed to be before any design decisions were made. I also reviewed the three main competitors the business owner identified — studying their flows, screenshotting key screens, and documenting what worked and what didn't in a dedicated Competitors page in Figma.<br/></span>
              <span style={{ color: 'black', fontSize: '32px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
              <br/></span>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', display: 'flex', marginTop: '20px' }}>
                <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779194610/Comp_Analysis_s0yyvt.png" alt="Competitor Analysis" />
                <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>Competitor analysis board in Figma — key screens and UX patterns from rival platforms</div>
              </div>
                <div style={{ flexDirection: 'column', display: 'flex', gap: '150px', marginTop: '150px', width: '100%' }}>
                  {/* Step 02 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>02 — Define platform, audience, and visual direction</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>Before wireframing, several foundational decisions needed to be made. I facilitated discussions with the business owner and PM to nail down: platform (mobile web, with desktop mirroring mobile layout in phase one, given 90%+ mobile usage), user age range (12 and up, skewing young — which ruled out complex flows), and visual identity direction. GG10 needed to feel like a gaming product — dark, bold, high-energy. We landed on a black and red color system, Russo One as the logo typeface for its gaming character, and Estedaad as the app typeface for its modern feel and Persian language support.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197819/02_fych6c.png" alt="02 — Define platform, audience, and visual direction" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>Variables alongside color system and typography choices — black/red palette with Russo One and Estedaad-FD font family</span>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>03 — Build the information architecture</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>With platform and audience clear, I mapped the full site structure — identifying all pages, primary flows, and the relationships between them. This sitemap became the shared reference point that kept the business owner, PM, and engineering team aligned on scope throughout the project.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197809/03_nyxjqs.png" alt="03 — Build the information architecture" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>Partial view of the site map — pages, flows, and structural relationships</span>
                    </div>
                  </div>

                  {/* Step 04 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>04 — AI-assisted ideation for wireframing</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>Before moving to high-fidelity UI, I wireframed each feature using Lovable, Vercel v0, and Stitch to generate layout concepts from prompts — treating the output as a starting point to react to, not a final answer. A custom GPT set up at the project start helped with scoping features and writing effective prompts throughout. Wireframes and interaction rationale were then shared with the business owner and PM via Telegram for alignment before any UI work began.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197860/04_rmee9a.png" alt="04 — AI-assisted ideation for wireframing" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>Iterating on layout concepts in Stitch before committing to high-fidelity UI</span>
                    </div>
                  </div>

                  {/* Step 05 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>05 — Build the design system in parallel</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>Rather than designing screens ad hoc and extracting components later, I built the design system progressively alongside the UI. Material Design 3 was chosen as the foundation — appropriate for a mobile-first product — and then adapted to GG10's visual language. Variables and styles were defined early and applied consistently, with components built atomically so they could be composed predictably across all screens. The system eventually grew to 480+ components and 70+ variables and styles.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197825/05_yesaob.png" alt="05 — Build the design system in parallel" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>A section of the component library — built atomically on Material Design 3</span>
                    </div>
                  </div>

                  {/* Step 06 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>06 — Document for developers, not just designers</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>After each feature was finalized, I created wireflows annotating every screen with interaction rules, edge cases, conditional states, and responsive behavior — the primary handoff artifact, not a supplement. Before implementation, I walked developers through each flow live to align on expectations. After development, I reviewed the output against specs and compiled a fix list for anything that diverged.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197823/06_gb4rr5.png" alt="06 — Document for developers, not just designers" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>Annotated interaction notes for a feature flow — edge cases and behavior specs for the dev team</span>
                    </div>
                  </div>

                  {/* Step 07 */}
                  <div style={{ flexDirection: 'column', display: 'flex', gap: '32px', width: '100%' }}>
                    <div>
                      <span style={{ color: '#242424', fontSize: '18px', fontWeight: '700', fontFamily: 'Inter' }}>07 — Icon system resolution</span>
                      <br/><br/>
                      <span style={{ color: '#656161', fontSize: '16px', fontWeight: '400', fontFamily: 'Inter' }}>One recurring challenge was sourcing icons that matched the gaming aesthetic of the product. Rather than waiting for a dedicated icon designer, I systematically searched, curated, and unified icons in Figma — building a custom icon set that maintained visual consistency across the product.</span>
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', gap: '20px', width: '100%', alignItems: 'center' }}>
                      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779197826/07_gsaoz4.png" alt="07 — Icon system resolution" />
                      <span style={{ color: '#656161', fontSize: '14px', fontWeight: '300', fontFamily: 'Inter', textAlign: 'center' }}>Custom icon set — curated and unified for visual consistency across the product</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 px-12 max-w-[1280px] mx-auto">
        <div style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
          <div style={{ alignSelf: 'stretch' }}>
            <span style={{ color: 'black', fontSize: '20px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>IMPACT<br/></span>
            <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Delivering a production-ready design solo, at scale, without a blueprint<br/></span>
            <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}><br/>GG10 was a greenfield freelance engagement where I operated as designer, creative director, and documentation lead simultaneously. Over five months, the work remained organized, scalable, and developer-ready throughout — without a design lead or review process to fall back on.<br/></span>
          </div>
          <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src="https://res.cloudinary.com/dujb86o8g/image/upload/v1779198585/impact2_whxkpm.png" alt="Impact" />
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="py-16 md:py-24 px-12 max-w-[1280px] mx-auto">
        <div style={{ width: '100%' }}>
          <span style={{ color: 'black', fontSize: '20px', fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>TAKEAWAY<br/></span>
          <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Designing alone sharpens your judgment<br/></span>
          <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}><br/>Every decision had to be self-justified — no designer to bounce ideas off. Uncomfortable at first, but it built the ability to commit to a direction, document the reasoning, and defend it clearly to non-designers. AI assistants partly filled the thinking-partner gap, but the judgment calls were always mine.<br/></span>
          <span style={{ color: '#656161', fontSize: '32px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}><br/></span>
          <span style={{ color: '#242424', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Know your user's world, not just their tasks<br/></span>
          <span style={{ color: '#656161', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}><br/>For teenage gamers, the visual bar isn't set by UX best practices — it's set by the games they play. Letting that context shape every decision, from typography to color to interaction energy, was what made the design feel right rather than just functional.<br/></span>
        </div>
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


