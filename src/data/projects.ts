
export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  heroSubtitle: string;
  heroMockup: string;
  roleResponsibilities: string;
  outcome: string;
  figmaLink: string;
  backgroundTitle: string;
  backgroundText: string;
  backgroundImage: string;
  problemSections: { title: string; body: string }[];
  problemImages: string[];
  approachSteps: { title: string; subtitle: string; body: string; image: string }[];
  impactSections: { title: string; body: string }[];
  takeawaySections: { title: string; body: string }[];
  ctaEnabled: boolean;
  ctaLabel: string;
  ctaLink: string;
  status: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export const PROJECTS: Record<string, CaseStudyData> = {
  "gg10": {
    id: "gg10",
    title: "GG10 Gaming Platform",
    category: "Gaming / UX Design",
    description: "Designing the world's most engaging tournament platform for competitive gamers.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Revolutionizing tournament participation for millions of amateur gamers.",
    heroMockup: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    roleResponsibilities: "Lead Product Designer for the tournament registration flow.",
    outcome: "32% increase in tournament completion rates.",
    figmaLink: "https://www.figma.com/design/RnyozvrlnFgOY9FIoGfu9Y/GG10--A-Game-Engagement-Platform?node-id=11-1833&t=VdVTx03n3VMdHmeM-1",
    backgroundTitle: "Background",
    backgroundText: "GG10 is a comprehensive platform designed to revolutionize how amateur gamers participate in tournaments and engage with their favorite games.",
    backgroundImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    problemSections: [{ title: "Fragmented Amateur Tournaments", body: "Amateur tournaments are often fragmented, difficult to navigate, and lack the professional feel." }],
    problemImages: [],
    approachSteps: [{ title: "Design System", subtitle: "Building with M3", body: "We developed a robust design system.", image: "" }],
    impactSections: [{ title: "Completion Rates", body: "Increased by 32%." }],
    takeawaySections: [{ title: "Accessibility", body: "Accessibility is key in high-density platforms." }],
    ctaEnabled: false,
    ctaLabel: "",
    ctaLink: "",
    status: "Published",
    order: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  // ... I would continue this for all projects
};
