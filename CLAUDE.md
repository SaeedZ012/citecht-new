@AGENTS.md

# Project Conventions

The rules below mirror [AGENTS.md](AGENTS.md) and apply to this static marketing
website built with Next.js (App Router) + Tailwind CSS v4.

## Color System

- Use only semantic color tokens.
- Never use hardcoded Tailwind color utilities (`bg-blue-500`, `text-red-600`, etc.).
- Never use gradients (`bg-gradient-*`, `from-*`, `via-*`, `to-*`).
- Never use glassmorphism.
- Never use excessive shadows.
- All colors must come from the centralized design tokens.
- Preferred tokens:
  - primary
  - secondary
  - accent
  - success
  - warning
  - danger
  - info
  - background
  - surface
  - border
  - muted
  - foreground

## Static Website Rules

- This project is a static marketing website.
- Never introduce backend architecture.
- Never create API clients.
- Never create authentication.
- Never create services for APIs or CMS.
- Never add TanStack Query.
- Never add Axios.
- Never prepare future backend abstractions.
- Keep the architecture lightweight.

## Components

- Every page has its own `features` folder.
- `page.tsx` should only compose sections.
- No component may exceed 300 lines.
- Prefer reusable components.
- Extract repeated UI into `components/ui`.
- Extract repeated page sections into `components/shared`.

## Code Quality

- Remove dead code immediately.
- Remove unused files.
- Remove unused exports.
- Remove unused dependencies.
- Remove `console.log` statements.
- Remove commented code before finishing a task.
