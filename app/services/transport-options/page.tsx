import Image from 'next/image';
import type { Metadata } from 'next';

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
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/transport_options.webp"
                alt="Funeral transport options"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Transport
                <br />
                Options
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>Travel With Dignity</h2>
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
              <h2>Available Options</h2>
              <ul>
                <li>Traditional hearse with professional bearers</li>
                <li>Limousines for family members</li>
                <li>Horse-drawn carriages</li>
                <li>Motorcycle hearses</li>
                <li>Classic and vintage vehicles</li>
                <li>Alternative transport to reflect personal interests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
