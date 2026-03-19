import Link from 'next/link';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import logo from '@/public/icons/logo.svg';
import logoFull from '@/public/icons/logoFull.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo - server rendered */}
        <Link href="/" className="logo" aria-label="Final Journey - Home">
          {/* Mobile logo */}
          <Image
            src={logo}
            alt="Final Journey Logo"
            width={70}
            height={60}
            className="logo-mobile"
          />
          {/* Desktop full logo */}
          <Image
            src={logoFull}
            alt="Final Journey Logo"
            width={160}
            height={60}
            className="logo-desktop"
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </nav>
    </header>
  );
}
