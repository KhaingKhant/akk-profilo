# Kettles — Aung Khaing Khant

A single-page engineering portfolio built with Next.js and React, with a dark visual direction inspired by Raycast and the supplied Kettles identity.

## Development

```sh
npm install
npm run dev
```

## Production preview

```sh
npm run build
npx next start -H 127.0.0.1 -p 4173
```

## Content and design

- `pages/index.js`: introduction, selected work, capabilities, career history, and contact links.
- `styles/globals.css`: responsive styling, subtle entrance and hover motion, and reduced-motion support.
- The portrait is excluded from Git. Optionally set `NEXT_PUBLIC_PORTRAIT_URL` at build time to a separately hosted image; without it, the hero displays the AKK monogram. Any image shown on a public website is publicly accessible.
- `public/assets/akk-monogram.svg`: custom off-white AKK signature monogram inspired by the hand-drawn initials on Dan Koe’s website; used in the header and footer.
- `public/fonts/`: locally hosted Inter variable font and its license.

Career dates, role descriptions, social URLs, and the approximately 10-to-2-second search improvement use the newer Senior Full-Stack Engineer résumé. The older 001 résumé was treated as background only. Project visuals are illustrative compositions, not product screenshots. Typography uses locally hosted Inter with larger body text and brighter secondary colors inspired by Raycast's readable hierarchy.

Interactions include same-page navigation, expandable project details, email copying with a fallback message, mailto links, and GitHub/LinkedIn links. No contact form backend is required.

## Validation

```sh
npm run lint
npm run build
```
