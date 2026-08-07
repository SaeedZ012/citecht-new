<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Conventions

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
