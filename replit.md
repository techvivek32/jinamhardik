# Jinambe Technologies Website

Premium futuristic IT company website for Jinambe Technologies (Founder/CEO: Hardik Kothari). Multi-page SPA with full backend API and PostgreSQL database.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, path `/api`)
- `pnpm --filter @workspace/jinambe run dev` — run the frontend (port 20637, path `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string, `SESSION_SECRET` — session secret

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Framer Motion + Tailwind CSS + shadcn/ui (wouter routing)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec → `lib/api-client-react`, `lib/api-zod`)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/jinambe/src/pages/` — all 12 page components
- `artifacts/jinambe/src/components/` — Navbar, Footer
- `artifacts/api-server/src/routes/` — `/contact` POST, `/newsletter` POST
- `lib/db/src/schema.ts` — `contacts` + `newsletter_subscribers` tables
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth)
- `artifacts/jinambe/public/` — static assets (logo, CEO photo)

## Architecture decisions

- Contact form uses `useSubmitContact` hook (generated from OpenAPI spec via Orval)
- Newsletter form uses `useSubscribeNewsletter` hook similarly
- All pages use dark theme (`bg-[#020817]`) with Framer Motion scroll animations
- Navbar is `fixed` (not sticky) with scroll-triggered glassmorphism effect
- Portfolio page has client-side category filtering with AnimatePresence
- Blog has live search + category filter, blog posts have full content
- Careers page has expandable job cards with mailto apply link

## Product

**Jinambe Technologies** — premium IT solutions company based in Ahmedabad, India. Website covers:

- **Home** — Hero + stats + services + why us + portfolio highlights + process + testimonials + newsletter + CTA
- **About** — CEO story (Hardik Kothari) with photo, timeline, mission/vision, values
- **Services** — 10 service cards with detailed pages (website dev, mobile app, custom software, SaaS, UI/UX, CRM/ERP, ecommerce, API, cloud, maintenance)
- **Portfolio** — 12 case study projects with category filters and detailed case study pages
- **Technologies** — animated skill bars across 5 categories (frontend, backend, mobile, DB, cloud)
- **Industries** — 10 industry cards with challenges/solutions/results breakdown
- **Careers** — 4 job openings with expandable descriptions and mailto apply
- **Blog** — 8 articles with search + category filter, 3 full blog post pages
- **Contact** — Full form wired to PostgreSQL via API, Google Maps, WhatsApp CTA

## User preferences

- Blue-and-white premium futuristic branding: Deep Royal Blue `#0A66FF`, Electric Blue `#2563EB`, dark bg `#020817`, card bg `#0a0f1c`
- Company contact: +91 7777994472, jainhk12@gmail.com, D403 PNTC Tower, Satellite, Ahmedabad 380015

## Gotchas

- Do NOT use `react-icons/si` icons like `SiAmazon` (doesn't exist). Use emoji or lucide icons for cloud providers.
- Technologies page uses emoji-based icons to avoid react-icons naming issues.
- Navbar is `position: fixed` — all page content needs `pt-24` to clear it.
- The shared proxy routes `/api` to port 8080. Never call port directly.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
