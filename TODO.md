# TODO: placeholders & open decisions

This is the running list of everything the website still needs from the owner.
Nothing here should be guessed. When an item is done, tick it `[x]` and update the file shown.

Most items are changed in **one place**: `src/content/site.ts` (contact, links, logo) or
`src/content/home.ts` (Home page text). Colors and fonts live in `src/styles/global.css`.

Last updated: 25 Nov 2026 (logo, portfolio and testimonials added)

---

## 1. Brand assets

- [x] **Logo**: supplied horizontal logo added (`src/assets/brand/logo-horizontal.png`). On the dark green footer it sits on a white badge, so it is never recolored.
- [x] **Favicon & app icons**: made from the supplied square logo (`public/brand/`).
- [x] **Open Graph image** (link previews): made from the supplied logo on its light green background (`public/brand/og-image.png`). Replace with a designed one any time.
- [ ] **Logo as SVG** (optional, sharper on big screens). PNG works fine for now.
- [ ] **A white/light version of the logo** for dark backgrounds (optional). Without it, the white badge stays.

## 2. Colors & fonts (from the Canva brand kit)

- [ ] **brand-gold** exact hex (CTA buttons only). Temporary value: `#E8B23A`. Also set a slightly darker hover shade.
- [ ] **neutral-dark** (body text). Temporary value: `#1E2B26`.
- [ ] **neutral-light** (section backgrounds). Temporary value: `#F4F7F2`.
- [ ] **Heading + body fonts**. Temporary font: Inter (self-hosted, no Google requests). The logo wordmark looks like Montserrat; confirm if headings should use it.
- [ ] **Approve the derived shades** I added so text stays readable (WCAG contrast):
  - `brand-green-dark` `#0A3D2B` for the footer and dark banners (lime text on it passes contrast; lime on the normal green does not).
  - `brand-lime-deep` `#5E9410` for the lime highlight word in headlines on white/light backgrounds. The real lime `#83C912` on white is only 2.0:1, which fails accessibility even for large text. Real lime is still used on dark green, for icons and for check marks.
  - `brand-green-tint` `#E7F2EC` for soft green panels and icon circles.

## 3. Contact details & links

- [ ] **Agency email** (e.g. hello@dmarketingzone.com) → `site.email`
- [ ] **WhatsApp number** in international format, digits only (e.g. 8801XXXXXXXXX) → `site.whatsapp`.
      The floating WhatsApp button stays hidden on the live site until this is set (it shows as a preview while running `npm run dev`).
- [ ] **Fiverr agency profile URL** → `site.fiverrUrl` (used for "Read our reviews on Fiverr" under the stats bar)
- [ ] **Which social accounts are live** (Instagram, Facebook, LinkedIn, TikTok, YouTube, Pinterest, X). Check each URL in `socials` and set `live: true` only for real, active accounts. Only live accounts appear in the footer and in Google schema markup.
- [ ] **Strategy-call booking link** (e.g. Calendly), if you want one. Until set, every "Book a Free Strategy Call" button goes to `/contact`. → `site.bookingUrl`

## 4. Home page content

- [ ] **How we work steps**: I drafted 4 steps (Free strategy call → Strategy & content plan → Create & publish → Monthly report & review). Please confirm or change them in `howWeWork` in `src/content/home.ts`, then remove the placeholder line.
- [x] **Testimonials**: 6 real Fiverr reviews added word for word (`testimonials` in `src/content/home.ts`). We show who the client is ("Kanz", "Personal training business owner", "Fiverr client") and country, not Fiverr usernames.
- [ ] Confirm you are happy showing these public Fiverr reviews on the agency site (they are already public on Fiverr). The review "I live he's working organized…" has a typo; we can't fix a quote, so remove it if you'd rather not show it.
- [x] **Kanz visuals**: 6 posts added (Home shows 1; the rest are ready for the Work page).
- [ ] **Kanz permission**: confirm Kanz is OK with the work being shown (the kanz_treasure review suggests a good relationship, but please confirm).
- [ ] **A La Turca** (new client, not in BRAND_CONTEXT.md): added as client work using food photos only. Please confirm: (1) it is a real client and they allow us to show the work, (2) the food is halal / suitable for a halal-focused agency site. I did NOT use the Atatürk Day post or the photos of the chef (identifiable person, needs permission). Then add A La Turca to BRAND_CONTEXT.md §5.
- [ ] **Hebah visuals** + permission → `src/assets/work/hebah/`
- [ ] **Our Little Muslims visuals** + permission → `src/assets/work/our-little-muslims/`
- [x] **Barakah Bites & Zaytoun Skincare visuals** added, labelled "Concept project".
- [ ] Note: some concept posts say "100% Halal Certified" / show a "Halal Certified" badge. That is fine inside a clearly labelled demo brand, but I used the posts without certification claims on the Home page.
- [ ] **Reels (videos)**: the .mp4 files are 20–68 MB each, too heavy for a website. Plan for the Work page: compress to ~2–4 MB each, or embed them from Instagram/YouTube. Tell me which you prefer.
- [ ] Review the Home page copy (hero, niche cards, why us) and change any wording you'd like.

## 5. Other pages (not built yet; placeholders already known)

- [ ] **Services**: package names and prices, or keep "Get a custom quote"; FAQ questions & answers.
- [ ] **Work**: case study details for each client (challenge, what we did, real results only, visuals, permission).
- [ ] **About**: founder photo ready (`src/assets/about/founder-md-nasirul-islam.jpg`, from "Brand color profile"). Still needed: agency story review, values.
- [ ] **Contact**: choose a form service (Netlify Forms, Formspree or Web3Forms; free tiers). Budget ranges for the optional dropdown.
- [ ] **Ramadan & Eid 2027**: what the Early-Bird package includes, price, early-bird deadline, and number of slots (only if genuinely limited).
- [ ] **Privacy Policy**: general template will be provided; needs review before publishing.

## 6. Setup & launch decisions

- [x] **GitHub repository**: github.com/nasirulislambd/dmarketingzone.com
- [ ] **Hosting**: Netlify, Vercel or Cloudflare Pages (all free tier). 
- [ ] **Domain DNS**: point dmarketingzone.com to the chosen host.
- [ ] **Analytics**: Google Analytics 4 measurement ID (goes in a `.env` file, see `.env.example`), or a privacy-friendly alternative.
- [ ] **Meta Pixel**: only after Meta Business Manager is set up under the agency name.

## 7. Known temporary gaps

- Links to `/services`, `/work`, `/about`, `/contact`, `/ramadan-eid-2027` and `/privacy` show a "page not found" until those pages are built.
- No 404 page yet.
