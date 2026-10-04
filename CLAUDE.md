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

Single-page portfolio (`/`) plus a Supabase admin area (`/test`, `src/pages/`). Routing lives in `main.tsx`.

```
src/
  main.tsx              — Vite entry, BrowserRouter: / → <App />, /test → AdminPage
  App.tsx               — background layers + .col column (Nav, Hero, Works, Footer) + corner Cat
  index.css             — light/dark tokens, dotted background, .col (64% wide, max 1080px; 80% ≤1280px; full ≤720px), .stagger, keyframes
  hooks/
    useActiveTab.ts     — shared Works tab state (used by App → Nav + Works); syncs URL hash and
                          turns any in-page #projects/#about/#contact link into switch-tab + scroll
  components/
    Nav/                — sticky frosted header: ~/grace, section links, GitHub, theme toggle
    Hero/               — centered stack: breathing avatar, title, typewriter subtitle, links, frameless Now
    Works/              — controlled tabbed section (Projects / About / Contact), `id="works"`
    Projects/ About/ Contact/ — panel contents rendered inside Works
    Cat/                — fixed bottom-right chibi SVG kitten (blue & white British Shorthair); pupils follow pointer, click → bubble; Halloween pumpkin + bat gated by isHalloweenSeason()
    Footer/
```

No web fonts: system sans stack + system mono stack. Mono is used for labels, nav, tags and the subtitle.

## Design System

Clean, light-first with a dark theme. Tokens in `:root` of `src/index.css`; the dark palette applies via `prefers-color-scheme` or `html[data-theme="dark"]` (set by the Nav toggle, persisted in `localStorage`, applied pre-paint by the inline script in `index.html`).

- `--bg`, `--card`, `--ink`, `--line` — surfaces, headings, hairlines
- `--t2` — the one body-text color everywhere (paragraphs, lists, descriptions); `--t3` — meta only (dates, labels, counters)
- `--blue` — the single accent (active tab line, links, caret); `--hl` — soft accent tint for hovers
- `--ease` `cubic-bezier(.19,1,.22,1)` for nearly all transitions; `--pop` for springy motion
- The cat's ink/fur colors are hard-coded so it reads like a printed sticker in both themes
- Legacy aliases (`--border`, `--accent`, `--font`…) remain only for the `/test` pages

## Animations

Pure CSS, no scroll observers. Hero children fade up in sequence; panel children get `className="stagger"` and rise in sequence each time a tab mounts (`.stagger:nth-child(n)` delays in `index.css`). A global `prefers-reduced-motion` rule disables them.

## Adding Content

- **New project:** add an entry to `PROJECTS` in `Projects.tsx`; give it a visual in `Stage`.
- **About content:** edit `EXPERIENCE` / `EDUCATION` / `STACK` in `About.tsx` (article-style typography in `About.css`: `|` h2 bars, blockquote intros, `code` highlights).
- **New contact link:** add to `LINKS` in `Contact.tsx`.
- **New tab:** add the id to `TAB_IDS` in `hooks/useActiveTab.ts`, then the panel to `TABS` in `Works.tsx` (the header nav reads `TAB_IDS`).
