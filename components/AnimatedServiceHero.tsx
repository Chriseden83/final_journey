'use client';

import Image from 'next/image';
import { FadeInUp, HeroText } from '@/components/animations';
import { ReactNode } from 'react';

interface ServiceHeroProps {
  imageSrc: string;
  imageAlt: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: ReactNode;
  listTitle: string;
  listItems: string[];
}

export function AnimatedServiceHero({
  imageSrc,
  imageAlt,
  titleLine1,
  titleLine2,
  subtitle,
  description,
  listTitle,
  listItems,
}: ServiceHeroProps) {
  return (
    <main className="service-page-main">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-left-image">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-hero-left-overlay" />
            <div className="service-hero-left-content">
              <HeroText delay={0.2}>
                <h1 className="service-hero-title">
                  {titleLine1}
                  <br />
                  {titleLine2}
                </h1>
              </HeroText>
              <HeroText delay={0.4}>
                <div className="service-hero-underline" />
              </HeroText>
            </div>
          </div>
          <div className="service-hero-right">
            <div className="service-hero-right-content">
              <FadeInUp delay={0.3}>
                <h2>{subtitle}</h2>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <div>{description}</div>
              </FadeInUp>
              <FadeInUp delay={0.5}>
                <h2>{listTitle}</h2>
                <ul>
                  {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
