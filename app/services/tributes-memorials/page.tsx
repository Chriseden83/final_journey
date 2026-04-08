import Image from 'next/image';
import type { Metadata } from 'next';

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
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/service_booklet.webp"
                alt="Tributes and memorials"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Tributes &
                <br />
                Memorials
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>Preserving Memories</h2>
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
              <h2>Memorial Options</h2>
              <ul>
                <li>Online memorial pages through MuchLoved</li>
                <li>Memorial jewellery and keepsakes</li>
                <li>Photo and video tribute presentations</li>
                <li>Memory books and guest books</li>
                <li>Memorial benches and trees</li>
                <li>Commemorative artwork and portraits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
