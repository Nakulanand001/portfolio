# Nakul Anand — Portfolio

A React + Vite single-page portfolio site, organized into reusable components,
sections, and a page-level composition layer.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is output to `dist/`.

## Project structure

```
portfolio/
├── index.html                 # Vite entry HTML
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React root, imports global.css
    ├── App.jsx                 # Router setup
    ├── pages/
    │   └── Home.jsx             # Composes all sections into the single-page layout
    ├── sections/                # One file per page section
    │   ├── Hero.jsx
    │   ├── Ticker.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Education.jsx
    │   └── Contact.jsx
    ├── components/               # Reusable, shared building blocks
    │   ├── Header.jsx
    │   ├── MobileNav.jsx
    │   ├── Preloader.jsx
    │   ├── ScrollProgress.jsx
    │   ├── NetworkGraphic.jsx
    │   ├── ProjectCard.jsx
    │   └── Footer.jsx
    ├── hooks/
    │   ├── useReveal.js          # Scroll-triggered reveal animations
    │   └── useNetworkNodes.js    # Generates the decorative SVG network graphics
    ├── data/
    │   └── portfolioData.js      # All resume content — experience, projects, skills, etc.
    └── styles/
        └── global.css            # Converted from the original injected <style> block
```

## Editing content

All resume/portfolio content (experience, projects, skills, education, contact
info) lives in `src/data/portfolioData.js`. Update that file to change the
site's content without touching any component code.

## Notes

- Routing uses `react-router-dom`; currently there's a single `/` route
  (`Home`) since this is a one-page scrolling site, but the structure makes it
  straightforward to add more routes/pages later (e.g. a dedicated project
  detail page).
- Icons are from [`lucide-react`](https://lucide.dev/).
- Fonts (Space Grotesk, Inter, JetBrains Mono) are loaded via Google Fonts in
  `src/styles/global.css`.
