# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio website — no build step, no dependencies, no package manager. Open `index.html` directly in a browser to preview.

## Architecture

Single-page site with three files:

- **`index.html`** — All content and structure. Sections in order: Nav, Hero, About, Projects, Contact, Footer. Each section uses `id` attributes (`#hero`, `#about`, `#projects`, `#contact`) for anchor navigation.
- **`style.css`** — Dark-theme design system using CSS custom properties defined in `:root`. Key tokens: `--bg/--bg2/--bg3` (layered backgrounds), `--accent` (purple `#6c63ff`), `--accent2` (violet), `--muted` (secondary text), `--mono` (JetBrains Mono for labels/tags/logo). The `.fade-in` / `.fade-in.visible` classes are applied by JS.
- **`script.js`** — Three behaviors: smooth scroll for `a[href^="#"]` links, `IntersectionObserver`-based fade-in on scroll for cards/titles, and nav active-link highlighting on scroll.

## Design Conventions

- Fonts loaded from Google Fonts: `Inter` (body) and `JetBrains Mono` (accents, tags, logo).
- All interactive elements use `transition: all 0.2s` and `translateY(-2px)` hover lifts.
- Project cards support a `.featured` modifier that adds a gradient background and `.featured-badge` label.
- Responsive breakpoint at `768px` — hero flips to column-reverse, grids collapse to single column.
- To add a new project: copy a `.project-card` div in `index.html`; update icon, title, description, tags, and `href` links.
- To add a skill tag: add a `<span class="skill-tag">...</span>` inside `.skills` in the About section.
