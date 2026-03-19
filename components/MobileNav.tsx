'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Spin as Hamburger } from 'hamburger-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { navLinks } from '@/lib/nav-links';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Close menu helper
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback(
    (sectionId: string) => {
      closeMenu();
      // Small delay to allow menu to close first
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    },
    [closeMenu],
  );

  // Handle nav click - smooth scroll on home, navigate on other pages
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
      if (isHomePage && sectionId) {
        e.preventDefault();
        scrollToSection(sectionId);
      } else {
        closeMenu();
      }
    },
    [isHomePage, scrollToSection, closeMenu],
  );

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Hamburger Button - visible only on mobile/tablet */}
      <div className={`hamburger-wrapper ${isOpen ? 'hamburger-open' : ''}`}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          label="Toggle navigation menu"
          hideOutline={false}
        />
      </div>

      {/* Overlay backdrop */}
      <div
        className={`mobile-overlay ${isOpen ? 'mobile-overlay-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-in menu from right */}
      <nav
        className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Logo/Brand at top */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-brand">
            <Image
              src="/icons/logo.svg"
              alt="Final Journey Funerals"
              width={52}
              height={52}
              className="mobile-menu-logo"
              style={{ width: '52px', height: '52px' }}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="mobile-nav-links" role="list">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`mobile-nav-item ${isOpen ? 'mobile-nav-item-visible' : ''}`}
                style={{
                  transitionDelay: isOpen ? `${index * 80 + 200}ms` : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom section with social */}
        <div
          className={`mobile-menu-footer ${isOpen ? 'mobile-menu-footer-visible' : ''}`}
        >
          <div className="mobile-menu-social">
            <a
              href="https://www.facebook.com/finaljourneyfunerals"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/finaljourneyfunerals"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
