# TODO: placeholders & open decisions

The running list of everything the website still needs. Nothing here should be guessed.
When an item is done, tick it `[x]`. Anything still missing shows on the site as a yellow `[PLACEHOLDER: ...]` box.

Most items are changed in one place: `src/content/site.ts` (contact, links), the other files in
`src/content/` (page text), or `src/styles/global.css` (colors and fonts).

Last updated: 25 Nov 2026 (all pages built)

---

## 1. Must have before launch

- [ ] **Gold CTA color**: the hex sent (#83C912) is the same as the lime, so a temporary gold `#C9A227` is used. Need the real gold hex from the Canva brand kit.
- [ ] **Web3Forms access key** for the contact form (free at web3forms.com, sign up with hello@dmarketingzone.com). Put it in the host's environment settings as `PUBLIC_WEB3FORMS_KEY`. Until then the form shows "not connected yet" and points people to WhatsApp/email.
- [ ] **Hosting**: Netlify, Vercel or Cloudflare Pages (all free). Connect this GitHub repo for automatic deploys.
- [ ] **Domain DNS**: point dmarketingzone.com to the chosen host.
- [ ] **Privacy Policy**: general template only. Have it reviewed, then fill the date, hosting provider, analytics and retention placeholders.

## 2. Content to confirm or supply

- [ ] **Fonts**: temporary Bricolage Grotesque (headings) + Figtree (text), both self-hosted. Confirm or send the Canva brand kit fonts.
- [ ] **Neutral colors**: temporary warm paper `#F7F5EE` background and `#1E2B26` text.
- [ ] **How we work** (Home): confirm the 4 drafted steps (`src/content/home.ts`).
- [ ] **Founder bio** (About): 2–3 sentences (`src/content/about.ts`).
- [ ] **Values** (About): confirm the 4 drafted values.
- [ ] **Services page**: review the "Who it's for" and "What's included" drafts and the FAQ answers (`src/content/services.ts`).
- [ ] **Pricing**: package names and prices, or keep "Get a custom quote".
- [ ] **Contact form budget ranges**: confirm the drafted ranges (`src/content/contact.ts`).
- [ ] **Ramadan & Eid 2027 package**: full list of what's included, Early-Bird price, deadline, and number of slots only if genuinely limited (`src/content/ramadan.ts`).
- [ ] **Hebah** and **Our Little Muslims**: work visuals (they show a placeholder on the Work page).
- [ ] **Case studies**: for each client, the challenge, what we did and real results (real numbers only).
- [ ] **Fiverr agency profile URL** → `site.fiverrUrl` (makes "Rated 4.9★ from 93 reviews on Fiverr" a link).
- [ ] **Strategy-call booking link** (e.g. Calendly), optional. Until set, "Book a Free Strategy Call" goes to /contact.
- [ ] **Other social accounts** (LinkedIn, TikTok, YouTube, Pinterest): set `live: true` in `src/content/site.ts` when they go live.

## 3. Done

- [x] Logo, favicons and link-preview image (from the supplied logo files)
- [x] Email: hello@dmarketingzone.com · WhatsApp: +880 1614-102252 (floating button, footer, contact page)
- [x] Social: Facebook, Instagram, X (@D_marketingzone)
- [x] Testimonials: 6 real Fiverr reviews, word for word
- [x] Portfolio: Kanz and A La Turca (client work, permission confirmed), Barakah Bites and Zaytoun Skincare (labelled concept projects), 4 Reels compressed to 1–4 MB each
- [x] Founder photo on the About page
- [x] Pages: Home, Services, Work, About, Contact, Ramadan & Eid 2027, Privacy Policy, 404
- [x] GitHub repository: github.com/nasirulislambd/dmarketingzone.com

## 4. Later

- [ ] Analytics: Google Analytics 4 ID (or a privacy-friendly tool). Update the Privacy Policy when added.
- [ ] Meta Pixel: only after Meta Business Manager is set up under the agency name.
- [ ] Individual case study pages at `/work/<slug>` once case study details are ready.
- [ ] Lighthouse check after the site is live.
- [ ] Logo as SVG (optional, sharper).
