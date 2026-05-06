import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title:
    'Bereavement Support Carlisle | Guidance & Care | Final Journey Funerals',
  description:
    "Compassionate bereavement support and guidance in Carlisle and Cumbria. We're here to help with practical matters and emotional support during difficult times. Free grief chat available.",
  keywords: [
    'bereavement support Carlisle',
    'grief support Cumbria',
    'funeral guidance',
    'what to do when someone dies',
    'bereavement help Carlisle',
  ],
};

export default function SupportPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/support.webp"
      imageAlt="Support and guidance"
      titleLine1="Support &"
      titleLine2="Guidance"
      subtitle="We're Here For You"
      description={
        <>
          <p>
            Losing someone you love is one of life&apos;s most difficult
            experiences. During this time, you shouldn&apos;t have to
            navigate the practicalities alone. Our caring team is here to
            guide you through every step.
          </p>
          <p>
            Beyond the funeral itself, we can help connect you with support
            services and provide guidance on the many practical matters that
            need attention after a bereavement.
          </p>
        </>
      }
      listTitle="How We Support You"
      listItems={[
        '24-hour availability when you need us',
        'Guidance on registering a death',
        'Help with probate and legal matters',
        'Bereavement counselling referrals',
        'Support group information',
        'Assistance with notifications and paperwork',
      ]}
    />
  );
}
