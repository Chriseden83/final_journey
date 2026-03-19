'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links';

export default function DesktopNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Handle nav click - smooth scroll on home, navigate on other pages
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
      if (isHomePage && sectionId) {
        e.preventDefault();
        scrollToSection(sectionId);
      }
    },
    [isHomePage, scrollToSection],
  );

  return (
    <ul className="nav-links-desktop" role="list">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
