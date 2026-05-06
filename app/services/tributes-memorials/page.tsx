import type { Metadata } from 'next';
import { AnimatedServiceHero } from '@/components/AnimatedServiceHero';

export const metadata: Metadata = {
  title: 'Tributes & Memorials | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'Create lasting tributes and memorials for your loved ones in Carlisle and Cumbria. Online memorial pages, MuchLoved tributes, and physical keepsakes to preserve precious memories.',
  keywords: [
    'funeral tributes Carlisle',
    'memorial pages Cumbria',
    'online obituary',
    'MuchLoved tributes',
    'remembrance keepsakes',
  ],
};

export default function TributesMemorialsPage() {
  return (
    <AnimatedServiceHero
      imageSrc="/images/service_booklet.webp"
      imageAlt="Tributes and memorials"
      titleLine1="Tributes &"
      titleLine2="Memorials"
      subtitle="Preserving Memories"
      description={
        <>
          <p>
            A meaningful tribute helps keep the memory of your loved one
            alive for generations to come. We offer various ways to create
            lasting memorials that can be treasured and shared.
          </p>
          <p>
            From digital tributes that friends and family can visit from
            anywhere in the world, to physical keepsakes that provide
            comfort in difficult times, there are many beautiful ways to
            remember.
          </p>
        </>
      }
      listTitle="Memorial Options"
      listItems={[
        'Online memorial pages through MuchLoved',
        'Memorial jewellery and keepsakes',
        'Photo and video tribute presentations',
        'Memory books and guest books',
        'Memorial benches and trees',
        'Commemorative artwork and portraits',
      ]}
    />
  );
}
