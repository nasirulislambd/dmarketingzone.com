# TODO: placeholders & open decisions

The running list of everything the website still needs. Nothing here should be guessed.
When an item is done, tick it `[x]`. Anything still missing shows on the site as a yellow `[PLACEHOLDER: ...]` box.

Most items are changed in one place: `src/content/site.ts` (contact, links), the other files in
`src/content/` (page text), or `src/styles/global.css` (colors and fonts).

Last updated: 25 Nov 2026 (site merged into main; first Cloudflare Pages production deploy)

---

## 1. Must have before launch

- [ ] **Web3Forms access key** for the contact form: create a NEW key at web3forms.com with hello@dmarketingzone.com (the key decides which inbox gets the messages, so don't reuse the personal-site key). Add it in Cloudflare Pages as the variable `PUBLIC_WEB3FORMS_KEY`, then redeploy. Until then the form shows "not connected yet" and points people to WhatsApp/email.
- [ ] **Hosting**: Cloudflare Pages, connected to this GitHub repo (chosen 25 Nov 2026). Steps in README.md → "Deploy on Cloudflare Pages".
- [ ] **Domain DNS**: point dmarketingzone.com to the chosen host.
- [ ] **Privacy Policy**: general template only. Have it reviewed, then fill the date, hosting provider, analytics and retention placeholders.

## 2. Content to confirm or supply

- [ ] **Fonts**: temporary Bricolage Grotesque (headings) + Figtree (text), both self-hosted. Confirm or send the Canva brand kit fonts.
- [ ] **Neutral colors**: temporary warm paper `#F7F5EE` background and `#1E2B26` text.
- [ ] **How we work** (Home): confirm the 4 drafted steps (`src/content/home.ts`).
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

- [x] Gold CTA color: `#C9A227` (confirmed)
- [x] Logo, favicons and link-preview image (from the supplied logo files)
- [x] Email: hello@dmarketingzone.com · WhatsApp: +880 1614-102252 (floating button, footer, contact page)
- [x] Social: Facebook, Instagram, X (@D_marketingzone)
- [x] Testimonials: 6 real Fiverr reviews, word for word
- [x] Portfolio: Kanz and A La Turca (client work, permission confirmed), Barakah Bites and Zaytoun Skincare (labelled concept projects), 4 Reels compressed to 1–4 MB each
- [x] Founder photo on the About page
- [x] Founder bio on the About page (from the founder's own text)
- [x] Pages: Home, Services, Work, About, Contact, Ramadan & Eid 2027, Privacy Policy, 404
- [x] GitHub repository: github.com/nasirulislambd/dmarketingzone.com

## 4. Later

- [ ] Analytics: Google Analytics 4 ID (or a privacy-friendly tool). Update the Privacy Policy when added.
- [ ] Meta Pixel: only after Meta Business Manager is set up under the agency name.
- [ ] Individual case study pages at `/work/<slug>` once case study details are ready.
- [ ] Lighthouse check after the site is live.
- [ ] Logo as SVG (optional, sharper).
