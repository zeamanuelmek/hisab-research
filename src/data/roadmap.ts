import type { RoadmapPhase } from './types';

// PRODUCT ROADMAP (Step 7)
export const roadmapPhases: RoadmapPhase[] = [
  {
    version: 'V1.1',
    name: 'Core Protection',
    timeline: 'Q1 2026',
    color: '#8B5CF6',
    description:
      'The MVP — prove that escrow-based payment protection solves the #1 freelancer pain point in Ethiopia.',
    features: [
      'Escrow Payment System',
      'Chapa Payment Integration',
      'Smart Agreement Builder',
      'Client Portal',
      'Scope Change Requests',
      'NBE Compliance Research',
    ],
    goals: [
      'Launch core escrow functionality',
      'Integrate with Ethiopian payment systems',
      'Onboard first 20 freelancers',
      'Complete 10 escrow-protected projects',
    ],
    items: [
      {
        title: 'Escrow Payment System',
        priority: 'P0',
        description: 'Milestone-based fund holding with auto-release timer',
        icon: '🔒',
      },
      {
        title: 'Chapa Payment Integration',
        priority: 'P0',
        description: 'TeleBirr, CBE Birr, bank transfers via Chapa API',
        icon: '💳',
      },
      {
        title: 'Smart Agreement Builder',
        priority: 'P1',
        description: '3 templates: web dev, design, content — scope + payment terms',
        icon: '📝',
      },
      {
        title: 'Client Portal',
        priority: 'P1',
        description: 'Transparent progress visibility for clients',
        icon: '🖥️',
      },
      {
        title: 'Scope Change Requests',
        priority: 'P1',
        description: 'Formal process for additional work with cost impact',
        icon: '🔄',
      },
      {
        title: 'NBE Compliance Research',
        priority: 'P2',
        description: 'National Bank of Ethiopia licensing exploration',
        icon: '🏛️',
      },
    ],
  },
  {
    version: 'V1.2',
    name: 'Trust & Scale',
    timeline: 'Q2–Q3 2026',
    color: '#3B82F6',
    description:
      'Build the trust infrastructure that makes Hisab the default choice for professional Ethiopian freelancers.',
    features: [
      'Client Reputation System',
      'Dispute Resolution Center',
      'NBE Licensing Completion',
      'Multi-project Dashboard',
      'Automated Invoicing',
    ],
    goals: [
      'Achieve 50 completed projects',
      'Establish trust and reputation systems',
      'Secure NBE regulatory approval',
      'Scale to 100 active freelancers',
    ],
    items: [
      {
        title: 'Client Reputation System',
        priority: 'P2',
        description: 'Payment history badges visible before accepting projects',
        icon: '⭐',
      },
      {
        title: 'Dispute Resolution Center',
        priority: 'P2',
        description: 'Evidence-based mediation for payment disagreements',
        icon: '⚖️',
      },
      {
        title: 'NBE Licensing Completion',
        priority: 'P2',
        description: 'Formal regulatory approval for fund-holding operations',
        icon: '🏛️',
      },
      {
        title: 'Multi-project Dashboard',
        priority: 'P2',
        description: 'Manage multiple concurrent clients and projects',
        icon: '📊',
      },
      {
        title: 'Automated Invoicing',
        priority: 'P2',
        description: 'Professional invoices generated from agreements',
        icon: '🧾',
      },
    ],
  },
  {
    version: 'V2.0',
    name: 'Market Expansion',
    timeline: 'Q4 2026+',
    color: '#22C55E',
    description:
      'Scale beyond individual freelancers to agencies, teams, and potentially other African markets.',
    features: [
      'Agency / Enterprise Features',
      'Freelancer Marketplace',
      'AI Financial Insights',
      'Tax Reporting & Compliance',
    ],
    goals: [
      'Expand to agency and team accounts',
      'Build freelancer marketplace',
      'Enable financial analytics',
      'Support tax compliance',
    ],
    items: [
      {
        title: 'Agency / Enterprise Features',
        priority: 'Future',
        description: 'Team management, roles, multi-user accounts',
        icon: '🏢',
      },
      {
        title: 'Freelancer Marketplace',
        priority: 'Future',
        description: 'Client-facing directory of verified Ethiopian freelancers',
        icon: '🏪',
      },
      {
        title: 'AI Financial Insights',
        priority: 'Future',
        description: 'Smart pricing suggestions, revenue forecasting, tax prep',
        icon: '🤖',
      },
      {
        title: 'Tax Reporting & Compliance',
        priority: 'Future',
        description: 'Ethiopian tax obligation tracking and documentation',
        icon: '📑',
      },
    ],
  },
];

export interface RoadmapItem {
  title: string;
  priority: 'P0' | 'P1' | 'P2' | 'Future';
  description: string;
  icon: string;
}
