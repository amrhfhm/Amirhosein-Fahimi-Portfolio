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
  approachSteps: { title: string; subtitle: string; body: string; image: string; isVideo?: boolean }[];
  impactImage?: string;
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
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779552368/04_ykz366.jpg",
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
    "heroSubtitle": "Reduce registration drop-off and boost KYC conversion rate to accelerate user acquisition at Bit24. Analyze the registration and identity verification funnel using data and multi-method research to identify friction points, redesign the flow, and increase conversion rate by 25%.",
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
    "roleResponsibilities": "- Analyzed registration drop-off using funnel data from Google Analytics and Microsoft Clarity\n\n- Conducted stakeholder interviews across product, design, engineering, and business\n\n- Audited the existing KYC flow against UX principles to surface friction points\n\n- Benchmarked competitor onboarding and KYC flows to identify gaps and opportunities\n\n- Synthesized findings into problem statements, design recommendations, and annotated before/after wireframes\n\n- Reported data infrastructure gaps to the PM and collaborated cross-functionally to align decisions with legal and business constraints",
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
    "outcome": "- ~25% increase in overall registration conversion rate\n\n- ~30% improvement in Step 5 conversion — the previously highest drop-off point\n\n- Reduced form friction by minimizing mandatory fields and adding contextual explanations\n\n- Surfaced mistargeted ad campaigns artificially inflating drop-off at Step 2\n\n- Identified data infrastructure gaps and established a tracking roadmap for future phases\n\n- Recommended transition to a more capable identity verification service to eliminate manual video review",
    "takeawayText": "",
    "ctaEnabled": true,
    "ctaLabel": "KYC LANDING PAGE",
    "ctaLink": "https://bit24.cash/auth/"
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
    "heroSubtitle": "Uncover why active Spot traders aren't engaging enough to drive the revenue Bit24 expected. Run a two-phase research process combining UX audit, behavioral data analysis, and moderated usability testing with 9 users to identify friction points and reduce UX-related support complaints.",
    "roleResponsibilities": "- Led a two-phase research process from discovery through delivery, managing scope, methods, and timelines independently\n\n- Conducted stakeholder interviews with the CEO, Head of Product Design, PM, Support Lead, and a domain expert\n\n- Performed a UX audit and behavioral analysis using Microsoft Clarity to identify and prioritize friction points\n\n- Benchmarked competitor Spot trading products to surface missing features and UX gaps\n\n- Designed and executed the full usability testing pipeline: segmentation, recruiting, facilitation, and analysis\n\n- Synthesized findings into a structured KPI framework and delivered an actionable presentation to cross-functional stakeholders\n\n- Established a recurring CRM reporting cadence to track post-launch UX improvement",
    "thinking": [
      {
        "content": "We discovered that most errors happened during high-volatility periods. By introducing 'Frictionless Confirmation'—a way to see the impact of a trade before hitting confirm—we reduced error rates by 24%.",
        "title": "Trading Psychology"
      }
    ],
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779606350/03_V2_g12y3z.png",
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
    "outcome": "- ~15% reduction in monthly UX-related support complaints following the redesign\n\n- Ran 9 moderated remote usability tests across 2 user segments, reaching result saturation\n\n- Delivered KPI dashboards and a user journey map to the CEO, Head of Product, PM, designers, and engineers\n\n- Established Bit24's first reusable usability testing framework for future research cycles\n\n- Surfaced data infrastructure gaps and marketing targeting issues contributing to low engagement",
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
    "backgroundTitle": "A trading product with traffic but no traction — diagnosing low engagement in Bit24's Spot feature",
    "ctaEnabled": true,
    "ctaLabel": "SPOT LANDING PAGE",
    "ctaLink": "https://bit24.cash/trade/usdt_irt?type=spot"
  },
  {
    "id": "gg10",
    "outcome": "- Delivered a complete, developer-ready product design in under 5 months as the sole designer\n\n- Built a 480+ component design system on Material Design 3, enabling scalable and consistent UI development\n\n- Established full visual identity — logo, iconography, typography, dark-mode color system — tailored to a teenage gaming audience\n\n- Reduced developer ambiguity through structured documentation, enabling faster and more accurate implementation",
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
    "heroSubtitle": "Designed a gaming engagement platform from scratch as the sole designer, spanning 100+ screens and 10+ pages. Led end-to-end product design for GG10 — a Call of Duty-focused competitive platform for teenage gamers — delivering a scalable design system, developer documentation, and a complete UI in under 5 months.",
    "roleResponsibilities": "- Led end-to-end product design as the sole designer, collaborating with a business owner, PM, and two engineers\n\n- Conducted competitor analysis to identify UX patterns and inform design direction\n\n- Defined information architecture, visual identity, and design system from scratch\n\n- Designed end-to-end flows across 10+ pages, from AI-assisted wireframing to high-fidelity UI\n\n- Delivered developer-facing wireflows, interaction specs, and edge case documentation",
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
        "title": "",
        "subtitle": "End-to-end design workflow for GG10 — from domain immersion to cross-functional handoff",
        "body": "",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779599893/GG10_workflow_v2_qijwbn.png"
      },
      {
        "title": "01 — Domain immersion and AI setup",
        "subtitle": "Setting up a dedicated custom GPT — briefed with full product context to serve as a thinking partner throughout the project",
        "body": "Before opening Figma, **I read the business owner's product documentation in full**, annotating questions and assumptions throughout. To keep the thinking structured across a multi-month engagement, **I set up a** **dedicated custom GPT** at the start of the project — giving it full context on the product, users, and goals. It served as a **thinking partner for scoping features, pressure-testing decisions, and writing prompts** for vibe coding tools throughout.",
        "image": "https://res.cloudinary.com/dujb86o8g/video/upload/v1779599078/Record_2026_05_23_20_30_28_945-1_ginp1l.mp4",
        "isVideo": true
      },
      {
        "title": "02 — UX benchmarking",
        "subtitle": "Competitor analysis board in Figma — key screens and UX patterns from rival platforms",
        "body": "I reviewed the three main competitors the business owner identified — studying their flows, screenshotting key screens, and **documenting strengths and weaknesses** in a dedicated Competitors page in Figma. The goal wasn't to copy; it was to **understand what patterns users already expected** and where we could build something better.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779194610/Comp_Analysis_s0yyvt.png"
      },
      {
        "title": "03 — Visual identity and design constraints",
        "subtitle": "Variables alongside color system and typography choices — black/red palette with Russo One and Estedaad-FD font family",
        "body": "Before any UI work began, I facilitated discussions with the business owner to lock in foundational design decisions: **platform (mobile web, with desktop mirroring in phase one)**, **color system (black and red, built for a dark gaming aesthetic)**, **logo typeface (Russo One for its gaming character)**, and **app typeface (Estedaad for its modern feel and Persian language support)**. Each decision was grounded in the target audience and the product's competitive positioning.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197819/02_fych6c.png"
      },
      {
        "title": "04. Sitemapping",
        "subtitle": "Partial view of the site map — pages, flows, and structural relationships",
        "body": "With platform and audience locked, I mapped the full site structure — identifying all pages, primary flows, and relationships between them. The sitemap became the **shared reference point for the business owner, PM, and engineering team** throughout the project. From there, the PM and I aligned on a prioritized design backlog, defining which features to tackle first and in what order.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197809/03_nyxjqs.png"
      },
      {
        "title": "05 — AI-assisted wireframing to high-fidelity UI",
        "subtitle": "Iterating on layout concepts in Stitch before committing to high-fidelity UI",
        "body": "For each feature, I started with wireframing using **Lovable, Vercel v0, and Stitch** — prompting for layout concepts and using the output as a starting point to react to, not a final answer. Wireframes and interaction rationale were shared with the business owner and PM via Telegram for alignment before any UI work began. Once approved, I moved to high-fidelity UI, building the design system progressively in parallel — **components built atomically on Material Design 3**, adapted to GG10's visual language, eventually reaching **480+ components and 70+ variables and styles**.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197860/04_rmee9a.png"
      },
      {
        "title": "06. Handoff documentation and live review",
        "subtitle": "Annotated interaction notes for a feature flow — edge cases and behavior specs for the dev team",
        "body": "After each feature reached final UI, I created wireflows annotating every screen with interaction rules, edge cases, conditional states, and responsive behavior — the **primary handoff artifact, not a supplement**. Before implementation, I walked developers through each flow live to align on expectations. After development, I reviewed the output against specs and **compiled a fix list for anything that diverged**.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197823/06_gb4rr5.png"
      }
    ],
    "status": "Published",
    "role": "Lead Product Designer",
    "problemSections": [
      {
        "body": "GG10 started with a business hypothesis, not a broken experience to fix. The business owner had a vision, early sketches, and reference docs — but **no defined scope, no design direction, and no visual identity**. The challenge was threefold: **translating a raw business idea into structured user flows**, **designing for teenagers as young as 12** **whose visual bar is set by global gaming platforms**, and **keeping two developers continuously unblocked** with ready-to-build specs throughout. The real risk was misalignment — a direction that drifted from business intent, a component library that couldn't scale, or documentation too vague to implement accurately.",
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
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779552315/01_olzubb.jpg",
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
    "heroSubtitle": "Design and ship a personal portfolio end-to-end with zero coding experience — using AI as the only developer. Prompt, iterate, and deploy a full-stack portfolio with a CMS, admin panel, and behavioral analytics in 3 days using Google AI Studio, Firebase, and Vercel.",
    "roleResponsibilities": "- Defined the product vision, UX direction, and feature scope independently\n\n- Designed and iterated the full UI using AI-assisted workflows and real-world portfolio references\n\n- Built a custom Firebase-backed admin panel for content and case study management\n\n- Integrated Microsoft Clarity and Firebase Analytics for behavioral tracking\n\n- Managed deployment, debugging, authentication flows, and production setup across GitHub and Vercel\n\n- Structured scalable case study templates for future content updates",
    "thinking": [
      {
        "content": "By treating AI as a pair-programmer rather than a tool, I can iterate on complex layouts in minutes instead of hours. This allows for a more experimental approach to web design.",
        "title": "The shift to AI-native design"
      }
    ],
    "approachSteps": [
      {
        "title": "",
        "subtitle": "End-to-end workflow — from tool selection to behavioral analytics setup",
        "body": "",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779611297/portfolio_workflow_scmysc.png"
      },
      {
        "title": "01 — Choosing the right AI tool",
        "subtitle": "Google AI Studio interface — where the first portfolio prompt was tested and the build began",
        "body": "I didn't start with Google AI Studio. I'd already worked with Lovable, Stitch, and Vercel v0 on other projects and knew what AI-assisted development felt like. What pushed me toward AI Studio for this project was a single test session — I dropped in a portfolio reference, ran a prompt, and the output felt **immediately closer to what I had in mind**. The aesthetic was more modern, the layout interpretation was tighter, and the usage limits were less restrictive for a multi-day build. That first impression was enough to commit.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779612409/GAI_panel_kgbo17.png"
      },
      {
        "title": "02 — Building through prompting",
        "subtitle": "Google AI Studio for prompting, Cloudinary for image hosting, GitHub for version control, and Vercel for deployment",
        "body": "The entire build happened through a continuous loop of **prompting, reviewing, and refining**. When text descriptions weren't precise enough, I exported frames from Figma and uploaded them directly as visual references. For sections that needed targeted changes, I used AI Studio's Focus feature to isolate specific components without rewriting everything. Images were uploaded to Cloudinary and referenced by URL. Deployment happened through GitHub and Vercel.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779612951/optimized_by_opt.imum.ir__2026-05-24_12-18-20_hze1lz.jpg"
      },
      {
        "title": "03 — Adding a CMS — and rethinking it",
        "subtitle": "The custom admin panel — managing testimonials, analytics, and SEO without touching code",
        "body": "I started by building a full admin panel — a place to manage projects, testimonials, a lightweight analytics dashboard, and SEO settings, all without touching code. That part worked. But **after deployment, I noticed projects were loading slowly** due to backend fetch times over Iran's network conditions. For a portfolio, **slow load is a risk I couldn't accept**. So I made a decision: **hardcode the projects directly into the codebase** using a structured template that AI could maintain consistently across future case studies, while keeping everything else — testimonials, analytics, SEO — in the CMS. The result is a hybrid: **static where speed matters, dynamic where flexibility does**.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779613002/admin_panel_jybqr2.png"
      },
      {
        "title": "04 — Setting up Clarity",
        "subtitle": "Clarity dashboard at launch — data collection begins from the first real visitor",
        "body": "With the site live, I created a Clarity account, grabbed the project ID and tracking script, and added it to the site header. From that point, every visitor session generates **heatmaps, scroll data, and session recordings**. The goal wasn't to have data for its own sake — it was to have a signal for iteration. If a section consistently gets ignored, or if visitors drop off before reaching case studies, that's a design problem worth solving. Clarity makes those patterns visible.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779613025/Clarity_airxz1.png"
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
        "body": "The challenge wasn't only technical — it was learning how modern product systems fit together without an engineering background. I had no prior experience with frontend architecture, databases, authentication, or deployment pipelines. The core question became: **could AI reduce the barrier between design intent and implementation enough for a designer to build independently?**",
        "title": "The real problem wasn't technical — it was psychological"
      }
    ],
    "problemImages": [],
    "updatedAt": "2026-05-13T09:54:36.364Z",
    "overview": "Exploring the boundaries of AI-assisted development by building a high-end portfolio using Google AI Studio and modern web technologies.",
    "problem": "Traditional portfolio building is time-consuming and often involves complex handoffs between design and code.",
    "createdAt": "2026-05-13T08:32:39.389Z",
    "heroMockup": "",
    "backgroundText": "This project started as more than a portfolio. The goal was to test whether AI could bridge the gap between product thinking and technical execution. Instead of relying on no-code templates, I wanted **full control over interactions, structure, and content management** — despite having **virtually no coding background**. Using Google AI Studio as the primary tool, I explored whether AI-assisted development could become a real product workflow rather than just a prototyping shortcut.",
    "backgroundImage": "",
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779552315/02_f1gaqd.jpg",
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
    "outcome": "- Shipped a fully functional, publicly deployed portfolio in 3 days with zero prior coding experience\n\n- Built a working CMS and admin panel for managing projects and testimonials without code changes\n\n- Integrated Firebase event tracking and Microsoft Clarity for future data-driven design iterations\n\n- Executed the complete product lifecycle solo — from concept and UX to frontend, backend, and deployment\n\n- Transitioned from traditional product designer to AI-first product builder",
    "figmaLink": "",
    "takeawayText": "",
    "solution": "Leveraging Antigravity and Gemini to bridge the gap between creative prompt and functional UI, resulting in a unique editorial aesthetic.",
    "description": "Designed and shipped a full-stack portfolio in 3 days — with zero coding experience and AI as the only developer\n",
    "timeline": "Ongoing • 2024",
    "impactSections": [
      {
        "body": "The biggest outcome wasn't the portfolio itself, but the shift in capability it created. **Three days, zero coding background, one AI tool, and a live full-stack product**. Building and deploying a full-stack product in three days fundamentally changed how I approach product design. Instead of stopping at interfaces, I now think across the full product lifecycle — from idea and interaction design to implementation, analytics, and iteration. It reshaped my workflow into a more **AI-first**, systems-oriented approach to product building.",
        "title": "From pixel-pusher to AI-first product builder"
      }
    ],
    "order": 1,
    "backgroundTitle": "What if a Product Designer with no coding background could ship a full product alone?",
    "takeawaySections": [
      {
        "body": "This project reinforced that shipping real products no longer requires mastering every technical layer upfront. What mattered most was problem framing, iteration, and the ability to communicate intent clearly through AI tools. Many of the same skills used in UX research — asking better questions, identifying gaps, and refining direction — translated directly into building software. AI didn't replace product thinking; it expanded what product thinkers can execute independently.",
        "title": "You don't need to understand everything to build something real"
      }
    ],
    "impactStats": [],
    "title": "PERSONAL PORTFOLIO",
    "category": "AI / Vibe Coding",
    "ctaEnabled": true,
    "ctaLabel": "AMIRHOSEIN-FAHIMI.VERCEL.APP",
    "ctaLink": "https://amirhosein-fahimi.vercel.app"
  }
];
