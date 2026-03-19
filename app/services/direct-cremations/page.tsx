import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direct Cremations | Final Journey Funerals',
  description:
    'Simple, dignified direct cremation services in Dorset. An affordable option without a traditional funeral service, allowing families to commemorate in their own way.',
};

export default function DirectCremationsPage() {
  return (
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/direct_cremation.webp"
                alt="Direct cremation service"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Direct
                <br />
                Cremations
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>A Simple Alternative</h2>
              <p>
                A direct cremation offers a straightforward and dignified option
                for those who prefer simplicity. Without a traditional funeral
                service, this choice gives families the freedom to commemorate
                their loved one in their own time and way.
              </p>
              <p>
                Many families choose to hold a celebration of life at a later
                date, scatter ashes at a meaningful location, or create a
                private memorial. The choice is entirely yours.
              </p>
              <h2>What&apos;s Included</h2>
              <ul>
                <li>Collection and care of your loved one</li>
                <li>Simple coffin suitable for cremation</li>
                <li>All necessary documentation and paperwork</li>
                <li>Cremation at a local crematorium</li>
                <li>Return of ashes in a simple container</li>
                <li>Guidance and support throughout the process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
