import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title:
    'Personalised Funerals Carlisle | Bespoke Services | Final Journey Funerals',
  description:
    "Create a meaningful, personalised funeral service in Carlisle that truly celebrates your loved one's life. Bespoke funerals tailored to your wishes. Serving families across Cumbria including Penrith, Keswick, and Wigton.",
  keywords: [
    'personalised funeral Carlisle',
    'bespoke funeral Cumbria',
    'unique funeral service',
    'celebration of life Carlisle',
    'funeral directors Cumbria',
  ],
};

export default function PersonalisedFuneralsPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/bagpipes.webp"
      imageAlt="Personalised funeral service"
      titleLine1="Personalised"
      titleLine2="Funerals"
      subtitle="A Celebration of Life"
      description={
        <>
          <p>
            Every life is unique, and the funeral service should reflect
            that individuality. At Final Journey Funerals, we work closely
            with you to create a personalised tribute that honours your
            loved one in a way that feels right.
          </p>
          <p>
            From the choice of music and readings to the style of the
            service itself, every detail can be tailored to celebrate the
            person you love. Whether you envision a traditional ceremony or
            something more contemporary, we&apos;re here to help bring your
            vision to life.
          </p>
        </>
      }
      listTitle="What We Offer"
      listItems={[
        'Bespoke service planning and coordination',
        'Choice of venue – chapel, church, woodland, or home',
        'Personalised music, readings, and tributes',
        'Memorial stationery and order of service',
        'Floral arrangements and decorations',
        'Audio-visual tributes and live streaming',
      ]}
    />
  );
}
