import { motion } from "motion/react";

export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  role: string;
  timeline: string;
  collaborators?: string[];
  link?: string;
  overview: string;
  problem: string;
  solution: string;
  thinking?: {
    title: string;
    content: string;
  }[];
  comparisons?: {
    title: string;
    before: {
      image: string;
      caption: string;
    };
    after: {
      image: string;
      caption: string;
    };
    reasoning: string;
  }[];
  sections: {
    title: string;
    content: string;
    image?: string;
    isDark?: boolean;
    layout?: "stacked" | "split" | "grid";
  }[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "gg10": {
    id: "gg10",
    title: "GG10 Gaming Platform",
    category: "Gaming / UX Design",
    description: "Designing the world's most engaging tournament platform for competitive gamers.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    role: "Lead Product Designer",
    timeline: "6 Months • 2023",
    overview: "GG10 is a comprehensive platform designed to revolutionize how amateur gamers participate in tournaments and engage with their favorite games.",
    problem: "Amateur tournaments are often fragmented, difficult to navigate, and lack the professional feel that elite esports events provide.",
    solution: "We built a centralized hub using Material 3 principles that simplifies registration, provides real-time bracket updates, and fosters community engagement.",
    thinking: [
      {
        title: "Why prioritize amateur players?",
        content: "While professional esports gets all the attention, 99.9% of the gaming population is amateur. By providing them with professional-grade tools, we create a high-retention ecosystem where players feel valued and competitive."
      },
      {
        title: "The choice of Material 3",
        content: "We chose Material 3 because of its rigorous accessibility standards and its flexibility in handling high-density data. In gaming, information hierarchy is everything; M3 provided the tokens to make that clear."
      }
    ],
    comparisons: [
      {
        title: "Tournament Registration Flow",
        before: {
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
          caption: "Traditional flow required 7 steps across 3 different pages."
        },
        after: {
          image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2067&auto=format&fit=crop",
          caption: "Streamlined 3-step modal with real-time validation."
        },
        reasoning: "Reducing the registration steps by 50% led to a 32% increase in tournament completion rates. The 'Why' was simple: friction is the enemy of competitive excitement."
      }
    ],
    sections: [
      {
        title: "Design System",
        content: "We developed a robust design system based on Google's Material 3, optimized for high-density information displays common in gaming interfaces.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        layout: "split"
      },
      {
        title: "User Journey",
        content: "Mapping out the player's path from discovery to victory, ensuring frictionless navigation through complex tournament structures.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        layout: "grid"
      }
    ]
  },
  "personal-portfolio": {
    id: "personal-portfolio",
    title: "AI-Native Portfolio",
    category: "AI / Web Design",
    description: "Crating a production-ready portfolio through iterative AI collaboration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    role: "Full-stack Designer",
    timeline: "Ongoing • 2024",
    overview: "Exploring the boundaries of AI-assisted development by building a high-end portfolio using Google AI Studio and modern web technologies.",
    problem: "Traditional portfolio building is time-consuming and often involves complex handoffs between design and code.",
    solution: "Leveraging Antigravity and Gemini to bridge the gap between creative prompt and functional UI, resulting in a unique editorial aesthetic.",
    thinking: [
      {
        title: "The shift to AI-native design",
        content: "By treating AI as a pair-programmer rather than a tool, I can iterate on complex layouts in minutes instead of hours. This allows for a more experimental approach to web design."
      }
    ],
    comparisons: [
      {
        title: "Hero Section Iteration",
        before: {
          image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
          caption: "First draft: Functional but generic."
        },
        after: {
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
          caption: "Final version: Editorial, high-contrast, and focused."
        },
        reasoning: "The goal was to strip away all unnecessary noise. Fine-tuning the prompt helped achieve the exact weight and balance of the typography."
      }
    ],
    sections: [
      {
        title: "The AI Workflow",
        content: "Using precise prompting and architectural guidance to generate polished React components with Framer Motion animations.",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
        layout: "split"
      }
    ]
  },
  "bit24-spot": {
    id: "bit24-spot",
    title: "Bit24 Spot Trading",
    category: "Fintech / UX Research",
    description: "Streamlining P2P crypto trading for the next generation of investors.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2070&auto=format&fit=crop",
    role: "Senior Product Designer",
    timeline: "8 Months • 2022",
    overview: "Bit24's Spot trading platform needed a complete overhaul to reduce user friction and decrease high support ticket volume related to trading confusion.",
    problem: "Users found the trading interface intimidating and frequently made errors during order execution.",
    solution: "A simplified, research-driven interface that emphasizes clarity, security, and real-time feedback for every user action.",
    thinking: [
      {
        title: "Trading Psychology",
        content: "We discovered that most errors happened during high-volatility periods. By introducing 'Frictionless Confirmation'—a way to see the impact of a trade before hitting confirm—we reduced error rates by 24%."
      }
    ],
    comparisons: [
      {
        title: "Order Book Redesign",
        before: {
          image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
          caption: "Info-heavy layout with poor color contrast."
        },
        after: {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
          caption: "High-density, accessible layout with visual depth."
        },
        reasoning: "In trading, seconds matter. Improving the contrast and grouping of price points allowed users to process market data 40% faster."
      }
    ],
    sections: [
      {
        title: "Usability Testing",
        content: "Conducted extensive testing with real traders to identify pain points in the order book presentation and the trade confirmation flow.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        layout: "grid"
      }
    ]
  },
  "bit24-kyc": {
    id: "bit24-kyc",
    title: "Bit24 KYC Redesign",
    category: "Fintech / UX Research",
    description: "Driving project growth by deconstructing friction in high-stakes identity verification.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    role: "UX Researcher",
    timeline: "4 Months • 2023",
    collaborators: ["Product Manager", "Marketing Team", "Design Team", "Business Analyst", "Engineering Stakeholders"],
    overview: "Bit24 is a cryptocurrency exchange platform where identity verification (KYC) plays a critical role in acquisition. We noticed a major drop-off in the onboarding funnel and needed to understand if this was a UI failure or a deeper systemic issue.",
    problem: "The registration experience was fragmented across multiple services and devices. We needed to identify exactly what was causing abandonment before proposing expensive interface changes.",
    solution: "A research-driven optimization that addressed marketing alignment, analytics visibility, and cognitive load in complex forms, leading to a 30% conversion increase.",
    thinking: [
      {
        title: "The Distortion of 'Drop-offs'",
        content: "One of the most important findings was that not every exit was a failure. Users with existing accounts were being redirected, which artificially inflated abandonment metrics. Distinguishing between 'intended flow exits' and 'systemic friction' saved us from optimizing the wrong problems."
      },
      {
        title: "Marketing vs. Product Intent",
        content: "Low conversion often starts before the user even sees the UI. We found that certain campaigns attracted low-intent users who weren't ready for the legal requirements of an exchange, highlighting a need for better pre-funnel expectation setting."
      },
      {
        title: "Perceived vs. Actual Effort",
        content: "Users abandoned Step 5 not just because it was 'long', but because it felt mentally exhausting after previous hurdles. The problem was cognitive load at the worst possible moment in the journey."
      }
    ],
    comparisons: [
      {
        title: "The Step 5 Transformation",
        before: {
          image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
          caption: "High-density form with 20+ fields visible at once, causing instant fatigue."
        },
        after: {
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
          caption: "Progressive disclosure model with clear progress cues and guided inputs."
        },
        reasoning: "By reducing perceived complexity through progressive disclosure, we mitigated the cognitive wall, resulting in a 30% measurable lift in step completion."
      }
    ],
    sections: [
      {
        title: "Research Framework",
        content: "To build a reliable understanding, I structured the project into four phases: Discovery (Aligning Stakeholders), Definition (Research Plan), Development (Multi-method Investigation), and Delivery (Actionable Recommendations).",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        layout: "grid"
      },
      {
        title: "Analytics Obstacles",
        content: "External verification services created 'black boxes' in our funnel. We had to reconcile fragmented URL structures and limited event visibility to build a coherent picture of the user journey.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        layout: "split"
      },
      {
        title: "UX Heuristic Audit",
        content: "In parallel with data, we reviewed the flow for interaction friction. We identified unclear empty states and weak guidance as major drivers of user uncertainty during document upload.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        layout: "grid"
      }
    ]
  }

};
