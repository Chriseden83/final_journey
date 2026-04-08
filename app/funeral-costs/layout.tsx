import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Funeral Costs & Pricing Carlisle | From £1,695 | Final Journey Funerals',
  description:
    'Transparent funeral pricing in Carlisle and Cumbria. Direct cremations from £1,695, attended cremations from £2,995. No hidden fees. Compare our affordable funeral costs.',
  keywords: [
    'funeral costs Carlisle',
    'funeral prices Cumbria',
    'cremation prices Carlisle',
    'direct cremation cost',
    'funeral director prices Carlisle',
    'affordable funerals Cumbria',
    'cheap funerals Carlisle',
    'funeral price list',
  ],
  openGraph: {
    title: 'Funeral Costs & Pricing | Final Journey Funerals Carlisle',
    description:
      'Transparent funeral pricing with no hidden fees. Direct cremations from £1,695. Serving Carlisle, Penrith, Keswick and all of Cumbria.',
    type: 'website',
  },
};

export default function FuneralCostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
