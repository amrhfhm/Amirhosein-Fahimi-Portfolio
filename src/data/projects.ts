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
    "updatedAt": "2026-05-27T18:48:31Z",
    "problemSections": [
      {
        "title": "Unidentified drop-offs leaving acquisition in the dark",
        "body": "At Bit24, User Registration and KYC serve as the singular entry gateway for user acquisition. However, the business noted a substantial and unexpected abandonment rate within the onboarding funnel, creating a direct operational threat to active trader growth and marketing ROI. The product squad suspected general 'complexity' as the primary design driver, but lacked the quantitative data and behavioral telemetry to pinpoint where or why users dropped off deep within the flow. In a compliance-gated cryptocurrency market like Iran, balancing legal identity verification with frictionless digital onboarding is critical for commercial success. Making speculative interface changes was too risky, requiring a structured, research-backed strategy to audit the onboarding leakage."
      },
      {
        "title": "Diagnosing the funnel through GA4 obstacles",
        "body": "To identify where the drop-off was occurring, I mapped and analyzed the six-step onboarding funnel in Google Analytics (GA4). This investigation had to bypass two major engineering constraints: a third-party KYC service embedded in the flow that lacked custom event tracking, and a duplicate URL issue where multiple distinct steps shared the same suffixes. By isolating specific custom query parameters and implementing scroll-depth triggers, we uncovered two major insights:\n\n1. **Step 2 Drop-off (OTP Verification)**: High apparent drop-off was actually existing users routing back into the login path (expected core behavior) combined with mistargeted advertising campaigns. We immediately partnered with the marketing team to optimize channel targeting.\n2. **Step 5 Drop-off (Personal Info Form)**: This was the highest true dropout point in the funnel. Users faced an immediate 'cognitive wall' upon landing on the lengthy 20+ field form in Step 4, causing instant fatigue and platform abandonment before any fields were filled."
      },
      {
        "title": "Uncovering product constraints through stakeholder interviews",
        "body": "To comprehend why the configuration had been designed this way, I conducted semi-structured interviews with the CEO, PM, Design Lead, and Business Analyst. These conversations revealed that the high data density was shaped by strict compliance protocols, and the final verification steps relied heavily on third-party manual video reviews. This manual queue suffered from high error rates and long processing delays, running directly counter to Bit24's value proposition of a fast, smart trading onboarding flow."
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
    "backgroundText": "Bit24 is a leading cryptocurrency exchange platform where Know Your Customer (KYC) identity compliance is the mandatory gateway for every user. Because trade enablement relies entirely on successful verification, the onboarding funnel's throughput is the ultimate multiplier for active user growth and business revenues.\n\nI operated as the sole UX Researcher on a cross-functional squad comprising the KYC product manager, design lead, business analyst, and lead engineer. Our business goal was to audit, diagnose, and optimize the live registration and KYC funnel to eliminate acquisition leakage. Over four months, I led a structured, four-phase research program (Discovery, Definition, Development, Delivery) to convert hypotheses into actionable, high-conversion design solutions.",
    "heroMockup": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779721063/kyc_mockup_v6_x6estl.png",
    "createdAt": "2026-05-13T08:48:54.609Z",
    "problem": "Low registration conversion and high onboarding drop-off driven by deep cognitive friction, regulatory field bloat, and severe analytics tracking blind spots.",
    "overview": "Bit24's cryptocurrency onboarding funnel suffered from high drop-offs due to complex forms and analytical blindspots, requiring a combined quantitative-qualitative UX research approach to diagnose and resolve leakage.",
    "status": "Published",
    "approachSteps": [
      {
        "title": "01 — Discovery: Reframe the Problem",
        "subtitle": "Interrogating existing assumptions and clarifying business context.",
        "body": "Rather than accepting the initial product brief at face value, I prepared a structured stakeholder interview guide targeting the KYC Product Manager. This conversation was critical to unearthing historical design decisions, known support issues, and scoping the core technical constraints of our third-party integrations, reframing our research questions from simple 'UI fixes' to deep systemic conversion issues.",
        "image": ""
      },
      {
        "title": "02 — Discovery: Stakeholder Interviews",
        "subtitle": "Aligning cross-functional priorities across legal, business, and tech.",
        "body": "I conducted semi-structured interviews with the CEO, PM, Design Lead, and Business Analyst. By mapping out the divergent internal views on why users abandoned, I aligned the cross-functional squad on common goals and hypotheses, and highlighted how legal constraints on mandatory fields had inadvertently bloated the user's cognitive load.",
        "image": ""
      },
      {
        "title": "03 — Definition: Build a Research Roadmap",
        "subtitle": "Structuring a multi-method methodology to validate friction.",
        "body": "I translated the refined hypotheses into a comprehensive Research Plan outlining research questions, target user participants, and selected methodologies (funnel analytics, heuristic evaluation, competitor benchmarking). This plan acted as our team's north star, justifying *why* we combine quantitative and qualitative inputs to validate onboarding friction.",
        "image": ""
      },
      {
        "title": "04 — Definition: Comprehensive UX Audit",
        "subtitle": "Analyzing the existing interface through a usability heuristics lens.",
        "body": "I audited the live onboarding flow against usability heuristic principles. The audit documented key usability failures, including: a total lack of back-button navigation trapping users in screens, poor real-time feedback on the password requirements page, and high-density input blocks in the personal details form that loaded without explaining *why* sensitive birth or ID data was needed.",
        "image": ""
      },
      {
        "title": "05 — Definition: Competitor Benchmarking",
        "subtitle": "Mapping industry conventions for identity verification flows.",
        "body": "I benchmarked both domestic fintech competitors and global cryptocurrency giants to identify industry standard patterns for KYC. This research showed that top-performing apps utilized progressive disclosure (chunking forms into small, conversational steps), real-time input verification, and illustrative guides instead of long-text descriptions.",
        "image": ""
      },
      {
        "title": "06 — Development: Funnel Analysis & Tracking",
        "subtitle": "Exposing quantitative drop-off rates and validating friction.",
        "body": "By setting up a customized six-step funnel in Google Analytics (GA4), I tracked step-by-step conversion and abandonment. I bypassed tracking limitations on the third-party KYC site by integrating virtual pageviews and query parameter triggers. The data validated our qualitative hypotheses: Step 5 (Personal Info form) was the single biggest leak, while Step 2's drop-offs were inflated by existing account login redirections.",
        "image": ""
      },
      {
        "title": "07 — Delivery: Synthesis & Stakeholder Alignment",
        "subtitle": "Consolidating findings and providing concrete UX redesign recommendations.",
        "body": "I synthesized the behavioral, usability, and analytics data into an actionable, evidence-backed presentation. I presented other-industry comparisons showing the power of progressive form wizards, developed user personas with custom Empathy Maps to foster teammate buy-in, and delivered annotated wireframes detailed with explicit design rationales.",
        "image": ""
      }
    ],
    "role": "UX Researcher",
    "heroSubtitle": "Optimized onboarding and compliance funnel for a major cryptocurrency exchange. Combined quantitative GA4/Microsoft Clarity analytics with heuristic analysis and competitor benchmarking to eliminate form fatigue, leading to a 15% conversion lift and 30% reduction in customer support requests.",
    "collaborators": [
      "Product Manager",
      "Marketing Lead",
      "Design Lead",
      "Lead Engineer",
      "Business Analyst"
    ],
    "thinking": [
      {
        "content": "Not all funnel abandoned actions represent friction. Distinguishing between users leaving due to bad UI versus users with active accounts seeking the login menu saved our engineering team from optimizing the wrong problems entirely.",
        "title": "Drop-off vs. Happy Path Branching"
      },
      {
        "content": "A high-friction onboarding layout doesn't just stop users because it asks for 'too much information'. It stops them because it initiates severe post-interaction fatigue at the worst possible moment of their trust-building journey.",
        "title": "Perceived vs. Actual Input Effort"
      }
    ],
    "roleResponsibilities": "- **Quantitative Funnel Engineering**: Designed and implemented a custom tracking pipeline in Google Analytics 4 (GA4) and Microsoft Clarity, architecting specific query-parameter workarounds to map drop-off points across third-party compliance iframes.\n- **Qualitative Usability Diagnostics**: Conducted rigorous heuristic evaluations against industry usability principles, uncovering critical system feedback and navigation flaws across the live flow.\n- **Cross-Functional Stakeholder Alignment**: Led semi-structured discovery interviews with the CEO, PM, Design Lead, and Business Analyst to untangle legal requirements from product friction.\n- **Competitive Benchmarking**: Analyzed domestic fintech competitors and global cryptocurrency giants to establish industry-standard patterns for conversion-optimized KYC registration.\n- **End-to-End Design Delivery**: Synthesized behavioral, usability, and analytics data into an actionable implementation roadmap with wireframe annotations and progressive disclosure specs.",
    "impactStats": [],
    "takeawaySections": [
      {
        "title": "Infrastructure constraints are research opportunities, not barriers",
        "body": "This project emphasized the critical lesson that UX scholars must remain resilient and creative when running analytical tracking on imperfect data structures. When confronted with missing event hooks on third-party verification frames and duplicate screen URLs, I could have deferred the funnel analysis entirely. Instead, I developed custom query-parameter tracking queries to bypass the URL limits, using standard scroll-depth events and qualitative insights to triangulate where drop-off happened.\n\nThis experience taught me that part of our mandate as researchers is not only reviewing the quantitative metrics that exist, but designing and advocating for the proper data structures that *should* exist. I successfully collaborated with the product lead to establish a comprehensive data-tracking roadmap, paving a transparent path for all user lifecycle research at Bit24."
      },
      {
        "title": "Friction is psychological, not just physical",
        "body": "I observed that users did not abandon Step 5 simply because there were 'many fields' to type. They abandoned because those fields were presented all at once, triggering an instant feeling of exhaustion and insecurity. Transforming the physical inputs into a progressive flow with inline 'why we ask' tags showed that managing cognitive load and user expectations is often more powerful than just cutting fields."
      }
    ],
    "title": "BIT24 KYC & REGISTRATION",
    "category": "Fintech / User Research",
    "backgroundTitle": "Fixing the leaking funnel at the heart of Bit24's user acquisition",
    "solution": "A research-driven optimization that addressed marketing alignment, analytics visibility, and cognitive load in complex forms, leading to a 15% conversion lift and a 30% reduction in support requests.",
    "order": 3,
    "impactSections": [
      {
        "title": "From a leaky funnel to a measurable conversion lift",
        "body": "The research-backed design recommendations were implemented in a comprehensive UI overhaul: we created a simplified introductory screen with explicit multi-step progress indicators, added clear back navigation, integrated real-time password validation, and split the bloated personal details form into a conversational progressive disclosing wizard with inline 'why we need this' explainers.\n\nFour months following the deployment, quantitative metrics showed highly successful outcomes:\n\n- **15% Overall Registration Conversion Lift**: Reached the primary business objective, boosting successful registration and KYC completion rates.\n- **30% Lift in Step 5 Form Completion**: Mitigated form fatigue and cognitive limits by restructuring inputs into progressive disclosure steps.\n- **30% Customer Support Reduction**: Successfully minimized user error complaints and help requests regarding registration and password setup.\n- **Alignment of Marketing Intent**: Identified and removed mistargeted campaigns, optimizing marketing ROI and pre-onboarding communication.\n- **Data Foundation Established**: Created a robust GA4 tracking blueprint to eliminate analytical blindspots across external iframe services.\n- **Strategic Tech Decisions**: Empowered by the research evidence, the product steering committee approved migration plans toward Farashenasa and UAID automated services, eliminating the manual review queue entirely."
      }
    ],
    "timeline": "4 Months • 2023",
    "description": "Turning a leaky onboarding funnel into a 15% conversion lift",
    "figmaLink": "",
    "outcome": "- **15% Overall Registration Conversion Lift**: Reached the primary business objective, boosting successful registration and KYC completion rates.\n- **30% Lift in Step 5 Form Completion**: Mitigated form fatigue and cognitive limits by restructuring inputs into progressive disclosure steps.\n- **30% Customer Support Reduction**: Successfully minimized user error complaints and help requests regarding registration and password setup.\n- **Alignment of Marketing Intent**: Identified and removed mistargeted campaigns, optimizing marketing ROI and pre-onboarding communication.\n- **Data Foundation Established**: Created a robust GA4 tracking blueprint to eliminate analytical blindspots across external iframe services.",
    "takeawayText": "",
    "ctaEnabled": true,
    "ctaLabel": "KYC LANDING PAGE",
    "ctaLink": "https://bit24.cash/auth/"
  },
  {
    "id": "bit24-spot",
    "approachSteps": [
      {
        "title": "",
        "subtitle": "End-to-end research workflow for Bit24 Spot — from discovery and scoping to usability testing and delivery",
        "body": "",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780222601/OVERVIEW_V1_vc7iqk.png"
      },
      {
        "title": "Phase 1: Discovery — Scoping & Framing",
        "subtitle": "Initial scoping questions for the Spot PM — covering problem scope, available data, market context, and early hypotheses",
        "body": "01 — Clarifying technical boundaries and business intent.\n\nI structured detailed scoping interviews with the Spot Product Manager to uncover basic technical constraints and define the operational boundaries of the trading engine. This was essential to avoid pursuing unrealistic layout ideas and to ensure our research hypotheses directly tracked actionable engineering scope, saving business resources and establishing clear success parameters.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780209411/PM_INTERVIEW_jjgtrk.png"
      },
      {
        "title": "Phase 1: Definition — Method Mapping & Plan",
        "subtitle": "The Phase 1 Research Plan",
        "body": "02 — Structuring a multi-step research framework to evaluate friction.\n\nWith qualitative hypotheses established, I drafted the Phase 1 Research Plan. I combined heuristic UX analysis and behavioral heatmaps to triangulate interactive flaws before attempting moderated testing. Defining our focus areas and methods in a formal roadmap ensured the entire product squad had clear visibility into how research outputs would feed our eventual design solutions.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780209584/RP1_hbelcm.png"
      },
      {
        "title": "Phase 1: Development — Executing Research & Synthesizing Findings",
        "subtitle": "",
        "body": "03 — Running the UX Assessment.\n\nAs outlined in the research plan, we began the execution phase with a specialized UX Assessment of the product.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780210019/UX_Assessment_dow9g9.png"
      },
      {
        "title": "Phase 1: Development — Heuristic Walkthrough",
        "subtitle": "Heuristic evaluation of the live Spot terminal — 15+ friction points mapped against Nielsen's principles",
        "body": "04 — Auditing the live order terminal against established principles.\n\nI performed a rigorous usability walkthrough of the live Spot terminal. I evaluated each step against Jakob Nielsen's Usability Heuristics, which was crucial for identifying surface-level flaws without bias. The audit cataloged over 15 high-severity friction points — including poor input validation and visual grouping gaps — into a prioritized review log.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780210510/01_yqlzww.png"
      },
      {
        "title": "Phase 1: Development — Competitive Benchmarking",
        "subtitle": "Competitor analysis — domestic and global crypto terminals benchmarked",
        "body": "05 — Benchmarking industry-standard professional layouts.\n\nI benchmarked domestic crypto terminals and leading global products. This was necessary to map the mental expectations that active traders held when using order books. The benchmarking revealed a standard model for separating color cues and trade confirmations, showing that our existing single-confirm structure violated safety expectations.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780210519/02_bgzplq.png"
      },
      {
        "title": "Phase 1: Development — Stakeholder Discovery",
        "subtitle": "Stakeholder interviews — unlogged complaints and competitive threats surfaced from five organizational heads",
        "body": "06 — Harvesting unlogged customer complaints from business heads.\n\nI interviewed five core organizational heads — including the CEO, Lead Support Engineer, Head of Product Design, PM, and Crypto Domain Experts. This process allowed us to harvest unlogged support tickets and competitive threats. For example, the support lead revealed that a major portion of helpdesk calls were from confused beginners unable to configure limit-order thresholds, which reoriented my focus toward input simplification.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780210528/03_zktdbq.png"
      },
      {
        "title": "Phase 1: Development — Behavioral Analytics",
        "subtitle": "Microsoft Clarity heatmaps and session recordings — behavioral evidence validating the heuristic audit findings",
        "body": "07 — Reviewing digital trace behavior of unmoderated users.\n\nTo prove that our audited issues mapped to real user behavior, I scrutinized heatmaps and live recordings in Microsoft Clarity. By observing where traders hovered in confusion or experienced high error rates when entering prices, I validated my heuristic audit with empirical behavioral evidence.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1780210537/04_wkvu58.png"
      }
    ],
    "status": "Published",
    "role": "Lead UX Researcher & Product Designer",
    "heroSubtitle": "Diagnosed interactive complexity and optimized the order execution experience for professional traders. Conducted detailed heuristic evaluations, analyzed Microsoft Clarity session heatmaps, and moderated usability testing across user segments to drive key design updates, resulting in a 20% reduction in support requests.",
    "roleResponsibilities": "- **End-to-End Program Lead**: Spearheaded a phased investigative UX research and product evaluation program to identify and remove engagement blockers.\n- **Quantitative Session Auditing**: Analyzed over 50 unmoderated user sessions and heatmaps in Microsoft Clarity to pinpoint click hesitation, scroll-backs, and UI deadlocks.\n- **Stakeholder Immersion & Context**: Structured and facilitated interviews with the CEO, Spot Product Manager, Support Lead, and Crypto Domain Experts to index unlogged customer issues.\n- **Usability Testing Pipe Design**: Formulated a scalable recruiting framework, designing SMS screeners, sampling structures, and Google Meet guidelines to moderate 9 target-user sessions.\n- **Operational KPI Tracking**: Implemented a usability KPI registry capturing Task Completion, Interface Error rates, Time-on-Task, and Subjective Ease scores.\n- **Interactive Redesign Delivery**: Collaborated with design and engineering teams to transform qualitative findings into high-fidelity order-book UI prototypes.",
    "thinking": [
      {
        "content": "Most usability issues occurred during periods of heightened market volatility. Introducing a clear confirmation step overlaying real-time market slippage warnings gave beginners the reassurance they needed, reducing extreme error rates by 24% without degrading speed for power users.",
        "title": "Trading Psychology & Confirmation Safeguards"
      }
    ],
    "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779606350/03_V2_g12y3z.png",
    "problemText": "Six months after launch, data dashboards showed active visits to the Spot trading route but disappointing conversion rates. The severe gap between page audience and completed trade volumes suggested massive interactive friction. Because professional order-book trading interfaces are inherently complex and technically expensive to develop, shipping design adjustments based on mere speculation would have introduced immense business risk. We needed diagnostic certainty to understand if traders were abandoning due to UI layout confusion, fear of severe trading errors, or competitive parity gaps.",
    "sections": [
      {
        "content": "Conducted extensive testing with real traders to identify pain points in the order book presentation and the trade confirmation flow.",
        "layout": "grid",
        "title": "Usability Testing",
        "image": "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    "problemTitle": "A high-traffic, low-conversion engagement paradox in professional trading layout",
    "takeawayTitle": "",
    "updatedAt": "2026-05-27T18:48:31Z",
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
        "body": "Six months after launch, data dashboards showed active visits to the Spot trading route but disappointing conversion rates. The severe gap between page audience and completed trade volumes suggested massive interactive friction. Because professional order-book trading interfaces are inherently complex and technically expensive to develop, shipping design adjustments based on mere speculation would have introduced immense business risk. We needed diagnostic certainty to understand if traders were abandoning due to UI layout confusion, fear of severe trading errors, or competitive parity gaps.",
        "title": "A high-traffic, low-conversion engagement paradox"
      },
      {
        "body": "To identify initial friction hypotheses, I ran an in-depth heuristic evaluation of the end-to-end order flow, highlighting major cognitive gaps. To validate these heuristics against real user actions, I integrated Microsoft Clarity. Analyzing heatmaps and over 50 session recordings revealed severe behavioral issues: users were experiencing click hesitation, repetitive scroll retracing, and high error rates when executing limit orders. Crucially, stakeholder interviews with the CEO, PM, and Support Lead surfaced a high volume of unlogged helpdesk complaints, suggesting users were intimidated by the existing UI layout and poor color contrast in data representations.",
        "title": "What qualitative heuristics and Microsoft Clarity exposed"
      },
      {
        "body": "While our initial quantitative audits and behavioral heatmaps identified *where* friction happened, they could not explain *why* users were confused by the order books, nor could they validate which design fixes would move the needle. Given the high engineering cost of rebuilding active trading terminals, I proposed a second research phase: a rigorous remote-moderated usability study to capture real-world trading thoughts under high-volatility scenarios.",
        "title": "The necessity of evaluative usability validation"
      }
    ],
    "backgroundText": "Bit24 is a leading cryptocurrency exchange platform that offers high-speed financial tools, including instant trading, dual investments, crypto-collateralized loans, and professional order-book trading. Despite generating high page traffic, the newly released professional 'Spot Trading' interface suffered from extremely low engagement and disappointing completed trade volumes.\n\nTo bridge the gap between traffic and conversions, I led a specialized, two-phase product research initiative as Lead UX Researcher. Our objective was to move from assumptions to empirical validation by applying behavioral analytics, qualitative usability heuristics, and remote moderated session testing to systematically rebuild the trading interface.",
    "backgroundImage": "",
    "overview": "Diagnosing low engagement and high interactive error rates in professional Spot trading using unmoderated Clarity analytics, structured heuristics, and remote-moderated user usability tests to guide layout redesigns.",
    "problem": "Users found the trading interface intimidating and experience-dense, resulting in high cognitive anxiety, high limit order error rates, and constant support queries.",
    "heroMockup": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779723838/spot_mockup_v8-optimized_lpg8tv.png",
    "createdAt": "2026-05-13T08:45:09.376Z",
    "solution": "An optimized trading terminal prioritizing visual grouping, accessible contrast, and contextual confirmation layers, cutting direct UX-related support issues by 20%.",
    "impactSections": [
      {
        "body": "While our main goal was to increase transaction volume, raw transaction counts are heavily influenced by chaotic external elements like cryptocurrency market volatility, trading campaigns, and macroeconomics. To isolate the direct impact of our UX adjustments, I collaborated with the CRM support engineers to define a tighter proxy metric: monthly UX-related support complaints for the Spot application.\n\nI established a weekly CRM review pipeline. After launching the redesigned Spot interface—which featured a higher-contrast, progressive disclosure order book with visual feedback on pending orders—direct user complaints regarding order execution and trading layout confusion **dropped by approximately 20%** (reducing average cases from 15 per month down to 10-12 cases). This decrease offered concrete evidence of a friction-free trading UX. Furthermore, the initiative established Bit24's first scalable usability framework, standardizing recruiting pipelines, incentive routes, and discussion guides for subsequent product teams.",
        "title": "From vague engagement concerns to a measurable drop in UX complaints"
      }
    ],
    "order": 2,
    "description": "Diagnosing low engagement through usability testing to cut support complaints by 20%",
    "timeline": "8 Months • 2022",
    "outcome": "- **20% Decrease in Monthly UX Support Tickets**: Substantially reduced helpdesk queries and execution errors regarding Spot order-book configuration.\n- **9 High-Fidelity Moderated Research Sessions**: Reached complete structural saturation across Desktop and Mobile Beginner user cohorts, validating critical behavioral hypotheses.\n- **First Standardized Usability Framework**: Delivered reusable screening templates, incentive structures, and moderation scripts adopted across subsequent product lines.\n- **Strategic KPI Implementation**: Established the team's first interactive dashboard mapping Time-on-Task and Subjective Ease scores directly to engineering sprints.\n- **Decision-Support Integration**: Validated and integrated a high-contrast 'Frictionless Confirmation' state, reducing high-volatility trading error rates by 24%.",
    "figmaLink": "",
    "takeawayText": "",
    "takeawaySections": [
      {
        "body": "This project taught me a critical lesson regarding performance metrics: always define UX-specific proxies early rather than relying entirely on trailing business goals. The initial KPI of 'active transaction volume' was too broad and heavily skewed by sudden market shifts. Triangulating and cooperating with the CRM team to extract support ticket logs allowed us to prove direct value and demonstrate *why* user-centric design iterations drive down business operational budgets.",
        "title": "Define clear UX proxy metrics before you begin, not after"
      },
      {
        "body": "During live usability sessions, some traders became distracted or diverged into general market speculations, pushing some calls beyond 40 minutes and introducing fatigue. In future cycles, I would construct significantly tighter task scopes and practice firmer moderation boundaries to optimize time, keep momentum, and protect user endurance and data quality.",
        "title": "Design lean, tightly gated research timelines to avoid participant fatigue"
      },
      {
        "body": "We prioritized usability issues using our small internal squad's qualitative feedback. While highly effective, implementing a subsequent survey sent to a broader, randomized trader audience would have provided statistical confidence and validated our rankings across a wider population. I've built this sequential quantitative validation step into Bit24's standard research manual.",
        "title": "Validate priorities quantitatively to ensure robust scale decisions"
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
        "title": "01 — Domain Immersion and AI Setup",
        "subtitle": "Setting up a dedicated custom GPT — briefed with full product context to serve as a thinking partner throughout the project",
        "body": "Before opening Figma, **I read the business owner's product documentation in full**, annotating questions and assumptions throughout. To keep the thinking structured across a multi-month engagement, **I set up a** **dedicated custom GPT** at the start of the project — giving it full context on the product, users, and goals. It served as a **thinking partner for scoping features, pressure-testing decisions, and writing prompts** for vibe coding tools throughout.",
        "image": "https://res.cloudinary.com/dujb86o8g/video/upload/v1779599078/Record_2026_05_23_20_30_28_945-1_ginp1l.mp4",
        "isVideo": true
      },
      {
        "title": "02 — UX Benchmarking",
        "subtitle": "Competitor analysis board in Figma — key screens and UX patterns from rival platforms",
        "body": "I reviewed the three main competitors the business owner identified — studying their flows, screenshotting key screens, and **documenting strengths and weaknesses** in a dedicated Competitors page in Figma. The goal wasn't to copy; it was to **understand what patterns users already expected** and where we could build something better.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779194610/Comp_Analysis_s0yyvt.png"
      },
      {
        "title": "03 — Visual Identity and Design Constraints",
        "subtitle": "Variables alongside color system and typography choices — black/red palette with Russo One and Estedaad-FD font family",
        "body": "Before any UI work began, I facilitated discussions with the business owner to lock in foundational design decisions: **platform (mobile web, with desktop mirroring in phase one)**, **color system (black and red, built for a dark gaming aesthetic)**, **logo typeface (Russo One for its gaming character)**, and **app typeface (Estedaad for its modern feel and Persian language support)**. Each decision was grounded in the target audience and the product's competitive positioning.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197819/02_fych6c.png"
      },
      {
        "title": "04 — Sitemapping",
        "subtitle": "Partial view of the site map — pages, flows, and structural relationships",
        "body": "With platform and audience locked, I mapped the full site structure — identifying all pages, primary flows, and relationships between them. The sitemap became the **shared reference point for the business owner, PM, and engineering team** throughout the project. From there, the PM and I aligned on a prioritized design backlog, defining which features to tackle first and in what order.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197809/03_nyxjqs.png"
      },
      {
        "title": "05 — AI-Assisted Wireframing to High-Fi UI",
        "subtitle": "Iterating on layout concepts in Stitch before committing to high-fidelity UI",
        "body": "For each feature, I started with wireframing using **Lovable, Vercel v0, and Stitch** — prompting for layout concepts and using the output as a starting point to react to, not a final answer. Wireframes and interaction rationale were shared with the business owner and PM via Telegram for alignment before any UI work began. Once approved, I moved to high-fidelity UI, building the design system progressively in parallel — **components built atomically on Material Design 3**, adapted to GG10's visual language, eventually reaching **480+ components and 70+ variables and styles**.",
        "image": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779197860/04_rmee9a.png"
      },
      {
        "title": "06 — Hand-off Documentation and Live Review",
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
        "body": "The entire build happened through a continuous loop of **prompting, reviewing, and refining**. When text descriptions weren't precise enough, I exported frames from Figma and uploaded them directly as visual references. For some UI sections, **I also used Anima to convert Figma designs into starter code**, then refined and integrated the output through Google AI Studio instead of rebuilding components from scratch. For sections that needed targeted changes, I used AI Studio's Focus feature to isolate specific components without rewriting everything. **Images were uploaded to Cloudinary and referenced by URL. Deployment happened through GitHub and Vercel.**",
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
    "heroMockup": "https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto/v1779722223/PRT_mockup_v2_ox8mgu.png",
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
