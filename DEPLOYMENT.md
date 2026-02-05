# Deployment Guide

## Quick Deploy til Vercel (5 minutter)

Vercel er den hurtigste måde at deploye din Next.js showroom på.

### Step 1: Push til GitHub

```bash
# Initialize git (hvis ikke allerede gjort)
git init
git add .
git commit -m "Initial commit: Flux Adoption Showroom"

# Push til GitHub
git remote add origin https://github.com/yourusername/flux-adoption.git
git push -u origin main
```

### Step 2: Deploy til Vercel

1. Gå til [vercel.com](https://vercel.com)
2. Sign up/in med GitHub
3. Klik "New Project"
4. Import dit repository
5. Vercel detecterer automatisk Next.js
6. Klik "Deploy"

**Done!** Din showroom er live på `https://flux-adoption.vercel.app`

---

## Deploy til GitHub Pages (Zero Cost)

GitHub Pages er gratis og perfekt til statiske sites.

### Step 1: Build projektet

```bash
npm run build
```

Dette skaber en `out` mappe med alle statiske filer.

### Step 2: Deploy

**Option A: Manual**
```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy out folder
gh-pages -d out
```

**Option B: GitHub Actions (Automatisk)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 3: Enable GitHub Pages

1. Gå til repository Settings
2. Pages section
3. Source: Select `gh-pages` branch
4. Save

Din site er nu live på: `https://yourusername.github.io/flux-adoption/`

---

## Deploy til Netlify

Netlify giver gratis hosting + automatic HTTPS.

### Method 1: Drag & Drop

1. Build lokalt: `npm run build`
2. Gå til [netlify.com](https://netlify.com)
3. Drag `out` mappen til Netlify dashboard
4. Done!

### Method 2: Git Integration

1. Sign up på Netlify med GitHub
2. "New site from Git"
3. Select repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy

---

## Custom Domain Setup

### Vercel

1. Projekt settings → Domains
2. Add domain (f.eks. fluxadoption.com)
3. Update DNS records hos din domain provider:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### GitHub Pages

1. Create file `out/CNAME` med dit domain
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   ```

### Netlify

1. Domain settings → Add custom domain
2. Netlify guider dig gennem DNS setup

---

## Performance Optimization

### Enable Analytics (Vercel)

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable Vercel Analytics
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  }
}
```

### CDN Optimization

Alle tre platforms (Vercel, Netlify, GitHub Pages) bruger globale CDN's automatisk.
Din showroom vil loade hurtigt globalt.

---

## Environment Variables (for Calculator API)

Hvis du tilføjer en rigtig backend til calculatoren:

### Vercel
1. Project Settings → Environment Variables
2. Add: `NEXT_PUBLIC_API_URL=https://your-api.com`

### Netlify
1. Site settings → Environment variables
2. Add: `NEXT_PUBLIC_API_URL=https://your-api.com`

### GitHub Pages
Brug runtime config eller hardcode URL i build-tid.

---

## Monitoring

### Vercel Analytics
Gratis inkluderet. Se metrics i Vercel dashboard.

### Google Analytics

Add to `app/layout.js`:

```javascript
export const metadata = {
  // ...existing metadata
  other: {
    'google-site-verification': 'your-verification-code'
  }
}
```

---

## Troubleshooting

### Build Failures

**Problem**: `Module not found: Can't resolve 'flux-showroom'`
**Solution**: Check import path in `app/page.js`

**Problem**: Tailwind styles not loading
**Solution**: Verify `globals.css` imports in `layout.js`

### Deploy Issues

**GitHub Pages**: Site not updating?
- Clear cache
- Check gh-pages branch exists
- Verify GitHub Actions completed

**Vercel**: Build failed?
- Check build logs
- Verify Node version (18+)
- Run `npm run build` locally first

---

## Next Steps

After deployment:

1. ✅ Test all interactive elements (calculator, copy button)
2. ✅ Verify mobile responsiveness
3. ✅ Check load times (should be <2s)
4. ✅ Setup custom domain
5. ✅ Add to LinkedIn profile
6. ✅ Share on social media with #FluxAdoption

---

**Questions?** Reference main README.md or open an issue.
