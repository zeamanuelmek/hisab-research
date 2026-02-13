# Hisab Research Website

A professional research synthesis website showcasing user research for Hisab, Ethiopia's first freelancer protection platform with escrow-based payments.

## Overview

This website presents comprehensive user research from 5 in-depth interviews with Ethiopian freelancers, synthesized into:

- 49 sticky notes across 5 thematic stages
- 2 detailed user personas
- 6 key insights (including 1 critical finding)
- 5 strategic themes
- 20 solution ideas with impact/effort analysis
- Product roadmap and recommendations

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom dark theme
- **Firebase Hosting** - Deployment (multi-site)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 3001)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project uses Firebase multi-site hosting to avoid conflicts with the main Hisab app.

```bash
# Deploy to Firebase (hisab-research.web.app)
npm run deploy
```

**Important:** The deployment uses the `--only hosting:research` flag to ensure it only deploys the research site and doesn't affect the main Hisab app at `hisab-finance-app.web.app`.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Landing section with stats
│   ├── Navigation.tsx        # Sticky navigation with scroll spy
│   ├── Conclusion.tsx        # Final section with MVP summary
│   └── steps/
│       ├── Step1SynthesisBoard.tsx  # 49 sticky notes Kanban
│       ├── Step2Personas.tsx        # 2 persona cards
│       ├── Step3Insights.tsx        # 6 insights + charts
│       ├── Step4Themes.tsx          # Themes + impact/effort matrix
│       └── StepPlaceholder.tsx      # Placeholder for steps 5-10
├── data/
│   ├── types.ts              # TypeScript interfaces
│   ├── synthesis.ts          # Research data (steps 1-3)
│   └── themes.ts             # Theme and solution data (step 4)
├── hooks/
│   └── useScrollSpy.ts       # Scroll position tracking
├── App.tsx                   # Main component
└── index.css                 # Global styles + Tailwind
```

## Customization

### Colors

Custom colors are defined in `tailwind.config.js`:

- `research-bg`: #0B0B0F (main background)
- `research-card`: #141419 (card background)
- `research-purple`: #8B5CF6 (primary accent)
- `research-pink`: #EC4899 (secondary accent)

### Fonts

- **DM Sans** - Body text (Google Fonts)
- **Space Mono** - Monospace accents (Google Fonts)

### Data

Replace placeholder data in `/src/data/synthesis.ts` and `/src/data/themes.ts` with your actual research data. The TypeScript interfaces in `/src/data/types.ts` ensure type safety.

## Firebase Configuration

- **Project**: `hisab-finance-app`
- **Hosting Target**: `research`
- **URL**: https://hisab-research.web.app/

The `.firebaserc` file configures multi-site hosting to keep this site separate from the main app.

## Browser Support

Optimized for modern browsers with support for:
- CSS Grid
- CSS Custom Properties
- Intersection Observer API
- Smooth scrolling

## License

© 2026 Hisab - Ethiopia's First Freelancer Protection Platform
