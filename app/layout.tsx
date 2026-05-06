import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import TitleGuard from '@/components/TitleGuard';
import { siteConfig } from '@/lib/seo-config';
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from '@/lib/structured-data';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1f2e',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'Final Journey Funerals | Independent Funeral Directors Carlisle, Cumbria',
    template: '%s | Final Journey Funerals Carlisle',
  },
  description:
    'Independent funeral directors in Carlisle, Cumbria. Compassionate, affordable funeral services including direct cremations from £1,695, personalised funerals, and dedicated bereavement support. Serving Carlisle, Penrith, Wigton, Brampton and all of Cumbria.',
  keywords: [
    'funeral directors carlisle',
    'funeral directors cumbria',
    'funeral services carlisle',
    'independent funeral directors carlisle',
    'cremation services carlisle',
    'direct cremation carlisle',
    'direct cremation cumbria',
    'affordable funerals carlisle',
    'funeral home carlisle',
    'bereavement support cumbria',
    'personalised funerals carlisle',
    'funeral arrangements carlisle',
    'funeral planning cumbria',
    'funeral directors penrith',
    'funeral directors wigton',
  ],
  authors: [{ name: 'Final Journey Funerals' }],
  creator: 'Final Journey Funerals',
  publisher: 'Final Journey Funerals',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: 'Final Journey Funerals',
    title:
      'Final Journey Funerals | Independent Funeral Directors Carlisle, Cumbria',
    description:
      'Compassionate, independent funeral directors serving Carlisle and Cumbria. Direct cremations from £1,695. Personalised funerals tailored to celebrate unique lives.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Final Journey Funerals - Compassionate Funeral Directors in Carlisle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Journey Funerals | Funeral Directors Carlisle, Cumbria',
    description:
      'Independent funeral directors in Carlisle. Direct cremations from £1,695. Compassionate, affordable funeral services across Cumbria.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have the verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Funeral Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <TitleGuard />
        {/* Skip to main content link for keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content" className="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
