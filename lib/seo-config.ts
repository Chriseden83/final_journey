// SEO Configuration for Final Journey Funerals
// Optimized to rank #1 for funeral directors in Carlisle and Cumbria

export const siteConfig = {
  name: 'Final Journey Funerals',
  legalName: 'Final Journey Funerals Ltd',
  description:
    'Independent funeral directors in Carlisle, Cumbria. Compassionate, affordable funeral services including direct cremations from £1,695, personalised funerals, and dedicated bereavement support.',
  url: 'https://www.finaljourneyfunerals.co.uk',
  ogImage: '/images/og-image.jpg',
  phone: '01228 595060',
  mobilePhone: '07745 354100',
  email: 'info@finaljourneyfunerals.co.uk',
  address: {
    street: '2 Durdar Road',
    locality: 'Carlisle',
    region: 'Cumbria',
    postalCode: 'CA2 4SA',
    country: 'GB',
  },
  coordinates: {
    latitude: 54.8907741,
    longitude: -2.9472419,
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/finaljourneyfunerals',
    instagram: 'https://www.instagram.com/finaljourneyfunerals',
  },
  // Primary keywords for local SEO
  keywords: [
    'funeral directors carlisle',
    'funeral directors cumbria',
    'funeral services carlisle',
    'independent funeral directors carlisle',
    'cremation services carlisle',
    'direct cremation carlisle',
    'direct cremation cumbria',
    'affordable funerals carlisle',
    'funeral home carlisle',
    'bereavement support cumbria',
    'personalised funerals carlisle',
    'funeral arrangements carlisle',
    'funeral planning cumbria',
    'crematorium carlisle',
    'green funerals cumbria',
  ],
  // Service areas for local SEO
  serviceAreas: [
    'Carlisle',
    'Penrith',
    'Wigton',
    'Brampton',
    'Dalston',
    'Longtown',
    'Workington',
    'Whitehaven',
    'Keswick',
    'Cockermouth',
    'Maryport',
    'Appleby-in-Westmorland',
    'Eden Valley',
    'North Cumbria',
    'South Lakeland',
  ],
  // Business hours
  openingHours: ['Mo-Fr 09:00-17:00', 'Sa 09:00-13:00', 'Su Closed'],
  // Price range indicator for schema
  priceRange: '££',
  // Founding year
  foundingDate: '2015',
};

// Generate keywords string for meta tags
export const getKeywordsString = (): string => siteConfig.keywords.join(', ');

// Generate service areas for content
export const getServiceAreasString = (): string =>
  siteConfig.serviceAreas.join(', ');
