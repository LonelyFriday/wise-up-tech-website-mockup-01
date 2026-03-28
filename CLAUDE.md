# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `frontend/` directory:

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint (flat config, JS/JSX only)
```

No test framework is configured yet (vitest + @testing-library/react are installed but no tests written).

## Architecture

**Marketing website** for Wise Up Tech (Thai IT consulting company). No backend. React SPA with client-side routing.

### Stack
- React 19 + Vite 7 (JSX, ES modules)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (uses `@theme` block, not `tailwind.config.js`)
- Framer Motion v12 for animations
- React Router v7 for client-side routing
- lucide-react for icons

### Routes
- `/` — HomePage (11 sections)
- `/solutions` — SolutionsPage (lazy loaded)
- `/contact` — ContactPage with form (lazy loaded)

### Directory Structure

```
src/
  App.jsx                    # Router config only (~40 lines)
  main.jsx                   # Entry point
  index.css                  # Design system (@theme block + base styles)
  styles/animations.css      # CSS keyframes + prefers-reduced-motion
  components/
    layout/                  # Navbar, Footer, Layout (with AnimatePresence page transitions)
    ui/                      # Button, Card, Badge, SectionHeading, RevealOnScroll, AnimatedCounter
    sections/                # Hero, TechStackBar, Stats, TrustedBy, Services, WhyUs,
                             # SolutionsShowcase, ProcessSteps, Testimonials, FAQ, ContactCTA
  pages/                     # HomePage, SolutionsPage, ContactPage
  hooks/                     # useScrollPosition, useScrollReveal, useHashScroll,
                             # useDocumentTitle, useAnimatedCounter, useReducedMotion
  data/                      # navigation, services, solutions, stats, testimonials, faq,
                             # clients, icons (icon key→component map), animations (FM variants)
```

### Design System

Defined via Tailwind CSS v4 `@theme` in `src/index.css`. Use semantic utility classes:
- **Colors**: `text-navy`, `bg-light-blue`, `text-golden`, `bg-warm-yellow`, `text-text-dark`, `text-text-muted`, `border-border-light`
- **Do NOT** use hardcoded hex values like `text-[#1B4F8A]` — use the theme utilities instead
- **Fonts**: Inter (body) + Prompt (headings/Thai), loaded from Google Fonts in `index.html`

### Animation System

All animations use Framer Motion. Shared variants are in `src/data/animations.js`:
- `staggerContainer()`, `staggerItem` — for grid/list stagger
- `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `popIn` — entrance variants
- `pulseSlow`, `floatSlow`, `floatFast` — decorative loop animations
- `defaultViewport` — standard `{ once: true, margin: '-40px' }` for `whileInView`

Use `RevealOnScroll` component for simple scroll-triggered reveals. Use `motion.div` with shared variants for complex cases.

### Data-Driven Content

All content data lives in `src/data/`. Icons use string keys mapped via `getIcon(key, props)` from `src/data/icons.jsx`. To add a new icon: add the lucide-react import and map entry in `icons.jsx`.

### Content Language

All user-facing content is in **Thai**. UI labels (nav items, section headings) use English. `<html lang="th">`.

## SEO

- JSON-LD Organization structured data in `index.html`
- Open Graph + Twitter Card meta tags
- Per-page `<title>` via `useDocumentTitle` hook
- `robots.txt` + `sitemap.xml` in `public/`
- Favicon uses `/logo.png`

## Git

The git repository root is `frontend/` (not the parent `wiseuptech-website/` directory).
