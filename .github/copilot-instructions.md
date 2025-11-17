# Copilot / AI Agent Instructions for piano-notes

This repository is an Astro (minimal) site scaffold. The guidance below is focused, actionable, and specific to this codebase so an AI coding agent can be immediately productive.

- **Big picture:** This is a tiny static project to render various piano notes in the browser using Astro. It has no backend code, no tests, and no CI. The project uses file-based routing with pages in `src/pages/` and static assets in `public/`.

- **Key files:**

  - `package.json` — scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run astro` (use `npm i` first).
  - `astro.config.mjs` — Astro configuration (read this when adding integrations or adapters).
  - `src/pages/` — file-based routes; add `.astro` or `.md` files here to add pages (e.g., `src/pages/about.astro` -> route `/about`).
  - `public/` — put images and other static assets directly here (served at `/`).
  - `tsconfig.json` — TypeScript settings (project uses ESM: `type: "module"` in `package.json`).

- **How to run locally (commands):**

  - Install deps: `npm i`
  - Dev server: `npm run dev` (default host `localhost:4321` for Astro)
  - Build: `npm run build`
  - Preview built site: `npm run preview`

- **Project-specific patterns & conventions**

  - File-based routing: Any file you add under `src/pages/` becomes a route. Examples: `src/pages/index.astro` -> `/`; `src/pages/blog/post.astro` -> `/blog/post`.
  - Components: There is no `src/components/` directory yet, but the project follows the common Astro convention — add `src/components/` for reusable UI.
  - No server or API code: This minimal repo has no backend code, server adapters, or tests. If you add server-side logic, update `astro.config.mjs` and `package.json` accordingly.
  - Module type: The project uses ESM (`"type": "module"`) — use `import`/`export`, not CommonJS.

- **Editing patterns — concrete examples**

  - Add a page: create `src/pages/faq.astro` with frontmatter and markup; run `npm run dev` to verify route `/faq`.
  - Add an image: place `logo.png` in `public/` and reference it as `/logo.png` in pages.
  - Run a CLI command: use `npm run astro -- <args>` to call the Astro CLI directly.

- **When to inspect these files for context**

  - `astro.config.mjs` — before adding new integrations, adapters, or SSR features.
  - `package.json` — to see available scripts and the `type: module` setting.
  - `tsconfig.json` — when adding TypeScript code or changing path aliases.

- **What is NOT present (so don't assume):**

  - No test framework configured. Don't add test instructions unless you also add config files.
  - No CI or GitHub Actions workflows in the repo; if you create them, document their purpose.

- **Safety and scope for AI edits**
  - Small, local changes are safe: add pages, static assets, components, and update `package.json` scripts.
  - For anything that changes build infrastructure (new adapters, CI, or publishing steps), add a short PR description and request human review.

If anything here is unclear or you'd like more detail (for example, a suggested component structure or a tiny test setup), tell me which area to expand and I'll update this file.

**Tech stack**

- Astro (minimal template)
- TypeScript
