/*
  PORTFOLIO (used on the Home page and the Work page)
  ------------------------------------------------------------
  Images live in src/assets/work/<brand>/ and the site makes fast WebP
  copies automatically. Reels (videos) live in public/media/reels/.

  type: 'client'  → real client work (shown only with the client's permission)
  type: 'concept' → demo brand we created. It is ALWAYS labelled as a concept
                    project and NEVER presented as a client.
*/
import type { ImageMetadata } from 'astro';

import kanzChechiaGreen from '../assets/work/kanz/zaytunah-chechia-green.jpg';
import kanzChechiaMaroon from '../assets/work/kanz/zaytunah-chechia-maroon.jpg';
import kanzEid from '../assets/work/kanz/eid-giveaway.jpg';
import kanzNusantara from '../assets/work/kanz/nusantara-passage.jpg';
import kanzSet2 from '../assets/work/kanz/set-2.jpg';
import kanzSet6 from '../assets/work/kanz/set-6.jpg';

import turcaScratch from '../assets/work/a-la-turca/scratch-made.jpg';
import turcaMeze from '../assets/work/a-la-turca/meze-carousel.jpg';
import turcaPots from '../assets/work/a-la-turca/pots-to-table.jpg';
import turcaKitchen from '../assets/work/a-la-turca/inside-chef-volkans-kitchen.jpg';
import turcaOhMyMy from '../assets/work/a-la-turca/oh-my-my-reel-cover.jpg';

import barakahHalalWay from '../assets/work/barakah-bites/snacking-the-halal-way.jpg';
import barakahEnergy from '../assets/work/barakah-bites/everyday-energy.jpg';
import barakahCertified from '../assets/work/barakah-bites/halal-certified-post.jpg';
import barakah5 from '../assets/work/barakah-bites/5-reasons-carousel.jpg';

import zaytounRitual from '../assets/work/zaytoun-skincare/ancient-ritual.jpg';
import zaytounWaking from '../assets/work/zaytoun-skincare/ritual-worth-waking-up-for.jpg';
import zaytounCertified from '../assets/work/zaytoun-skincare/certified-post.jpg';
import zaytoun5 from '../assets/work/zaytoun-skincare/5-reasons-carousel.jpg';

export type WorkImage = { src: ImageMetadata; alt: string };
export type Reel = { src: string; poster: string; title: string };
export type Project = {
  slug: string;
  name: string;
  type: 'client' | 'concept';
  category: string;
  filter: 'Modest fashion' | 'Halal food' | 'Restaurant' | 'Skincare' | 'Fitness' | 'Education';
  summary: string;
  work: string[];
  cover: WorkImage | null;
  gallery: WorkImage[];
  reel?: Reel;
  label?: string;
};

export const CONCEPT_LABEL = 'Concept project';

export const projects: Project[] = [
  {
    slug: 'kanz',
    name: 'Kanz',
    type: 'client',
    category: 'Modest menswear & Islamic traditional fashion',
    filter: 'Modest fashion',
    summary:
      'Kanz sells traditional Islamic menswear and accessories, such as chechia hats, scarves and prayer beads. We created social media content for their product collections and an Eid giveaway.',
    work: ['Product posts', 'Collection launches', 'Eid giveaway campaign', 'Reels'],
    cover: {
      src: kanzChechiaGreen,
      alt: 'Kanz post: a green Zaytunah chechia hat on a stone stand, with the Kanz Treasures of Tradition logo',
    },
    gallery: [
      { src: kanzEid, alt: 'Kanz Eid giveaway post showing a chechia, scarf and prayer beads set, with entry steps' },
      { src: kanzNusantara, alt: 'Kanz Nusantara Passage Collection post with two folded scarves on dark green velvet' },
      { src: kanzChechiaMaroon, alt: 'Kanz post: a maroon Zaytunah chechia on a stone stand' },
      { src: kanzSet2, alt: 'Kanz gift set 2 of 6: a woven cap, prayer beads and a wooden box' },
      { src: kanzSet6, alt: 'Kanz gift set 6 of 6: a maroon cap, striped scarf, prayer beads and a wooden stand' },
    ],
    reel: { src: '/media/reels/kanz-reel.mp4', poster: '/media/reels/kanz-reel-poster.jpg', title: 'Kanz product Reel' },
  },
  {
    slug: 'a-la-turca',
    name: 'A La Turca',
    type: 'client',
    category: 'Turkish & Mediterranean restaurant and catering',
    filter: 'Restaurant',
    summary:
      'A La Turca is a Turkish and Mediterranean restaurant. We create food posts, carousels and Reels that show their scratch-made dishes and the people behind the kitchen.',
    work: ['Food posts', 'Carousels', 'Reels & Stories', 'Reel covers'],
    cover: {
      src: turcaScratch,
      alt: 'A La Turca post: stuffed aubergine on a white plate, headline What scratch-made really means here',
    },
    gallery: [
      { src: turcaMeze, alt: 'A La Turca carousel cover: yoghurt meze with olive oil, headline Think Mediterranean is just gyros?' },
      { src: turcaPots, alt: 'A La Turca post: a takeaway tub of home-style stew with carrots and peas, headline From our pots to your table' },
      { src: turcaKitchen, alt: 'A La Turca Reel cover: the chef at the grill, headline Inside Chef Volkan’s kitchen' },
      { src: turcaOhMyMy, alt: 'A La Turca Reel cover: the chef tasting food in the kitchen' },
    ],
    reel: { src: '/media/reels/a-la-turca-reel.mp4', poster: '/media/reels/a-la-turca-reel-poster.jpg', title: 'A La Turca kitchen Reel' },
  },
  {
    slug: 'hebah',
    name: 'Hebah',
    type: 'client',
    category: 'Islamic fitness coach',
    filter: 'Fitness',
    summary: 'We edited Instagram Reels for Hebah, an Islamic fitness coach.',
    work: ['Instagram Reel editing'],
    // [PLACEHOLDER] add images to src/assets/work/hebah/ and import them above
    cover: null,
    gallery: [],
  },
  {
    slug: 'our-little-muslims',
    name: 'Our Little Muslims',
    type: 'client',
    category: 'Muslim education & parenting content',
    filter: 'Education',
    summary: 'We created content for Our Little Muslims, a Muslim education and parenting brand.',
    work: ['Content creation'],
    // [PLACEHOLDER] add images to src/assets/work/our-little-muslims/ and import them above
    cover: null,
    gallery: [],
  },
  {
    slug: 'barakah-bites',
    name: 'Barakah Bites',
    type: 'concept',
    category: 'Halal food: date & nut energy bites',
    filter: 'Halal food',
    summary:
      'A demo halal snack brand we built from scratch to show how we would launch a halal food product on social media.',
    work: ['Brand concept', 'Logo direction', 'Static posts', '6-slide carousel', 'Stories', 'Reels with voiceover', 'Ad mockups'],
    label: 'Concept project: a demo brand created to showcase our work in halal food. Not a real client.',
    cover: {
      src: barakahHalalWay,
      alt: 'Barakah Bites concept post: date and nut energy bites with whole dates, headline Snacking, the halal way',
    },
    gallery: [
      { src: barakahEnergy, alt: 'Barakah Bites concept post: a hand holding an energy bite next to a laptop, headline Your everyday energy companion' },
      { src: barakah5, alt: 'Barakah Bites concept carousel cover: 5 reasons to choose Barakah Bites' },
      { src: barakahCertified, alt: 'Barakah Bites concept post: product pouch with dates, almonds and cashews' },
    ],
    reel: { src: '/media/reels/barakah-bites-reel.mp4', poster: '/media/reels/barakah-bites-reel-poster.jpg', title: 'Barakah Bites concept Reel' },
  },
  {
    slug: 'zaytoun-skincare',
    name: 'Zaytoun Skincare',
    type: 'concept',
    category: 'Halal olive-oil skincare',
    filter: 'Skincare',
    summary:
      'A demo halal skincare brand we created to show how we present clean, ingredient-led beauty products on social media.',
    work: ['Brand concept', 'Logo', 'Static posts', 'Carousel', 'Stories', 'Reels', 'Ad mockups'],
    label: 'Concept project: a demo brand created to showcase our work in halal skincare. Not a real client.',
    cover: {
      src: zaytounRitual,
      alt: 'Zaytoun Skincare concept post: olive-oil serum bottle with olives and leaves, headline Ancient ritual, modern glow',
    },
    gallery: [
      { src: zaytounWaking, alt: 'Zaytoun Skincare concept post: serum drops on a hand, headline A ritual worth waking up for' },
      { src: zaytoun5, alt: 'Zaytoun Skincare concept carousel cover: 5 reasons to choose Zaytoun' },
      { src: zaytounCertified, alt: 'Zaytoun Skincare concept post: serum bottle with olives, olive oil and sea salt' },
    ],
    reel: { src: '/media/reels/zaytoun-reel.mp4', poster: '/media/reels/zaytoun-reel-poster.jpg', title: 'Zaytoun Skincare concept Reel' },
  },
];

export const clientProjects = projects.filter((p) => p.type === 'client');
export const conceptProjects = projects.filter((p) => p.type === 'concept');
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;
