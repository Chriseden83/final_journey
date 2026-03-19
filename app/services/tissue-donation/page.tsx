import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tissue Donation | Final Journey Funerals',
  description:
    'Supporting tissue donation in Dorset. We guide families through the donation process with compassion, helping your loved one give the gift of life.',
};

export default function TissueDonationPage() {
  return (
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/tissue_donation.webp"
                alt="Tissue donation support"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Tissue
                <br />
                Donation
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>The Gift of Life</h2>
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
              <h2>How We Can Help</h2>
              <ul>
                <li>Information about the donation process</li>
                <li>Coordination with NHS Blood and Transplant</li>
                <li>Support with paperwork and documentation</li>
                <li>Flexible timing to accommodate donation</li>
                <li>Guidance on what to expect</li>
                <li>Emotional support for families throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
