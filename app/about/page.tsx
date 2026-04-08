import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'About Us | Independent Funeral Directors Carlisle | Final Journey Funerals',
  description:
    'Family-focused independent funeral directors in Carlisle, Cumbria. We believe in compassion, transparency, and creating meaningful farewells. Learn about our values and approach to funeral care.',
  keywords: [
    'funeral directors Carlisle',
    'independent funeral home Cumbria',
    'family funeral directors',
    'about Final Journey Funerals',
    'compassionate funeral care',
  ],
};

// Core values
const values = [
  {
    title: 'Compassion First',
    description:
      'Every family deserves kindness and understanding. We listen without judgement and support you through every decision.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Complete Transparency',
    description:
      'No hidden fees, no surprises. We provide clear pricing upfront so you can make informed decisions without financial stress.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Personal Attention',
    description:
      'You will always deal directly with Tracy. No call centres, no strangers—just one consistent point of contact who knows your family.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Truly Individual',
    description:
      'No two lives are the same. We create bespoke farewells that genuinely reflect who your loved one was, not what tradition expects.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

// What makes us different
const differentiators = [
  {
    stat: '100%',
    label: 'Dedicated',
    description:
      'Personal attention from Tracy throughout—no call centres, just genuine care.',
  },
  {
    stat: '100%',
    label: 'Independent',
    description:
      'Family-owned, locally operated. No corporate pressure, just genuine care.',
  },
  {
    stat: '£1,695',
    label: 'Direct Cremation',
    description:
      'Affordable options without compromising on dignity or quality of care.',
  },
  {
    stat: '5★',
    label: 'Google Reviews',
    description:
      'Consistently rated excellent by the families we have supported.',
  },
];

// Accreditations
const accreditations = [
  { name: 'Good Funeral Guild', description: 'Member' },
  { name: 'Natural Death Centre', description: 'Recommended' },
  { name: 'Green Funeral Directors', description: 'Affiliated' },
  { name: 'Three Best Rated', description: 'Top 3 in Carlisle' },
];

// Testimonials
const testimonials = [
  {
    quote:
      'Tracy offered a very caring service which could be tailor-made to our needs. I was very happy that we found Final Journey as we could give my mother the send off she would have appreciated.',
    author: 'Waters Family',
    rating: 5,
  },
  {
    quote:
      "From start to finish Tracy was an absolute 'Rock'. She was so calm and caring it was like talking to a member of my family. I felt I could trust her with every aspect of my Brother's Funeral.",
    author: 'Chris F.',
    rating: 5,
  },
  {
    quote:
      "Tracy has been an absolute star throughout dealing with my husband's funeral from start to finish. She was compassionate, respectful and caring.",
    author: 'Susan M.',
    rating: 5,
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-hero-label">
            Independent Funeral Directors · Carlisle
          </span>
          <h1 className="about-hero-title">
            A Different Kind of Funeral Director
          </h1>
          <p className="about-hero-subtitle">
            Where every family is treated as we would want our own to be
            treated—with dignity, respect, and genuine compassion.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-grid">
            <div className="about-intro-image">
              <Image
                src="/images/casket4.jpg"
                alt="Final Journey caring service"
                fill
                className="object-cover"
              />
              <div className="about-intro-accent" />
            </div>
            <div className="about-intro-content">
              <h2 className="about-section-title">Our Story</h2>
              <div className="about-intro-text">
                <p>
                  Final Journey was founded on a simple belief: that every
                  person deserves a farewell as unique as the life they lived.
                  Based in Carlisle, we have been serving families across
                  Cumbria with the same dedication and personal touch that we
                  would want for our own families.
                </p>
                <p>
                  Unlike larger corporate funeral providers, Final Journey
                  remains proudly independent. When you contact us, you speak
                  directly with Tracy—no call centres, no strangers, no being
                  passed from department to department. Just one consistent,
                  caring professional who gets to know your family and your
                  wishes.
                </p>
                <p>
                  We understand that arranging a funeral can feel overwhelming.
                  That's why we guide you through every step with patience and
                  clarity, ensuring you never feel rushed or pressured. Whether
                  you're planning ahead or need immediate support, we're here
                  for you with dedicated, personal attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-mission">
        <div className="about-container">
          <div className="about-mission-content">
            <h2 className="about-mission-title">Our Promise to You</h2>
            <blockquote className="about-mission-quote">
              "Everyone has led a unique and individual life, and this should be
              reflected in their funeral."
            </blockquote>
            <p className="about-mission-text">
              This isn't just a slogan—it's the principle that guides everything
              we do. We don't believe in off-the-shelf funerals or ticking
              boxes. We believe in taking the time to understand who your loved
              one truly was, and creating a farewell that honours their memory
              in the most meaningful way possible.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <h2 className="about-section-title text-center">What We Stand For</h2>
          <p className="about-section-subtitle">
            Our values aren't corporate buzzwords—they're the promises we make
            to every family who trusts us with their loved one's care.
          </p>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">{value.icon}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="about-differentiators">
        <div className="about-container">
          <h2 className="about-section-title text-center text-white">
            Why Families Choose Us
          </h2>
          <div className="about-stats-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="about-stat-card">
                <span className="about-stat-number">{item.stat}</span>
                <span className="about-stat-label">{item.label}</span>
                <p className="about-stat-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracy Section */}
      <section className="about-team">
        <div className="about-container">
          <div className="about-team-grid">
            <div className="about-team-content">
              <h2 className="about-section-title">Meet Tracy</h2>
              <p className="about-team-role">Founder & Funeral Director</p>
              <div className="about-team-text">
                <p>
                  Tracy Lazonby founded Final Journey with a vision of providing
                  funeral services the way they should be—personal,
                  compassionate, and without the corporate constraints that so
                  often leave families feeling like just another number.
                </p>
                <p>
                  With years of experience in the funeral profession, Tracy
                  brings not only expertise but genuine warmth to every family
                  she supports. She understands that behind every arrangement is
                  a family going through one of life's most difficult moments,
                  and she treats each situation with the care and sensitivity it
                  deserves.
                </p>
                <p>
                  As the families we've served often say, working with Tracy
                  feels less like dealing with a funeral director and more like
                  having a supportive friend guide you through the process.
                </p>
              </div>
              <div className="about-team-contact">
                <Link href="/contact" className="btn-primary">
                  Speak with Tracy
                </Link>
              </div>
            </div>
            <div className="about-team-image">
              <Image
                src="/images/support.webp"
                alt="Tracy Lazonby - Funeral Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="about-container">
          <h2 className="about-section-title text-center">What Families Say</h2>
          <p className="about-section-subtitle">
            The trust families place in us is something we never take for
            granted.
          </p>
          <div className="about-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="about-testimonial-card">
                <div className="about-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="about-testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="about-testimonial-author">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
          <div className="about-testimonials-link">
            <a
              href="https://g.page/r/CdGjDSWkdTIeEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="about-accreditations">
        <div className="about-container">
          <h2 className="about-section-title text-center">
            Recognised & Trusted
          </h2>
          <p className="about-section-subtitle">
            We are proud members and affiliates of respected industry
            organisations.
          </p>
          <div className="about-accreditations-grid">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="about-accreditation-card">
                <span className="about-accreditation-name">
                  {accreditation.name}
                </span>
                <span className="about-accreditation-desc">
                  {accreditation.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">We're Here When You Need Us</h2>
            <p className="about-cta-text">
              Whether you need immediate assistance, want to discuss
              pre-planning, or simply have questions about our services, our
              dedicated team is here to help.
            </p>
            <div className="about-cta-buttons">
              <a href="tel:01228595060" className="btn-primary">
                Call 01228 595060
              </a>
              <Link href="/contact" className="btn-secondary">
                Send a Message
              </Link>
            </div>
            <p className="about-cta-note">
              Dedicated support when you need it most
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
