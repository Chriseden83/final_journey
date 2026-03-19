import Link from 'next/link';
import Image from 'next/image';
import HomeTributesWidget from '@/components/HomeTributesWidget';

// Static data for tributes - server component, no client state needed
// Now using MuchLoved widget for dynamic tributes

// Static data for services
const services = [
  {
    title: 'Personalised Funerals',
    description:
      'Bespoke with ministers/celebrants, death notices, order of service, floral tributes, catering, and family-specific requirements.',
    icon: '/icons/candle.svg',
    href: '/services/personalised-funerals',
  },
  {
    title: 'Direct Cremations',
    description:
      'Simple, lower-cost cremation without a service from £1,595, allowing families to plan a separate memorial or celebration later.',
    icon: '/icons/ashes.svg',
    href: '/services/direct-cremations',
  },
  {
    title: 'Transport Options',
    description:
      'Personalised vehicles from traditional hearses with chauffeur / bearers to limousines, horse-drawn or motorcycles.',
    icon: '/icons/car.svg',
    href: '/services/transport-options',
  },
  {
    title: 'Tissue Donation',
    description:
      'Support and arrangement for tissue donation as part of the funeral process, handled with care and respect.',
    icon: '/icons/body.svg',
    href: '/services/tissue-donation',
  },
  {
    title: 'Tributes & Memorials',
    description:
      'Bespoke commemorations and keepsakes—jewellery from ashes, printed tributes, scattering options to reflect a unique life.',
    icon: '/icons/picture.svg',
    href: '/services/tributes-memorials',
  },
  {
    title: 'Dedicated Support',
    description:
      'Dedicated assistance available whenever you need guidance or support throughout the funeral process and beyond.',
    icon: '/icons/minister.svg',
    href: '/services/support',
  },
];

// Static data for testimonials
const testimonials = [
  {
    quote:
      'Tracy is incredibly knowledgable so we felt so at ease with the planning of the funeral. On the day, Tracy was there to guide us through it, ensuring there were no hiccups.',
    author: 'Local Family',
  },
  {
    quote:
      "Tracy has been an absolute star throughout dealing with my husband's funeral from start to finish, even to the funeral tea nothing was too much trouble. She was compassionate, respectful and caring.",
    author: 'Susan M.',
  },
  {
    quote:
      'At every step of the way she was caring, compassionate, communicated well, and never rushed us. She understood and respected our grief and ensured every detail was just right.',
    author: 'David & Family',
  },
];

// Gallery images
const galleryImages = [
  { src: '/images/horses2.jpg', alt: 'Horse-drawn hearse' },
  { src: '/images/casket2.jpg', alt: 'Floral tribute' },
  { src: '/images/horses3.jpg', alt: 'Funeral procession' },
  { src: '/images/bagpipes.webp', alt: 'Bagpiper tribute' },
  { src: '/images/service_booklet.jpg', alt: 'Order of service' },
  { src: '/images/bike.jpg', alt: 'Motorcycle hearse' },
  { src: '/images/casket3.jpg', alt: 'Memorial flowers' },
  { src: '/images/bike2.jpg', alt: 'Alternative transport' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="section-hero" aria-label="Welcome">
        <div className="hero-content">
          <h1 className="hero-title">
            Compassionate Care, Every Step of the Way
          </h1>
          <p className="hero-subtitle">
            Final Journey Funeral Directors, Carlisle
          </p>
          <p className="hero-description">
            Professional and respectful, with heartfelt care and discretion
            throughout. We guide every detail from first collection to a
            meaningful farewell, tailored to you.
          </p>
          <div className="hero-buttons">
            <Link
              href="/contact"
              className="btn-primary"
              aria-label="Contact us to begin planning"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
              style={{ color: 'white', borderColor: 'white' }}
              aria-label="View our services"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="section-container">
          <h2 id="about-heading" className="section-heading">
            About Us
          </h2>
          <p className="section-subheading">
            Final Journey is a professional funeral director based in Carlisle,
            dedicated to providing compassionate care and dignified services. We
            work closely with families to create meaningful tributes that honour
            their loved ones.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <p className="section-text" style={{ maxWidth: '100%' }}>
                Our team is available 24 hours a day, 7 days a week, offering
                guidance and support when you need it most. We believe in
                transparent pricing, personalised care, and treating every
                family with the respect they deserve.
              </p>
              <p className="section-text" style={{ maxWidth: '100%' }}>
                From the moment you reach out to us, we handle every detail with
                professionalism and sensitivity, allowing you to focus on what
                matters most—remembering and celebrating the life of your loved
                one.
              </p>
              <Link
                href="/about"
                className="btn-secondary mt-6 inline-block"
                aria-label="Read more about our story"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/van.jpg"
                alt="Final Journey funeral vehicle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section section-alt"
        aria-labelledby="services-heading"
      >
        <div className="section-container">
          <h2 id="services-heading" className="section-heading">
            Our Services
          </h2>
          <p className="section-subheading">
            We offer a complete range of funeral services, each designed to
            provide comfort and create a fitting tribute for your loved one.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="service-card"
              >
                <div className="service-icon-wrapper">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="service-icon"
                  />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tributes Section */}
      <section
        id="tributes"
        className="section"
        aria-labelledby="tributes-heading"
      >
        <div className="section-container">
          <h2 id="tributes-heading" className="section-heading">
            Honouring Their Memories
          </h2>
          <p className="section-subheading">
            We are privileged to help families celebrate the lives of their
            loved ones. Here are some of those we have been honoured to serve.
          </p>
          <div className="tributes-grid">
            <HomeTributesWidget maxItems={3} />
          </div>
          <div className="section-cta pt-6">
            <Link
              href="/tributes"
              className="btn-secondary"
              aria-label="View all tributes"
            >
              View All Tributes
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="section section-alt"
        aria-labelledby="gallery-heading"
      >
        <div className="section-container">
          <h2 id="gallery-heading" className="section-heading">
            Gallery
          </h2>
          <p className="section-subheading">
            Moments of dignity, care, and remembrance. Every service reflects
            our commitment to honoring your loved ones.
          </p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section"
        aria-labelledby="testimonials-heading"
      >
        <div className="section-container">
          <h2 id="testimonials-heading" className="section-heading">
            What Families Say
          </h2>
          <p className="section-subheading">
            Genuine words from the people we have supported — shared with
            gratitude.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="testimonial-card">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <footer className="testimonial-author">
                  — {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section
        id="prices"
        className="section section-alt"
        aria-labelledby="prices-heading"
      >
        <div className="section-container">
          <h2 id="prices-heading" className="section-heading">
            Transparent Pricing
          </h2>
          <p className="section-subheading">
            We believe in clear, honest pricing with no hidden costs. Our
            services are designed to offer value, dignity, and peace of mind.
          </p>
          <div className="prices-highlight">
            <p className="price-feature">Direct Cremations from</p>
            <p className="price-amount">£1,595</p>
            <p className="price-note">
              Including collection, cremation, and return of ashes
            </p>
          </div>
          <div className="section-cta">
            <Link
              href="/prices"
              className="btn-primary"
              aria-label="View all our pricing"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section
        id="contact"
        className="section-cta-banner"
        aria-label="Contact call to action"
      >
        <div className="section-container relative z-10">
          <h2 className="cta-banner-heading">
            Ready to Plan a Meaningful Farewell?
          </h2>
          <p className="cta-banner-text">
            Our compassionate team is here to support you 24 hours a day, 7 days
            a week. We&apos;re only a phone call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary"
              aria-label="Get in touch with us"
            >
              Get in Touch
            </Link>
            <a
              href="tel:01228595060"
              className="btn-secondary"
              style={{ color: 'white', borderColor: 'white' }}
              aria-label="Call us now"
            >
              Call 01228 595060
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
