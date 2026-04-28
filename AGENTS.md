# AGENTS.md — Texas Twisters Gymnastics

Next.js 16 (App Router) site for texastwistersgym.com, deployed on Vercel. Node ≥ 22.14, NPM ≥ 11.1.

## Architecture Overview

- **`src/app/`** — Next.js App Router pages and API routes. `layout.tsx` is the single root layout; it fetches all programs server-side and passes them to `<Header>` and `<Footer>`.
- **`src/components/`** — Flat directory of reusable React components (no sub-folders). Components are named exports (e.g., `export { Banner }`).
- **`src/data/`** — All content is stored as Markdown files with YAML frontmatter. Sub-directories: `events/`, `faqs/`, `newsletters/`, `policies/`, `programs/`, `staff/`, `testimonials/`.
- **`src/lib/getItems.ts`** — Single data-access layer. Use `getAllItems<T>(dir)` to load all `.md` files in a `src/data/` sub-directory, or `getItemData<T>(slug, type)` for a single file. Events sort by `expiresAfter`; other collections sort by `order`. Results are in-memory cached in production.
- **`src/types/index.ts`** — All shared TypeScript interfaces for frontmatter shapes (e.g., `ProgramData`, `EventData`, `StaffData`).
- **`src/utils/tracking.ts`** — `EVENT_IDS` and `EVENT_NAMES` constants; always use these for analytics event strings instead of inline literals.
- **`src/app/api/contact/route.ts`** — Only API route. Validates with Zod, sends via SendGrid (`src/lib/sendgrid.ts`).

## Content Data Pattern

All site content lives in `src/data/**/*.md` as YAML frontmatter (no Markdown body used). To add or modify content, edit the `.md` files — no code changes needed. To add a new content type:
1. Create a sub-directory under `src/data/`.
2. Add a TypeScript interface in `src/types/index.ts`.
3. Fetch with `getAllItems<MyType>('my-dir')` in a server component.

Programs use either a `hero` key (active) or `comingSoonHero` key (placeholder), never both.

## Developer Workflows

```bash
npm install && cp .env.example .env.local && npm run dev   # local dev
npm run test:unit          # Vitest (jsdom) — fast, no server needed
npm run test:e2e           # Playwright — requires running dev server
npm run test:e2e:ci        # Starts dev server automatically, then runs e2e
npm run typecheck          # tsc --noEmit
npm run lint               # ESLint
npm run format             # Prettier (also sorts imports via @trivago plugin)
npm run build              # next build + next-sitemap (postbuild)
```

Unit tests live in `tests/unit/` (`.spec.tsx` / `.spec.ts`). E2E tests live in `tests/e2e/`. Test setup file: `tests/unit/setup.ts`.

## Key Conventions

- **Path alias**: `@/` maps to `src/`. Always use `@/` imports, never relative.
- **Styling**: Tailwind CSS v4 via PostCSS. Class ordering enforced by `prettier-plugin-tailwindcss`. Use `clsx` for conditional classes.
- **Icons**: Use `@tabler/icons-react` via the `<Icon name="..." />` wrapper component (`src/components/Icon.tsx`), not raw Tabler imports.
- **Analytics**: Wrap interactive elements with `event` prop referencing `EVENT_IDS` from `@/utils/tracking`. GTM + Vercel Analytics are both active.
- **Fonts**: Roboto Flex loaded via `next/font/google`, applied as CSS variable `--font-roboto` and Tailwind class `font-sans`.
- **Environment variables**: `NEXT_PUBLIC_DOMAIN_URL` (required for metadata), `GTM_ID`, and SendGrid keys. See `.env.example`.
- **Enrollment links**: External links go to `portal.iclasspro.com/texastwisters/…` — do not hard-code elsewhere.

## External Integrations

| Service | Purpose | Key file |
|---|---|---|
| iClassPro | Class enrollment / camp registration | Linked from `.md` frontmatter `action.href` |
| SendGrid | Contact form email | `src/lib/sendgrid.ts`, template ID in `api/contact/route.ts` |
| Google Tag Manager | Analytics | `GTM_ID` env var, injected in `layout.tsx` |
| Vercel Analytics + Speed Insights | Performance | auto-injected in `layout.tsx` |
| next-sitemap | `public/sitemap.xml` generation | `next-sitemap.config.js` (runs postbuild) |

