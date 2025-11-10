
# Karina Portfolio

A Swiss-inspired single-page portfolio built with Vite, React, and TypeScript for Karinate Topman (Virtual Assistant). The layout emphasizes clean typography, precision spacing, and scroll-based interactions suitable for executive assistants, consultants, and other service professionals.

## Features

- **Hero landing panel** with call-to-action, experience badge, and geometric background accents.
- **Snap-scrolling sections** for Services, Experience, and Contact information, each with responsive grid layouts.
- **Scroll progress navigation rail** that highlights the active section and enables one-click jumps.
- **Accessible content structure** using semantic headings, ARIA labels, focus states, and keyboard-friendly cards.
- **Responsive Swiss design system** implemented with Tailwind utility classes and custom CSS tokens in `src/index.css` and `src/styles/globals.css`.

## Tech Stack

- React 18 + TypeScript
- Vite 6 (bundler & dev server)
- Tailwind CSS utilities combined with handcrafted CSS modules
- clsx & tailwind-merge for class composition helpers

## Project Structure

```
KarinaPortfolio/
├── index.html
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── App.tsx                # Entry page wiring sections & scroll logic
│   ├── main.tsx               # React root mounting
│   ├── index.css              # Base layer & component tokens
│   ├── styles/globals.css     # Global typography, utilities, animation helpers
│   └── components/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Prerequisites

- Node.js 18.0 or newer (aligns with Vite 6 support)
- npm 9+ (ships with recent Node.js releases)

## Getting Started

```bash
# Clone your fork
git clone https://github.com/<your-username>/KarinaPortfolio.git
cd KarinaPortfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at the URL printed in your terminal (default `http://localhost:5173`). Vite supports hot module reload, so edits to components or styles refresh instantly.

### Build for Production

```bash
npm run build
```

The optimized static site is emitted to `dist/`. Serve locally before deploying to verify:

```bash
npx vite preview
```

### Deployment

Upload the `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). CI/CD pipelines can run:

```bash
npm ci
npm run build
```

## Customization Guide

- **Branding & content**: Update text, CTAs, and metrics inside the section components in `src/components/`.
  - `HeroSection.tsx`: hero headline, subtitle, phone CTA, experience chip.
  - `ServicesSection.tsx`: service cards and descriptions.
  - `ExperienceSection.tsx`: timeline entries and key metrics.
  - `ContactSection.tsx`: email, availability, footer copy.
- **Navigation dots**: Adjust section IDs or labels in `src/App.tsx` (`sectionIds`, `sectionLabels`) when adding or removing sections.
- **Styling**: Tune global colors, typography, and animation tokens in `src/index.css` and `src/styles/globals.css`. Tailwind utility classes can be extended via `tailwind.config.js`.
- **Assets**: Replace icons or favicons under `public/`. Update metadata in `index.html` and `public/site.webmanifest` for SEO or PWA tweaks.

## Suggested Enhancements

- Hook up a contact form that posts to an API or third-party service.
- Integrate analytics or session tracking in `main.tsx`.
- Add localization support by extracting copy into a JSON resource.

## License

This project ships without a license by default. Add an OSS license of your choice (e.g., MIT) if you intend others to reuse it.
  