/*
  HOME PAGE TEXT
  ------------------------------------------------------------
  Edit the words here to change the Home page. Keep copy in clear,
  simple English. Wrap ONE key word of a headline in *stars* to
  show it in lime green, for example: 'Built for *halal* brands'.

  Icons come from https://lucide.dev (use the icon's name).
*/

// Portfolio images live in src/assets/work/<brand>/. The site makes fast WebP versions automatically.
import kanz1 from '../assets/work/kanz/zaytunah-chechia-green.jpg';
import turca1 from '../assets/work/a-la-turca/scratch-made.jpg';
import barakah1 from '../assets/work/barakah-bites/snacking-the-halal-way.jpg';
import zaytoun1 from '../assets/work/zaytoun-skincare/ancient-ritual.jpg';
import type { ImageMetadata } from 'astro';

export const hero = {
  eyebrow: 'Halal e-commerce marketing agency',
  title: 'Social media & marketing for *halal* and ethical e‑commerce brands', // uses a non-breaking hyphen in "e‑commerce" so it never splits across lines
  subtitle:
    'Strategy, product content, Ramadan & Eid campaigns and monthly reports for halal food, modest fashion, organic food, supplement and ethical brands. We only work in this niche, so we speak your customers’ language.',
  primaryCta: 'Book a Free Strategy Call',
  secondaryCta: 'See Our Work',
  // The card on the right of the hero. A summary of what clients get, not a promise of results.
  card: {
    title: 'What a month with us looks like',
    items: [
      'A clear social media strategy for your products',
      'Product posts, carousels, Stories and Reels',
      'Daily community engagement',
      'Seasonal campaigns planned ahead',
      'A monthly report with real numbers',
    ],
  },
};

export const whoWeServe = {
  eyebrow: 'Who we serve',
  title: 'Built for *halal* and ethical brands',
  intro:
    'We work with small and medium-sized brands that already sell online and want a real plan, steady content and clear reporting.',
  niches: [
    {
      icon: 'utensils',
      title: 'Halal food brands',
      text: 'Content that shows ingredients, sourcing and certification clearly, so buyers can trust what they eat.',
    },
    {
      icon: 'shirt',
      title: 'Modest fashion brands',
      text: 'Styling and product content that respects modesty and still sells.',
    },
    {
      icon: 'leaf',
      title: 'Organic food & supplement brands',
      text: 'Honest, transparent product stories for health-conscious buyers.',
    },
    {
      icon: 'book-open',
      title: 'Islamic lifestyle & education brands',
      text: 'Respectful, value-led content for books, courses, gifts and family brands.',
    },
    {
      icon: 'sparkles',
      title: 'Halal cosmetics & skincare brands',
      text: 'Clean, ingredient-focused visuals for halal beauty and skincare products.',
    },
  ],
};

export const services = {
  eyebrow: 'What we do',
  title: 'Everything your brand needs on *social media*',
  intro: 'Strategy, content, growth, campaigns and reporting in one place.',
  items: [
    {
      icon: 'target',
      slug: 'strategy',
      title: 'Halal E-commerce Strategy',
      text: 'A social media plan built around your products, your audience and the halal buyer’s journey.',
    },
    {
      icon: 'clapperboard',
      slug: 'content',
      title: 'Product Content & Reels',
      text: 'Scroll-stopping product posts, carousels, Stories and Reels with modest, brand-consistent visuals.',
    },
    {
      icon: 'sprout',
      slug: 'organic-growth',
      title: 'Organic Growth',
      text: 'Consistent posting, community engagement and content that builds trust over time.',
    },
    {
      icon: 'moon',
      slug: 'ramadan-eid',
      title: 'Ramadan & Eid Campaign Planning',
      text: 'Campaign calendars, offers and content prepared well before the season starts.',
    },
    {
      icon: 'chart-column',
      slug: 'reports',
      title: 'Monthly Performance Reports',
      text: 'Clear monthly reports on reach, engagement and what’s working.',
    },
    {
      icon: 'wand-sparkles',
      slug: 'ai-workflow',
      title: 'AI-Assisted Content Workflow',
      text: 'Faster production with AI tools, always reviewed and refined by humans for brand fit and halal-appropriateness.',
    },
    {
      icon: 'megaphone',
      slug: 'paid-ads',
      title: 'Paid Ads Support',
      text: 'Starting with Meta Ad Boost Setup and 7-Day Campaign Setup.',
    },
  ],
  // Planned services. Always shown as "Coming soon", never as available now.
  comingSoon: [
    'Website & landing pages',
    'SEO & Google Business Profile',
    'Email & WhatsApp marketing',
    'Full paid-ads management',
  ],
};

export const whyUs = {
  eyebrow: 'Why DMarketing Zone',
  title: 'What makes us *different*',
  intro: 'Many tools can make a post. These are the things that need people who know your market.',
  items: [
    {
      icon: 'badge-check',
      title: 'Halal certification literacy',
      text: 'We understand certification, ingredient transparency and what halal buyers actually check.',
    },
    {
      icon: 'shirt',
      title: 'Modest fashion styling knowledge',
      text: 'Content that respects modesty and still sells.',
    },
    {
      icon: 'calendar-days',
      title: 'Ramadan & Eid campaign timing',
      text: 'Planning around the biggest sales season of the year.',
    },
    {
      icon: 'route',
      title: 'Strategy, not just posts',
      text: 'A plan behind every piece of content.',
    },
    {
      icon: 'trending-up',
      title: 'Monthly performance reporting',
      text: 'Clear numbers every month.',
    },
  ],
};

type WorkItem = {
  name: string;
  category: string;
  work: string;
  image: ImageMetadata | null;
  imageAlt: string;
  label?: string;
};

export const featuredWork: {
  eyebrow: string;
  title: string;
  intro: string;
  clients: WorkItem[];
  concepts: WorkItem[];
} = {
  eyebrow: 'Our work',
  title: 'Featured *work*',
  intro: 'Real client work, plus concept projects we created to show what we can do in specific halal niches.',
  clients: [
    {
      name: 'Kanz',
      category: 'Modest menswear & Islamic traditional fashion',
      work: 'Social media content: product posts, collection launches and an Eid giveaway campaign',
      image: kanz1,
      imageAlt: 'Kanz social media post showing a green Zaytunah chechia hat on a stone stand, with the Kanz Treasures of Tradition logo',
    },
    {
      name: 'A La Turca',
      category: 'Turkish & Mediterranean restaurant',
      work: 'Social media content: food posts, carousels and Reels',
      image: turca1,
      imageAlt: 'A La Turca social media post with a plate of stuffed aubergine and the headline What scratch-made really means here',
    },
    {
      name: 'Hebah',
      category: 'Islamic fitness coach',
      work: 'Instagram Reel editing',
      // [PLACEHOLDER] add an image in src/assets/work/hebah/ and import it above
      image: null,
      imageAlt: '',
    },
    {
      name: 'Our Little Muslims',
      category: 'Muslim education & parenting content',
      work: 'Content creation',
      // [PLACEHOLDER] add an image in src/assets/work/our-little-muslims/ and import it above
      image: null,
      imageAlt: '',
    },
  ],
  // Concept / demo brands. ALWAYS labelled. NEVER presented as clients.
  concepts: [
    {
      name: 'Barakah Bites',
      category: 'Halal food: date & nut energy bites',
      work: 'Brand concept, logo direction, static posts, carousel, Stories, Reels with voiceover and ad mockups',
      label: 'Concept project: a demo brand created to showcase our work in halal food. Not a real client.',
      image: barakah1,
      imageAlt: 'Barakah Bites concept post: date and nut energy bites with whole dates and the headline Snacking, the halal way',
    },
    {
      name: 'Zaytoun Skincare',
      category: 'Halal olive-oil skincare',
      work: 'Brand concept, logo, static posts, carousel, Stories, Reels and ad mockups',
      label: 'Concept project: a demo brand created to showcase our work in halal skincare. Not a real client.',
      image: zaytoun1,
      imageAlt: 'Zaytoun Skincare concept post: an olive-oil serum bottle beside olives and olive leaves, headline Ancient ritual, modern glow',
    },
  ],
};

export const ramadanBanner = {
  eyebrow: 'Early-Bird Ramadan & Eid 2027 Package',
  title: 'Plan your *Ramadan* campaign before the rush',
  text: 'Ramadan 2027 is expected to begin around 8 February 2027, and Eid al-Fitr around 9–10 March 2027 (subject to moon sighting). Brands that plan early have their content, offers and calendar ready before the season starts.',
  cta: 'Get Your Ramadan Plan',
};

export const howWeWork = {
  eyebrow: 'How we work',
  title: 'A simple, *clear* process',
  // [PLACEHOLDER] Draft steps. The owner needs to confirm these.
  placeholder: 'confirm these process steps',
  steps: [
    {
      title: 'Free strategy call',
      text: 'We learn about your brand, products, customers and goals.',
    },
    {
      title: 'Your strategy & content plan',
      text: 'We build a social media plan and content calendar around your products and key seasons.',
    },
    {
      title: 'Create & publish',
      text: 'We produce posts, carousels, Stories and Reels, and manage posting and engagement.',
    },
    {
      title: 'Monthly report & review',
      text: 'Every month you get clear numbers and a plan for what to improve next.',
    },
  ],
};

/*
  TESTIMONIALS
  Real reviews from our Fiverr profile, copied word for word (do not edit the wording).
  The section is hidden if this list is empty.
  We show who the client is (not their Fiverr username).
  Format: { quote, name, location, source }
*/
export const testimonials: { quote: string; name: string; location?: string; source?: string }[] = [
  {
    quote:
      'Nasir is an exceptional social media manager who consistently offers helpful recommendations without being asked. When I rebranded my personal training business, he quickly adapted to the new images, logo, and other elements with ease. I recommend him for any social media projects.',
    name: 'Personal training business owner',
    location: 'United States',
    source: 'Fiverr review',
  },
  {
    quote:
      'Top guy, knows what he\'s doing and helped launching our brand in such a short space of time. Much appreciated and will definitely work with him again.',
    name: 'Kanz',
    location: 'United Kingdom',
    source: 'Fiverr review',
  },
  {
    quote:
      'I was very happy with the work that was done. He was very easy to communicate with. He produced great work in a timely manner. Looking forward to working with you again in the future.',
    name: 'Fiverr client',
    location: 'United Kingdom',
    source: 'Fiverr review',
  },
  {
    quote:
      'Massive thank you for this month provision of Social Media related help. You have done well! I pray you continue to do exceptional well.',
    name: 'Fiverr client',
    location: 'Jamaica',
    source: 'Fiverr review',
  },
  {
    quote:
      'I have been working with Nasiru since early summer, and I am pleased with the work we have produced. I am a personal trainer who needs assistance with all things social, and he has been proactive with the work he has produced.',
    name: 'Personal training business owner',
    location: 'United States',
    source: 'Fiverr review',
  },
  {
    quote: "I live he's working organized and always in the loop great communication",
    name: 'Fiverr client',
    location: 'United States',
    source: 'Fiverr review',
  },
];

export const finalCta = {
  title: 'Ready to grow your *halal* brand?',
  text: 'Tell us about your brand and goals. We’ll show you what a clear social media plan could look like for you.',
  cta: 'Book a Free Strategy Call',
};
