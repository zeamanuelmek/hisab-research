import type { Recommendation } from './types';

// PRIORITIZED RECOMMENDATIONS (Step 5)
// Extracted from JSX artifacts
export const recommendations: Recommendation[] = [
  {
    id: 'r1',
    title: 'Escrow-Based Payment Protection',
    description:
      'Implement a milestone-based escrow system where client funds are held securely and released upon delivery confirmation. This directly addresses the core pain point every participant described.',
    priority: 'P0',
    rationale:
      'The #1 finding from all 5 interviews. Agency owner explicitly recommended "Upwork-style escrow" as a "gold mine". Kidus lost 15,000 ETB on a single project due to non-payment.',
    estimatedEffort: 'High - Core platform feature with legal/compliance requirements',
    theme: 'Payment Security',
    evidence: [
      'Agency owner explicitly recommended "Upwork-style escrow" as a "gold mine"',
      'Kidus lost 15,000 ETB on a single project due to non-payment',
      'Fitsum described clients who disappear after receiving deliverables',
      'All 5 participants ranked payment collection as their biggest pain point',
    ],
    features: [
      'Client deposits funds before work begins',
      'Milestone-based release (e.g., 30% on design approval, 70% on delivery)',
      'Auto-release timer (7-day window after delivery)',
      'Dispute resolution workflow with evidence upload',
    ],
  },
  {
    id: 'r2',
    title: 'Chapa Payment Gateway Integration',
    description:
      'Integrate Chapa as the primary payment gateway to support local bank transfers, TeleBirr, and card payments. Essential for the escrow system to function in the Ethiopian market.',
    priority: 'P0',
    rationale:
      'All participants use manual bank transfers or TeleBirr currently. No existing platform offers escrow with Ethiopian payment methods.',
    estimatedEffort: 'High - API integration with financial compliance',
    theme: 'Local Infrastructure',
    evidence: [
      'All participants use manual bank transfers or TeleBirr currently',
      'No existing platform offers escrow with Ethiopian payment methods',
      'Agency owner confirmed even million-ETB projects use informal payment methods',
      'Mikiyas specifically mentioned wanting mobile money integration',
    ],
    features: [
      'Chapa checkout for client deposits',
      'TeleBirr mobile money support',
      'Bank transfer via CBE, Dashen, Awash',
      'Automated payment receipts and confirmations',
    ],
  },
  {
    id: 'r3',
    title: 'Smart Agreement Builder',
    description:
      'Pre-built agreement templates with scope, deliverables, timeline, and payment terms. Converts the informal Telegram/verbal agreements into structured, enforceable documents.',
    priority: 'P1',
    rationale:
      'Kidus uses only verbal agreements, leading to scope creep. 4 of 5 participants have no formal written agreements.',
    estimatedEffort: 'Medium - Template system with form builder',
    theme: 'Scope Clarity',
    evidence: [
      'Kidus uses only verbal agreements, leading to scope creep',
      'Sinidu creates informal proposals but they lack enforcement',
      'Fitsum described clients adding "one more thing" repeatedly',
      '4 of 5 participants have no formal written agreements',
    ],
    features: [
      'Template library by project type (web, design, writing, video)',
      'Auto-populated from project setup (scope, timeline, budget)',
      'Digital signature from both parties',
      'Revision limit clauses and change request workflow',
    ],
  },
  {
    id: 'r4',
    title: 'Client Portal with Transparency',
    description:
      'A dedicated client-facing portal where clients can view project progress, approve milestones, and manage payments. Reduces the communication burden on freelancers while building professional credibility.',
    priority: 'P1',
    rationale:
      'Freelancers spend excessive time sending manual updates via Telegram. Agency owner noted that professional presentation increases payment reliability.',
    estimatedEffort: 'Medium - Dashboard with role-based access',
    theme: 'Trust & Verification',
    evidence: [
      'Freelancers spend excessive time sending manual updates via Telegram',
      'Clients requesting constant check-ins creates relationship tension',
      'Agency owner noted that professional presentation increases payment reliability',
      'Mikiyas described losing clients due to perceived lack of progress visibility',
    ],
    features: [
      'Client login with project dashboard',
      'Milestone progress tracking',
      'Delivery approval workflow (triggers escrow release)',
      'Payment history and receipt access',
    ],
  },
  {
    id: 'r5',
    title: 'Scope Change Request System',
    description:
      'Formal change request workflow that requires client acknowledgment of additional cost/time when scope changes are requested. Linked to the agreement and payment milestones.',
    priority: 'P1',
    rationale:
      'Scope creep was mentioned by all 5 participants as a recurring issue. Fitsum: "They keep asking for more but the price stays the same".',
    estimatedEffort: 'Low - Form workflow with notifications',
    theme: 'Professional Boundaries',
    evidence: [
      'Scope creep was mentioned by all 5 participants as a recurring issue',
      'Fitsum: "They keep asking for more but the price stays the same"',
      'Sinidu described projects doubling in scope without additional compensation',
      'Agency owner confirmed scope creep affects even large enterprise projects',
    ],
    features: [
      'Change request form with cost/time impact',
      'Client approval required before additional work begins',
      'Auto-updates to agreement and payment milestones',
      'Change history log for dispute resolution',
    ],
  },
  {
    id: 'r6',
    title: 'Client Reputation & Payment History',
    description:
      'A client rating system where freelancers can see a client\'s payment track record before accepting projects. Creates accountability and incentivizes timely payment.',
    priority: 'P2',
    rationale:
      'Kidus described repeatedly working with clients who have payment issues. No way to verify client reliability in the Ethiopian freelance market.',
    estimatedEffort: 'Medium - Review system with privacy controls',
    theme: 'Trust & Verification',
    evidence: [
      'Kidus described repeatedly working with clients who have payment issues',
      'No way to verify client reliability in the Ethiopian freelance market',
      'Agency owner suggested a "trust score" for clients',
      'Freelancers currently rely on word-of-mouth reputation only',
    ],
    features: [
      'Client payment completion rate badge',
      'Average payment speed indicator',
      'Freelancer reviews (visible after project completion)',
      'Verified client onboarding process',
    ],
  },
  {
    id: 'r7',
    title: 'Dispute Resolution Center',
    description:
      'A structured dispute resolution process with evidence submission, mediation steps, and fair outcome enforcement. Essential complement to the escrow system.',
    priority: 'P2',
    rationale:
      'Currently zero recourse when clients don\'t pay. Kidus lost money with no way to resolve disputes.',
    estimatedEffort: 'High - Mediation workflow with legal considerations',
    theme: 'Payment Security',
    evidence: [
      'Currently zero recourse when clients don\'t pay',
      'Kidus lost money with no way to resolve disputes',
      'Agency owner described costly legal proceedings that aren\'t worth it for smaller projects',
      'Informal social pressure is the only current "resolution" method',
    ],
    features: [
      'Evidence upload (screenshots, files, communication logs)',
      'Structured mediation workflow',
      'Escrow fund hold during dispute',
      'Resolution templates for common disputes',
    ],
  },
  {
    id: 'r8',
    title: 'NBE Compliance & Licensing',
    description:
      'Research and obtain necessary National Bank of Ethiopia licensing for holding funds in escrow. Partner with a licensed financial institution if direct licensing isn\'t feasible.',
    priority: 'P2',
    rationale:
      'Ethiopian financial regulations require licensing for fund holding. Compliance is a competitive moat against future competitors.',
    estimatedEffort: 'High - Legal/regulatory with partnership development',
    theme: 'Local Infrastructure',
    evidence: [
      'Ethiopian financial regulations require licensing for fund holding',
      'Agency owner emphasized importance of legal compliance for trust',
      'Chapa already navigates NBE requirements — partnership opportunity',
      'Compliance is a competitive moat against future competitors',
    ],
    features: [
      'NBE licensing research and application',
      'Partnership with licensed payment institution',
      'KYC/AML compliance for users',
      'Transaction reporting and audit trail',
    ],
  },
];
