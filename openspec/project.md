# Project Context

## Purpose
Personal portfolio site for Helen Shatynska (shatynska.com) — presents projects, roles/skills, and a contact form.

## Tech Stack
- **Framework**: Next.js 14 (App Router), React 18, TypeScript 5.4
- **Styling**: Tailwind CSS 3 (CSS variables for theming, `tailwindcss-animate`), shadcn/ui conventions (`components.json`, `class-variance-authority`, `tailwind-merge`, `clsx`)
- **i18n**: `next-intl` with two locales, `en` (default) and `ua`, routed via `[locale]` segment and `src/middleware.ts`; messages in `messages/en.json` / `messages/ua.json`
- **Database**: PostgreSQL via `drizzle-orm` + `pg`; schema in `drizzle/schema.ts` (projects, types, roles, projects_to_roles join table with per-locale text columns `*En`/`*Ua`); migrations via `drizzle-kit`
- **UI primitives**: Radix UI (`@radix-ui/react-popover`), `lucide-react` icons, `keen-slider` for the projects carousel
- **Other libs**: `react-error-boundary`, `react-intersection-observer`, `sharp` (image optimization), `dotenv`
- **Tooling**: ESLint (`next/core-web-vitals`), Prettier (`prettier-plugin-tailwindcss`, single quotes, trailing commas, 2-space tabs)
- **Deployment**: Standalone Next.js build in a Docker image, pushed to Docker Hub, redeployed to a self-hosted Portainer stack behind Traefik (see `.github/workflows/deploy.yml`, `.github/stack/production.yml`). Deploys automatically on push to `main`.

## Project Conventions

### Code Style
- Prettier-enforced formatting (2-space indent, single quotes, semicolons, trailing commas, Tailwind class sorting via `prettier-plugin-tailwindcss`)
- Path aliases: `@/*` → `src/*`, `@/drizzle/*` → `drizzle/*`, `@/messages/*` → `messages/*`
- Component files are PascalCase `.tsx`; hooks under `src/hooks`, contexts under `src/contexts`, small pure helpers under `src/lib`
- Icons live under `src/components/icons`; navigation-specific components under `src/components/navigation`; project-carousel components under `src/components/projects`

### Architecture Patterns
- Next.js App Router with locale-based routing: `src/app/[locale]/page.tsx` (home), `src/app/[locale]/(inner)/...` (contact, project detail, catch-all `[slug]`) sharing an inner layout/header
- Server-first: data (projects/types/roles) is read from Postgres via Drizzle on the server; client interactivity (carousel, hamburger menu) isolated into dedicated client components
- Locale messages are plain JSON dictionaries consumed via `next-intl`; UI strings should not be hardcoded in components
- Styling driven by Tailwind + CSS custom properties (HSL color tokens defined in `globals.css`, referenced from `tailwind.config.ts`) rather than hardcoded colors, so theming stays centralized

### Testing Strategy
- No automated test suite currently exists in this repo. `npm run lint` (`next lint`) is the only automated check. Manual verification is done by running `npm run dev` and checking the browser.

### Git Workflow
- Single `main` branch, deploys automatically on push (no staging environment)
- This repo also uses the OpenSpec workflow (`openspec/`, `.claude/commands/opsx/*`) for planning non-trivial changes: `/opsx:propose` → `/opsx:apply` → `/opsx:archive`

## Domain Context
- Content (projects, roles, types) is data-driven from Postgres, not hardcoded — each row carries English and Ukrainian text side by side (`titleEn`/`titleUa`, `descriptionEn`/`descriptionUa`)
- Site is bilingual (English/Ukrainian) for a Ukrainian developer's portfolio aimed at both local and international audiences

## Important Constraints
- Deployment target is a single self-hosted Docker/Portainer stack — no preview environments, so changes to `next.config.js` (`output: 'standalone'`), the Dockerfile, or the GitHub Actions workflow must keep the production build/deploy path working
- `DATABASE_URL` is injected as a secret at build time in CI (`.github/workflows/deploy.yml`); local development needs a `.env` with a working Postgres connection string

## External Dependencies
- Self-hosted Postgres database (connection via `DATABASE_URL`)
- Docker Hub (image registry: `shatynska/shatynskacom`)
- Portainer instance at `admin.psypra.com` (stack deploy target) behind Traefik with Let's Encrypt TLS, serving `shatynska.com`
