import type { Metadata } from 'next';
import AnimatedTributesContent from '@/components/AnimatedTributesContent';

export const metadata: Metadata = {
  title: 'Tributes & Obituaries | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'View and search tributes for those we have had the honour to serve in Carlisle and Cumbria. Leave your condolences and celebrate the lives of loved ones.',
  keywords: [
    'funeral tributes Carlisle',
    'obituaries Cumbria',
    'condolences',
    'memorial tributes',
    'remembrance pages',
  ],
};

export default function TributesPage() {
  return <AnimatedTributesContent />;
}
