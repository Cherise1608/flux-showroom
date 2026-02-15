# Deployment Checklist

Step-by-step guide til at få dit showroom live.

## Pre-Launch (15 minutter)

### ☐ 1. Verify Local Setup
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

- [ ] Site loader på http://localhost:3000
- [ ] Alle sektioner vises korrekt
- [ ] Calculator virker
- [ ] Copy button virker
- [ ] No console errors (åbn med F12)

### ☐ 2. Content Review

- [ ] Hero tekst matcher dit brand
- [ ] Research Translator stats er korrekte (83%, 102.000 kr.)
- [ ] Metadata JSON reflekterer din arkitektur
- [ ] Footer links er opdateret

### ☐ 3. Mobile Test

- [ ] Test på din telefon (localhost:3000 via network)
- [ ] Alle sections er læsbare
- [ ] Buttons er klikbare
- [ ] No horizontal scroll

---

## Deploy til Vercel (5 minutter)

### ☐ 1. Push til GitHub

```bash
git init
git add .
git commit -m "Initial commit: Flux AI Showroom"

# Create repository på GitHub først
git remote add origin https://github.com/YOURUSERNAME/flux-adoption.git
git branch -M main
git push -u origin main
```

### ☐ 2. Deploy

1. [ ] Gå til [vercel.com](https://vercel.com)
2. [ ] Sign up med GitHub account
3. [ ] Click "New Project"
4. [ ] Import dit repository
5. [ ] Accept defaults (Vercel auto-detects Next.js)
6. [ ] Click "Deploy"
7. [ ] Wait 2-3 minutes
8. [ ] Copy din URL (f.eks. flux-adoption.vercel.app)

### ☐ 3. Verify Production

- [ ] Visit din Vercel URL
- [ ] Test alle interactive elements
- [ ] Check mobile responsiveness
- [ ] Share link med en ven for feedback

---

## Custom Domain (Optional - 10 minutter)

### ☐ 1. Buy Domain

Popular options:
- [ ] Namecheap.com
- [ ] GoDaddy.com
- [ ] Google Domains

Suggestion: `fluxadoption.com` eller `fluxadoption.dk`

### ☐ 2. Connect til Vercel

1. [ ] Vercel dashboard → Dit projekt → Settings
2. [ ] Domains tab → Add Domain
3. [ ] Enter dit domain name
4. [ ] Follow Vercel's DNS instructions
5. [ ] Wait for DNS propagation (5-60 min)
6. [ ] Verify HTTPS works

---

## Post-Launch Optimization (1 time)

### ☐ 1. Analytics Setup

#### Google Analytics (Recommended)

1. [ ] Create GA4 property: [analytics.google.com](https://analytics.google.com)
2. [ ] Copy Measurement ID (G-XXXXXXXXXX)
3. [ ] Add tracking code

Create `app/GoogleAnalytics.js`:
```javascript
export default function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `
      }} />
    </>
  )
}
```

Update `app/layout.js`:
```javascript
import GoogleAnalytics from './GoogleAnalytics'

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

4. [ ] Commit og push
5. [ ] Vercel auto-deploys
6. [ ] Verify tracking i GA4

#### Vercel Analytics (Easiest)

1. [ ] Vercel dashboard → Analytics tab
2. [ ] Click "Enable"
3. [ ] Done! (includes Web Vitals)

### ☐ 2. SEO Optimization

#### Update Meta Tags

Edit `app/layout.js`:
```javascript
export const metadata = {
  title: 'Flux AI - Deterministic AI Architecture',
  description: 'Logic-as-a-Service. 83% efficiency gains, zero hallucinations, full governance. Transforming uncertain AI into precise business tools.',
  keywords: 'AI Adoption, Deterministic AI, Logic-as-a-Service, AI Architecture, Jesca Martaeng',
  authors: [{ name: 'Jesca Martaeng' }],
  openGraph: {
    title: 'Flux AI - Deterministic AI',
    description: '83% efficiency gains through deterministic AI architecture',
    url: 'https://yoursite.com',
    siteName: 'Flux AI',
    images: [
      {
        url: 'https://yoursite.com/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'da_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flux AI - Deterministic AI',
    description: '83% efficiency gains, zero hallucinations',
    images: ['https://yoursite.com/og-image.png'],
  },
}
```

#### Create OG Image

1. [ ] Use Canva eller Figma
2. [ ] Size: 1200x630px
3. [ ] Include: "Flux AI" + "83% Efficiency" stat
4. [ ] Save as `public/og-image.png`
5. [ ] Upload til Vercel via git push

### ☐ 3. Performance Check

Run Lighthouse audit:

1. [ ] Open Chrome
2. [ ] Navigate til dit site
3. [ ] F12 → Lighthouse tab → Generate report
4. [ ] Target scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

If scores are low:
- Check image optimization
- Verify font loading
- Check Tailwind purge

---

## Marketing Integration (30 minutter)

### ☐ 1. LinkedIn

- [ ] Update LinkedIn profile URL til dit showroom
- [ ] Create post announcing launch
- [ ] Include screenshot + story behind pink choice
- [ ] Hashtags: #AIAdoption #DeterministicAI #LogicAsAService

Post template:
```
🚀 Launching Flux AI

I've built my showroom for deterministic AI architecture.

Why pink? Because the tech industry drowns in blue and gray. 
I'm combining technical precision with authentic personal brand.

The results:
• 83% efficiency gains (Research Translator for KU Lighthouse)
• Zero-cost infrastructure (GitHub + Cloudflare)
• Full governance (clients own their logic)

Check it out: [your-url]

#AIAdoption #DeterministicAI
```

### ☐ 2. GitHub Profile

Update README:
```markdown
## 🚀 Projects

- [Flux AI Showroom](https://your-url) - Deterministic AI Architecture
- [Research Translator](https://github.com/yourusername/research-translator) - 83% time savings for KU Lighthouse
```

### ☐ 3. Email Signature

Add link:
```
Jesca Martaeng
AI Adoption Specialist
🌐 fluxadoption.com
```

---

## Week 1 Actions

### ☐ Monday: Analytics Baseline

- [ ] Check Google Analytics for first visitors
- [ ] Note: traffic sources, time on site, bounce rate

### ☐ Wednesday: Feedback Collection

- [ ] Share with 5 trusted colleagues
- [ ] Ask specific questions:
  1. Is the value proposition clear?
  2. Do the stats feel credible?
  3. Does the pink work?
  4. Would you hire me based on this?

### ☐ Friday: First Optimization

Based on feedback:
- [ ] Adjust copy if value prop unclear
- [ ] Tweak colors if pink is too bold
- [ ] Add case study if credibility questioned
- [ ] Commit and push changes

---

## Month 1 Goals

### Traffic Targets
- [ ] 100+ unique visitors
- [ ] 10+ LinkedIn profile clicks
- [ ] 5+ GitHub repository stars

### Conversion Targets
- [ ] 3+ meaningful conversations from showroom
- [ ] 1+ client inquiry
- [ ] 1+ collaboration opportunity

### Content Additions
- [ ] Add testimonial section (after first projects)
- [ ] Add blog/case studies link
- [ ] Add booking calendar link

---

## Maintenance Schedule

### Weekly
- [ ] Check analytics
- [ ] Update project stats if new results
- [ ] Share new content on LinkedIn

### Monthly
- [ ] Review and respond to any GitHub issues
- [ ] Update dependencies: `npm update`
- [ ] Redeploy if needed

### Quarterly
- [ ] Full design review
- [ ] A/B test alternative layouts
- [ ] Consider adding new features based on feedback

---

## Emergency Troubleshooting

### Site is Down
1. Check Vercel status: status.vercel.com
2. Check deployment logs in Vercel dashboard
3. Verify domain DNS settings
4. Redeploy from Vercel dashboard

### Build Failed
1. Check Vercel build logs
2. Test locally: `npm run build`
3. Fix errors
4. Commit and push

### Analytics Not Working
1. Verify GA4 Measurement ID
2. Check browser console for errors
3. Test in incognito mode (ad blockers)
4. Wait 24 hours for data population

---

## Success Metrics

### Technical Success
- ✅ Site loads in <2s
- ✅ Lighthouse score 90+
- ✅ No console errors
- ✅ Mobile responsive

### Content Success
- ✅ Value proposition clear to first-time visitors
- ✅ Stats feel credible
- ✅ Professional impression
- ✅ Memorable brand (pink!)

### Business Success
- ✅ Generates conversations
- ✅ Increases LinkedIn profile views
- ✅ Leads to client inquiries
- ✅ Positions you as expert

---

**Ready to launch?** Start with "Pre-Launch" checklist above.

**Questions?** Reference PROJECT_OVERVIEW.md for strategic context.
