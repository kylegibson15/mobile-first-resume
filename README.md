# Kyle Gibson — Portfolio

A cutting-edge personal portfolio built with React 18, Three.js, Framer Motion, and Tailwind CSS. Features a 3D animated hero, interactive experience timeline, animated skill grid, and smooth scroll throughout.

**[www.kylegibson15.ninja](https://www.kylegibson15.ninja/)**

## Tech Stack

- **Framework:** React 18 + TypeScript 5
- **Build:** Vite 6
- **Styling:** Tailwind CSS 3.4 (dark/light theme)
- **3D Graphics:** Three.js via @react-three/fiber + @react-three/drei
- **Animations:** Framer Motion (scroll-triggered reveals, layout animations, page transitions)
- **Smooth Scroll:** Lenis
- **State:** Zustand (theme persistence)
- **Hosting:** Firebase

## Features

- Three.js star field with mouse-tracking parallax
- Typewriter text animation cycling through roles
- Glitch effect on hover (CSS clip-path + RGB shift)
- Glassmorphism navigation with scroll progress bar
- Interactive timeline with expandable details
- Category-filtered skill grid with layout animations
- Animated counters triggered on scroll
- Custom cursor with spring physics
- Dark/light theme toggle
- Konami code Easter egg
- Fully responsive (mobile-first)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build + deploy to Firebase |

## Project Structure

```
src/
├── components/
│   ├── About/          # Bio section with scroll reveal
│   ├── Contact/        # CTA footer with social links
│   ├── Hero/           # 3D scene, typewriter, custom cursor
│   ├── Metrics/        # Animated counter stats
│   ├── Nav/            # Glassmorphism navbar
│   ├── Projects/       # Project showcase cards
│   ├── Skills/         # Filterable skill grid
│   └── Timeline/       # Interactive experience timeline
├── data/
│   └── resume.ts       # All resume content (single source of truth)
├── hooks/
│   └── useKonamiCode.ts
├── store/
│   └── useAppStore.ts  # Zustand theme store
└── utils/
    └── cn.ts           # Tailwind class merge utility
```
