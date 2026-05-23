export interface Project {
  id: string;
  image: string;
  title: string;
  category: string;
  heroSubtitle: string;
  description: string;
  role: string;
  roleResponsibilities: string;
  status: string;
  order: number;
  updatedAt: string;
  createdAt: string;
  backgroundImage: string;
  backgroundTitle: string;
  backgroundText: string;
  heroMockup: string;
  figmaLink: string;
  overview: string;
  problem: string;
  problemTitle: string;
  problemText: string;
  problemSections: { title: string; body: string }[];
  problemImages: string[];
  approachSteps: { title: string; subtitle: string; body: string; image: string }[];
  impactSections: { title: string; body: string }[];
  takeawaySections: { title: string; body: string }[];
  takeawayText: string;
  outcome: string;
  solution: string;
  timeline: string;
  collaborators?: string[];
  thinking?: { title: string; content: string }[];
  comparisons?: { title: string; before: { caption: string; image: string }; after: { caption: string; image: string }; reasoning: string }[];
  sections?: { title: string; layout: string; content: string; image: string }[];
  impactStats?: any[];
  takeawayTitle?: string;
  ctaEnabled?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
}

export const PROJECTS: Project[] = [
  {
    "id": "bit24-kyc",
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/v1778656543/er8vktfg439f1atyhcdo.png",
    "problemTitle": "",
    "problemText": "",
    "takeawayTitle": "",
    "updatedAt": "2026-05-13T09:51:46.332Z",
    "problemSections": [
      {
        "body": "The KYC team flagged that drop-off rates in the registration flow were higher than expected. An initial comparison with competitors suggested the flow was more complex than industry norms, but the exact causes were unknown. Given that KYC is the primary entry point for all users, even a small improvement in conversion could have significant business impact.\nTo move from assumption to evidence, I ran a structured four-phase research process: Discovery, Definition, Development, and Delivery.",
        "title": "Users were abandoning registration at critical steps — and no one knew exactly why"
      },
      {
        "body": "After setting up a six-step registration funnel in Google Analytics — and working around two key constraints (a third-party identity verification service with no trackable events, and duplicate URLs causing data noise) — two major drop-off points emerged:\n\nStep 2 showed high drop-off, but analysis revealed two contributing factors: users with existing accounts were naturally branching into the login flow (expected behavior), and past ad campaigns had been mistargeted to audiences who had no intention of using a crypto exchange. This was raised with the marketing team directly.\nStep 5 was the most critical and unexpected drop-off point. The root cause was a long, complex personal information form in Step 4. Users were abandoning the process after seeing the form's length and perceived effort before even starting it.",
        "title": "What the funnel data revealed"
      },
      {
        "body": "Interviews with the CEO, design lead, product manager, and business analyst surfaced additional layers: legal constraints shaping what fields were mandatory, historical design rationale, and competitive intelligence on advanced KYC services. In the advanced identity verification stage — handled by a third-party service — users were experiencing high error rates and a slow manual video review process that contradicted Bit24's promise of a fast, smart verification flow.",
        "title": "What stakeholder interviews added"
      }
    ],
    "problemImages": [],
    "comparisons": [
      {
        "after": {
          "caption": "Progressive disclosure model with clear progress cues and guided inputs.",
          "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
        },
        "reasoning": "By reducing perceived complexity through progressive disclosure, we mitigated the cognitive wall, resulting in a 30% measurable lift in step completion.",
        "before": {
          "caption": "High-density form with 20+ fields visible at once, causing instant fatigue.",
          "image": "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop"
        },
        "title": "The Step 5 Transformation"
      }
    ],
    "backgroundImage": "",
    "backgroundText": "Bit24 is a cryptocurrency exchange platform offering a range of services including spot trading, dual investments, and crypto-backed loans. For any user to access these services, they must complete the KYC (Know Your Customer) process — a multi-step flow covering registration, phone verification, password setup, personal information, and advanced identity verification.\nThis project focused on diagnosing and improving that end-to-end funnel. I was the UX researcher on a cross-functional team that included the KYC product manager, design lead, business analyst, and engineers. The business goal was clear: more completed registrations meant more active users, which directly drove revenue and growth. My role spanned discovery, multi-method research, funnel analysis, and design recommendation delivery.",
    "heroMockup": "",
    "createdAt": "2026-05-13T08:48:54.609Z",
    "problem": "The registration experience was fragmented across multiple services and devices. We needed to identify exactly what was causing abandonment before proposing expensive interface changes.",
    "overview": "Bit24 is a cryptocurrency exchange platform where identity verification (KYC) plays a critical role in acquisition. We noticed a major drop-off in the onboarding funnel and needed to understand if this was a UI failure or a deeper systemic issue.",
    "status": "Published",
    "approachSteps": [
      {
        "body": "Rather than accepting the initial brief at face value, I prepared a structured set of questions to probe the KYC team manager — the primary stakeholder — on scope, existing data, user complaints, and business constraints. This conversation reframed the problem from \"the flow is too complex\" to a more nuanced set of causes requiring different solutions.",
        "image": "",
        "subtitle": "",
        "title": "01 — Discovery: Reframe the problem before solving it"
      },
      {
        "image": "",
        "body": "With a clearer problem picture, I drafted a Research Plan that defined research questions, selected methods, and set priorities. This document served as the alignment artifact before any execution began.",
        "subtitle": "",
        "title": "02 — Definition: Build a research plan"
      },
      {
        "subtitle": "",
        "title": "03 — Stakeholder interviews",
        "body": "I interviewed four stakeholders: the CEO (for legal and regulatory context), the design lead (for original design rationale and access to design files), the product manager (for product history and known pain points), and the business analyst (for competitive landscape insights). Each interview added a distinct layer of understanding that shaped both the problem definition and the solution direction.",
        "image": ""
      },
      {
        "title": "04 — UX audit of the existing flow",
        "subtitle": "",
        "body": "I reviewed the full registration and KYC flow against usability principles, mapping friction points across each step. Issues ranged from missing back navigation trapping users in the flow, to alignment inconsistencies and cluttered UI, to a password setup screen with no real-time validation feedback, to an information form with excessive mandatory fields and no explanation of why the data was needed.",
        "image": ""
      },
      {
        "title": "05 — Competitor analysis",
        "subtitle": "",
        "image": "",
        "body": "I benchmarked competitor registration and KYC flows to understand what patterns users were already familiar with, identify features Bit24 was missing, and find inspiration for simplifying the flow without compromising compliance."
      },
      {
        "title": "06 — Funnel analysis in Google Analytics",
        "subtitle": "",
        "image": "",
        "body": "I built a six-step funnel to measure conversion at each registration stage, working around data infrastructure limitations (third-party service with no event tracking, and duplicate URLs per screen). Findings were documented with specific drop-off rates per step, and data gaps were escalated to the product manager for resolution in future phases."
      },
      {
        "title": "07 — Synthesis and presentation",
        "subtitle": "",
        "body": "All findings were consolidated into a structured presentation for stakeholders. This included: annotated before/after wireframes for each screen with rationale, funnel data with drop-off analysis, an Empathy Map to help stakeholders connect with user frustrations, and a recommendation to evaluate alternative identity verification services (UAID, Farashenasa) that better matched user and business needs.",
        "image": ""
      }
    ],
    "role": "UX Researcher",
    "heroSubtitle": "Reduce registration drop-off and boost KYC conversion rate to accelerate user acquisition at Bit24 Analyze the registration and identity verification funnel using data and multi-method research to identify friction points, redesign the flow, and increase conversion rate by 25%",
    "collaborators": [
      "Product Manager",
      "Marketing Team",
      "Design Team",
      "Business Analyst",
      "Engineering Stakeholders"
    ],
    "thinking": [
      {
        "content": "One of the most important findings was that not every exit was a failure. Users with existing accounts were being redirected, which artificially inflated abandonment metrics. Distinguishing between 'intended flow exits' and 'systemic friction' saved us from optimizing the wrong problems.",
        "title": "The Distortion of 'Drop-offs'"
      },
      {
        "content": "Low conversion often starts before the user even sees the UI. We found that certain campaigns attracted low-intent users who weren't ready for the legal requirements of an exchange, highlighting a need for better pre-funnel expectation setting.",
        "title": "Marketing vs. Product Intent"
      },
      {
        "content": "Users abandoned Step 5 not just because it was 'long', but because it felt mentally exhausting after previous hurdles. The problem was cognitive load at the worst possible moment in the journey.",
        "title": "Perceived vs. Actual Effort"
      }
    ],
    "roleResponsibilities": "- Identified the root causes of user drop-off through funnel analysis in Google Analytics and Microsoft Clarity\n\n- Conducted stakeholder interviews across product, design, engineering, and business to build a complete picture of the problem\n\n- Audited the existing registration flow against UX principles to surface usability gaps\n\n- Benchmarked competitor onboarding and KYC flows to identify opportunities and set direction\n\n- Synthesized findings into clear problem statements and actionable design recommendations\n\n- Delivered low-fidelity wireframes with annotated before/after comparisons for stakeholder alignment\n\n- Reported data infrastructure gaps (missing events, duplicate URLs) to the product manager for future tracking improvement\n\n- Collaborated cross-functionally to align design decisions with legal, business, and product constraints",
    "impactStats": [],
    "takeawaySections": [
      {
        "body": "One of the most important lessons from this project was learning to do meaningful analysis even when the data setup is imperfect. The missing event tracking on the third-party KYC service and the duplicate URL issue could have derailed the funnel analysis entirely. Instead, I worked around both constraints — combining available data, triangulating with qualitative findings, and clearly documenting what couldn't be measured so the product team could fix it for future cycles.\nThis taught me that a researcher's job isn't just to analyze data that exists, but to identify what data should exist — and make that case clearly to the people who can build it.",
        "title": "Research without infrastructure is still research — but flag the gaps"
      }
    ],
    "title": "BIT24 KYC & REGISTRATION",
    "category": "Fintech / User Research",
    "backgroundTitle": "Fixing the leaking funnel at the heart of Bit24's user acquisition",
    "solution": "A research-driven optimization that addressed marketing alignment, analytics visibility, and cognitive load in complex forms, leading to a 30% conversion increase.",
    "order": 3,
    "impactSections": [
      {
        "body": "The redesign addressed the highest-impact friction points in the registration flow: a cleaner first screen with back navigation and streamlined layout, a simplified OTP verification screen with reduced visual clutter, real-time password validation with green/red rule indicators, a shorter personal information form with contextual \"why we need this\" explanations, improved copy contrast and conciseness on the completion screen, and real photo examples replacing illustrations on the identity verification screen.\nFour months after implementation, the funnel data showed approximately 30% growth in Step 5 conversion — the previously most critical drop-off point — and an overall ~25% increase in registration conversion rate. Beyond the numbers, the project established a foundation for more rigorous data tracking, flagged systemic issues in marketing targeting, and created a clear product roadmap for upgrading the identity verification service.",
        "title": "From a leaky funnel to a measurable conversion lift"
      }
    ],
    "timeline": "4 Months • 2023",
    "description": "Turning a leaky onboarding funnel into a 25% conversion lift",
    "figmaLink": "",
    "outcome": "- ~25% increase in overall registration conversion rate following redesign\n\n- ~30% improvement in Step 5 conversion, the previously highest drop-off point in the funnel\n\n- Reduced user effort in the information form step by minimizing required fields and adding contextual explanations\n\n- Surfaced and escalated marketing targeting issues causing artificial drop-off at Step 2\n\n- Identified critical data infrastructure gaps and established a roadmap for improved funnel tracking in future phases\n\n- Proposed transition to a more capable identity verification service to eliminate manual video review bottleneck",
    "takeawayText": ""
  },
  {
    "id": "bit24-spot",
    "approachSteps": [
      {
        "image": "",
        "body": "I prepared a structured set of questions to probe the product manager — the primary stakeholder — on scope, available data, existing complaints, and business context. This conversation established the boundaries of the problem and helped avoid chasing the wrong hypothesis.",
        "title": "Phase 1 — UX Assessment",
        "subtitle": "01 — Discovery: Clarify the problem before choosing methods"
      },
      {
        "subtitle": "02 — Research Plan (Phase 1)",
        "title": "",
        "image": "",
        "body": "With the problem reframed, I drafted a Research Plan outlining goals, methods, and priorities. This served as the alignment document before execution began."
      },
      {
        "title": "",
        "subtitle": "03 — UX Audit & Flow Review",
        "body": "I reviewed the Spot product against UX principles, identifying and prioritizing friction points across the full trading flow. Issues were categorized by severity and summarized in a structured table, with internal team review cycles to sharpen the findings.",
        "image": ""
      },
      {
        "image": "",
        "body": "I selected a set of relevant competitors and analyzed their Spot trading flows across multiple dimensions — both strong and weak examples — to identify patterns users might already be familiar with and features that Bit24 was missing.",
        "title": "",
        "subtitle": "04 — Competitor Analysis"
      },
      {
        "image": "",
        "body": "I interviewed the Support Lead, Head of Product Design, CEO, and a domain expert. Each provided a distinct layer of insight: technical pain points, historical design rationale, legal context, and competitive landscape observations.",
        "subtitle": "05 — Stakeholder Interviews",
        "title": ""
      },
      {
        "subtitle": "06 — Behavioral Analysis with Microsoft Clarity",
        "title": "",
        "image": "",
        "body": "I analyzed heatmaps and session recordings to observe real user behavior — where users clicked, where they hesitated, and where they abandoned. This grounded the audit findings in actual behavioral evidence."
      },
      {
        "subtitle": "07 — Research Plan (Phase 2)",
        "title": "Phase 2 — Usability Testing",
        "body": "After presenting phase one findings and aligning with the PM on the need for validation, I wrote a new Research Plan for the usability testing phase. Given that user segmentation data hadn't yet arrived from the data team, I was transparent with the PM about the uncertainty in timeline estimates and agreed to a roughly one-month window with checkpoint-based progress reviews rather than a fixed delivery date.",
        "image": ""
      },
      {
        "image": "",
        "body": "I defined initial user segments based on platform type (mobile vs. desktop) and product knowledge level (beginner vs. advanced). I requested a dataset from the data team covering the past three months of activity: user ID, platform usage per trade, order types used, and successful transaction volume. After analyzing the data, I finalized three segments prioritized by research value: mobile beginners, desktop users (beginners and advanced merged due to low desktop user count), and mobile advanced users.\nTo reach participants, I designed a combined screener and invitation SMS. Estimating a ~1–2% conversion funnel (SMS sent → screener completed → confirmed participant), I sent approximately 300 messages per segment — roughly 1,000 total — and selected participants with backups in place for no-shows. Random sampling within each transaction volume tier (high, medium, low) ensured a well-distributed sample.",
        "subtitle": "08 — Recruiting",
        "title": ""
      },
      {
        "image": "",
        "body": "Since many Bit24 users were located in smaller cities across Iran, I chose remote moderated testing via Google Meet (unblocked in Iran at the time) to avoid geographic bias. I coordinated with a CRM team member as note-taker and a finance team member to handle participant incentive payments at the start of each session. I also created Google Meet onboarding tutorial videos for participants unfamiliar with the platform, distributed via email. A pre-session consent form outlined recording and privacy conditions.\nThe core logistics artifact was a Discussion Guide in three parts: session conduct notes, a facilitator welcome script, and a structured set of tasks derived from the research hypotheses.",
        "subtitle": "09 — Logistics",
        "title": ""
      },
      {
        "image": "",
        "body": "Before running real sessions, I conducted a pilot test with an internal colleague to validate the full process and refine the task list. I then ran 5 sessions with mobile beginners and 4 with desktop users — 9 total. After each session, brief debrief conversations with the PM helped track progress. After 9 tests, we reached result saturation and deferred the mobile advanced segment to a future research cycle.",
        "subtitle": "10 — Pilot Test & Execution",
        "title": ""
      },
      {
        "subtitle": "11 — Analysis",
        "title": "",
        "body": "I defined four KPIs upfront: error rate, task completion rate, time on task, and task ease score. All session recordings were reviewed and logged in a structured spreadsheet with columns for each KPI, user quotes, error types, task paths, and supplementary notes. Qualitative observations were collected in a separate file. A user journey map was built to give stakeholders an empathetic, holistic view of the experience.",
        "image": ""
      },
      {
        "subtitle": "12 — Delivery",
        "title": "",
        "image": "",
        "body": "Findings were presented to the CEO, Head of Product, PM, designers, and engineers. The presentation included KPI dashboards, the user journey map, prioritized problem areas, and design recommendations. Post-presentation, review comments were exchanged with designers and the PM, and decisions were documented for implementation."
      }
    ],
    "status": "Published",
    "role": "Senior Product Designer",
    "heroSubtitle": "Uncover why active Spot traders aren't engaging enough to drive the revenue Bit24 expected Run a two-phase research process combining UX audit, behavioral data analysis, and moderated usability testing with 9 users to identify friction points and reduce UX-related support complaints",
    "roleResponsibilities": "- Led the full two-phase research process from discovery through delivery, independently managing scope, methods, and timelines\n\n- Conducted stakeholder interviews with the CEO, Head of Product Design, Product Manager, Support Lead, and a domain expert to build a multi-perspective view of the problem\n\n- Performed a UX audit of the Spot product flow, identifying and prioritizing usability issues against design principles\n\n- Analyzed behavioral data using Microsoft Clarity (heatmaps, session recordings) to observe real user interactions\n\n- Benchmarked competitor Spot trading products to identify market patterns and missing features\n\n- Designed and executed the full usability testing pipeline: segmentation, recruiting, screener design, logistics, discussion guide, pilot testing, and session facilitation\n\n- Coordinated cross-functionally with the data, CRM, and finance teams to support participant recruiting and session logistics\n\n- Built a structured analysis framework with KPIs (error rate, task completion, time on task, task ease score) and synthesized findings into an actionable presentation\n\n- Established a recurring CRM reporting cadence to measure post-launch UX improvement over time",
    "thinking": [
      {
        "content": "We discovered that most errors happened during high-volatility periods. By introducing 'Frictionless Confirmation'—a way to see the impact of a trade before hitting confirm—we reduced error rates by 24%.",
        "title": "Trading Psychology"
      }
    ],
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/v1778656101/y1v8cgug50mpfuee0dxz.jpg",
    "problemText": "Six months after launch, the Spot product had visitors but not the trading volume the business needed. The gap between page traffic and actual completed trades pointed to a friction problem somewhere in the experience — but the exact causes were unknown, and the product was complex enough that guessing and shipping fixes would have been costly.",
    "sections": [
      {
        "content": "Conducted extensive testing with real traders to identify pain points in the order book presentation and the trade confirmation flow.",
        "layout": "grid",
        "title": "Usability Testing",
        "image": "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    "problemTitle": "Traffic without conversion — something in the Spot experience was breaking engagement, but no one knew exactly what or where",
    "takeawayTitle": "",
    "updatedAt": "2026-05-13T09:50:27.770Z",
    "comparisons": [
      {
        "after": {
          "caption": "High-density, accessible layout with visual depth.",
          "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        },
        "reasoning": "In trading, seconds matter. Improving the contrast and grouping of price points allowed users to process market data 40% faster.",
        "title": "Order Book Redesign",
        "before": {
          "caption": "Info-heavy layout with poor color contrast.",
          "image": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
        }
      }
    ],
    "problemImages": [],
    "problemSections": [
      {
        "body": "Six months after launch, the Spot product had visitors but not the trading volume the business needed. The gap between page traffic and actual completed trades pointed to a friction problem somewhere in the experience — but the exact causes were unknown, and the product was complex enough that guessing and shipping fixes would have been costly.",
        "title": "Traffic without conversion — something in the Spot experience was breaking engagement, but no one knew exactly what or where"
      },
      {
        "body": "I began with a UX audit of the product, benchmarking it against usability principles and competitor flows. This surfaced a range of design issues — some structural, some interaction-level — which were categorized and prioritized. Behavioral data from Microsoft Clarity added another layer: heatmaps and session recordings showed where users clicked, hesitated, scrolled, and dropped off, revealing patterns that the audit alone couldn't surface. Stakeholder interviews with the CEO, Head of Product Design, PM, Support Lead, and a domain expert brought in additional perspectives — technical issues, process gaps, and user complaints that hadn't been formally documented.",
        "title": "What the first research phase revealed"
      },
      {
        "body": "After presenting phase one findings to the product manager, a key question remained unanswered: which of these issues actually mattered most to users, and would fixing them meaningfully improve engagement? Given the complexity of the product and the high technical cost of building and measuring changes, it made more sense to validate the hypotheses through further research before committing to development. That's why a second phase was scoped: moderated remote usability testing with real active users.",
        "title": "Why a second phase was needed"
      }
    ],
    "backgroundText": "Bit24 is a cryptocurrency exchange platform offering services including instant buy/sell, dual investments, crypto-backed loans, and professional trading. The Spot product — Bit24's order-based trading feature allowing users to buy and sell crypto at their preferred price — had been live for six months. Despite reasonable page traffic, it was not generating the expected business revenue.\nI was the lead UX researcher on this project, working within a cross-functional team that included the product manager, design lead, support lead, engineers, and business stakeholders. The initial hypothesis was that a UX or engagement issue might be responsible. My role was to validate or refute that hypothesis through rigorous research, and ultimately deliver actionable recommendations that the product team could act on.",
    "backgroundImage": "",
    "overview": "Bit24's Spot trading platform needed a complete overhaul to reduce user friction and decrease high support ticket volume related to trading confusion.",
    "problem": "Users found the trading interface intimidating and frequently made errors during order execution.",
    "heroMockup": "",
    "createdAt": "2026-05-13T08:45:09.376Z",
    "solution": "A simplified, research-driven interface that emphasizes clarity, security, and real-time feedback for every user action.",
    "impactSections": [
      {
        "body": "Because the primary business metric — number of successful trades — was influenced by too many external variables (crypto market conditions, macroeconomic factors, marketing quality, technical issues) to isolate UX impact cleanly, I worked with the CRM team to establish a more direct proxy: monthly UX-related support complaints for the Spot product.\nI set up weekly CRM review sessions to track UX issues across products. After the new Spot version launched, average monthly UX complaints dropped by approximately 20% compared to the months before launch — from up to 15 issues per month down to 10–12. This reduction provided concrete evidence that the research had translated into a meaningfully better user experience, even in the absence of a perfectly controlled success metric.\nBeyond the numbers, this project established Bit24's first structured usability testing framework — reusable for future research cycles — and surfaced systemic issues in data infrastructure and marketing targeting that were escalated to the relevant teams.",
        "title": "From vague engagement concerns to a measurable drop in UX complaints"
      }
    ],
    "order": 2,
    "description": "Diagnosing low engagement through usability testing to cut support complaints by 15%",
    "timeline": "8 Months • 2022",
    "outcome": "- ~15% reduction in monthly UX-related support complaints following the redesign, based on CRM tracking data\n\n- Pre-launch: up to 15 UX issues reported per month; post-launch: reduced to 10–12 issues per month\n\n- Successfully ran 9 moderated remote usability tests across 2 user segments (mobile beginner and desktop), reaching result saturation\n\n- Delivered a comprehensive presentation to the CEO, Head of Product, PM, designers, and engineers with KPI dashboards and a user journey map\n\n- Surfaced data infrastructure gaps and marketing targeting issues as contributing factors to low engagement beyond UX\n\n- Established a reusable usability testing framework — the first of its kind at Bit24 — as a foundation for future research cycles",
    "figmaLink": "",
    "takeawayText": "",
    "takeawaySections": [
      {
        "body": "Define success metrics before you start, not after. The metric I inherited — \"number of successful trades\" — was too distant from UX to measure the impact of my work. I only realized this near the end of the project. Going forward, I'd work with the PM at the very start to define a metric that's both directly influenced by UX improvements and measurable, so the entire research process is anchored to something I can actually move.\n\nDesign tighter sessions. Two things slowed down the usability tests: participants going off-topic mid-session (which I could have redirected more firmly) and sessions running too long at 40 minutes, causing fatigue. Leaner task design and clearer facilitation boundaries would have improved both data quality and participant experience.\nValidate priorities with users, not just intuition. After the tests, my team prioritized issues based on our own judgment. That worked reasonably well, but a follow-up survey sent to a larger sample of target users would have added quantitative confidence to those prioritization decisions — and might have surfaced issues the 9-person test missed entirely. I'd build that step into the next research cycle.",
        "title": "Three things I'd do differently"
      }
    ],
    "impactStats": [],
    "title": "Bit24 Spot Trading",
    "category": "Fintech / User Research",
    "backgroundTitle": "A trading product with traffic but no traction — diagnosing low engagement in Bit24's Spot feature"
  },
  {
    "id": "gg10",
    "outcome": "- Delivered a complete, developer-ready design across 100+ screens in under 5 months\n\n- Built a 480+ component design system on Material Design 3, enabling scalable and consistent UI development\n\n- Established full visual identity — logo, typography, dark-mode color system — tailored to a teenage gaming audience\n\n- Reduced developer ambiguity through structured documentation, enabling faster and more accurate implementation",
    "figmaLink": "https://www.figma.com/design/RnyozvrlnFgOY9FIoGfu9Y/GG10--A-Game-Engagement-Platform?node-id=11-1833&t=VdVTx03n3VMdHmeM-1",
    "takeawayText": "The biggest lesson from GG10 was that a well-organized Figma file is not a nice-to-have — it's part of the product. When you're the only designer and you're handing off to developers who need to move fast, disorganized layers, inconsistent naming, and ad hoc components become blockers. The discipline of atomic design and systematic file structure directly affected how quickly developers could work and how accurately they could implement.\n",
    "solution": "We built a centralized hub using Material 3 principles that simplifies registration, provides real-time bracket updates, and fosters community engagement.",
    "description": "Designed a dark-mode gaming platform end-to-end — 100+ screens, 480+ components, sole designer\n",
    "timeline": "6 Months • 2023",
    "impactSections": [
      {
        "body": "GG10 was a greenfield freelance engagement where I operated as **designer, creative director, and documentation lead simultaneously**. Over five months, I delivered 100+ screens across 10+ pages, a 480+ component design system, a full visual identity, and developer documentation detailed enough for accurate implementation — without a design lead or review process to fall back on. The product hadn't launched by the time this case study was written, but the process itself was the proof: **organized, scalable, and developer-ready** throughout.",
        "title": "Delivering a production-ready design solo, at scale, without a blueprint"
      }
    ],
    "order": 0,
    "backgroundTitle": "A greenfield gaming platform targeting teenage Call of Duty players in the Iranian market",
    "takeawaySections": [
      {
        "body": "The biggest lesson from GG10 was that a well-organized Figma file is not a nice-to-have — it's part of the product. When you're the only designer and you're handing off to developers who need to move fast, disorganized layers, inconsistent naming, and ad hoc components become blockers. The discipline of atomic design and systematic file structure directly affected how quickly developers could work and how accurately they could implement.\n",
        "title": "Structure is a design deliverable too"
      },
      {
        "body": "Without another designer to bounce ideas off, every decision had to be self-justified. This was uncomfortable at first, but it built a kind of design confidence that collaboration sometimes delays — the ability to commit to a direction, document the reasoning, and defend it clearly to non-designers. AI assistants partly filled the thinking-partner gap, but the judgment calls were always mine.\n",
        "title": "Designing alone sharpens your judgment"
      },
      {
        "body": "Designing for teenage gamers meant the visual bar wasn't set by UX best practices — it was set by the games they played and the platforms they already loved. Understanding that context, and letting it shape every decision from typography to color to interaction energy, was what made the design feel right rather than just functional.",
        "title": "Know your user's world, not just their tasks"
      }
    ],
    "impactStats": [],
    "title": "GG10 Gaming Platform",
    "category": "Gaming / Product Design",
    "heroSubtitle": "Designed a gaming engagement platform from scratch as the sole designer, spanning 100+ screens and 10+ pages. Led end-to-end product design for GG10 — a Call of Duty-focused competitive platform for teenage gamers — delivering a scalable design system, developer documentation, and a complete UI in under 5 months",
    "roleResponsibilities": "- Led end-to-end product design as the sole designer, collaborating with a business owner, PM, and two engineers\n\n- Conducted competitor analysis to identify UX patterns and inform design direction\n\n- Defined information architecture, visual identity, and design system from scratch\n\n- Designed 100+ screens across 10+ pages, from AI-assisted wireframing to high-fidelity UI\n\n- Delivered developer-facing wireflows, interaction specs, and edge case documentation",
    "thinking": [
      {
        "content": "While professional esports gets all the attention, 99.9% of the gaming population is amateur. By providing them with professional-grade tools, we create a high-retention ecosystem where players feel valued and competitive.",
        "title": "Why prioritize amateur players?"
      },
      {
        "content": "We chose Material 3 because of its rigorous accessibility standards and its flexibility in handling high-density data. In gaming, information hierarchy is everything; M3 provided the tokens to make that clear.",
        "title": "The choice of Material 3"
      }
    ],
    "approachSteps": [
      {
        "body": "I began by reading the business owner's product documentation in full and annotating it with questions and assumptions. This back-and-forth helped me build a mental model of what GG10 actually needed to be before any design decisions were made. I also reviewed the three main competitors the business owner identified — studying their flows, screenshotting key screens, and documenting what worked and what didn't in a dedicated Competitors page in Figma.\n",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779194610/Comp_Analysis_s0yyvt.png",
        "title": "01 — Immerse in the domain before touching Figma",
        "subtitle": "Competitor analysis board in Figma — key screens and UX patterns from rival platforms"
      },
      {
        "body": "Before wireframing, several foundational decisions needed to be made. I facilitated discussions with the business owner and PM to nail down: platform (mobile web, with desktop mirroring mobile layout in phase one, given 90%+ mobile usage), user age range (12 and up, skewing young — which ruled out complex flows), and visual identity direction. GG10 needed to feel like a gaming product — dark, bold, high-energy. We landed on a black and red color system, Russo One as the logo typeface for its gaming character, and Estedaad as the app typeface for its modern feel and Persian language support.\n",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197819/02_fych6c.png",
        "title": "02 — Define platform, audience, and visual direction",
        "subtitle": "Variables alongside color system and typography choices — black/red palette with Russo One and Estedaad-FD font family"
      },
      {
        "title": "03 — Build the information architecture",
        "subtitle": "Partial view of the site map — pages, flows, and structural relationships",
        "body": "With platform and audience clear, I mapped the full site structure — identifying all pages, primary flows, and the relationships between them. This sitemap became the shared reference point that kept the business owner, PM, and engineering team aligned on scope throughout the project.\n",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197809/03_nyxjqs.png"
      },
      {
        "subtitle": "Iterating on layout concepts in Stitch before committing to high-fidelity UI",
        "title": "04 — AI-assisted ideation for wireframing",
        "body": "For each feature, I began with wireframing before moving to high-fidelity UI. To accelerate ideation, I used Lovable, Vercel v0, and custom GPTs to generate early layout concepts from prompts — describing the screen I needed and using the output as a starting point to react to, not a final answer. This approach compressed the ideation phase significantly and helped me explore layout directions faster than sketching alone. The wireframes, along with written interaction rationale, were shared with the business owner and PM via Telegram for review and discussion before any UI work began.\n",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197860/04_rmee9a.png"
      },
      {
        "title": "05 — Build the design system in parallel",
        "subtitle": "A section of the component library — built atomically on Material Design 3",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197825/05_yesaob.png",
        "body": "Rather than designing screens ad hoc and extracting components later, I built the design system progressively alongside the UI. Material Design 3 was chosen as the foundation — appropriate for a mobile-first product — and then adapted to GG10's visual language. Variables and styles were defined early and applied consistently, with components built atomically so they could be composed predictably across all screens. The system eventually grew to 480+ components and 70+ variables and styles.\n"
      },
      {
        "title": "06 — Document for developers, not just designers",
        "subtitle": "Annotated interaction notes for a feature flow — edge cases and behavior specs for the dev team",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197823/06_gb4rr5.png",
        "body": "After each feature reached final UI, I created wireflows — annotating every screen with interaction rules, edge cases, conditional states, and responsive behavior. These weren't supplementary notes; they were the primary handoff artifact. Before a developer started implementing a flow, I walked them through the design in a live review session, answered questions, and aligned on implementation expectations. After development, I reviewed the output against specs and compiled a fix list for anything that diverged from the design.\n"
      },
      {
        "title": "07 — Icon system resolution",
        "subtitle": "",
        "body": "One recurring challenge was sourcing icons that matched the gaming aesthetic of the product. Rather than waiting for a dedicated icon designer, I systematically searched, curated, and unified icons in Figma — building a custom icon set that maintained visual consistency across the product.\n",
        "image": ""
      }
    ],
    "status": "Published",
    "role": "Lead Product Designer",
    "problemSections": [
      {
        "body": "GG10 started with a business hypothesis, not a broken experience to fix. The business owner had a vision, early sketches, and reference docs — but **no defined scope, no design direction, and no visual identity**. The challenge was threefold: **translating a raw business idea into structured user flows**, designing for teenagers as young as 12 **whose visual bar is set by global gaming platforms**, and **keeping two developers continuously unblocked** with ready-to-build specs throughout. The real risk was misalignment — a direction that drifted from business intent, a component library that couldn't scale, or documentation too vague to implement accurately.",
        "title": "No product existed yet — the challenge was building the right thing, not fixing the wrong one"
      }
    ],
    "problemImages": [],
    "comparisons": [
      {
        "reasoning": "Reducing the registration steps by 50% led to a 32% increase in tournament completion rates. The 'Why' was simple: friction is the enemy of competitive excitement.",
        "after": {
          "caption": "Streamlined 3-step modal with real-time validation.",
          "image": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2067&auto=format&fit=crop"
        },
        "before": {
          "caption": "Traditional flow required 7 steps across 3 different pages.",
          "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
        },
        "title": "Tournament Registration Flow"
      }
    ],
    "updatedAt": "2026-05-13T11:25:18.204Z",
    "problem": "Amateur tournaments are often fragmented, difficult to navigate, and lack the professional feel that elite esports events provide.",
    "overview": "GG10 is a comprehensive platform designed to revolutionize how amateur gamers participate in tournaments and engage with their favorite games.",
    "createdAt": "2026-05-13T08:23:14.003Z",
    "heroMockup": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779107010/Mockup_umtmh9.png",
    "impactImage": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779198585/impact2_whxkpm.png",
    "backgroundText": "GG10 was a freelance contract to design a competitive gaming platform from scratch — covering team formation, tournaments, and stat tracking, built for mobile web. I was the sole designer, working remotely with a business owner, PM, and two developers. No existing design, no design system, no visual language — everything started from zero. The target users were teenage gamers as young as 12, which meant the experience had to be bold, simple, and low-friction from day one.",
    "backgroundImage": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779191252/home_ui_screen_nvphq8.png",
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1778652853/vnwchqlvmrqf2vhg0dsb.png",
    "takeawayTitle": "Structure is a design deliverable too",
    "sections": [
      {
        "layout": "split",
        "title": "Design System",
        "content": "We developed a robust design system based on Google's Material 3, optimized for high-density information displays common in gaming interfaces.",
        "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
      },
      {
        "title": "User Journey",
        "content": "Mapping out the player's path from discovery to victory, ensuring frictionless navigation through complex tournament structures.",
        "layout": "grid",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    "problemText": "Unlike most design projects that start with a broken experience to diagnose, GG10 started with a business hypothesis: there's an opportunity in the competitive gaming space, and it needs a product. The business owner arrived with a vision, early sketches, and a set of reference documents — but no validated design direction, no defined scope, and no visual identity.\nThe core design challenge was threefold. First, translating a business idea into a structured product with clear user flows, without the safety net of an existing product to reference. Second, designing for a user base — teenagers as young as 12 — whose expectations for visual quality and interaction fluency are shaped by global gaming platforms. Third, doing all of this alone, without another designer to pressure-test decisions, while staying in tight sync with a PM and two developers who needed ready-to-build specs continuously.\nThe risk wasn't a single friction point. It was the compounding risk of misalignment — a design direction that didn't match business intent, a component library that couldn't scale, or documentation too vague for developers to implement accurately.",
    "problemTitle": "No product existed yet — the challenge was building the right thing, not fixing the wrong one"
  },
  {
    "id": "personal-portfolio",
    "heroSubtitle": "Design and ship a personal portfolio end-to-end with zero coding experience — using AI as the only developer Prompt, iterate, and deploy a full-stack portfolio with a CMS, admin panel, and behavioral analytics in 3 days using Google AI Studio, Firebase, and Vercel",
    "roleResponsibilities": "- Defined the product vision, design direction, and feature scope independently\n\n- Designed the full UI through iterative AI prompting, referencing real portfolio inspirations as style anchors\n\n- Architected and implemented a content management system via a custom admin panel backed by Firebase\n\n- Integrated Microsoft Clarity for behavioral analytics and future design iteration\n\n- Managed deployment pipeline through GitHub and Vercel\n\n- Debugged integration failures and authentication issues across multiple tools with the help of AI assistants\n\n- Defined the case study content template and wired it into the admin panel for ongoing content updates",
    "thinking": [
      {
        "content": "By treating AI as a pair-programmer rather than a tool, I can iterate on complex layouts in minutes instead of hours. This allows for a more experimental approach to web design.",
        "title": "The shift to AI-native design"
      }
    ],
    "approachSteps": [
      {
        "title": "01 — Discovering the tool before committing to it",
        "subtitle": "",
        "image": "",
        "body": "I opened Google AI Studio without a plan — just curiosity. I tested a pre-built app from its gallery, saw the quality of the output, and **immediately started a new project** with a single portfolio prompt. I linked two portfolios I admired as style references. The first iteration was **good enough to convince me this was worth pursuing seriously**."
      },
      {
        "title": "02 — Designing the home page through iterative prompting",
        "subtitle": "",
        "body": "The entire home page was built through **prompt, review, and refine cycles**. When text descriptions weren't precise enough, I exported frames from Figma and uploaded them directly — telling the AI to use a specific layout as reference. Later I discovered the Focus feature, which let me select individual sections and make targeted changes without rewriting the whole thing. **Watching the code update live alongside the design** was the moment the workflow clicked.",
        "image": ""
      },
      {
        "title": "03 — Extending to inner pages",
        "subtitle": "",
        "body": "Once the home page was done, the question was how to handle individual project pages. Rather than guessing, I prompted AI Studio directly: how do I add inner pages without starting a new project? It handled the routing and structure automatically and delivered a template I could refine further — a pattern I'd use repeatedly throughout the build.",
        "image": ""
      },
      {
        "subtitle": "",
        "title": "04 — Adding a CMS via admin panel",
        "image": "",
        "body": "Hardcoding project content wasn't sustainable. I wanted to write case study content and publish it without touching code. I prompted for an admin panel **and AI Studio built one**, complete with a UI. The catch: the data was fake, and the admin panel and the live site weren't connected. I prompted again to fix it. **Firebase was introduced as the backend**, the data was migrated, and from that point the admin panel was live and functional at /admin."
      },
      {
        "title": "05 — Deploying and connecting everything",
        "subtitle": "",
        "image": "",
        "body": "I didn't know how to deploy. A YouTube tutorial pointed me to GitHub + Vercel. I connected my repository, triggered a deploy, and got a live URL. Returning to AI Studio with that URL unlocked the admin panel properly — and made the Firebase connection real rather than local."
      },
      {
        "title": "06 — Debugging under pressure",
        "subtitle": "",
        "body": "The hardest moment came when GitHub disconnected from AI Studio and the integration broke entirely. For several hours, my workaround was **downloading updated code files manually** and uploading them directly to the GitHub repository to trigger Vercel redeployments. It was tedious, but it worked — and it forced me to **understand what the integration was actually doing**. I eventually restored it. Authentication setup for the admin login also threw repeated errors, resolved through back-and-forth sessions with Claude and ChatGPT until the credentials were properly configured.",
        "image": ""
      },
      {
        "body": "With the site live, I created a Clarity account, grabbed the project ID and script, and added it to the site header. Behavioral data — **heatmaps, session recordings, scroll depth** — would now accumulate over time, giving me a feedback loop for future design decisions.",
        "image": "",
        "subtitle": "",
        "title": "07 — Wiring in analytics"
      },
      {
        "title": "08 — Standardizing the case study template",
        "subtitle": "",
        "image": "",
        "body": "The final step was defining a content structure for project pages that matched the eight-section case study format I'd already developed. I prompted AI Studio to build that template into the admin panel, so each new case study could be written and published directly from the CMS."
      }
    ],
    "status": "Published",
    "role": "Full-stack Designer",
    "comparisons": [
      {
        "title": "Hero Section Iteration",
        "before": {
          "caption": "First draft: Functional but generic.",
          "image": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
        },
        "after": {
          "caption": "Final version: Editorial, high-contrast, and focused.",
          "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
        },
        "reasoning": "The goal was to strip away all unnecessary noise. Fine-tuning the prompt helped achieve the exact weight and balance of the typography."
      }
    ],
    "problemSections": [
      {
        "body": "Template-based tools like Framer or Webflow weren't ruled out because of a specific failure. They were ruled out because of **a ceiling** — a sense that at some point, the tool would stop doing what I needed and I'd have no way around it. More importantly, I wanted to learn. Building on top of someone else's infrastructure meant I'd never understand what was actually happening under the hood.\nThe bigger unknown was **whether I could pull it off at all**. I had no mental model for how frontend code, databases, and deployment pipelines fit together. The risk wasn't just wasted time — it was **not knowing if the gap was even closable without formal engineering training**. That uncertainty was the real problem to solve.",
        "title": "The real problem wasn't technical — it was psychological"
      }
    ],
    "problemImages": [],
    "updatedAt": "2026-05-13T09:54:36.364Z",
    "overview": "Exploring the boundaries of AI-assisted development by building a high-end portfolio using Google AI Studio and modern web technologies.",
    "problem": "Traditional portfolio building is time-consuming and often involves complex handoffs between design and code.",
    "createdAt": "2026-05-13T08:32:39.389Z",
    "heroMockup": "",
    "backgroundText": "This was a personal project with a clear ambition: build a portfolio that didn't just showcase work, but **demonstrated a new kind of capability**. Most designers use Framer or Notion-based templates — polished, but constrained. I wanted **full control over interactions, structure, and content management**, and I wanted to prove that AI could close the gap between design thinking and technical execution.\nI had **virtually no coding experience** going in. No HTML, no JavaScript, no deployment knowledge. The only tool I'd decided to bet on was Google AI Studio — a platform I'd never used before either. The goal wasn't just a portfolio. It was to find out whether vibe coding with AI was a real workflow, and whether I could own it.",
    "backgroundImage": "",
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/v1778654348/vpqilhgrosjjcxy23fw0.jpg",
    "takeawayTitle": "",
    "problemText": "Template-based tools like Framer or Webflow weren't ruled out because of a specific failure. They were ruled out because of a ceiling — a sense that at some point, the tool would stop doing what I needed and I'd have no way around it. More importantly, I wanted to learn. Building on top of someone else's infrastructure meant I'd never understand what was actually happening under the hood.\nThe bigger unknown was whether I could pull it off at all. I had no mental model for how frontend code, databases, and deployment pipelines fit together. The risk wasn't just wasted time — it was not knowing if the gap was even closable without formal engineering training. That uncertainty was the real problem to solve.",
    "sections": [
      {
        "image": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
        "content": "Using precise prompting and architectural guidance to generate polished React components with Framer Motion animations.",
        "layout": "split",
        "title": "The AI Workflow"
      }
    ],
    "problemTitle": "The real problem wasn't technical — it was psychological",
    "outcome": "- Shipped a fully functional, publicly deployed portfolio in 3 days with zero prior coding experience\n\n- Built a working admin panel with Firebase backend — enabling content updates, project publishing, and testimonial management without touching code\n\n- Integrated Firebase event tracking and Microsoft Clarity for future data-driven design iterations\n\n- Proved a complete product development cycle — design, frontend, backend, CMS, analytics, and deployment — is achievable solo with AI\n\n- Shifted personal identity from pixel-pusher to AI-first product builder capable of taking ideas from concept to live product",
    "figmaLink": "",
    "takeawayText": "",
    "solution": "Leveraging Antigravity and Gemini to bridge the gap between creative prompt and functional UI, resulting in a unique editorial aesthetic.",
    "description": "Designed and shipped a full-stack portfolio in 3 days — with zero coding experience and AI as the only developer\n",
    "timeline": "Ongoing • 2024",
    "impactSections": [
      {
        "body": "The most significant outcome wasn't the portfolio itself — it was what building it proved. **Three days, zero coding background, one AI tool, and a live full-stack product**. That's a different kind of confidence than finishing a Figma file.\nIt reframed how I see my own role. I'm not a designer who hands off to developers and waits. I'm someone who can **take an idea from sketch to deployed product** — and that changes what's possible in every project going forward.\nIt also changed how I work. I now think of myself as **AI-first**: I don't open Figma reflexively. I start with thinking — sketching, ideating, pressure-testing ideas — before committing to any tool. AI is part of that thinking process, not just an execution shortcut.",
        "title": "From pixel-pusher to AI-first product builder"
      }
    ],
    "order": 1,
    "backgroundTitle": "What if a Product Designer with no coding background could ship a full product alone?",
    "takeawaySections": [
      {
        "body": "The most counterintuitive lesson from this project was that confusion is **part of the process, not a sign you're doing it wrong**. I didn't understand Firebase, or how routing worked, or what deployment actually meant — and I built all of it anyway. Every blocker became a prompt. Every error became a conversation.\nWhat made this work wasn't technical knowledge. It was **knowing how to describe what I wanted**, recognizing when something was wrong, and being persistent enough to keep asking until it was fixed. Those are research skills. They transferred completely.\nThe bigger shift is in how I think about the boundary between design and engineering. **That boundary is much more permeable than I thought — and AI is what made it permeable**. I won't pretend I'm an engineer. But I'm no longer someone who has to wait for one.",
        "title": "You don't need to understand everything to build something real"
      }
    ],
    "impactStats": [],
    "title": "PERSONAL PORTFOLIO",
    "category": "AI / Vibe Coding"
  }
];
