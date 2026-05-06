import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

// Server component - no client state needed
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/logo.svg"
                alt="Final Journey Funerals logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold text-white">
                Final Journey
              </span>
            </div>
            <p className="footer-text max-w-xs">
              Compassionate funeral services that honour your loved ones with
              respect and care.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:01228595060" className="footer-link block">
                01228 595060
              </a>
              <a href="tel:07745354100" className="footer-link block">
                07745 354100
              </a>
              <p className="footer-text">Carlisle, Cumbria</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/" className="footer-link">
                Home
              </Link>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
              <Link href="/services" className="footer-link">
                Services
              </Link>
              <Link href="/tributes" className="footer-link">
                Tributes
              </Link>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/finaljourneyfunerals"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/finaljourneyfunerals"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link transition-colors"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} Final Journey Funerals. All rights
            reserved.
          </p>
          <p className="footer-text">
            Created by{' '}
            <a href="mailto:ceden1983@gmail.com" className="footer-link">
              Chris Eden
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
