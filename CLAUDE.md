# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a React learning course repository from [Scrimba's "Learn React"](https://scrimba.com/learn-react-c0e) course. It is a collection of many independent, self-contained Vite+React projects — they are **not interconnected** and there is no root-level build.

> See `AGENTS.md` for detailed code-style conventions (naming, hooks, JSX/state patterns, accessibility, common component patterns). This file covers the big-picture structure and how to run things.

## Repository Structure

The top level mixes two different things:

- **Course sections** `01`–`06` are *containers*, not projects. Each holds **many numbered sub-lesson folders**, and **each sub-lesson folder is its own standalone Vite project** (own `package.json`, `vite.config.js`, `node_modules`).
- **Single top-level projects:** `07. Calculator/` and `react-welcome-home/` are individual projects with no sub-lesson layer, and are the two projects under active development.

```
01. Static pages/          # Section: JSX basics, components, styling     (22 lesson projects)
02. Data-Driven React/     # Section: props, data-driven rendering        (24 lesson projects)
03. React State/           # Section: useState, events, forms             (57 lesson projects)
04. Side Effects/          # Section: useEffect, data fetching, refs       (22 lesson projects)
05. Capstone Project #1 - Tenzies/          # Section: dice game, built up over 19 lessons
06. Capstone Project #2 - Assembly Endgame/ # Section: word game, built up over 26 lessons
07. Calculator/            # Single project — active custom calculator app
react-welcome-home/        # Single project — active data-driven homepage (src/ layout, vite.config.mts)
```

> **`react-welcome-home` is plain JS+React, not TypeScript.** It has no `typescript` dependency and no `tsconfig.json`; the only "TS" is the `.mts` (ES-module) extension on its Vite config. All source is `.jsx`.

Within a section, later-numbered folders are usually a more complete version of the same evolving app (e.g. `05. Capstone... / 19. Tenzies Outro/` is the finished Tenzies game).

## Running a Project

There is **no root `package.json`**; every project is run from inside its own folder, and each has its own `node_modules`. Folder names contain spaces and `#`, so **always quote the path**.

```bash
cd "07. Calculator"            # or e.g. cd "05. Capstone Project #1 - Tenzies/19. Tenzies Outro"
npm install                    # first time only — per project folder
npm run dev                    # start dev server (default http://localhost:5173); `npm start` is an alias
npm run build                  # production build → dist/
npm run preview                # serve the production build
```

There are **no tests and no linters** configured in any project — do not attempt to run them.

## Architecture Patterns

All projects share the same conventions:
- **Functional components only** (no class components).
- **Hooks:** `useState`, `useEffect`, `useRef` — no external state libraries (don't add Redux/Zustand/etc. unless asked).
- **Styling:** plain CSS with CSS custom properties; class variants use BEM-style `.btn--variant` naming; dark/light mode toggled via `document.body.classList.toggle()`.
- **Entry chain:** `index.html` → `index.jsx` (or `main.jsx`) → `App.jsx`. Lesson/Calculator projects keep these flat in the project root; `react-welcome-home` nests them under `src/`.
- **Reusable components** live in a `components/` folder inside each project.
- **Two component styles:** state-driven (the Calculator centralizes state and routes events through one handler) vs. data-driven presentational (`react-welcome-home` keeps all content in a JSON file and passes slices down as props to stateless section components). Match whichever style the project you're in already uses.

## Active Project: `07. Calculator/`

A custom calculator app (`name: react-calculator`). Structure:
- `index.jsx` — mounts `App` into `index.html`.
- `App.jsx` — root component.
- `components/Calculator.jsx` — main logic: holds state and routes all button presses through a central `handleButton()` handler.
- `components/Button.jsx` — reusable button.
- `components/Display.jsx` — display output.
- `index.css` — theming via CSS variables with dark/light mode.

## Active Project: `react-welcome-home/`

A data-driven marketing homepage (a BikesOnline clone, `name: react-welcome-home`) — plain JS+React, **not** TypeScript. `src/` layout. Architecture:
- `src/main.jsx` — mounts `App` into `index.html` (uses `<React.StrictMode>`).
- `src/data/bikesonline-home.json` — **single source of all page content** (site info, nav, hero, categories, testimonials, footer, etc.). Edit copy/structure here, not in components.
- `src/App.jsx` — imports the JSON and passes slices of it as props to each section component; composes the page (`AnnouncementBar`, `NavBar`, `Hero`, `BrandStrip`, `CategoryGrid`, `ShopSplit`, `ValueProps`, `CollectionBanners`, `Testimonials`, `Footer`).
- `src/components/*.jsx` — **stateless presentational** section components; they receive data via props and render markup only (no state/hooks).
- `src/styles.css` — single global stylesheet; BEM-style classes (`.btn--primary`, `.btn--ghost`, `.hero__title`).

When adding a section: add its content to the JSON, create a presentational component that takes that slice as props, and wire it into `App.jsx`.
