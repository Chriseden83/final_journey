'use client';

import PaginatedTributesWidget from '@/components/PaginatedTributesWidget';
import { Heart } from 'lucide-react';
import { FadeInUp, HeroText } from '@/components/animations';

export default function AnimatedTributesContent() {
  return (
    <div className="tributes-page">
      {/* Hero Section */}
      <section className="tributes-hero">
        <div className="tributes-hero-overlay" />
        <div className="tributes-hero-content">
          <HeroText delay={0.2}>
            <Heart className="page-hero-heart-icon" aria-hidden="true" />
          </HeroText>
          <HeroText delay={0.3}>
            <h1 className="tributes-hero-title">Tributes</h1>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="page-hero-underline" aria-hidden="true" />
          </HeroText>
          <HeroText delay={0.5}>
            <p className="tributes-hero-subtitle">
              Honouring the lives of those we have had the privilege to serve.
              Search or browse to find a tribute and leave your condolences.
            </p>
          </HeroText>
        </div>
      </section>

      {/* MuchLoved Widget Section */}
      <section className="tributes-content">
        <div className="container">
          <FadeInUp delay={0.3}>
            <PaginatedTributesWidget />
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
