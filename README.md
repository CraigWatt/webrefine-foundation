# WebRefine Foundation

WebRefine Foundation is a starter foundation for building modern web apps and websites with a consistent design system, reusable patterns, and AI-friendly project structure.

This repository is intentionally lightweight for now. It defines the contract for future starters and foundations before the implementation grows, including a Three.js / React Three Fiber path for animated canvas experiences.

## Current State

- Documentation-first foundation
- No runtime package yet
- No generated starters yet
- Intended to become the base for framework-specific starters such as Next.js and Astro

## What This Repo Provides

- Design tokens and theme guidance
- Reusable component patterns
- Higher-level UI blocks and sections
- Starter conventions for project structure and naming
- AI guidance for scaffold generation and extension
- Three.js canvas foundations for React Three Fiber

## How To Use It

1. Read `webrefine.json` to understand the repository contract.
2. Read `docs/ai-guidance.md` before generating or extending anything.
3. Read `docs/r3f-foundation.md` if you are generating a Three.js or animated canvas starter.
4. Use the folders in `tokens/`, `components/`, `blocks/`, and `templates/` as the source of truth for future starters.

## Repository Structure

```text
tokens/        design tokens and theme definitions
components/    reusable UI components and reference implementations
blocks/        higher-level UI sections and patterns
templates/     framework starter templates
docs/          usage notes and AI guidance
```

## AI Starter Contract

If an AI agent is working in this repo, it should:

- preserve the documented naming and folder conventions
- prefer composition and simple defaults
- avoid inventing new patterns when an existing one is documented
- treat `docs/ai-guidance.md` as the behavioral guide

## Planned Expansion

The next useful additions are:

- a minimal token set in `tokens/`
- one or two reference components in `components/`
- a single starter template in `templates/nextjs/` or `templates/astro/`
- a small example app showing how the pieces fit together
- a Three.js / React Three Fiber scene contract and starter pattern

## Philosophy

- Own your components rather than hard-locking to a UI library
- Prefer composition over abstraction for its own sake
- Start small, then evolve from real usage
- Optimize for clarity and repeatability
