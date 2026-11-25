# CLAUDE.md — DMarketing Zone Agency Website

## Project overview
This repository is the official website for **DMarketing Zone** (dmarketingzone.com), a complete Halal E-commerce Social Media & Marketing Solution for Halal E-commerce, Organic Food, Supplement, and Ethical brands.

**Before doing any work, read `BRAND_CONTEXT.md`.** It is the single source of truth for brand identity, positioning, services, stats, portfolio, colors, voice and hard rules. If this file and `BRAND_CONTEXT.md` ever conflict on brand facts, `BRAND_CONTEXT.md` wins.

The owner (Md Nasirul Islam, Founder & CEO) is a marketer, not a developer, and a non-native English speaker. Explain technical steps simply, give exact commands to run, and avoid unnecessary jargon. He may write in Bangla, Banglish or English; reply in the same language he uses, but keep all website copy in English.

---

## Goals of the website
1. Present DMarketing Zone as a credible, niche-specialist agency for halal & ethical e-commerce brands.
2. Convert visitors into leads (strategy calls, WhatsApp chats, contact form).
3. Promote the **Early-Bird Ramadan & Eid 2027 package** (Ramadan expected around 8 Feb 2027).
4. Showcase real client work and clearly labelled concept projects.
5. Load fast, work perfectly on mobile, and rank for niche keywords.

---

## Tech stack (default — confirm with the owner before changing)
- **Framework:** Astro (static site, fast, SEO-friendly, easy to maintain)
- **Styling:** Tailwind CSS with brand tokens (see "Design system")
- **Content:** page copy in Markdown/MDX or small data files under `src/content/` so non-developers can edit text easily
- **Forms:** a hosted form service (Netlify Forms, Formspree or Web3Forms). No custom backend.
- **WhatsApp:** click-to-chat link (`https://wa.me/<number>`) plus a floating button
- **Hosting:** Netlify, Vercel or Cloudflare Pages (free tier), connected to a GitHub repo, with automatic deploys on push
- **Domain:** dmarketingzone.com pointed to the host via DNS
- **Analytics:** Google Analytics 4 or a privacy-friendly alternative (add the ID via an env variable, `[PLACEHOLDER]`). Meta Pixel is added only after Meta Business Manager is set up under the agency name.

Keep dependencies minimal. No heavy UI libraries unless there is a clear need.

---

## Sitemap & page requirements

### 1. Home (`/`)
- Hero: positioning headline + subheadline + primary CTA ("Book a Free Strategy Call") + secondary CTA ("See Our Work")
- Trust bar: 4.9★ · 93 reviews · 138 orders · 4 years on Fiverr · 100+ clients worldwide
- "Who we serve": 5 niche cards (halal food, modest fashion, organic food & supplements, Islamic lifestyle & education, halal cosmetics & skincare)
- Services overview (6–7 cards linking to /services)
- "Why us": the 5 edges from BRAND_CONTEXT.md §2
- Featured work (Kanz, Hebah, Our Little Muslims + concept projects clearly labelled)
- Ramadan & Eid 2027 banner linking to /ramadan-eid-2027
- How we work: a simple 3–4 step process `[PLACEHOLDER: confirm steps]`
- Testimonials `[PLACEHOLDER: real, permitted only, or hide the section]`
- Final CTA band (gold button) + curved dark-green footer

### 2. Services (`/services`)
- Each current service: what it is, who it's for, what's included
- Platforms covered
- Paid Ads Support (Ad Boost Setup, 7-Day Campaign Setup)
- "Coming soon": website & landing pages, SEO & Google Business Profile, Email & WhatsApp marketing, full paid ads
- Pricing: `[PLACEHOLDER]`. Default to "Get a custom quote" until prices are confirmed
- FAQ section

### 3. Work (`/work`)
- **Client Work:** Kanz, Hebah, Our Little Muslims (case study pages at `/work/<slug>` when details are ready)
- **Concept Projects:** Barakah Bites, Zaytoun Skincare, each with a visible "Concept Project: not a real client" label on the card AND on the detail page
- Filter by category (optional)

### 4. About (`/about`)
- Agency story: why we moved into the halal niche (problem → our answer)
- Founder block: "Md Nasirul Islam, Founder & CEO" (photo `[PLACEHOLDER]`)
- Values
- Location: Rangpur, Bangladesh, serving clients worldwide
- Long-term vision: the youth IT/digital marketing training plan, **clearly written as a future plan**

### 5. Contact (`/contact`)
- Contact form: name, email, brand name, website/Instagram link, niche (dropdown), service interested in, budget range (optional), message
- WhatsApp button, email, address
- Social links (@dmarketingzone)
- Success and error states for the form

### 6. Ramadan & Eid 2027 landing page (`/ramadan-eid-2027`)
- Standalone conversion page (minimal nav)
- Hero: why planning early matters; Ramadan expected ~8 Feb 2027 (subject to moon sighting)
- What's included in the Early-Bird package `[PLACEHOLDER]`
- Campaign timeline (pre-Ramadan → Ramadan → last 10 nights → Eid)
- Proof stats + relevant work
- Price / early-bird deadline `[PLACEHOLDER]`. Only show a countdown or "limited slots" if it is real.
- FAQ
- Strong CTA: "Get Your Ramadan Plan" → form / WhatsApp

### Global
- Header: logo (horizontal lockup), nav (Home, Services, Work, About, Contact), CTA button
- Footer: dark green with a curved top edge, logo, short tagline, contact icons, social links, quick links, © year "DMarketing Zone" (**no "Ltd"**)
- Floating WhatsApp button (mobile-friendly)
- 404 page in brand style
- Privacy Policy page (`/privacy`): general template marked `[PLACEHOLDER: review before publishing]`

---

## Design system
Define these as Tailwind theme tokens. Never hard-code random colors.

```
brand-green:  #107552   (primary: headlines, footer, primary UI)
brand-lime:   #83C912   (accent: highlighted words, icons)
brand-gold:   [PLACEHOLDER: hex from Canva brand kit]  (CTA buttons only)
neutral-dark: [PLACEHOLDER]  (body text)
neutral-light:[PLACEHOLDER]  (section backgrounds)
```

- Headline style: key word highlighted in lime, rest in deep green (mirrors the social post system)
- CTA buttons: gold, high contrast, rounded
- Footer: dark green with a curved shape at the top edge
- Fonts: `[PLACEHOLDER]`. Use a clean sans-serif until confirmed, with fonts self-hosted or optimized
- Check color contrast: lime on white may fail WCAG for body text, so use lime for accents/large text only
- Logo files go in `public/brand/`. Use them as supplied and never redraw the logo in code

---

## Content rules (non-negotiable)
1. **No "Ltd"** or any legal suffix anywhere: copy, meta tags, footer, schema markup, alt text.
2. **Stats exactly:** 4.9★, 93 reviews, 138 orders, 4 years on Fiverr, 100+ clients worldwide. Never "60+ brands".
3. **Never invent** clients, testimonials, logos, results, percentages, certifications, awards or team members.
4. **Concept brands** (Barakah Bites, Zaytoun Skincare) are always visibly labelled as concept/demo work.
5. **Agency only:** no links or mentions of mdnasirulislam.com or @nasirulislambd.
6. **Halal-appropriate:** modest imagery only; no alcohol, non-halal food, suggestive visuals or nightlife cues.
7. **Future items stay future:** planned services and the youth-training mission are never written as current.
8. **Placeholders:** if information is missing, write `[PLACEHOLDER: what's needed]` and list it in `TODO.md`. Do not guess.
9. Copy in clear, simple English. Avoid generic AI phrases ("elevate", "unlock", "in today's digital landscape").

---

## SEO requirements
- Unique `<title>` and meta description per page
- Open Graph + Twitter card tags with a branded OG image
- Semantic HTML (one `<h1>` per page, logical heading order)
- `sitemap.xml` and `robots.txt`
- JSON-LD schema: `Organization` / `ProfessionalService` (name "DMarketing Zone", no legal suffix; address in Rangpur; sameAs = @dmarketingzone profiles)
- Descriptive alt text on all images
- Target keyword themes: halal e-commerce marketing, halal brand social media agency, modest fashion social media marketing, Ramadan marketing campaign, halal skincare marketing, organic supplement social media

---

## Quality bar
- Mobile-first and responsive (test at 360px, 768px, 1280px)
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- Images optimized (WebP/AVIF, lazy-loaded, correct sizes)
- Keyboard-accessible navigation; visible focus states
- No console errors; all links work

---

## Suggested folder structure
```
/
├─ CLAUDE.md
├─ BRAND_CONTEXT.md
├─ TODO.md                 # running list of placeholders & open decisions
├─ public/
│  ├─ brand/               # logo files, favicon, OG image
│  └─ images/              # portfolio & site images
├─ src/
│  ├─ components/          # Header, Footer, CTAButton, StatBar, ServiceCard, WorkCard, ...
│  ├─ layouts/
│  ├─ content/             # editable copy: services, work, faq
│  └─ pages/               # index, services, work, about, contact, ramadan-eid-2027, privacy, 404
└─ tailwind.config.*
```

---

## How to work in this repo
1. Read `BRAND_CONTEXT.md` and `TODO.md` at the start of each session.
2. Build in small steps: set up the project → design tokens & layout → one page at a time → SEO → deploy.
3. After each step, explain in simple language what changed and how to preview it (`npm run dev`).
4. Keep `TODO.md` updated with every placeholder and open question.
5. Before deploying, run the build, check every page against the "Content rules" checklist, and run a Lighthouse check.
6. Ask the owner before choosing paid services, changing the stack, or publishing anything with placeholders still visible.
7. For legal pages (privacy policy, terms), provide a general template only and recommend professional review.
