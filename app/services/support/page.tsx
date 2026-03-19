import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support & Guidance | Final Journey Funerals',
  description:
    "Compassionate support and guidance through bereavement in Dorset. We're here to help with practical matters and emotional support during difficult times.",
};

export default function SupportPage() {
  return (
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src="/images/support.webp"
                alt="Support and guidance"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <h1 className="service-hero-title">
                Support &
                <br />
                Guidance
              </h1>
              <div className="service-hero-underline" />
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <h2>We&apos;re Here For You</h2>
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
              <h2>How We Support You</h2>
              <ul>
                <li>24-hour availability when you need us</li>
                <li>Guidance on registering a death</li>
                <li>Help with probate and legal matters</li>
                <li>Bereavement counselling referrals</li>
                <li>Support group information</li>
                <li>Assistance with notifications and paperwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
