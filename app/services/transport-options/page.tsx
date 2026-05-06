import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title:
    'Funeral Transport Options | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'Dignified funeral transport services in Carlisle and across Cumbria. Traditional hearses and alternative options available. We ensure your loved one travels with care and respect.',
  keywords: [
    'funeral transport Carlisle',
    'hearse hire Cumbria',
    'funeral cars',
    'alternative funeral transport',
    'dignified transport',
  ],
};

export default function TransportOptionsPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/transport_options.webp"
      imageAlt="Funeral transport options"
      titleLine1="Transport"
      titleLine2="Options"
      subtitle="Travel With Dignity"
      description={
        <>
          <p>
            The journey to the final resting place is an important part of
            saying goodbye. We offer a range of transport options to suit
            different preferences, traditions, and budgets.
          </p>
          <p>
            Whether you prefer a traditional hearse or something more unique
            that reflects your loved one&apos;s personality, we can help
            arrange the perfect transport for this significant journey.
          </p>
        </>
      }
      listTitle="Available Options"
      listItems={[
        'Traditional hearse with professional bearers',
        'Limousines for family members',
        'Horse-drawn carriages',
        'Motorcycle hearses',
        'Classic and vintage vehicles',
        'Alternative transport to reflect personal interests',
      ]}
    />
  );
}
