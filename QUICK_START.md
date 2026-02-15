# 🚀 Flux AI Showroom - Quick Start

Dit professional pink showroom er klar.

## Hvad du har

```
flux-adoption-showroom/
├── app/                      # Next.js App Router
│   ├── globals.css          # Styles
│   ├── layout.js            # Root layout
│   └── page.js              # Main page
├── scripts/                  # Quick start scripts
│   ├── start.sh             # Mac/Linux
│   └── start.bat            # Windows
├── flux-showroom.jsx        # Main component (alle sektioner)
├── package.json             # Dependencies
├── next.config.js           # Next.js config
├── tailwind.config.js       # Colors (Professional Pink)
├── postcss.config.js        # PostCSS
├── .gitignore               # Git ignore
├── README.md                # Technical docs
├── DEPLOYMENT.md            # Deploy guide
├── DESIGN_VARIATIONS.md     # Color alternatives
├── PROJECT_OVERVIEW.md      # Complete overview
└── CHECKLIST.md             # Step-by-step deploy
```

## Start på 3 minutter

### Method 1: Quick Start Script

**Mac/Linux:**
```bash
cd flux-adoption-showroom
chmod +x scripts/start.sh
./scripts/start.sh
```

**Windows:**
```cmd
cd flux-adoption-showroom
scripts\start.bat
```

### Method 2: Manual

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:3000 ✨

## Deploy på 10 minutter

### Vercel (Recommended - Easiest)

1. Push til GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial: Flux AI Showroom"
   git remote add origin https://github.com/YOURUSERNAME/flux-adoption.git
   git push -u origin main
   ```

2. Gå til [vercel.com](https://vercel.com)
3. Sign up med GitHub
4. Click "New Project"
5. Import dit repository
6. Deploy (2 minutter)

Din site er nu live: `https://flux-adoption.vercel.app`

### GitHub Pages (Free)

```bash
npm run build
npx gh-pages -d out
```

Se DEPLOYMENT.md for custom domains.

## Key Files at a Glance

### flux-showroom.jsx
- **Hero**: "Deterministic AI for the Agentic Era"
- **Architecture**: Bento-grid med 3 søjler
- **Projects**: Research Translator (83%) + Price Engine
- **Terminal**: Copy install command
- **Metadata**: Syntax-highlighted JSON
- **Trust**: Zero-Hallucination Policy

### tailwind.config.js
```javascript
colors: {
  pink: {
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
  }
}
```

Change colors here. Se DESIGN_VARIATIONS.md for alternatives.

## Customization Quick Reference

### Update Content
Edit `flux-showroom.jsx`:
- Line 15-30: Hero text
- Line 170-280: Project cards
- Line 320-380: Metadata JSON

### Change Colors
Edit `tailwind.config.js`

### Connect Real Calculator API
Edit `flux-showroom.jsx` line 12-20:
```javascript
const runCalculator = async () => {
  const response = await fetch('https://your-api.com/calculate', {
    method: 'POST',
    body: JSON.stringify({ area: calculatorInput })
  })
  const data = await response.json()
  setCalculatorResult(data)
}
```

## Next Steps

1. ✅ Run locally: `npm run dev`
2. ✅ Verify all sections work
3. ✅ Deploy to Vercel
4. ✅ Share on LinkedIn
5. ✅ Add to GitHub profile
6. ✅ Include in email signature

## Troubleshooting

**"Module not found"**
- Run `npm install` first

**Tailwind not loading**
- Check `globals.css` imports in `layout.js`

**Calculator not working**
- Open browser console (F12)
- Check for JavaScript errors

## Files You'll Edit Most

1. **flux-showroom.jsx** - Main content
2. **tailwind.config.js** - Colors
3. **app/layout.js** - Meta tags (SEO)

## Documentation

- **README.md** - Technical documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **DESIGN_VARIATIONS.md** - Alternative color palettes
- **PROJECT_OVERVIEW.md** - Complete project explanation
- **CHECKLIST.md** - Step-by-step deployment checklist

## Support

Questions?
1. Check PROJECT_OVERVIEW.md for strategy
2. Check DEPLOYMENT.md for technical steps
3. Check DESIGN_VARIATIONS.md for styling

---

**Ready to launch your pink power brand?** Start with `npm install` 💗
