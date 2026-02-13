// FOUNDATIONAL REPORT DATA (Step 9)

export interface ReportSection {
  id: string;
  title: string;
  type: string;
}

export const reportSections: ReportSection[] = [
  {
    id: 'executive',
    title: 'Executive Summary',
    type: 'summary',
  },
  {
    id: 'methodology',
    title: 'Research Methodology',
    type: 'methodology',
  },
  {
    id: 'findings',
    title: 'Key Findings',
    type: 'findings',
  },
  {
    id: 'journey',
    title: 'Customer Journey',
    type: 'journey',
  },
  {
    id: 'gtm',
    title: 'Go-to-Market Strategy',
    type: 'gtm',
  },
];

export const executiveSummaryStats = [
  { num: '5', label: 'Interviews', sub: '4 solo + 1 agency' },
  { num: '49', label: 'Research Notes', sub: 'Affinity mapped' },
  { num: '6', label: 'Key Insights', sub: '+ 1 critical pivot' },
  { num: '8', label: 'Recommendations', sub: 'P0 → P2 prioritized' },
];

export const methodologyPhases = [
  {
    num: '01',
    phase: 'Recruitment',
    desc: 'Screened via Typeform/Google Forms across LinkedIn and Telegram freelancer communities. Selected 5 participants representing solo and agency segments.',
    detail:
      'Criteria: Active Ethiopian freelancer, 1+ year experience, works with local clients',
  },
  {
    num: '02',
    phase: 'Interview Design',
    desc: '3-layer deep-dive structure: Demographics → Psychographics → 5-stage journey exploration (Discover → Propose → Produce → Present → Collect).',
    detail:
      '60-90 minute sessions via Google Meet and in-person, recorded with consent',
  },
  {
    num: '03',
    phase: 'Synthesis',
    desc: '49 sticky notes affinity-clustered into themes → 6 insights extracted → 2 personas built → 20 solution ideas generated → Impact/effort prioritized.',
    detail: 'Followed DPS (Digital Product School) research methodology',
  },
  {
    num: '04',
    phase: 'Validation',
    desc: 'Key findings cross-validated across all 5 interviews. Escrow recommendation independently confirmed by agency owner as "gold mine" — unprompted.',
    detail: '5/5 participants identified payment protection as #1 unmet need',
  },
];

export const keyFindingsData = [
  {
    num: '01',
    title: 'Payment Default is Universal',
    finding:
      'Every participant has experienced non-payment. Losses range from 15,000–50,000 ETB annually per freelancer. This is not an edge case — it is the default experience.',
    source: '5/5 interviews',
    color: '#EF4444',
  },
  {
    num: '02',
    title: 'Formality = Client Loss Fear',
    finding:
      'Freelancers avoid formal contracts because they fear appearing unprofessional or losing clients to less formal competitors. The informal path feels "safer" even though it causes financial harm.',
    source: '4/5 interviews',
    color: '#F97316',
  },
  {
    num: '03',
    title: 'Scope Creep is Normalized',
    finding:
      '"Can you also add..." is the most dreaded phrase. Additional work is expected without additional payment because nothing was formally scoped or documented.',
    source: '5/5 interviews',
    color: '#F59E0B',
  },
  {
    num: '04',
    title: 'Telegram is the Platform',
    finding:
      'All project communication, file sharing, approvals, and even payment confirmations happen via Telegram. It is the de facto freelance management tool in Ethiopia.',
    source: '5/5 interviews',
    color: '#3B82F6',
  },
  {
    num: '05',
    title: 'Local Market is Underserved',
    finding:
      "International platforms don't work for domestic Ethiopian projects. No platform supports ETB escrow, TeleBirr integration, or local business practices.",
    source: '5/5 interviews',
    color: '#8B5CF6',
  },
  {
    num: '06',
    title: 'Escrow = "Gold Mine"',
    finding:
      'Agency owner with 5+ years and million-ETB projects spontaneously recommended Upwork-style escrow as the single most valuable feature Hisab could build.',
    source: 'Agency interview — unsolicited',
    color: '#22C55E',
  },
];

export const journeyEmotionData = [
  {
    stage: '1. Discover Client',
    emotion: 60,
    color: '#22C55E',
    pain: 'No way to verify client reliability',
    hisab: 'Client verification & trust signals',
  },
  {
    stage: '2. Propose & Agree',
    emotion: 55,
    color: '#84CC16',
    pain: 'Verbal agreements, no formal scope definition',
    hisab: 'Smart Agreement Builder & digital signatures',
  },
  {
    stage: '3. Produce Work',
    emotion: 40,
    color: '#F59E0B',
    pain: 'Scope creep — "can you also add..." without pay',
    hisab: 'Scope Change Request system with cost impact',
  },
  {
    stage: '4. Present & Deliver',
    emotion: 35,
    color: '#F97316',
    pain: 'Files delivered before payment is secured',
    hisab: 'Watermarked previews + delivery confirmation workflow',
  },
  {
    stage: '5. Collect Payment',
    emotion: 20,
    color: '#EF4444',
    pain: 'Weeks/months chasing payment, sometimes never paid',
    hisab: 'Escrow auto-release on milestone approval',
  },
];

export const gtmPhases = [
  {
    phase: 'Phase 1: Seed',
    time: 'Month 1–2',
    target: '20 freelancers, 10 escrow projects',
    items: [
      "Launch with Zeamanuel's personal network (10-20 freelancers)",
      'Partner with KazaWorks coworking for on-site onboarding events',
      'LinkedIn "Build in Public" series drives awareness (500+ followers)',
      'First escrow transactions prove the value loop',
    ],
  },
  {
    phase: 'Phase 2: Validate',
    time: 'Month 3–4',
    target: '50 freelancers, 30 projects',
    items: [
      'Telegram community outreach (Ethiopian Freelancers groups)',
      'Case study content from early adopter success stories',
      'Referral incentive: fee discount for inviting clients to escrow',
      'Iterate on product based on real usage data',
    ],
  },
  {
    phase: 'Phase 3: Scale',
    time: 'Month 5–6',
    target: '100 freelancers, 50 projects ✓',
    items: [
      'Partnerships with design/dev bootcamps (ALX, Evangadi, etc.)',
      'Client-side marketing: "Pay through Hisab" trust badge',
      'Africa Meets Bavaria network for partnerships & press',
      'Hit success metric: 50 completed escrow projects',
    ],
  },
];
