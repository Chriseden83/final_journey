import type { Metadata } from 'next';
import AnimatedWhatToDoContent from '@/components/AnimatedWhatToDoContent';

export const metadata: Metadata = {
  title:
    'What to Do When Someone Dies | Guide | Final Journey Funerals Carlisle',
  description:
    'A helpful guide on the steps to take when someone passes away in Carlisle or Cumbria. From obtaining a medical certificate to organising the funeral, we guide you through every step.',
  keywords: [
    'what to do when someone dies',
    'death registration Carlisle',
    'funeral planning guide',
    'bereavement steps Cumbria',
    'after death checklist',
  ],
};

export default function WhatToDoPage() {
  return <AnimatedWhatToDoContent />;
}
