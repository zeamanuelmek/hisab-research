export interface Competitor {
  id: string;
  name: string;
  type: string;
  logo: string;
  tagline: string;
  threat: 'Primary' | 'Partner' | 'Low';
  market: string;
  pricing: string;
  strengths: string[];
  weaknesses: string[];
  gap: string;
}

export interface PositioningData {
  dimension: string;
  hisab: number;
  upwork: number;
  fiverr: number;
  telegram: number;
}

// COMPETITOR ANALYSIS (Step 8)
export const competitors: Competitor[] = [
  {
    id: 'telegram',
    name: 'Telegram + Bank Transfer',
    type: 'The Status Quo',
    logo: '💬',
    tagline: 'How 100% of interviewed freelancers manage projects today',
    threat: 'Primary',
    market: 'Ethiopia (de facto standard)',
    pricing: 'Free',
    strengths: [
      'Already universally adopted — zero learning curve',
      'Free — no cost barrier whatsoever',
      'Voice, text, files, groups all in one',
      'Cultural fit — relationship-first communication style',
      'Telegram bots enable basic automation',
    ],
    weaknesses: [
      'Zero payment protection — the defining problem',
      'No contracts, agreements, or scope documentation',
      'Scope creep thrives in informal chat',
      'No milestone tracking or project management',
      'Messages get buried — no organized project history',
      '"He said, she said" — no dispute evidence trail',
    ],
    gap: 'This IS the competitor. Every Ethiopian freelancer runs their entire business through Telegram. Hisab must be so valuable that freelancers pull clients OUT of chat and INTO Hisab.',
  },
  {
    id: 'upwork',
    name: 'Upwork',
    type: 'International Platform',
    logo: '🌐',
    tagline:
      'Global marketplace with proven escrow — but absent from Ethiopian domestic market',
    threat: 'Low',
    market: 'Global (175+ countries)',
    pricing: '10% freelancer + 3% client fee',
    strengths: [
      'Gold-standard escrow system — proven at scale',
      'Massive client pool — millions of job postings',
      'Built-in dispute resolution with human mediators',
      'Hourly time-tracking with screenshot verification',
      'JSS reputation system drives accountability',
    ],
    weaknesses: [
      'No ETB support — payouts in USD via Payoneer/Wire only',
      'High fees (historically up to 20%) eat into earnings',
      'No TeleBirr or local bank withdrawal options',
      'Designed for cross-border work, not domestic projects',
      'English-only interface — no Amharic localization',
      'Race-to-the-bottom pricing dynamics against global competition',
    ],
    gap: 'Completely unusable for local Ethiopian client-freelancer relationships. The escrow model is proven — but Upwork will never serve the Addis Ababa graphic designer working with a local restaurant.',
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    type: 'International Platform',
    logo: '🟢',
    tagline: 'Gig marketplace — misaligned with Ethiopian project-based freelancing',
    threat: 'Low',
    market: 'Global',
    pricing: '20% freelancer fee + buyer fees',
    strengths: [
      'Simple gig-based model — easy onboarding',
      'Built-in order payment protection',
      'Seller levels with performance incentives',
      'Large buyer pool for specific categories',
      'Fiverr Business for enterprise clients',
    ],
    weaknesses: [
      'Highest fees in the market (20% flat)',
      'Same payout limitations — no ETB support',
      "Gig model doesn't fit project-based Ethiopian work",
      'Encourages $5-50 pricing — unsustainable locally',
      'Transactional by design — kills relationship-building',
      'Ethiopian freelancers compete against global low-cost providers',
    ],
    gap: 'Gig model fundamentally misaligned with how Ethiopian freelancers work (relationship-based, custom scoped). Fee structure makes local pricing impossible.',
  },
  {
    id: 'chapa',
    name: 'Chapa',
    type: 'Ethiopian Payment Gateway',
    logo: '💳',
    tagline: 'The payment rails Hisab will build on top of',
    threat: 'Partner',
    market: 'Ethiopia',
    pricing: '~2.9% per transaction',
    strengths: [
      'Developer-friendly API — clean integration path',
      'Supports TeleBirr, CBE Birr, Amole, bank transfers',
      'Growing merchant adoption across Ethiopian startups',
      'Handles ETB natively — no currency conversion',
      'Checkout pages and SDKs available',
    ],
    weaknesses: [
      'Payment processing only — no marketplace or project tools',
      'No escrow or held-funds capability (yet)',
      'Limited to Ethiopia — no cross-border',
      'Still maturing — occasional reliability concerns',
      'No freelance-specific features',
    ],
    gap: 'KEY INTEGRATION PARTNER. Chapa provides the payment infrastructure; Hisab provides the freelance protection layer. Together = Ethiopian escrow solution.',
  },
  {
    id: 'telebirr',
    name: 'TeleBirr / CBE Birr',
    type: 'Mobile Money',
    logo: '📱',
    tagline: '40M+ Ethiopian users — the payment method freelancers already use',
    threat: 'Partner',
    market: 'Ethiopia only',
    pricing: 'Minimal transaction fees',
    strengths: [
      'Massive adoption — 40M+ TeleBirr users',
      'Instant ETB transfers — already the default',
      'Government backing and institutional trust',
      'QR code payments gaining traction',
      'Zero/low fees for person-to-person',
    ],
    weaknesses: [
      'No escrow — just send/receive money',
      'No agreements, invoicing, or contracts',
      'No project management features',
      'No dispute resolution — money is gone once sent',
      'No professional documentation',
    ],
    gap: 'Payment rail only — not a freelance platform. This is the INFRASTRUCTURE Hisab integrates with, not competes against.',
  },
  {
    id: 'contra',
    name: 'Contra',
    type: 'International Platform',
    logo: '⚡',
    tagline: 'Commission-free model — inspiring but absent from Africa',
    threat: 'Low',
    market: 'Global (US-focused)',
    pricing: 'Free for freelancers, clients pay service fee',
    strengths: [
      'Zero commission for freelancers — strong value prop',
      'Clean portfolio-based profiles',
      'Built-in contract and payment tools',
      'Growing community focus',
      'Modern UI appeals to creative professionals',
    ],
    weaknesses: [
      'Smaller marketplace — fewer opportunities',
      'No African market presence or localization',
      'Payment infrastructure is US/EU focused only',
      'No local currency support for Ethiopia',
      'Limited dispute resolution',
    ],
    gap: "Promising fee model (zero commission) but completely absent from Africa. Could inspire Hisab's pricing strategy — charge clients, not freelancers.",
  },
];

export const positioningData: PositioningData[] = [
  {
    dimension: 'Payment Protection',
    hisab: 95,
    upwork: 90,
    fiverr: 85,
    telegram: 0,
  },
  {
    dimension: 'Local Payment Support (ETB)',
    hisab: 95,
    upwork: 5,
    fiverr: 5,
    telegram: 70,
  },
  {
    dimension: 'Ethiopian Market Fit',
    hisab: 95,
    upwork: 15,
    fiverr: 10,
    telegram: 90,
  },
  {
    dimension: 'Agreement & Scope Tools',
    hisab: 85,
    upwork: 70,
    fiverr: 60,
    telegram: 0,
  },
  {
    dimension: 'Fee Affordability',
    hisab: 80,
    upwork: 40,
    fiverr: 30,
    telegram: 100,
  },
  {
    dimension: 'Scope Creep Protection',
    hisab: 80,
    upwork: 50,
    fiverr: 40,
    telegram: 5,
  },
  {
    dimension: 'Client Pool Size',
    hisab: 10,
    upwork: 95,
    fiverr: 90,
    telegram: 60,
  },
  {
    dimension: 'Brand Recognition',
    hisab: 5,
    upwork: 95,
    fiverr: 90,
    telegram: 85,
  },
];
