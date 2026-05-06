import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title: 'Direct Cremations Carlisle | From £1,695 | Final Journey Funerals',
  description:
    'Affordable direct cremation services in Carlisle and Cumbria from £1,695. Simple, respectful cremation without a funeral service. Transparent pricing, no hidden fees. Serving Penrith, Keswick, Wigton and all of Cumbria.',
  keywords: [
    'direct cremation Carlisle',
    'affordable cremation Cumbria',
    'simple cremation',
    'cremation without service',
    'budget funeral Carlisle',
  ],
};

export default function DirectCremationsPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/direct_cremation.webp"
      imageAlt="Direct cremation service"
      titleLine1="Direct"
      titleLine2="Cremations"
      subtitle="A Simple Alternative"
      description={
        <>
          <p>
            A direct cremation offers a straightforward and respectful option
            for those who prefer simplicity. Without a traditional funeral
            service, this choice gives families the freedom to commemorate their
            loved one in their own time and way.
          </p>
          <p>
            Many families choose to hold a celebration of life at a later date,
            scatter ashes at a meaningful location, or create a private
            memorial. The choice is entirely yours.
          </p>
        </>
      }
      listTitle="What's Included"
      listItems={[
        'Collection and care of your loved one',
        'Simple coffin suitable for cremation',
        'All necessary documentation and paperwork',
        'Cremation at a local crematorium',
        'Return of ashes in a simple container',
        'Guidance and support throughout the process',
      ]}
    />
  );
}
