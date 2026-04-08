import Link from 'next/link';
import { Phone, Heart, MessageCircle } from 'lucide-react';
import TawkWidget from '@/components/TawkWidget';

export const metadata = {
  title:
    'Free Grief Chat Support | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'Free bereavement support through GriefChat in Carlisle and Cumbria. Speak directly to trained bereavement counsellors who can help you through this difficult time. Available online.',
  keywords: [
    'grief chat',
    'bereavement support Carlisle',
    'free grief counselling',
    'bereavement chat Cumbria',
    'grief support online',
  ],
};

export default function GriefChatPage() {
  return (
    <>
      {/* Tawk.to GriefChat Widget - Only shows on this page */}
      <TawkWidget />

      <main className="guide-page">
        {/* Hero Section */}
        <section className="guide-hero">
          <div className="guide-hero-content">
            <Heart className="w-16 h-16 mx-auto mb-6 text-[#c9a962]" />
            <h1 className="guide-hero-title">Grief Chat</h1>
            <p className="guide-hero-subtitle">
              Free, confidential support from trained bereavement counsellors
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="guide-content">
          <div className="guide-container">
            <div className="guide-section">
              <div className="guide-card">
                <p className="mb-4 text-lg leading-relaxed text-(--text-secondary)">
                  Most people expect to be very upset or distressed when someone
                  close to them has died. What takes many people by surprise is
                  how strong the emotions can be, how they can change very
                  quickly, and how long they last.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-(--text-secondary)">
                  People around you may seem to think you should be &apos;back
                  to normal&apos; after a few weeks or months. You might appear
                  to be your usual self to other people, but you know that on
                  the inside, you&apos;re not even sure what normal is anymore.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-(--text-secondary)">
                  Everyone grieves in a way that is unique to them and their
                  relationship with the person who has died. Well-intentioned
                  people may say to you, &apos;Time is a great healer&apos;.
                  Sometimes, however, it can seem that life is more difficult as
                  the weeks and months go by.
                </p>
                <p className="text-lg leading-relaxed text-(--text-secondary)">
                  We know that no-one can understand exactly what your loss
                  feels like to you. But we do understand that it&apos;s
                  sometimes easier to talk to someone outside of your friends
                  and family about grief and the impact of bereavement on your
                  life &ndash; and this is why we offer the GriefChat service.
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h2 className="flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-[#c9a962]" />
                About GriefChat
              </h2>
              <div className="guide-card guide-card-branded">
                <p className="mb-4">
                  GriefChat was created by bereavement experts. By clicking on
                  the chat box in the bottom right corner of this page, you can
                  chat directly to a specially trained bereavement counsellor.
                </p>
                <p className="mb-6">
                  GriefChat counsellors are experienced in supporting bereaved
                  people and will listen to your story, explore how your grief
                  is affecting you, and help you to find any additional support
                  you might need.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg bg-(--cream)">
                    <span className="block text-sm font-medium mb-1 text-(--text-muted)">
                      Cost
                    </span>
                    <span className="block font-semibold text-(--navy-dark)">
                      Completely Free
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-(--cream)">
                    <span className="block text-sm font-medium mb-1 text-(--text-muted)">
                      Available
                    </span>
                    <span className="block font-semibold text-(--navy-dark)">
                      Monday &ndash; Friday, 9am &ndash; 9pm
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-(--cream)">
                    <span className="block text-sm font-medium mb-1 text-(--text-muted)">
                      Out of Hours
                    </span>
                    <span className="block font-semibold text-(--navy-dark)">
                      Leave a message via email
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <div className="guide-card">
                <h3 className="text-xl font-semibold mb-4 text-(--navy-dark)">
                  GriefChat Provides:
                </h3>
                <ul className="pl-6 space-y-2 list-disc text-(--text-secondary)">
                  <li>Emotional support for bereaved people</li>
                  <li>Access to trained bereavement counsellors</li>
                  <li>Referral into specialist bereavement services</li>
                  <li>A safe, confidential space to talk</li>
                  <li>Understanding without judgement</li>
                </ul>
              </div>
            </div>

            <div className="guide-section">
              <div
                className="p-6 rounded-lg text-center"
                style={{
                  background:
                    'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
                }}
              >
                <p className="text-lg text-white">
                  <strong className="text-[#c9a962]">To start chatting</strong>,
                  look for the chat icon in the bottom right corner of this
                  page. Click on it to connect with a bereavement counsellor.
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h2>Other Ways We Can Help</h2>
              <div className="options-grid">
                <div className="option-card">
                  <h4>What to Do When Someone Dies</h4>
                  <p>
                    Our practical guide walks you through each step, from the
                    first phone call to organising the funeral.
                  </p>
                  <Link href="/what-to-do-when-someone-dies">
                    Read our guide
                  </Link>
                </div>
                <div className="option-card">
                  <h4>Support Services</h4>
                  <p>
                    Learn about the full range of support we provide to families
                    during difficult times.
                  </p>
                  <Link href="/services/support">View support services</Link>
                </div>
                <div className="option-card">
                  <h4>Contact Us Directly</h4>
                  <p>
                    If you prefer to speak to us on the phone or in person,
                    we&apos;re here to help.
                  </p>
                  <Link href="/contact">Get in touch</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="guide-cta">
          <div className="guide-cta-content">
            <h2>We&apos;re Here For You</h2>
            <p>
              Whether you need practical help with funeral arrangements or
              simply someone to talk to, our compassionate team is ready to
              support you.
            </p>
            <div className="guide-cta-buttons">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="tel:01228595060"
                className="btn-secondary guide-phone-btn"
              >
                <Phone className="phone-icon" />
                01228 595060
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
