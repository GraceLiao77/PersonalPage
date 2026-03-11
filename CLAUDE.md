# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

React + TypeScript, bundled with Vite.

## Commands

```bash
npm run dev      # start dev server with HMR
npm run build    # type-check + production build → dist/
npm run preview  # locally preview the production build
```

## Architecture

Single-page portfolio. All source lives in `src/`.

```
src/
  main.tsx              — Vite entry, mounts <App /> into #root
  App.tsx               — composes all sections in order
  index.css             — global styles (dark theme, CSS custom properties)
  hooks/
    useFadeIn.ts        — IntersectionObserver hook; adds fade-in/visible classes on scroll
  components/
    Nav.tsx             — fixed nav with scroll-based active link highlighting
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
```

Google Fonts (`Inter`, `JetBrains Mono`) are loaded via `<link>` tags in the root `index.html`.

## Design System

CSS custom properties defined in `:root` in `src/index.css`:

- `--bg / --bg2 / --bg3` — layered dark backgrounds
- `--accent` (`#6c63ff`) / `--accent2` (violet) — primary brand colors
- `--muted` — secondary text
- `--mono` — JetBrains Mono, used for labels, tags, and the nav logo

Interactive elements use `transition: all 0.2s` and `translateY(-2px)` hover lifts consistently.

## Scroll Animations

`useFadeIn.ts` attaches an `IntersectionObserver` (threshold `0.12`) to elements matching `.project-card, .info-card, .contact-card, .section-title, .about-text p`. Call it inside any component that contains those elements.

## Adding Content

- **New project card:** add a new `<div className="project-card">` block in `Projects.tsx`. Use `.featured` modifier + `<div className="featured-badge">Featured</div>` to highlight one.
- **New skill tag:** add `<span className="skill-tag">...</span>` inside `.skills` in `About.tsx`.
- **New contact link:** add a `<a className="contact-card">` in `Contact.tsx`.
