# Landing Page Portfolio Template (Astro)

10 fully standalone, unique landing pages — one per profession — built for a
freelance portfolio (Fiverr / Upwork). Each page is its own route with its
own palette, type system, and layout; nothing is templated from a shared
"theme".

## Pages
| Route | Profession |
|---|---|
| `/` | Gallery hub linking to all 10 |
| `/attorney` | Attorney / law firm |
| `/architect` | Architect studio |
| `/trainer` | Personal trainer |
| `/wedding-photographer` | Wedding photographer |
| `/real-estate-agent` | Luxury real estate agent |
| `/private-chef` | Private chef |
| `/financial-advisor` | Financial advisor |
| `/life-coach` | Life coach / therapist |
| `/fashion-designer` | Fashion designer / stylist |
| `/graphic-designer` | Graphic designer (creative portfolio) |

Shared, reusable across all 10: `/privacy`, `/cookies`, `/accessibility`
(placeholder legal pages — see the note at the top of each; they need real
business details before going live for a real client).

## Run it
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## What's built in
- **No raster images** — every visual is CSS/SVG, so there's no LCP image
  weight to optimize and nothing to license.
- **Self-hosted fonts** via `@fontsource`, loaded per page (not globally),
  each only pulling the weights it actually uses, served as cacheable files
  rather than base64-inlined (see `astro.config.mjs`).
- **Cookie consent banner** (`src/components/CookieConsent.astro`), themed
  per page, stores consent in `localStorage`, nothing optional loads before
  consent.
- **Accessibility baseline** in `src/styles/global.css`: skip-to-content
  link, visible focus rings, `prefers-reduced-motion` support, landmark
  structure (header/nav/main/footer) on every page, labeled form fields.
- **SEO/meta** centralized in `src/layouts/BaseLayout.astro`: canonical URL,
  Open Graph/Twitter tags, per-page title/description.

## Before selling / shipping a page to a real client
1. Run Lighthouse against the **production build** (`npm run build && npm run preview`), not dev mode — dev mode is not representative of real scores.
2. Replace the bracketed placeholders in `/privacy`, `/cookies`, `/accessibility` with the client's real business details, and have a lawyer confirm which regimes actually apply (GDPR/UK GDPR, CCPA/CPRA, LGPD, etc.) — this template gets you most of the way, not all of it.
3. Swap the placeholder copy for the client's real content, and if you add real photography, compress and serve it as WebP/AVIF with explicit width/height to protect the CLS and LCP scores this template starts with.
4. If you wire up real form submission (e.g. Formspree, a serverless function), keep the existing labeled-field structure — don't strip the `<label>` elements.

## Design log
See `AGENTS.md` for the palette/type/signature-element rationale behind each
of the 10 pages, and which "default AI look" traps were deliberately avoided.
