- **Do NOT add Babel config files (babel.config.js, babel.config.ts) if using Turbopack. Babel is not compatible with Turbopack and will break Next.js dev server.**
# Copilot Instructions for pizza-nextjs

## Project Overview
- This is a Next.js app using the `/src/app` directory structure and TypeScript.
- Bootstrapped with `create-next-app` and designed for Vercel deployment.

- Main entry point: `src/app/page.tsx` (edit this file for homepage changes).
- Global styles: `src/app/globals.css`.
- Layout: `src/app/layout.tsx` wraps all pages.
- Static assets: `public/` (SVGs, icons).
- **All reusable components should be placed in `src/components/`.**
- **Layout-related components (e.g., Navbar, Footer) should be placed in `src/components/layout/`.**

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Build for production:** `npm run build`.
- **No test setup detected** (add tests in future if needed).
- **Hot reload** is enabled by default.

## Patterns & Conventions
- Use React Server Components and Next.js routing in `src/app`.
- Page components are defined in `page.tsx` files within route folders.
- Layouts are defined in `layout.tsx` files.
- Use TypeScript for all new code.

- Font optimization via `next/font` (see README for details).
- No custom API routes or backend logic detected.
- **Tailwind v4 custom colors and theme variables should be added in `src/app/globals.css`. Do not use `tailwind.config.ts` for color palette changes.**

## External Dependencies
- Next.js, React, TypeScript, PostCSS (see `package.json`).
- No custom server or database integration present.

## Integration Points
- For deployment, use Vercel (see README for instructions).
- Static files (SVGs, icons) are served from `public/`.

## Examples
- To add a new page: create a folder in `src/app/` (e.g., `about/`) and add `page.tsx`.
- To update global styles: edit `src/app/globals.css`.
- To change layout: edit `src/app/layout.tsx`.

## References
- See `README.md` for basic setup and deployment.
- See `next.config.ts` and `tsconfig.json` for build and TypeScript settings.

---
If any conventions or workflows are unclear, please request clarification or provide feedback to improve these instructions.
