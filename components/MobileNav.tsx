'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Spin as Hamburger } from 'hamburger-react';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

// Main navigation links
const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/funeral-costs', label: 'Pricing' },
  { href: '/what-to-do-when-someone-dies', label: 'What To Do?' },
  { href: '/grief-chat', label: 'Grief Chat' },
  { href: '/tributes', label: 'Tributes' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu helper
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

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

  // Check if current path is a service page
  const isServicePage = pathname.startsWith('/services');

  return (
    <>
      {/* Hamburger Button */}
      <div className={`hamburger-wrapper ${isOpen ? 'hamburger-open' : ''}`}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={26}
          label="Toggle navigation menu"
          hideOutline={false}
          rounded
        />
      </div>

      {/* Overlay backdrop */}
      <div
        className={`mobile-premium-backdrop ${isOpen ? 'mobile-premium-backdrop-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* 80% width slide-in menu */}
      <div
        className={`mobile-menu-premium ${isOpen ? 'mobile-menu-premium-open' : ''}`}
        aria-hidden={!isOpen}
      >
        {/* Header section - Navy background */}
        <div className="mobile-premium-header">
          <div className="mobile-premium-header-content">
            <Image
              src="/icons/logo.svg"
              alt="Final Journey Funerals"
              width={56}
              height={56}
              className="mobile-premium-logo"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mobile-premium-nav" aria-label="Mobile navigation">
          <ul className="mobile-premium-links">
            {mainLinks.slice(0, 2).map((link, index) => (
              <li
                key={link.href}
                className={`mobile-premium-item ${isOpen ? 'mobile-premium-item-visible' : ''}`}
                style={{
                  transitionDelay: isOpen ? `${index * 50 + 150}ms` : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  className={`mobile-premium-link ${pathname === link.href ? 'mobile-premium-link-active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services Link */}
            <li
              className={`mobile-premium-item ${isOpen ? 'mobile-premium-item-visible' : ''}`}
              style={{ transitionDelay: isOpen ? '250ms' : '0ms' }}
            >
              <Link
                href="/#services"
                className={`mobile-premium-link ${isServicePage ? 'mobile-premium-link-active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            {mainLinks.slice(2).map((link, index) => (
              <li
                key={link.href}
                className={`mobile-premium-item ${isOpen ? 'mobile-premium-item-visible' : ''}`}
                style={{
                  transitionDelay: isOpen
                    ? `${(index + 3) * 50 + 150}ms`
                    : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  className={`mobile-premium-link ${pathname === link.href ? 'mobile-premium-link-active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone CTA Bar - Full width */}
        <a
          href="tel:01228595060"
          className={`mobile-premium-phone-bar ${isOpen ? 'mobile-premium-phone-bar-visible' : ''}`}
        >
          <div className="mobile-premium-phone-icon">
            <FaPhone className="w-5 h-5" />
          </div>
          <div className="mobile-premium-phone-text">
            <span className="mobile-premium-phone-label">Call us now</span>
            <span className="mobile-premium-phone-number">01228 595060</span>
          </div>
        </a>

        {/* Footer */}
        <div
          className={`mobile-premium-footer ${isOpen ? 'mobile-premium-footer-visible' : ''}`}
        >
          {/* Social Links */}
          <div className="mobile-premium-social">
            <a
              href="https://www.facebook.com/finaljourneyfunerals"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-premium-social-link"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/finaljourneyfunerals"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-premium-social-link"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
