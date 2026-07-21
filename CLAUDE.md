## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Portfolio build notes (design log — avoid repeating solved problems)
1. Attorney — navy/brass/paper, Newsreader + Source Sans 3, seal motif, formal grid.
2. Architect — concrete grey/copper, Archivo (expanded) + Work Sans, huge asymmetric whitespace, line-drawing SVG.
3. Personal trainer — cobalt blue block + safety yellow, Archivo Black-ish + Inter, diagonal cuts, high energy.
4. Wedding photographer — blush/ivory + plum, Cormorant Garamond + Karla, airy romantic.
5. Real estate agent — deep emerald + champagne, Prata + Mulish, editorial full-bleed "window" gradients.
6. Private chef — warm charcoal + gold, Fraunces italic + Inter, real dot-leader tasting menu (numbering justified — real sequence).
7. Financial advisor — near-black + electric orange/ice blue duotone, Space Grotesk + IBM Plex Sans/Mono, live ticker signature.
8. Life coach/therapist — warm sand + deep teal/blush, Sora + Manrope, calm generous whitespace.
9. Fashion designer — indigo/denim + olive, Libre Franklin + Inter, magazine-style oversized name.
10. Graphic designer portfolio — white + multicolor gradient blob, JetBrains Mono + Manrope, playful grid-break.

Shared: BaseLayout.astro (SEO/meta/skip-link/consent), CookieConsent.astro (themeable), global.css (reset+a11y), /privacy /cookies /accessibility (shared legal pages), index.astro = portfolio gallery hub.
Avoided defaults: no cream+terracotta+serif page, no plain near-black+neon page repeated, no broadsheet hairline layout repeated across pages.
