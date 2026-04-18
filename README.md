# WebRefine Foundation

**WebRefine Foundation** is a reusable UI and application foundation for building modern web apps and websites.

It provides a consistent starting point across projects by standardising design tokens, component patterns, layout structures, and developer workflows.

---

## 🎯 Purpose

Building new web projects often involves repeating the same setup:

- styling systems (Tailwind, themes, tokens)
- layout shells (navigation, containers, sections)
- base components (buttons, cards, forms)
- structure and conventions

WebRefine Foundation exists to remove that repetition and provide a **clean, consistent baseline** for new projects.

---

## 🧱 What this will include

This repository is intended to evolve into a foundation layer containing:

### Design System
- colour tokens (light/dark)
- typography
- spacing scale
- radius, shadows, motion

### Components (reference implementations)
- buttons, inputs, cards
- navigation patterns
- layout primitives (containers, sections)

### Blocks
- reusable UI sections (hero, grids, auth, dashboards)
- marketing and application patterns

### Starter Conventions
- project structure
- naming conventions
- layout patterns
- theming approach

---

## 🧩 How it is used

WebRefine Foundation is **not a traditional component library**.

Instead, it supports a **starter-first workflow**:

1. Create a new project using a WebRefine starter (e.g. Next.js or Astro)
2. Inherit the design system, structure, and base components
3. Build application-specific features on top

---

## 🗂️ Future structure
tokens/        # design tokens and theme definitions
components/    # reusable UI components (reference)
blocks/        # higher-level UI patterns and sections
templates/     # framework starters (Next.js, Astro, etc)
docs/          # usage guidelines and examples

---

## 🚧 Status

This is an evolving foundation.

The goal is not to be perfect or complete, but to:
- reduce setup time for new projects
- maintain consistency across repositories
- improve over time through real usage

---

## 💡 Philosophy

- Own your components — avoid heavy lock-in to UI libraries  
- Prefer composition over large frameworks  
- Start simple, evolve naturally  
- Optimise for real usage, not theoretical completeness  

---

## 🔗 Related (planned)

- webrefine-next-starter
- webrefine-astro-starter
- webrefine-ui (optional)
- webrefine-docs

---

## 👤 Author

Built and maintained as part of the WebRefine ecosystem.
