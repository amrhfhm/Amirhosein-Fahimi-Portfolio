export interface Project {
  slug: string;
  org: string;
  year: string;
  title: string;
  summary: string;
  tag: string;
  cover?: string;
  featured?: boolean;
  decisions?: string[];
}

const cld = (path: string, width = 1400) =>
  `https://res.cloudinary.com/dujb86o8g/image/upload/f_auto,q_auto,w_${width}/${path}`;

export const projects: Project[] = [
  {
    slug: 'xpay-money-movement',
    org: 'X-Pay',
    year: '2026',
    title: 'Deposit and withdraw, when the rules live in the bank',
    summary: 'Six bank rails, each with its own limits, hours and minimums. One screen routes every user to a method that will actually work.',
    tag: 'Sole designer · Product decisions',
    featured: true,
    decisions: [
      'Methods that cannot work for this amount or card are hidden, not disabled',
      'The first valid method is preselected, so the button is never dead',
      'Paya, Satna and Pol became one card: users choose inside their bank app',
    ],
  },
  {
    slug: 'xpay-design-system',
    org: 'X-Pay',
    year: '2026',
    title: 'A design system run by a team of one',
    summary: 'Tokens, light and dark, RTL and LTR, and a request process that kept developers moving.',
    tag: 'Design system · Process',
  },
  {
    slug: 'bit24-kyc',
    org: 'Bit24',
    year: '2023–25',
    title: 'Where users really left the KYC funnel',
    summary: 'Funnel tracking across third-party steps found the real drop-off, and it was not where the team thought.',
    tag: 'Research · Funnel analysis',
    cover: cld('v1779721063/kyc_mockup_v6_x6estl.png'),
  },
  {
    slug: 'pantovaje',
    org: 'Pantovaje',
    year: '2026',
    title: 'Designing, building and launching my own party game',
    summary: 'From idea to Myket and Cafe Bazaar, designed and built end to end with AI.',
    tag: 'Own product · Design to launch',
  },
  {
    slug: 'bit24-spot',
    org: 'Bit24',
    year: '2023–25',
    title: 'Why traders avoided the spot screen',
    summary: 'Usability testing found the friction behind low engagement and support load.',
    tag: 'Research · Usability testing',
    cover: cld('v1779723838/spot_mockup_v8-optimized_lpg8tv.png'),
  },
];
