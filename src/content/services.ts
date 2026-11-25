/*
  SERVICES PAGE TEXT
  ------------------------------------------------------------
  Each service: what it is, who it's for, and what's included.
  Only list things we actually do. Prices stay "Get a custom quote"
  until confirmed (see TODO.md).
*/

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Social media services for *halal* & ethical brands',
  intro:
    'Strategy, content, growth, seasonal campaigns and reporting, all in one place and all made for halal and ethical e‑commerce brands.',
};

export const serviceDetails = [
  {
    slug: 'strategy',
    icon: 'target',
    title: 'Halal E‑commerce Strategy',
    what: 'A social media plan built around your products, your audience and the halal buyer’s journey.',
    forWho: 'Brands that post regularly but don’t have a clear plan, or brands getting ready to launch.',
    included: [
      'A look at your brand, products and current social media',
      'Who your buyers are and what they check before they buy',
      'Content pillars and a posting plan for each platform',
      'A content calendar built around your products and key seasons',
    ],
  },
  {
    slug: 'content',
    icon: 'clapperboard',
    title: 'Product Content & Reels',
    what: 'Scroll-stopping product posts, carousels, Stories and Reels with modest, brand-consistent visuals.',
    forWho: 'Brands that need regular, good-looking content without hiring an in-house team.',
    included: ['Product posts', 'Carousels', 'Stories', 'Reels', 'Modest, brand-consistent visuals'],
  },
  {
    slug: 'organic-growth',
    icon: 'sprout',
    title: 'Organic Growth',
    what: 'Consistent posting, community engagement and content that builds trust over time.',
    forWho: 'Brands that want a steady, active presence and a community that trusts them.',
    included: ['Consistent posting on your schedule', 'Community engagement', 'Trust-building content'],
  },
  {
    slug: 'ramadan-eid',
    icon: 'moon',
    title: 'Ramadan & Eid Campaign Planning',
    what: 'Campaign calendars, offers and content prepared well before the season starts.',
    forWho: 'Halal brands that want to be ready for the biggest sales season of the year.',
    included: ['Campaign calendar', 'Offer planning', 'Seasonal content prepared in advance'],
  },
  {
    slug: 'reports',
    icon: 'chart-column',
    title: 'Monthly Performance Reports',
    what: 'Clear monthly reports on reach, engagement and what’s working.',
    forWho: 'Brand owners who want to know what their social media is actually doing.',
    included: ['Reach', 'Engagement', 'What’s working, and what to change next month'],
  },
  {
    slug: 'ai-workflow',
    icon: 'wand-sparkles',
    title: 'AI-Assisted Content Workflow',
    what: 'Faster production with AI tools, always reviewed and refined by humans for brand fit and halal-appropriateness.',
    forWho: 'Brands that need more content, faster, without losing quality or values.',
    included: ['Faster content production with AI tools', 'Human review of every piece', 'Checks for brand fit and halal-appropriateness'],
  },
  {
    slug: 'paid-ads',
    icon: 'megaphone',
    title: 'Paid Ads Support',
    what: 'Help getting started with paid ads on Meta (Facebook & Instagram).',
    forWho: 'Brands that want to put some budget behind their best content.',
    included: ['Meta Ad Boost Setup', '7-Day Campaign Setup'],
  },
];

export const platforms = [
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Facebook', icon: 'facebook' },
  { name: 'TikTok', icon: 'tiktok' },
  { name: 'Pinterest', icon: 'pinterest' },
  { name: 'LinkedIn', icon: 'linkedin' },
  { name: 'X', icon: 'x' },
  { name: 'YouTube', icon: 'youtube' },
];

export const comingSoon = [
  'Website & landing pages',
  'SEO & Google Business Profile',
  'Email & WhatsApp marketing',
  'Full paid-ads management',
];

export const pricing = {
  title: 'Get a *custom* quote',
  // [PLACEHOLDER] package names and prices. Until confirmed we show "custom quote".
  text: 'Every brand is different, so we price each project after a short strategy call. Tell us what you sell, where you sell it and what you need, and we’ll send you a clear quote.',
};

// [PLACEHOLDER] Please review these answers.
export const servicesFaq = [
  {
    q: 'Do you only work with halal brands?',
    a: 'We specialise in halal and ethical e-commerce brands: halal food, modest fashion, organic food and supplements, Islamic lifestyle and education, and halal cosmetics and skincare. This focus is why we understand what your buyers look for.',
  },
  {
    q: 'Which platforms do you cover?',
    a: 'Instagram, Facebook, TikTok, Pinterest, LinkedIn, X and YouTube. We’ll recommend the ones that make sense for your products and audience.',
  },
  {
    q: 'Do you work with brands outside Bangladesh?',
    a: 'Yes. We are based in Rangpur, Bangladesh and work with clients worldwide, both through Fiverr and directly.',
  },
  {
    q: 'Do you use AI to make content?',
    a: 'We use AI tools to work faster, but every piece is reviewed and refined by a person for brand fit and halal-appropriateness.',
  },
  {
    q: 'Will I get reports?',
    a: 'Yes. You get a clear monthly report on reach, engagement and what’s working.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on what you need. Book a free strategy call or message us on WhatsApp and we’ll send you a custom quote.',
  },
];
