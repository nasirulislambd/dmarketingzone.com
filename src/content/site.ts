/*
  SITE-WIDE INFORMATION
  ------------------------------------------------------------
  Edit the values in this file to change contact details, stats,
  navigation and social links across the whole website.

  Rule: if something is not confirmed yet, leave it as null
  (or live: false). The site will show a [PLACEHOLDER] instead
  of guessing. See TODO.md for the full list.
*/

export const site = {
  name: 'DMarketing Zone', // Never add "Ltd" or any legal suffix
  url: 'https://dmarketingzone.com',
  tagline:
    'A complete Halal E-commerce Social Media & Marketing Solution for Halal E-commerce, Organic Food, Supplement, and Ethical brands.',
  shortTagline: 'Social media & marketing for halal and ethical e‑commerce brands.',
  handle: '@dmarketingzone',

  founder: 'Md Nasirul Islam, Founder & CEO',

  address: {
    street: 'Munshipara Mor',
    locality: 'Rangpur Sadar',
    region: 'Rangpur',
    country: 'Bangladesh',
    countryCode: 'BD',
  },

  email: 'hello@dmarketingzone.com' as string | null,

  // WhatsApp number in international format, digits only (no +, no spaces)
  whatsapp: '8801614102252' as string | null,
  whatsappDisplay: '+880 1614-102252',

  // [PLACEHOLDER] Fiverr agency profile URL
  fiverrUrl: null as string | null,

  // [PLACEHOLDER] Booking link for strategy calls (e.g. Calendly). Until set, CTAs go to /contact
  bookingUrl: null as string | null,

  // Logo: the supplied files are in src/assets/brand/ (used by src/components/Logo.astro).
  // Favicons and app icons made from the supplied square logo are in public/brand/.
  logoIcon: '/brand/icon-512.png',

  // Image shown when a link to the site is shared (1200x630). Made from the supplied logo.
  ogImage: '/brand/og-image.png' as string | null,
};

/* Proof stats. Use EXACTLY these. Never round, inflate or change them. */
export const stats = [
  { value: '4.9★', label: 'average rating' },
  { value: '93', label: 'reviews' },
  { value: '138', label: 'orders completed' },
  { value: '4 years', label: 'on Fiverr' },
  { value: '100+', label: 'clients worldwide' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/*
  Social accounts. Only accounts with live: true are shown on the site
  and in the Google schema markup. Set live: true when an account goes live.
  Note: on X the handle is @D_marketingzone.
*/
export const socials = [
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/dmarketingzone', live: true },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/dmarketingzone/', live: true },
  { name: 'X', icon: 'x', url: 'https://x.com/D_marketingzone', live: true },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/dmarketingzone', live: false },
  { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@dmarketingzone', live: false },
  { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@dmarketingzone', live: false },
  { name: 'Pinterest', icon: 'pinterest', url: 'https://www.pinterest.com/dmarketingzone', live: false },
];

export const liveSocials = socials.filter((s) => s.live);

export const whatsappLink = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
/** WhatsApp link with a ready-made first message */
export const whatsappWith = (text: string) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null;
export const strategyCallLink = site.bookingUrl ?? '/contact';
