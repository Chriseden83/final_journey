import Image from 'next/image';
import type { Metadata } from 'next';

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
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/bagpipes.webp"
                alt="Personalised funeral service"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Personalised
                <br />
                Funerals
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>A Celebration of Life</h2>
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
              <h2>What We Offer</h2>
              <ul>
                <li>Bespoke service planning and coordination</li>
                <li>Choice of venue – chapel, church, woodland, or home</li>
                <li>Personalised music, readings, and tributes</li>
                <li>Memorial stationery and order of service</li>
                <li>Floral arrangements and decorations</li>
                <li>Audio-visual tributes and live streaming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
