# Milakshi's Portfolio

A modern, mobile-first developer portfolio built with React, TypeScript, Tailwind CSS, and GSAP.

## Features

- **Responsive & Mobile-First:** Designed for all screen sizes.
- **Animations:** GSAP ScrollTrigger for reveals and kinetic typography.
- **Dark Mode:** Persisted user preference.
- **Printable CV:** Dedicated route (`#cv`) for a print-friendly summary.
- **2025 Trends:** Glassmorphism, subtle noise, and bento-grid layouts.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

1.  Create a new Vite project:
    ```bash
    npm create vite@latest portfolio -- --template react-ts
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install tailwindcss postcss autoprefixer gsap lucide-react
    ```

3.  Copy the provided source files into your project structure.

4.  Run the development server:
    ```bash
    npm run dev
    ```

## Building for Production

To create an optimized build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## Deployment Checklist

- [ ] **Vercel:** Connect GitHub repo, auto-detect framework as Vite. No config needed.
- [ ] **GitHub Pages:** Set `base: '/repo-name/'` in `vite.config.ts` if not using a custom domain.
- [ ] **Data:** Update `data.ts` with your real projects and links.
- [ ] **Images:** Replace placeholder URLs in `data.ts` with real screenshots in `public/assets`.

## Printable CV

To generate a PDF:
1. Navigate to `http://localhost:5173/#cv`
2. Press `Ctrl + P` (or Cmd + P)
3. Save as PDF. The CSS is optimized to hide web-only elements.

## License

MIT
