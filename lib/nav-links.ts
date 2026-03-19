export interface NavLink {
  href: string;
  label: string;
  sectionId?: string; // For smooth scrolling on home page
  icon: 'home' | 'about' | 'services' | 'tributes' | 'prices' | 'contact';
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
    href: '/tributes',
    label: 'Tributes',
    sectionId: 'tributes',
    icon: 'tributes',
  },
  { href: '/#prices', label: 'Prices', sectionId: 'prices', icon: 'prices' },
  {
    href: '/#contact',
    label: 'Contact',
    sectionId: 'contact',
    icon: 'contact',
  },
];
