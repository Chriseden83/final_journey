import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title:
    'Tissue Donation Support | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'Supporting tissue donation in Carlisle and Cumbria. We guide families through the donation process with compassion, helping your loved one give the gift of life. Experienced funeral directors.',
  keywords: [
    'tissue donation Carlisle',
    'organ donation funeral',
    'donation after death Cumbria',
    'gift of life funeral',
  ],
};

export default function TissueDonationPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/tissue_donation.webp"
      imageAlt="Tissue donation support"
      titleLine1="Tissue"
      titleLine2="Donation"
      subtitle="The Gift of Life"
      description={
        <>
          <p>
            Tissue donation can transform and save lives. If your loved one
            wished to be a donor, or if this is something your family is
            considering, we can help guide you through the process with
            sensitivity and care.
          </p>
          <p>
            Donation does not affect funeral arrangements or the appearance
            of your loved one. It is a personal decision that can bring
            comfort knowing that others will benefit from such generosity.
          </p>
        </>
      }
      listTitle="How We Can Help"
      listItems={[
        'Information about the donation process',
        'Coordination with NHS Blood and Transplant',
        'Support with paperwork and documentation',
        'Flexible timing to accommodate donation',
        'Guidance on what to expect',
        'Emotional support for families throughout',
      ]}
    />
  );
}
