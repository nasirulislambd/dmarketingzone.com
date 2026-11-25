# DMarketing Zone website

The official website for DMarketing Zone (dmarketingzone.com), built with Astro and Tailwind CSS.

Read `CLAUDE.md` and `BRAND_CONTEXT.md` first. Open items are in `TODO.md`.

## Preview the site on your computer

You need **Node.js 22.23 or newer** (download the "LTS" version from https://nodejs.org).
Check your version with `node -v`.

Open a terminal in this folder and run:

```
npm install        # first time only: downloads the tools
npm run dev        # starts a local preview
```

Then open http://localhost:4321 in your browser. The page updates when you save a file.
Press `Ctrl + C` in the terminal to stop it.

To make the final website files: `npm run build` (output goes to the `dist/` folder).

## Where to edit things

| What | File |
|---|---|
| Email, WhatsApp, social links, stats | `src/content/site.ts` |
| Home page text, portfolio cards, testimonials | `src/content/home.ts` |
| Colors and fonts (design tokens) | `src/styles/global.css` |
| Header / footer layout | `src/components/Header.astro`, `src/components/Footer.astro` |
| Logo | `src/assets/brand/` (favicons and share image in `public/brand/`) |
| Portfolio images | `src/assets/work/<brand>/` (the site makes fast WebP copies automatically) |

Anything not confirmed yet shows on the page as a yellow `[PLACEHOLDER: ...]` box and is listed in `TODO.md`.
