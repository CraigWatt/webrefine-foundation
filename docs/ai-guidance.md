# AI Guidance

This document explains how an AI agent should work in this repository.

## Goal

Use this repository as a foundation for creating consistent starter projects and reusable UI patterns.

For 3D work, this repo should also provide a consistent contract for Three.js and React Three Fiber scene generation.

## Read First

- `README.md`
- `webrefine.json`

## What To Preserve

- Folder names and their responsibilities
- Simple, reusable patterns
- Composition-first APIs
- Clear separation between tokens, components, blocks, templates, examples, and 3D scene contracts
- Reference implementations under `examples/` when a framework-specific example helps clarify the starter shape

## What Not To Do

- Do not introduce a new framework without documenting it
- Do not add hidden conventions that are not written down
- Do not assume the foundation is a full design system yet
- Do not copy implementation details into unrelated templates

## Expected Behavior For Agents

- Prefer small, explicit starter files over large abstractions
- Keep examples aligned with the documented structure
- If a template is missing, document the intended shape before inventing one
- Use the repository manifest as the source of truth for paths and supported starters
- Use `docs/r3f-foundation.md` as the source of truth for canvas and animation starters

## Suggested Build Order

1. Define tokens
2. Add core components
3. Add common blocks
4. Add framework templates
5. Add a sample project that demonstrates the stack
