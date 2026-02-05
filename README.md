# Flux Adoption Showroom

Professional showroom for Flux Adoption - demonstrating deterministic AI architecture and Logic-as-a-Service.

## Features

- **Professional Pink Theme**: Sophisticated magenta/electric rose with dark slate gray
- **Glassmorphism Effects**: Modern glass-like UI components
- **Interactive Elements**:
  - Live calculator demonstrating server-side logic
  - Terminal-style install command
  - Syntax-highlighted metadata viewer
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for deployment to Vercel, Netlify, or GitHub Pages

## Project Structure

```
flux-adoption-showroom/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.js            # Root layout
│   └── page.js              # Main page
├── flux-showroom.jsx        # Main showroom component
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your showroom.

### Building for Production

```bash
# Create optimized production build
npm run build

# The static files will be in the 'out' directory
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `out` directory to your gh-pages branch

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

## Customization

### Colors

Edit `tailwind.config.js` to adjust the pink theme:

```javascript
colors: {
  pink: {
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
  }
}
```

### Content

Edit `flux-showroom.jsx` to update:
- Project details
- Statistics (83% efficiency, ROI numbers)
- Calculator logic
- Metadata JSON

### Calculator Backend

Replace the simulated calculator in `flux-showroom.jsx` with your actual API endpoint:

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

## Architecture Highlights

- **Zero-Cost Hosting**: Optimized for static hosting (GitHub Pages, Vercel, Netlify)
- **Performance**: Static export with minimal JavaScript
- **SEO**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper contrast ratios

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (easily convertible to TypeScript)
- **Deployment**: Static export ready

## Contact

For questions about Flux Adoption or this showroom, reach out via the contact form on the site.

---

Built with professional pink pride 💗
