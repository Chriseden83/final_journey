import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Funeral Directors Carlisle | Final Journey Funerals',
  description:
    'Contact Final Journey Funerals in Carlisle. Call 01228 595060 or visit us at 2 Durdar Road, Carlisle CA2 4SA. Compassionate support when you need it most.',
  keywords: [
    'contact funeral directors Carlisle',
    'funeral home phone number',
    'Carlisle funeral services contact',
    'Final Journey Funerals address',
    'funeral arrangements Cumbria',
  ],
  openGraph: {
    title: 'Contact Us | Final Journey Funerals',
    description:
      'Get in touch with our compassionate team. Call 01228 595060 or visit our Carlisle office.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
