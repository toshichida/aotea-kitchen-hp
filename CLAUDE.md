# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

Required environment variables (create `.env.local`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
```

## Architecture

This is a **Next.js 16 + Sanity CMS** café website (Aotea Kitchen, Auckland NZ) with **bilingual support (EN/JA)**.

### Routing & Pages

All routes use the Next.js App Router. Each page splits into a server component (`page.tsx`) and a client component (`*Content.tsx`) to allow metadata exports alongside client-side interactivity:

- `/` — Home: assembles all section components
- `/menu` — Menu page (fetches from Sanity)
- `/about`, `/space`, `/visit`, `/contact` — Static info pages
- `/studio/[[...index]]` — Embedded Sanity Studio

### Component Structure

```
app/components/
  layout/    # Header, Footer, Navigation
  sections/  # Page sections: Hero, ThreePillars, FeaturedMenu, Philosophy,
             #   SpacePreview, InstagramFeed, VisitInfo
  ui/        # Reusable: Button, Card, Modal
```

### Sanity CMS (`sanity/`)

- **`sanity.config.ts`** — Studio config, registers schemas, mounts at `/studio`
- **`schemas/menuItem.ts`** — Menu items with category (breakfast/lunch/sweets/drinks), dietary flags, and `isFeatured` toggle
- **`schemas/page.ts`** — Generic pages with portable text content
- **`schemas/settings.ts`** — Site-wide settings (title, description, logo)
- **`lib/sanity.ts`** — Exports `client` (next-sanity), `urlFor` (image URL builder), and config constants

### Internationalization

- **`lib/i18n.ts`** — All translation strings for EN and JA, accessed via dot-notation keys (e.g. `t('nav.menu')`)
- **`lib/contexts/LanguageContext.tsx`** — React context with `useLanguage()` hook; persists selection to `localStorage`
- **`app/providers.tsx`** — Wraps the app in `LanguageProvider`; all client components that need translations call `useLanguage()`

### Styling

Tailwind CSS v4 with a custom design system defined in `tailwind.config.ts`:

- **Colors**: `cream`, `forest`, `timber`, `sumi`, `ocean`, `gold`, `sakura`
- **Fonts**: `font-serif` (Playfair Display + Noto Serif JP), `font-sans` (Inter + Noto Sans JP), `font-logo` (Cormorant Garamond)
- **Utility**: `cn()` helper in `lib/utils.ts` combines `clsx` + `tailwind-merge`
