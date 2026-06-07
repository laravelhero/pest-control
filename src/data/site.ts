/* ============================================================
   Hero Pest Control — shared site data
   Single source of truth for nav, contact details, and the
   data-driven sections that are rendered at build time.
   (Services and blog posts live in content collections.)
   ============================================================ */

export const SITE = {
  name: 'Hero Pest Control',
  phone: '+8801821539269',
  phoneHref: 'tel:+8801821539269',
  email: 'info@heropestcontrol.com',
  description:
    'Protecting what matters with safe, proven, and guaranteed pest control for homes and businesses.',
} as const;

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Us', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'library', label: 'Pest Library', href: '/pest-library' },
  { key: 'reviews', label: 'Reviews', href: '/reviews' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 2000, suffix: '+', label: 'Happy Customers' },
  { value: 25, suffix: '+', label: 'Cities Served' },
  { value: 200, suffix: '+', label: '5-Star Reviews' },
  { value: 15, suffix: '+', label: 'Years in Business' },
];

export interface Reason {
  title: string;
  desc: string;
  icon: string;
}

export const reasons: Reason[] = [
  { title: 'Licensed Technicians', desc: 'Certified, background-checked pros you can trust in your home.', icon: '<path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>' },
  { title: 'Safe Treatments', desc: 'Family- and pet-friendly products applied with care.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>' },
  { title: 'Eco-Friendly Solutions', desc: 'Lower-impact methods that protect your home and the planet.', icon: '<path d="M11 20A7 7 0 0 1 9 6c4-2 9-2 11 0 1 5-1 13-9 14Z"/><path d="M9 17c2-4 5-6 8-7"/>' },
  { title: 'Affordable Pricing', desc: 'Transparent, upfront quotes with flexible plans.', icon: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9a2.5 2.5 0 0 0-5 0c0 3 5 1.5 5 4.5a2.5 2.5 0 0 1-5 0M12 6v1.5M12 16.5V18"/>' },
  { title: 'Fast Response', desc: 'Same-day and emergency service when you need it most.', icon: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>' },
  { title: 'Guaranteed Results', desc: 'Pests back between visits? So are we — free re-treatment.', icon: '<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>' },
];

export interface Step {
  title: string;
  desc: string;
}

export const steps: Step[] = [
  { title: 'Inspection', desc: 'A full walkthrough to find activity and entry points.' },
  { title: 'Identification', desc: 'We pinpoint the species and the root cause.' },
  { title: 'Treatment', desc: 'Targeted, safe application tailored to your home.' },
  { title: 'Prevention', desc: 'We seal, exclude, and protect against return.' },
  { title: 'Follow-Up', desc: 'Ongoing checks to keep your space pest-free.' },
];

export interface Featured {
  name: string;
  tag: string;
  img: string;
  desc: string;
  points: string[];
}

export const featured: Featured[] = [
  { name: 'Termite Defense', tag: 'Most Popular', img: '/img/photo-termite.jpg', desc: 'Comprehensive termite protection that guards your property against costly structural damage — year after year.', points: ['Advanced detection & monitoring', 'Liquid + bait barrier systems', 'Annual renewable warranty'] },
  { name: 'Mosquito Reduction', tag: 'Seasonal', img: '/img/photo-mosquito.jpg', desc: 'Enjoy your outdoor space again. Our recurring programs dramatically cut mosquito populations around your home.', points: ['Targeted perimeter misting', 'Breeding-site treatment', 'Special event one-time service'] },
  { name: 'Rodent Exclusion', tag: 'Whole-Home', img: '/img/photo-rodent.jpg', desc: 'Stop mice and rats at the source with humane trapping plus full exclusion so they can’t get back in.', points: ['Entry-point sealing', 'Humane removal', 'Sanitation & prevention'] },
];

export interface Review {
  name: string;
  location: string;
  stars: number;
  text: string;
}

export const reviews: Review[] = [
  { name: 'Sarah M.', location: 'Maplewood', stars: 5, text: 'Hero got rid of our ant problem in a single visit. The technician was professional, on time, and explained everything. Haven’t seen a bug since!' },
  { name: 'James T.', location: 'Riverside', stars: 5, text: 'We had a serious rodent issue and they handled it fast and humanely. The follow-up visits gave us real peace of mind. Highly recommend.' },
  { name: 'Priya K.', location: 'Oakdale', stars: 5, text: 'Booked a same-day mosquito treatment before a party and it made a huge difference. Friendly team and fair pricing.' },
  { name: 'Daniel R.', location: 'Lakeview', stars: 5, text: 'Their termite inspection caught early activity our last company missed. Saved us thousands. Truly the experts.' },
  { name: 'Maria G.', location: 'Brookfield', stars: 5, text: 'Professional from quote to finish. The eco-friendly options gave me peace of mind with two young kids at home.' },
  { name: 'Kevin B.', location: 'Fairview', stars: 5, text: 'Bed bugs gone after one heat treatment. Discreet, thorough, and they guaranteed the work. Couldn’t ask for more.' },
];

export const cities: string[] = ['Maplewood', 'Riverside', 'Oakdale', 'Lakeview', 'Brookfield', 'Fairview', 'Greenwood', 'Cedar Hills', 'Springdale'];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: 'Are your treatments safe for kids and pets?', a: 'Absolutely. We use EPA-approved, family- and pet-friendly products and apply them with care. We’ll also share simple guidance for the few hours after treatment.' },
  { q: 'How quickly can you come out?', a: 'In most cases we offer same-day or next-day service, and we keep technicians on standby for emergencies.' },
  { q: 'Do you offer a guarantee?', a: 'Yes — if pests return between scheduled visits, we’ll re-treat at no extra cost. Your satisfaction is guaranteed.' },
  { q: 'Do I need to leave my home during treatment?', a: 'For most general treatments, no. For specialized services like bed bug heat treatments, we’ll give you clear instructions in advance.' },
  { q: 'What areas do you serve?', a: 'We serve 25+ cities across the region. Check our Service Areas, or call us — we’re expanding constantly.' },
];

export interface Pest {
  name: string;
  img: string;
  risk: string;
  about: string;
  signs: string[];
  prevent: string[];
}

export const pests: Pest[] = [
  { name: 'Ants', img: '/img/photo-ant.jpg', risk: 'Nuisance / contamination', about: 'Ants invade kitchens and pantries in search of food and water, leaving scent trails that draw entire colonies indoors.', signs: ['Trails along baseboards', 'Small dirt piles near cracks', 'Wood shavings (carpenter ants)'], prevent: ['Seal food in containers', 'Caulk entry gaps', 'Fix moisture leaks'] },
  { name: 'Cockroaches', img: '/img/photo-cockroach.jpg', risk: 'Allergens / disease', about: 'Roaches spread bacteria and trigger asthma. They breed rapidly and hide in warm, humid, dark spaces.', signs: ['Droppings like coffee grounds', 'Musty odor', 'Egg casings in cabinets'], prevent: ['Eliminate standing water', 'Clean grease & crumbs', 'Seal cracks and drains'] },
  { name: 'Rodents', img: '/img/photo-rodent.jpg', risk: 'Damage / disease', about: 'Mice and rats gnaw wiring and contaminate food, and a small entry point is all they need to nest indoors.', signs: ['Gnaw marks & droppings', 'Scratching in walls', 'Shredded nesting material'], prevent: ['Seal gaps larger than ¼"', 'Store food securely', 'Declutter storage areas'] },
  { name: 'Mosquitoes', img: '/img/photo-mosquito.jpg', risk: 'Bites / disease', about: 'Mosquitoes breed in standing water and can transmit disease, making outdoor spaces unusable in season.', signs: ['Biting at dawn & dusk', 'Larvae in still water', 'Swarms near shaded areas'], prevent: ['Empty standing water weekly', 'Maintain gutters', 'Use perimeter treatments'] },
  { name: 'Termites', img: '/img/photo-termite.jpg', risk: 'Structural damage', about: 'Termites silently consume wood from the inside out, causing billions in property damage every year.', signs: ['Mud tubes on foundations', 'Hollow-sounding wood', 'Discarded wings'], prevent: ['Keep wood off soil', 'Reduce moisture', 'Schedule annual inspections'] },
  { name: 'Bed Bugs', img: '/img/photo-bedbug.jpg', risk: 'Bites / infestation', about: 'Bed bugs hitchhike on luggage and furniture, hiding in mattress seams and multiplying fast.', signs: ['Rusty spots on bedding', 'Itchy bite lines', 'Sweet, musty smell'], prevent: ['Inspect second-hand furniture', 'Reduce clutter', 'Encase mattresses'] },
];
