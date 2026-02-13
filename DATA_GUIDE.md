# Data Replacement Guide

This guide explains how to replace the placeholder data with your actual research data from the JSX artifacts.

## Overview

The website currently uses realistic placeholder data that matches the expected structure. You need to replace this with your actual research findings.

## Data Files to Update

### 1. `/src/data/synthesis.ts`

This file contains data for Steps 1-3:

#### Sticky Notes (49 notes)

Find the `stickyNotes` array and replace with your data:

```typescript
export const stickyNotes: StickyNote[] = [
  {
    id: 'p1',                           // Unique ID
    text: 'Your note text here',        // The actual sticky note content
    stage: 'Pain Points & Frustrations', // One of 5 stages (see types.ts)
    type: 'pain',                       // pain, workaround, feature, emotion, behavior
    sources: ['P1', 'P2'],              // Which participants mentioned this
    priority: 'high',                   // high, medium, low (optional)
  },
  // ... 48 more notes
];
```

**Where to find this data:** Your Step 1 JSX artifact should have all 49 sticky notes organized by stage.

#### Personas (2 personas)

Find the `personas` array:

```typescript
export const personas: Persona[] = [
  {
    id: 'solo-selam',
    name: 'Solo Selam',
    tagline: 'The Independent Graphic Designer',
    demographics: {
      age: 28,
      location: 'Addis Ababa, Ethiopia',
      occupation: 'Freelance Graphic Designer',
      experience: '4 years freelancing',
    },
    quote: "I love the creative freedom, but...",
    goals: ['Goal 1', 'Goal 2', ...],
    frustrations: ['Frustration 1', ...],
    behaviors: ['Behavior 1', ...],
    needs: ['Need 1', ...],
    color: '#8B5CF6',  // Purple or pink for visual distinction
  },
  // ... second persona
];
```

**Where to find this data:** Your Step 2 JSX artifact with persona cards.

#### Key Insights (6 insights + 1 critical)

Find the `keyInsights` array:

```typescript
export const keyInsights: KeyInsight[] = [
  {
    id: 'critical',
    title: 'Your Critical Finding Title',
    description: 'Detailed description of the critical finding...',
    impact: 'critical',  // This makes it display prominently
    sources: ['P1', 'P2', 'P3', 'P4', 'P5'],
    category: 'Core Problem',
  },
  {
    id: 'i1',
    title: 'Insight Title',
    description: 'Insight description...',
    impact: 'high',  // high or medium
    sources: ['P1', 'P4'],
    category: 'Behavioral Pattern',
  },
  // ... 5 more insights
];
```

**Where to find this data:** Your Step 3 JSX artifact with key insights.

#### Priority Rankings

Find the `priorityRankings` array:

```typescript
export const priorityRankings: PriorityRanking[] = [
  { feature: 'Escrow/Payment Protection', mentions: 5, percentage: 100 },
  { feature: 'Digital Contracts', mentions: 4, percentage: 80 },
  // ... more rankings
];
```

Calculate percentage as: `(mentions / total participants) * 100`

#### Desired Features

Find the `desiredFeatures` array:

```typescript
export const desiredFeatures: DesiredFeature[] = [
  { name: 'Escrow System', frequency: 5, participants: ['P1', 'P2', 'P3', 'P4', 'P5'] },
  // ... more features
];
```

### 2. `/src/data/themes.ts`

This file contains data for Step 4:

#### Themes (5 themes)

Find the `themes` array:

```typescript
export const themes: Theme[] = [
  {
    id: 'payment-trust',
    name: 'Payment Trust & Security',
    description: 'Creating a secure escrow system...',
    color: '#8B5CF6',  // Hex color for visual distinction
    insights: [
      'Payment protection is the foundation...',
      'Trust substitutes formal protection...',
    ],
    priority: 1,  // 1-5 ranking
  },
  // ... 4 more themes
];
```

**Where to find this data:** Your Step 4 JSX artifact with themes.

#### Solution Ideas (20 ideas)

Find the `solutionIdeas` array:

```typescript
export const solutionIdeas: SolutionIdea[] = [
  {
    id: 's1',
    title: 'Milestone-Based Escrow',
    description: 'Hold client payment in escrow...',
    impact: 5,     // 1-5 scale (5 = highest impact)
    effort: 2,     // 1-5 scale (1 = lowest effort)
    theme: 'payment-trust',  // Must match a theme ID
    category: 'quick-win',   // Auto-calculated, but you can override
  },
  // ... 19 more ideas
];
```

**Categories are auto-calculated based on impact/effort:**
- `quick-win`: High impact (≥4), Low effort (≤2)
- `big-bet`: High impact (≥4), High effort (≥4)
- `nice-to-have`: Lower impact/effort
- `time-sink`: Low impact, High effort

**Where to find this data:** Your Step 4 JSX artifact with solution ideas and impact/effort matrix.

## Steps to Replace Data

### Step 1: Open Your JSX Artifacts

Open your three JSX artifact files in an editor alongside the data files.

### Step 2: Extract Arrays

For each artifact:
1. Find the data arrays (look for `const stickyNotes = [`, `const personas = [`, etc.)
2. Copy the entire array
3. Paste it into the corresponding location in the data files

### Step 3: Verify Types

After pasting, run TypeScript check:

```bash
npx tsc --noEmit
```

This will catch any type errors. Fix them by ensuring your data matches the interfaces in `/src/data/types.ts`.

### Step 4: Update Stats in Hero

Open `/src/components/Hero.tsx` and update the stat numbers:

```typescript
<div className="text-4xl font-bold text-research-purple mb-2">5</div>
// Change to your actual number of interviews

<div className="text-4xl font-bold text-research-pink mb-2">49</div>
// Change to your actual number of sticky notes

<div className="text-4xl font-bold text-research-purple mb-2">6</div>
// Change to your actual number of insights

<div className="text-4xl font-bold text-research-pink mb-2">20</div>
// Change to your actual number of solution ideas
```

### Step 5: Test

```bash
npm run dev
```

Visit http://localhost:3001 and verify:
- [ ] All 49 sticky notes display correctly in Step 1
- [ ] Both personas show with complete information in Step 2
- [ ] Critical finding is highlighted in Step 3
- [ ] All 6 insights display with correct impact levels
- [ ] Priority rankings chart shows correct data
- [ ] All 5 themes display in Step 4
- [ ] Impact/effort matrix plots 20 ideas correctly
- [ ] Quick Wins and Big Bets sections populate correctly

### Step 6: Build and Deploy

```bash
npm run build
npm run deploy
```

## Adding Steps 5-10

When you have the third JSX artifact with data for steps 5-10:

1. Create new data files:
   - `/src/data/recommendations.ts` (Step 5)
   - `/src/data/journeys.ts` (Step 6)
   - `/src/data/roadmap.ts` (Step 7)
   - `/src/data/competitors.ts` (Step 8)

2. Create new step components in `/src/components/steps/`:
   - `Step5Recommendations.tsx`
   - `Step6Journeys.tsx`
   - `Step7Roadmap.tsx`
   - `Step8Competitors.tsx`
   - `Step9Report.tsx`

3. Replace placeholders in `/src/App.tsx`:
   ```typescript
   // Replace this:
   <StepPlaceholder step={5} ... />

   // With this:
   <Step5Recommendations />
   ```

4. Add corresponding interfaces to `/src/data/types.ts` (already included)

## Common Issues

### Type Errors

If you get TypeScript errors:
- Check that field names match exactly (case-sensitive)
- Verify all required fields are present
- Ensure enums match (e.g., `'high'` not `'High'`)
- Check that IDs are unique

### Missing Data

If sections appear empty:
- Check import statements at top of files
- Verify data is exported: `export const ...`
- Check browser console for errors

### Visual Issues

If styling looks off:
- Verify color values are valid hex codes
- Check that persona colors are defined
- Ensure theme colors are in the themes array

## Need Help?

Check these files for reference:
- `/src/data/types.ts` - See all available fields and types
- Current placeholder data - Use as examples for structure
- Browser DevTools console - Check for JavaScript errors

## Quick Reference: Data Structure

```
synthesis.ts (Steps 1-3)
├── stickyNotes[]      - 49 notes
├── personas[]         - 2 personas
├── keyInsights[]      - 6 insights + 1 critical
├── priorityRankings[] - Feature priorities
└── desiredFeatures[]  - Feature requests

themes.ts (Step 4)
├── themes[]           - 5 strategic themes
└── solutionIdeas[]    - 20 ideas with impact/effort
```
