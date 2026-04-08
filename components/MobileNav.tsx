'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Spin as Hamburger } from 'hamburger-react';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaChevronDown,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

// Service sub-links for accordion
const serviceLinks = [
  { href: '/services/personalised-funerals', label: 'Personalised Funerals' },
  { href: '/services/direct-cremations', label: 'Direct Cremations' },
  { href: '/services/tributes-memorials', label: 'Tributes & Memorials' },
  { href: '/services/transport-options', label: 'Transport Options' },
  { href: '/services/tissue-donation', label: 'Tissue Donation' },
  { href: '/services/support', label: 'Support & Guidance' },
];

// Main navigation links
const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/funeral-costs', label: 'Pricing' },
  { href: '/what-to-do-when-someone-dies', label: 'Bereavement Guide' },
  { href: '/grief-chat', label: 'Grief Chat' },
  { href: '/tributes', label: 'Tributes' },
  { href: '/contact', label: 'Contact' },
];

// Check if currently open based on business hours
function getOpenStatus(): { isOpen: boolean; statusText: string } {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Monday-Friday 9am-5pm
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    return { isOpen: true, statusText: 'Open now · Closes 5pm' };
  }
  // Saturday 9am-12pm
  if (day === 6 && hour >= 9 && hour < 12) {
    return { isOpen: true, statusText: 'Open now · Closes 12pm' };
  }

  // Calculate next open time
  if (day === 0) return { isOpen: false, statusText: 'Opens Monday 9am' };
  if (day === 6 && hour >= 12)
    return { isOpen: false, statusText: 'Opens Monday 9am' };
  if (hour < 9) return { isOpen: false, statusText: 'Opens today 9am' };
  return { isOpen: false, statusText: 'Opens tomorrow 9am' };
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [openStatus, setOpenStatus] = useState({
    isOpen: false,
    statusText: '',
  });
  const pathname = usePathname();

  // Update open status on mount and periodically
  useEffect(() => {
    setOpenStatus(getOpenStatus());
    const interval = setInterval(() => {
      setOpenStatus(getOpenStatus());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Close menu helper
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    // Reset services accordion after menu closes
    setTimeout(() => setServicesExpanded(false), 300);
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
              width={44}
              height={44}
              className="mobile-premium-logo"
            />
            <div className="mobile-premium-brand">
              <span className="mobile-premium-brand-name">Final Journey</span>
              <span className="mobile-premium-brand-tagline">
                Funeral Directors
              </span>
            </div>
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

            {/* Services Accordion */}
            <li
              className={`mobile-premium-item ${isOpen ? 'mobile-premium-item-visible' : ''}`}
              style={{ transitionDelay: isOpen ? '250ms' : '0ms' }}
            >
              <button
                className={`mobile-premium-link mobile-premium-accordion-trigger ${isServicePage ? 'mobile-premium-link-active' : ''}`}
                onClick={() => setServicesExpanded(!servicesExpanded)}
                aria-expanded={servicesExpanded}
              >
                <span>Our Services</span>
                <FaChevronDown
                  className={`mobile-premium-accordion-icon ${servicesExpanded ? 'mobile-premium-accordion-icon-open' : ''}`}
                />
              </button>

              <div
                className={`mobile-premium-accordion ${servicesExpanded ? 'mobile-premium-accordion-open' : ''}`}
              >
                <ul className="mobile-premium-sublinks">
                  {serviceLinks.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className={`mobile-premium-sublink ${pathname === service.href ? 'mobile-premium-sublink-active' : ''}`}
                        onClick={closeMenu}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
            <span className="mobile-premium-phone-status">
              <FaClock className="mobile-premium-status-icon" />
              <span
                className={openStatus.isOpen ? 'status-open' : 'status-closed'}
              >
                {openStatus.statusText}
              </span>
            </span>
          </div>
        </a>

        {/* Footer */}
        <div
          className={`mobile-premium-footer ${isOpen ? 'mobile-premium-footer-visible' : ''}`}
        >
          {/* Address */}
          <div className="mobile-premium-address">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>2 Durdar Road, Carlisle, CA2 4SA</span>
          </div>

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
