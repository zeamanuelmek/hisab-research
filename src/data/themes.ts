import type { Theme, SolutionIdea } from './types';

// THEMES (5 themes)
// TODO: Replace with actual data from JSX artifacts
export const themes: Theme[] = [
  {
    id: 'payment-trust',
    name: 'Payment Trust & Security',
    description:
      'Creating a secure escrow system that guarantees payment for delivered work, eliminating the #1 source of freelancer anxiety.',
    color: '#8B5CF6',
    insights: [
      'Payment protection is the foundation of freelance growth',
      'Trust substitutes formal protection in current system',
    ],
    priority: 1,
  },
  {
    id: 'contract-management',
    name: 'Contract & Agreement Management',
    description:
      'Digital contract tools that professionalize freelancer-client relationships and provide legal clarity.',
    color: '#EC4899',
    insights: [
      'WhatsApp contracts feel unprofessional',
      'No standardized way to handle scope changes',
    ],
    priority: 2,
  },
  {
    id: 'workflow-efficiency',
    name: 'Workflow & Efficiency Tools',
    description:
      'Reducing administrative overhead so freelancers can spend more time on billable work.',
    color: '#F59E0B',
    insights: [
      'Admin tasks consume 30-40% of time',
      'Multiple disconnected tools create friction',
    ],
    priority: 3,
  },
  {
    id: 'local-integration',
    name: 'Ethiopian Market Integration',
    description:
      'Seamless integration with local payment systems (TeleBirr, CBE Birr) and mobile-first design.',
    color: '#10B981',
    insights: [
      'Ethiopian payment infrastructure is ready',
      'Mobile-first is non-negotiable',
    ],
    priority: 4,
  },
  {
    id: 'reputation-discovery',
    name: 'Reputation & Client Discovery',
    description:
      'Building trust signals and helping freelancers safely expand beyond their immediate network.',
    color: '#3B82F6',
    insights: [
      'Freelancers rely on referrals due to lack of vetting',
      'Hard to showcase portfolio to potential clients',
    ],
    priority: 5,
  },
];

// SOLUTION IDEAS (20 ideas with impact/effort matrix)
// TODO: Replace with actual data from JSX artifacts
export const solutionIdeas: SolutionIdea[] = [
  // Quick Wins (High Impact, Low Effort)
  {
    id: 's1',
    title: 'Milestone-Based Escrow',
    description: 'Hold client payment in escrow, release when milestones are approved',
    impact: 5,
    effort: 2,
    theme: 'payment-trust',
    category: 'quick-win',
  },
  {
    id: 's2',
    title: 'Digital Contract Templates',
    description: 'Pre-built contract templates with e-signature support',
    impact: 4,
    effort: 2,
    theme: 'contract-management',
    category: 'quick-win',
  },
  {
    id: 's3',
    title: 'TeleBirr Integration',
    description: 'Direct integration with TeleBirr for deposits and withdrawals',
    impact: 5,
    effort: 2,
    theme: 'local-integration',
    category: 'quick-win',
  },
  {
    id: 's4',
    title: 'Automated Invoice Generation',
    description: 'Auto-generate invoices from project milestones',
    impact: 4,
    effort: 1,
    theme: 'workflow-efficiency',
    category: 'quick-win',
  },

  // Big Bets (High Impact, High Effort)
  {
    id: 's5',
    title: 'Dispute Resolution System',
    description: 'Mediation platform with escrow fund holding during disputes',
    impact: 5,
    effort: 4,
    theme: 'payment-trust',
    category: 'big-bet',
  },
  {
    id: 's6',
    title: 'Client Reputation System',
    description: 'Verified reviews and payment history for clients',
    impact: 4,
    effort: 4,
    theme: 'reputation-discovery',
    category: 'big-bet',
  },
  {
    id: 's7',
    title: 'Mobile App (iOS & Android)',
    description: 'Native mobile apps for full platform functionality',
    impact: 5,
    effort: 5,
    theme: 'local-integration',
    category: 'big-bet',
  },
  {
    id: 's8',
    title: 'Freelancer Marketplace',
    description: 'Directory where clients can discover and hire vetted freelancers',
    impact: 4,
    effort: 5,
    theme: 'reputation-discovery',
    category: 'big-bet',
  },

  // Nice to Have (Medium/Low Impact, Low Effort)
  {
    id: 's9',
    title: 'Time Tracking',
    description: 'Built-in timer for hourly projects',
    impact: 3,
    effort: 2,
    theme: 'workflow-efficiency',
    category: 'nice-to-have',
  },
  {
    id: 's10',
    title: 'Payment Reminders',
    description: 'Automated email/SMS reminders for overdue invoices',
    impact: 3,
    effort: 1,
    theme: 'workflow-efficiency',
    category: 'nice-to-have',
  },
  {
    id: 's11',
    title: 'Portfolio Hosting',
    description: 'Simple portfolio pages for freelancers',
    impact: 3,
    effort: 2,
    theme: 'reputation-discovery',
    category: 'nice-to-have',
  },
  {
    id: 's12',
    title: 'Expense Tracking',
    description: 'Link project expenses to invoices',
    impact: 2,
    effort: 2,
    theme: 'workflow-efficiency',
    category: 'nice-to-have',
  },

  // Time Sinks (Low Impact, High Effort)
  {
    id: 's13',
    title: 'Tax Filing Automation',
    description: 'Automatic tax calculation and filing support',
    impact: 2,
    effort: 5,
    theme: 'workflow-efficiency',
    category: 'time-sink',
  },
  {
    id: 's14',
    title: 'Video Conferencing',
    description: 'Built-in video calls for client meetings',
    impact: 2,
    effort: 4,
    theme: 'workflow-efficiency',
    category: 'time-sink',
  },

  // Additional Ideas
  {
    id: 's15',
    title: 'Project Dashboard',
    description: 'Visual overview of all active projects and payments',
    impact: 4,
    effort: 2,
    theme: 'workflow-efficiency',
    category: 'quick-win',
  },
  {
    id: 's16',
    title: 'Scope Change Requests',
    description: 'Formal system for requesting and approving scope changes',
    impact: 4,
    effort: 3,
    theme: 'contract-management',
    category: 'nice-to-have',
  },
  {
    id: 's17',
    title: 'Multi-Currency Support',
    description: 'Handle USD, EUR, ETB with real-time exchange rates',
    impact: 3,
    effort: 3,
    theme: 'local-integration',
    category: 'nice-to-have',
  },
  {
    id: 's18',
    title: 'Team Collaboration',
    description: 'Invite team members to collaborate on agency projects',
    impact: 3,
    effort: 4,
    theme: 'workflow-efficiency',
    category: 'nice-to-have',
  },
  {
    id: 's19',
    title: 'CBE Birr Integration',
    description: 'Integration with Commercial Bank of Ethiopia mobile banking',
    impact: 4,
    effort: 3,
    theme: 'local-integration',
    category: 'big-bet',
  },
  {
    id: 's20',
    title: 'Client Onboarding Flow',
    description: 'Guided flow for clients to create projects and deposit funds',
    impact: 4,
    effort: 2,
    theme: 'payment-trust',
    category: 'quick-win',
  },
];

// Helper function to categorize ideas by impact/effort
export function categorizeIdeas(ideas: SolutionIdea[]) {
  return {
    quickWins: ideas.filter((i) => i.impact >= 4 && i.effort <= 2),
    bigBets: ideas.filter((i) => i.impact >= 4 && i.effort >= 4),
    niceToHave: ideas.filter((i) => i.impact <= 3 && i.effort <= 3),
    timeSinks: ideas.filter((i) => i.impact <= 2 && i.effort >= 4),
  };
}
