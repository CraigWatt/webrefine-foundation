# Three.js / React Three Fiber Foundation

This document defines the starter contract for animated canvas experiences built with Three.js and React Three Fiber.

## Goal

Create a reusable pattern for scenes, motion, and interactions that can be shared across Next.js and Astro starters.

## Core Stack

- `three`
- `@react-three/fiber`
- optional helpers such as `@react-three/drei` when a starter needs them

## Scene Contract

- The canvas should be the root of the 3D experience.
- Scene objects should be isolated from route-level layout code.
- Animation logic should live close to the scene object it affects.
- Shared scene utilities should stay framework-agnostic.

## Next.js Notes

- Use a Client Component for any canvas entry point because the scene needs browser APIs and client-side interaction.
- Keep the canvas isolated from server-only route logic.
- Prefer a thin route component that imports a dedicated canvas component.
- If you add three.js ecosystem packages that are not transpiled for your chosen Next.js version, add `three` to `transpilePackages` in `next.config.js` or `next.config.mjs`.

## Astro Notes

- Astro components are static by default, so a React canvas component should be hydrated with a client directive.
- Use the lightest hydration mode that still matches the canvas use case.
- Keep the canvas component itself framework-agnostic so it can be reused in other starters.
- Prefer `client:load` for immediately visible scenes and a lower-priority client directive if the scene is not the first thing on the page.

## Suggested Folder Shape

```text
components/three/
  Canvas.tsx
  scenes/
  hooks/
  materials/
  utils/
```

## Generation Rules

- Start with one small scene, not a full gallery of examples.
- Keep animation declarative where possible.
- Separate scene composition from reusable materials and helpers.
- Document any framework-specific wrapper alongside the reusable canvas code.

## Starter Output

An AI-generated starter should usually provide:

- a canvas root component
- one reusable scene component
- one animated mesh or object
- a minimal integration example for Next.js or Astro
- a short README explaining where to add more scenes

## Suggested Example Layout

```text
components/three/
  Canvas.tsx
  hooks/
    useSpin.ts
  scenes/
    IntroScene.tsx
examples/
  nextjs/
    app/
      page.tsx
      components/ThreeScene.tsx
  astro/
    src/
      pages/index.astro
      components/ThreeScene.tsx
```
