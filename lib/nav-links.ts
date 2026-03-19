export interface NavLink {
  href: string;
  label: string;
  sectionId?: string; // For smooth scrolling on home page
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', sectionId: 'hero' },
  { href: '/about', label: 'About', sectionId: 'about' },
  { href: '/#services', label: 'Services', sectionId: 'services' },
  { href: '/tributes', label: 'Tributes', sectionId: 'tributes' },
  { href: '/#prices', label: 'Prices', sectionId: 'prices' },
  { href: '/#contact', label: 'Contact', sectionId: 'contact' },
];
