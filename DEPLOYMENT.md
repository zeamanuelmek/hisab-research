# Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. **Firebase CLI installed globally:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Logged in to Firebase:**
   ```bash
   firebase login
   ```

3. **Firebase hosting site created:**
   - The site `hisab-research` must exist in your Firebase project `hisab-finance-app`
   - Create it via Firebase Console or CLI:
     ```bash
     firebase hosting:sites:create hisab-research
     ```

## Deployment Steps

### 1. Test Locally

```bash
# Start development server
npm run dev

# Visit http://localhost:3001
# Verify all sections load correctly
```

### 2. Build for Production

```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview

# Visit http://localhost:4173 to test
```

### 3. Deploy to Firebase

```bash
# Deploy ONLY the research site (safe - won't affect main app)
npm run deploy

# Alternative: manual deployment
firebase deploy --only hosting:research
```

### 4. Verify Deployment

After deployment:

1. Visit https://hisab-research.web.app/
2. Test on both desktop and mobile
3. Verify all 10 sections are visible
4. Test scroll navigation
5. Check that main app still works at https://hisab-finance-app.web.app/

## Important Notes

### Multi-Site Hosting Safety

This project uses Firebase multi-site hosting to ensure **complete isolation** from your main Hisab app:

- **Main app:** `hisab-finance-app.web.app` (untouched)
- **Research site:** `hisab-research.web.app` (this project)

The `.firebaserc` file configures the `research` target, and `firebase.json` specifies `"target": "research"`.

**Never run `firebase deploy` without the `--only hosting:research` flag** unless you intend to affect all hosting sites.

### Updating Data

To update research data:

1. Edit `/src/data/synthesis.ts` and `/src/data/themes.ts`
2. Rebuild: `npm run build`
3. Redeploy: `npm run deploy`

The TypeScript interfaces in `/src/data/types.ts` will catch any data structure errors during build.

### Custom Domain (Optional)

To point a custom domain (e.g., `research.hisab.et`) to this site:

```bash
firebase hosting:sites:create research
firebase target:apply hosting research hisab-research
```

Then add the domain in Firebase Console:
1. Go to Hosting
2. Select `hisab-research` site
3. Add custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Errors

If the build fails:
- Check TypeScript errors: `npx tsc --noEmit`
- Verify Tailwind config: ensure all colors are defined
- Check data imports: ensure all paths are correct

### Deployment Errors

If deployment fails:
- Verify you're logged in: `firebase login --reauth`
- Check project ID: `firebase use hisab-finance-app`
- Ensure site exists: `firebase hosting:sites:list`

### Site Not Loading

If the deployed site doesn't load:
- Clear browser cache
- Check Firebase Console > Hosting for deployment status
- Verify DNS if using custom domain
- Check browser console for errors

## Rollback

To rollback to a previous version:

```bash
# List previous versions
firebase hosting:clone

# Rollback
firebase hosting:rollback
```

## CI/CD (Optional)

To set up automatic deployment on git push:

1. Generate a Firebase CI token:
   ```bash
   firebase login:ci
   ```

2. Add to GitHub Actions (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to Firebase
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm ci
         - run: npm run build
         - uses: FirebaseExtended/action-hosting-deploy@v0
           with:
             repoToken: '${{ secrets.GITHUB_TOKEN }}'
             firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
             projectId: hisab-finance-app
             target: research
   ```

## Analytics (Optional)

To add Google Analytics:

1. Enable Google Analytics in Firebase Console
2. Get your measurement ID
3. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## Support

For issues, check:
- Firebase docs: https://firebase.google.com/docs/hosting
- Vite docs: https://vitejs.dev/guide
- Tailwind docs: https://tailwindcss.com/docs
