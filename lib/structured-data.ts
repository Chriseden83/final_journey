import { siteConfig } from '@/lib/seo-config';

// JSON-LD Structured Data for SEO
// Helps search engines understand business information

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FuneralHome'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/og-image.jpg`,
    logo: `${siteConfig.url}/icons/logo.svg`,
    priceRange: siteConfig.priceRange,
    foundingDate: siteConfig.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Cumbria',
      },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    sameAs: [siteConfig.socialMedia.facebook, siteConfig.socialMedia.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Funeral Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Direct Cremation',
            description:
              'Simple, dignified cremation without a funeral service, allowing families to hold their own memorial.',
          },
          price: '1595',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Attended Funeral',
            description:
              'Full funeral service with ceremony, allowing family and friends to gather and pay respects.',
          },
          price: '1900',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personalised Funeral',
            description:
              'Bespoke funeral arrangements tailored to celebrate a unique life.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Local Family',
        },
        reviewBody:
          'Tracy is incredibly knowledgeable so we felt so at ease with the planning of the funeral. On the day, Tracy was there to guide us through it.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Susan M.',
        },
        reviewBody:
          "Tracy has been an absolute star throughout dealing with my husband's funeral from start to finish. She was compassionate, respectful and caring.",
      },
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/tributes?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Funeral Service',
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    name: service.name,
    description: service.description,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Cumbria',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'GBP',
      },
    }),
  };
}
