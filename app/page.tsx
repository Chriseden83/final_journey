'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollToHash from '@/components/ScrollToHash';
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  HeroText,
  ImageReveal,
} from '@/components/animations';

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
      'Simple, lower-cost cremation without a service from £1,695, allowing families to plan a separate memorial or celebration later.',
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
      <ScrollToHash />
      {/* Hero Section */}
      <section id="hero" className="section-hero" aria-label="Welcome">
        <div className="hero-content">
          <HeroText delay={0.3}>
            <h1 className="hero-title">
              Compassionate Care, Every Step of the Way
            </h1>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="page-hero-underline" aria-hidden="true" />
          </HeroText>
          <HeroText delay={0.5}>
            <p className="hero-subtitle">
              Final Journey Funeral Directors, Carlisle
            </p>
          </HeroText>
          <HeroText delay={0.7}>
            <p className="hero-description">
              Professional and respectful, with heartfelt care and discretion
              throughout. We guide every detail from first collection to a
              meaningful farewell, tailored to you.
            </p>
          </HeroText>
          <HeroText delay={0.9}>
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
          </HeroText>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="section-container">
          <FadeInUp>
            <h2 id="about-heading" className="section-heading">
              About Us
            </h2>
            <p className="section-subheading">
              Final Journey is a professional funeral director based in
              Carlisle, dedicated to providing compassionate care and respectful
              services. We work closely with families to create meaningful
              tributes that honour their loved ones.
            </p>
          </FadeInUp>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <FadeInLeft delay={0.2}>
              <p className="section-text" style={{ maxWidth: '100%' }}>
                Our dedicated team offers guidance and support when you need it
                most. We believe in transparent pricing, personalised care, and
                treating every family with the respect they deserve.
              </p>
              <p className="section-text" style={{ maxWidth: '100%' }}>
                From the moment you reach out to us, we handle every detail with
                professionalism and sensitivity, allowing you to focus on what
                matters most—remembering and celebrating the life of your loved
                one.
              </p>
              <div className="text-center md:text-left">
                <Link
                  href="/about"
                  className="btn-secondary mt-6 inline-block"
                  aria-label="Read more about our story"
                >
                  Learn More About Us
                </Link>
              </div>
            </FadeInLeft>
            <FadeInRight delay={0.3}>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/van.jpg"
                  alt="Final Journey funeral vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInRight>
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
          <FadeInUp>
            <h2 id="services-heading" className="section-heading">
              Our Services
            </h2>
            <p className="section-subheading">
              We offer a complete range of funeral services, each designed to
              provide comfort and create a fitting tribute for your loved one.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
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
                  <span className="service-arrow">Learn More →</span>
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* What to Do Guide Section */}
      <section id="guide" className="section" aria-labelledby="guide-heading">
        <div className="section-container">
          <FadeInUp>
            <h2 id="guide-heading" className="section-heading">
              What to Do When Someone Dies
            </h2>
            <p className="section-subheading">
              Losing someone is overwhelming. Our helpful guide walks you
              through each step, from the first phone call to organising the
              funeral.
            </p>
          </FadeInUp>
          <div className="guide-teaser">
            <FadeInLeft delay={0.2}>
              <div className="guide-teaser-image">
                <Image
                  src="/images/support.webp"
                  alt="Compassionate support during difficult times"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>
            <StaggerContainer
              className="guide-teaser-steps"
              staggerDelay={0.15}
            >
              <StaggerItem>
                <div className="guide-step">
                  <span className="guide-step-number">1</span>
                  <div>
                    <h3>Obtain a Medical Certificate</h3>
                    <p>
                      Contact the doctor to confirm death and receive the
                      necessary paperwork
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="guide-step">
                  <span className="guide-step-number">2</span>
                  <div>
                    <h3>Register the Death</h3>
                    <p>
                      Visit the registrar within 5 days with the medical
                      certificate
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="guide-step">
                  <span className="guide-step-number">3</span>
                  <div>
                    <h3>Plan the Funeral</h3>
                    <p>
                      We&apos;ll guide you through every option to create a
                      meaningful farewell
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <FadeInUp delay={0.4}>
            <div className="section-cta">
              <Link
                href="/what-to-do-when-someone-dies"
                className="btn-primary"
                aria-label="Read our complete guide"
              >
                Read the Full Guide
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="section section-alt"
        aria-labelledby="gallery-heading"
      >
        <div className="section-container">
          <FadeInUp>
            <h2 id="gallery-heading" className="section-heading">
              Gallery
            </h2>
            <p className="section-subheading">
              Moments of care, respect, and remembrance. Every service reflects
              our commitment to honoring your loved ones.
            </p>
          </FadeInUp>
          <StaggerContainer className="gallery-grid" staggerDelay={0.08}>
            {galleryImages.map((image, index) => (
              <StaggerItem key={index}>
                <div className="gallery-item">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section"
        aria-labelledby="testimonials-heading"
      >
        <div className="section-container">
          <FadeInUp>
            <h2 id="testimonials-heading" className="section-heading">
              What Families Say
            </h2>
            <p className="section-subheading">
              Genuine words from the people we have supported — shared with
              gratitude.
            </p>
          </FadeInUp>
          <StaggerContainer className="testimonials-grid" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <blockquote className="testimonial-card">
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <footer className="testimonial-author">
                    — {testimonial.author}
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section
        id="contact"
        className="section-cta-banner"
        aria-label="Contact call to action"
      >
        <div className="section-container relative z-10">
          <FadeInUp>
            <h2 className="cta-banner-heading">
              Ready to Plan a Meaningful Farewell?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="cta-banner-text">
              Our compassionate team is here to support you with dedicated,
              personal care. We&apos;re only a phone call away.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="btn-primary"
                aria-label="Get in touch with us"
              >
                Get in Touch
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
