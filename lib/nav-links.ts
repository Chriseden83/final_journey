export interface NavLink {
  href: string;
  label: string;
  sectionId?: string; // For smooth scrolling on home page
  icon:
    | 'home'
    | 'about'
    | 'services'
    | 'tributes'
    | 'prices'
    | 'contact'
    | 'guide'
    | 'grief';
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', sectionId: 'hero', icon: 'home' },
  { href: '/about', label: 'About', sectionId: 'about', icon: 'about' },
  {
    href: '/#services',
    label: 'Services',
    sectionId: 'services',
    icon: 'services',
  },
  {
    href: '/#guide',
    label: 'What to Do?',
    sectionId: 'guide',
    icon: 'guide',
  },
  {
    href: '/grief-chat',
    label: 'Grief Chat',
    icon: 'grief',
  },
  {
    href: '/tributes',
    label: 'Tributes',
    icon: 'tributes',
  },
  {
    href: '/funeral-costs',
    label: 'Prices',
    icon: 'prices',
  },
  {
    href: '/contact',
    label: 'Contact',
    sectionId: 'contact',
    icon: 'contact',
  },
];
