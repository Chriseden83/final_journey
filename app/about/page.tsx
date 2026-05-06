import type { Metadata } from 'next';
import AnimatedAboutContent from '@/components/AnimatedAboutContent';

export const metadata: Metadata = {
  title:
    'About Us | Independent Funeral Directors Carlisle | Final Journey Funerals',
  description:
    'Family-focused independent funeral directors in Carlisle, Cumbria. We believe in compassion, transparency, and creating meaningful farewells. Learn about our values and approach to funeral care.',
  keywords: [
    'funeral directors Carlisle',
    'independent funeral home Cumbria',
    'family funeral directors',
    'about Final Journey Funerals',
    'compassionate funeral care',
  ],
};

export default function About() {
  return <AnimatedAboutContent />;
}
