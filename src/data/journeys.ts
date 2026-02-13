import type { CustomerJourney, JourneyStage } from './types';

// CUSTOMER JOURNEY MAP - Solo Selam (Step 6)
const journeySelam: JourneyStage[] = [
  {
    name: 'Discover Client',
    actions: [
      'Scrolls Telegram channels and groups for project posts',
      'Receives referrals from friends and past clients',
      'Checks LinkedIn occasionally for higher-value leads',
      'Responds to posts in freelancer communities',
    ],
    thoughts: [
      'I hope this one actually pays...',
      'Is this a real client or a time-waster?',
    ],
    emotions: ['hopeful', 'anxious'],
    painPoints: [
      'No way to verify if client is reliable',
      'Most leads are low-budget or vague',
      'Spends hours filtering serious from unserious clients',
      'No centralized place to find quality projects',
    ],
    opportunities: [
      'Client reputation badges visible before accepting',
      'Verified client profiles with payment history',
      'Project posting board with budget requirements',
    ],
  },
  {
    name: 'Propose & Agree',
    actions: [
      'Discusses scope via Telegram voice/text messages',
      'Sends informal price quote (often verbal)',
      'Negotiates back and forth on features and price',
      'Agrees on deliverables with no written contract',
    ],
    thoughts: [
      'They seem nice, I\'ll trust them',
      'Should I push for a contract? I don\'t want to seem difficult',
    ],
    emotions: ['optimistic', 'uncertain'],
    painPoints: [
      'No standardized agreement format',
      'Feels awkward requesting formal contracts',
      'Scope is verbally agreed — easy to dispute later',
      'No payment terms defined upfront',
      'Clients resist signing anything formal',
    ],
    opportunities: [
      'Smart Agreement Builder with templates',
      'Professional quote generation',
      'Digital signature flow',
      'Payment milestone definition at agreement stage',
    ],
  },
  {
    name: 'Produce Work',
    actions: [
      'Works on deliverables independently',
      'Sends progress updates via Telegram screenshots',
      'Receives additional requests ("can you also add...")',
      'Manages multiple projects simultaneously with no system',
    ],
    thoughts: [
      'This is more work than we agreed on',
      'I can\'t say no or they won\'t pay',
    ],
    emotions: ['focused', 'frustrated'],
    painPoints: [
      'Scope creep — clients add work without additional payment',
      'No formal change request process',
      'Constant interruptions for progress updates',
      'No project management tool — everything in chat',
      'Revision rounds spiral out of control',
    ],
    opportunities: [
      'Scope change request system with cost impact',
      'Client portal with live progress visibility',
      'Revision limit enforcement from agreement',
      'Built-in project milestone tracking',
    ],
  },
  {
    name: 'Present & Deliver',
    actions: [
      'Sends final files via Telegram, Google Drive, or email',
      'Presents work in-person or via video call',
      'Waits for client approval (often delayed)',
      'Makes final revisions based on feedback',
    ],
    thoughts: [
      'Please approve it so I can get paid',
      'What if they want more changes?',
    ],
    emotions: ['anxious', 'hopeful'],
    painPoints: [
      'Client takes weeks to review and approve',
      'No formal approval workflow — just "looks good" in chat',
      'Files delivered before payment is secured',
      'No protection against client using work without paying',
      'Approval ambiguity leads to more revision requests',
    ],
    opportunities: [
      'Formal delivery & approval workflow',
      'Watermarked previews until payment confirmed',
      'Auto-reminder for client review',
      'Delivery triggers escrow release countdown',
    ],
  },
  {
    name: 'Collect Payment',
    actions: [
      'Sends payment reminder via Telegram',
      'Waits days, weeks, sometimes months',
      'Follows up repeatedly — feels uncomfortable',
      'Sometimes receives partial payment or nothing',
      'Uses social pressure (mutual friends) as last resort',
    ],
    thoughts: [
      'I hate chasing money',
      'I did the work, why won\'t they pay?',
      'Maybe I should just move on',
    ],
    emotions: ['frustrated', 'defeated'],
    painPoints: [
      '🔴 #1 PAIN: Clients delay or refuse payment after receiving work',
      'No legal leverage for small/medium projects',
      'Chasing payment damages the professional relationship',
      'No automated payment reminders or enforcement',
      'Lost income with zero recourse',
      'Emotional toll of repeated non-payment experiences',
    ],
    opportunities: [
      '⭐️ ESCROW: Funds secured before work begins',
      'Milestone-based auto-release on approval',
      'Automated payment reminders',
      'Payment protection guarantee',
      'Dispute resolution with held funds',
    ],
  },
];

// CUSTOMER JOURNEY MAP - Agency Abebe (Step 6)
const journeyAbebe: JourneyStage[] = [
  {
    name: 'Discover Client',
    actions: [
      'Receives RFPs from corporations and NGOs',
      'Bids on government and institutional projects',
      'Gets referrals from business network',
      'Responds to formal procurement processes',
    ],
    thoughts: ['Big project, big potential — but also big payment risk'],
    emotions: ['confident', 'cautious'],
    painPoints: [
      'Even large organizations delay payments',
      'Procurement processes add bureaucratic layers',
      'Due diligence on client payment reliability is informal',
    ],
    opportunities: [
      'Organizational payment history and ratings',
      'Formal client onboarding with payment terms',
      'Contract templates for enterprise projects',
    ],
  },
  {
    name: 'Propose & Agree',
    actions: [
      'Prepares detailed proposals and quotes',
      'Negotiates terms through formal meetings',
      'Drafts contracts (sometimes with legal support)',
      'Defines payment milestones in proposal',
    ],
    thoughts: ['We have a contract, so we should be safe... right?'],
    emotions: ['professional', 'hopeful'],
    painPoints: [
      'Contracts exist but enforcement is weak',
      'Legal action is expensive and slow',
      'Even signed contracts don\'t guarantee payment',
      'Payment terms are often ignored by clients',
    ],
    opportunities: [
      'Escrow-backed contracts for even large projects',
      'Legally binding digital agreements',
      'Payment milestone enforcement through platform',
    ],
  },
  {
    name: 'Produce Work',
    actions: [
      'Assigns work to team of 20+ employees',
      'Manages multiple concurrent projects',
      'Provides client with regular status reports',
      'Handles scope changes through project managers',
    ],
    thoughts: ['My team needs to be paid even if the client doesn\'t pay me'],
    emotions: ['focused', 'stressed'],
    painPoints: [
      'Must pay employees regardless of client payment',
      'Scope creep at enterprise scale = massive financial impact',
      'Resource allocation based on uncertain revenue',
      'Cash flow pressure from multiple delayed payments',
    ],
    opportunities: [
      'Multi-project escrow dashboard',
      'Cash flow projection based on milestone schedule',
      'Team payment tracking linked to project milestones',
    ],
  },
  {
    name: 'Present & Deliver',
    actions: [
      'Formal presentation to client stakeholders',
      'Deliverable handoff with sign-off documents',
      'QA and revision rounds per contract',
      'Final approval from multiple client contacts',
    ],
    thoughts: ['Approved! Now the payment nightmare begins'],
    emotions: ['proud', 'dreading'],
    painPoints: [
      'Multiple stakeholders slow down approval',
      'Sign-off doesn\'t trigger automatic payment',
      'Deliverables handed over before payment secured',
    ],
    opportunities: [
      'Multi-stakeholder approval workflow',
      'Delivery confirmation linked to escrow release',
      'Staged deliverable access based on payment status',
    ],
  },
  {
    name: 'Collect Payment',
    actions: [
      'Sends invoices through accounting department',
      'Follows up through official channels',
      'Escalates to management and legal if needed',
      'Waits 30-90+ days for payment on million-ETB projects',
      'Considers legal action but weighs cost vs. recovery',
    ],
    thoughts: [
      'Even million-birr projects face this same problem',
      'An escrow system would be a gold mine',
    ],
    emotions: ['frustrated', 'resigned'],
    painPoints: [
      '🔴 #1 PAIN: Payment delays even on million-ETB enterprise projects',
      'Legal enforcement is costly and time-consuming',
      'Cash flow crisis affects employee salaries',
      'Collection process damages client relationships',
      'Write-offs on irrecoverable payments',
    ],
    opportunities: [
      '⭐️ ESCROW: "Would be a gold mine" — direct quote',
      'Enterprise-grade milestone payment system',
      'Automated invoicing and collection',
      'Financial reporting for tax and compliance',
    ],
  },
];

export const customerJourneys: CustomerJourney[] = [
  {
    personaId: 'solo-selam',
    stages: journeySelam,
  },
  {
    personaId: 'agency-abebe',
    stages: journeyAbebe,
  },
];

// Emotion scores for visualization (0-100)
export const emotionScores = {
  'solo-selam': [60, 55, 40, 45, 20],
  'agency-abebe': [65, 70, 50, 55, 25],
};
