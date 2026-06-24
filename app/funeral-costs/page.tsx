'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Heart,
  Sparkles,
  ChevronRight,
  Info,
  Clock,
  Shield,
  Users,
} from 'lucide-react';
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HeroText,
} from '@/components/animations';

// Package data
const packages = [
  {
    id: 'direct',
    name: 'Direct Cremation',
    tagline: 'Simple & Respectful',
    price: 1695,
    description:
      'A practical and lower-cost option which separates the cremation process from the funeral ceremony. Perfect for families who wish to arrange their own celebration of life.',
    icon: Heart,
    features: [
      'Help completing the necessary paperwork',
      'Collection of the body',
      'Care of the body prior to the cremation',
      'Simple cardboard coffin',
      'Viewing for family and friends (by appointment)',
      'Unattended cremation',
      'Simple urn',
      'Delivery of the ashes to you',
      'Fixed price with no hidden extras',
    ],
    highlight: false,
  },
  {
    id: 'attended',
    name: 'Simple Cremation with Service',
    tagline: 'A Meaningful Goodbye',
    price: 1995,
    description:
      'A funeral where family and friends have a ceremony, event or service for the deceased person at the same time as they attend the burial or cremation.',
    icon: Sparkles,
    features: [
      'All necessary legal and administrative arrangements',
      'Collection and transport within 15 miles',
      'Care of deceased at our chapel',
      'Oak Veneered Coffin with Brass or Nickel fittings',
      'Viewing for family and friends (by appointment)',
      'Transport to cemetery or crematorium within 20 miles',
      'Professional funeral director attendance',
    ],
    highlight: true,
  },
];

// Detailed price list data organized by category
const priceCategories = [
  {
    id: 'coffins',
    name: 'Coffins & Caskets',
    items: [
      {
        name: 'Simple Manilla Cardboard Coffin',
        price: 250,
        included: [],
        description: 'With rope handles',
      },
      {
        name: 'Lily White Cardboard Coffin',
        price: 325,
        included: [],
        description: 'With rope handles',
      },
      {
        name: 'Traditional Wood Veneered',
        price: 395,
        included: [],
        description: 'Classic wooden veneer finish',
      },
      {
        name: 'Bamboo (Traditional or Round)',
        price: 450,
        included: [],
        description: 'Eco-friendly natural coffin',
      },
      {
        name: 'Traditional Moulded Oak Veneer',
        price: 495,
        included: [],
        description: 'Premium oak veneer finish',
      },
      {
        name: 'Bamboo Lattice (Traditional or Round)',
        price: 495,
        included: [],
        description: 'Eco-friendly woven design',
      },
      {
        name: 'Picture Coffin',
        price: 495,
        included: [],
        description: 'Cardboard coffin with printed image',
      },
      {
        name: 'Willow (Traditional or Round)',
        price: 695,
        included: [],
        description: 'Natural woven willow',
      },
      {
        name: 'Willow (Teardrop)',
        price: 695,
        included: [],
        description: 'Natural woven willow, teardrop shape',
      },
      {
        name: 'Banana Leaf',
        price: 695,
        included: [],
        description: 'Natural eco-friendly option',
      },
      {
        name: 'Pandanus (Wild Pineapple)',
        price: 695,
        included: [],
        description: 'Natural woven pandanus leaf',
      },
      {
        name: 'Bulrush and Willow',
        price: 750,
        included: [],
        description: 'Natural combination weave',
      },
      {
        name: 'Standard Pictorial',
        price: 795,
        included: [],
        description: 'Wooden coffin with printed design',
      },
      {
        name: 'Pathway',
        price: 995,
        included: [],
        description: 'Premium wooden coffin',
      },
    ],
  },
  {
    id: 'shrouds',
    name: 'Shrouds & Soft Coffins',
    items: [
      {
        name: 'Bamboo Shroud',
        price: 300,
        included: [],
        description: 'Natural bamboo shroud',
      },
      {
        name: 'Leafpod by Bellacouche',
        price: 'POA',
        included: [],
        description: 'Premium eco-friendly soft coffin',
      },
      {
        name: 'Natural Legacy Wool Coffin (Limestone Grey)',
        price: 900,
        included: [],
        description: 'British wool in limestone grey',
      },
      {
        name: 'Natural Legacy Wool Coffin (Natural Cream)',
        price: 900,
        included: [],
        description: 'British wool in natural cream',
      },
      {
        name: 'Leafcocoon by Bellacouche',
        price: 'POA',
        included: [],
        description: 'Premium eco-friendly cocoon',
      },
    ],
  },
  {
    id: 'transport',
    name: 'Transport & Vehicles',
    items: [
      {
        name: 'Traditional Black Hearse',
        price: 300,
        included: [],
        description: 'With professional driver',
      },
      {
        name: 'Black Limousine',
        price: 300,
        included: [],
        description: 'With professional driver',
      },
      {
        name: 'Silver Hearse',
        price: 495,
        included: [],
        description: 'With professional driver',
      },
      {
        name: 'Armed Forces Hearse',
        price: 'POA',
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Only Fools and Hearses (Trotters)',
        price: 'POA',
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Horse Drawn Carriage - Black (2 Horses)',
        price: 'POA',
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Horse Drawn Carriage - White (2 Horses)',
        price: 'POA',
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Landrover Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Morris Minor Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Rainbow Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Pink Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Leopard Print Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Union Jack Hearse',
        price: 'POA',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Suzuki Hayabusa / Triumph / Harley Davidson',
        price: 'POA',
        included: [],
        description: 'Motorbike options available',
      },
    ],
  },
  {
    id: 'crematorium',
    name: 'Crematorium Fees',
    items: [
      {
        name: 'Carlisle',
        price: '£1235.00 / £700',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Roucan Loch (Dumfries)',
        price: '£1095.00 / £595',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Distington (Workington)',
        price: '£1235.00 / £700',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Eden Valley (Temple, Sowerby, Penrith)',
        price: '£1150.00 / £600',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Beetham Hall (Milnthorpe)',
        price: '£1150.00 / £600',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Lancaster',
        price: '£1,275.00 / £575',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
    ],
  },
  {
    id: 'urns',
    name: 'Urns for Ashes',
    items: [
      {
        name: 'Cardboard Pictorial Scatter Tube',
        price: 45,
        included: [],
        description: 'Standard size',
      },
      {
        name: 'Natural Bamboo/Wicker/Pandanus/Banana Leaf',
        price: 75,
        included: [],
        description: 'Eco-friendly urn options',
      },
      {
        name: 'Solid Oak Wooden Casket',
        price: 75,
        included: [],
        description: 'Traditional wooden urn',
      },
    ],
  },
  {
    id: 'disbursements',
    name: 'Disbursements',
    items: [
      {
        name: 'Collection and delivery of ashes',
        price: 0,
        included: [],
        description: 'No charge',
      },
      {
        name: 'Celebrant',
        price: '£200 - £300',
        included: [],
        description: 'For a personalised service',
      },
      {
        name: 'Newspaper Notice',
        price: '£130',
        included: [],
        description: 'Approximately - word dependent',
      },
      {
        name: 'Floristry',
        price: 'POA',
        included: [],
        description: 'POA',
      },
      {
        name: 'Webcasting/Live Streaming/Recording',
        price: 'POA',
        included: [],
        description: 'POA',
      },
      {
        name: 'Photographer',
        price: 'POA',
        included: [],
        description: 'POA',
      },
      {
        name: 'Printing (Order of Service)',
        price: 'POA',
        included: [],
        description: 'Depending on pages and colour',
      },
    ],
  },
];

// USP features
const uspFeatures = [
  {
    icon: Clock,
    title: 'Dedicated Support',
    description: 'Guiding you through every step with care and compassion',
  },
  {
    icon: Shield,
    title: 'No Hidden Costs',
    description: 'Transparent pricing with everything explained upfront',
  },
  {
    icon: Users,
    title: 'Family-Run Business',
    description: 'Personal care and attention to every detail',
  },
  {
    icon: Heart,
    title: 'Respect Promise',
    description: 'Your loved one treated with utmost respect always',
  },
];

type StandardisedPriceListItem = {
  name: string;
  price: string;
  description?: string;
  hasFootnote?: number;
};

type StandardisedPriceList = {
  attended: {
    total: string;
    note: string;
    items: StandardisedPriceListItem[];
  };
  unattended: StandardisedPriceListItem[];
  feesYouMustPay: StandardisedPriceListItem[];
  additional: StandardisedPriceListItem[];
};

const standardisedPriceList: StandardisedPriceList = {
  attended: {
    total: '£1,995.00',
    note: 'See breakdown of costs below.',
    items: [
      {
        name: 'Taking care of all necessary legal and administrative arrangements',
        price: '£895',
      },
      {
        name: 'Collecting and transporting the deceased person from the place of death into our care (normally within 15 miles)',
        price: '£155',
      },
      {
        name: 'Care of the deceased person before the funeral in appropriate facilities',
        price: '£200',
      },
      {
        name: 'Providing a suitable coffin (Locally made Oak Veneered Coffin)',
        price: '£495',
      },
      {
        name: 'Viewing of the deceased person for family and friends, by appointment',
        price: 'No charge',
      },
      {
        name: 'Taking the deceased person direct to the agreed cemetery or crematorium (normally within 20 miles)',
        price: '£250',
      },
    ],
  },
  unattended: [
    {
      name: "Burial (funeral director's charges only)",
      price: '£895',
    },
    {
      name: "Cremation (funeral director's charges plus the cremation fee)",
      price: '£1,695',
    },
  ],
  feesYouMustPay: [
    {
      name: 'For an Attended or Unattended burial funeral, the burial fee.',
      price: '£400 - £1,000',
      hasFootnote: 1,
    },
    {
      name: 'For a new grave, you will also need to pay for the plot; for an existing grave with a memorial in place, you may need to pay a removal/replacement fee. In addition, the cemetery may charge a number of other fees.',
      price: '£400 - £1,550',
    },
    {
      name: 'For an Attended cremation funeral, the cremation fee.',
      price: '£1,150 - £1,235',
      hasFootnote: 2,
    },
  ],
  additional: [
    {
      name: 'Additional mileage (price per mile)',
      price: '£2.00',
    },
    {
      name: "Additional transfers of the deceased person's body",
      price: '£200',
    },
    {
      name: 'Collection and delivery of ashes',
      price: 'No charge',
    },
    {
      name: 'Embalming',
      price: 'POA',
    },
    {
      name: 'Funeral officiant (e.g. celebrant, minister of religion etc.)',
      price: '£200 - £300',
    },
    {
      name: 'Services supplied outside of normal office hours',
      price: 'POA',
    },
  ],
};

export default function FuneralCostsPage() {
  const [activeTab, setActiveTab] = useState(priceCategories[0].id);
  const placeholderImageSrc =
    '/images/placeholders/transport-item-placeholder.svg';

  const transportImageMap: Record<string, string> = {
    'Traditional Black Hearse':
      '/images/pricelist-items/transport/traditional-hearse.webp',
    'Black Limousine': '/images/pricelist-items/transport/black-Limo.webp',
    'Silver Hearse': '/images/pricelist-items/transport/silver-hearse.webp',
    'Armed Forces Hearse':
      '/images/pricelist-items/transport/armed-forces.webp',
    'Only Fools and Hearses (Trotters)':
      '/images/pricelist-items/transport/only-fools-and-horses.webp',
    'Horse Drawn Carriage - Black (2 Horses)':
      '/images/pricelist-items/transport/horse-and-carriage-black.webp',
    'Horse Drawn Carriage - White (2 Horses)':
      '/images/pricelist-items/transport/horses-white.webp',
    'Landrover Hearse': '/images/pricelist-items/transport/landrover.webp',
    'Morris Minor Hearse':
      '/images/pricelist-items/transport/morris-minor.webp',
    'Rainbow Hearse': '/images/pricelist-items/transport/rainbow.webp',
    'Pink Hearse': '/images/pricelist-items/transport/pink.webp',
    'Leopard Print Hearse': '/images/pricelist-items/transport/leopard.webp',
    'Union Jack Hearse': '/images/pricelist-items/transport/union-jack.webp',
    'Suzuki Hayabusa / Triumph / Harley Davidson':
      '/images/pricelist-items/transport/suzuki-hayabusa.webp',
  };

  const coffinsImageMap: Record<string, string> = {
    'Simple Manilla Cardboard Coffin':
      '/images/pricelist-items/coffins-caskets/manila-cardboard.webp',
    'Lily White Cardboard Coffin':
      '/images/pricelist-items/coffins-caskets/white-cardboard.webp',
    'Traditional Wood Veneered':
      '/images/pricelist-items/coffins-caskets/traditional-oak.webp',
    'Bamboo (Traditional or Round)':
      '/images/pricelist-items/coffins-caskets/bamboo-traditional.webp',
    'Traditional Moulded Oak Veneer':
      '/images/pricelist-items/coffins-caskets/traditional-oak-veneer.webp',
    'Bamboo Lattice (Traditional or Round)':
      '/images/pricelist-items/coffins-caskets/bamboo-lattice.webp',
    'Picture Coffin':
      '/images/pricelist-items/coffins-caskets/picture-cardboard-coffin.webp',
    'Willow (Traditional or Round)':
      '/images/pricelist-items/coffins-caskets/willow-traditional.webp',
    'Willow (Teardrop)':
      '/images/pricelist-items/coffins-caskets/teardrop-willow.webp',
    'Banana Leaf': '/images/pricelist-items/coffins-caskets/banana-leaf.webp',
    'Pandanus (Wild Pineapple)':
      '/images/pricelist-items/coffins-caskets/pandanus.webp',
    'Bulrush and Willow':
      '/images/pricelist-items/coffins-caskets/bulrushandWillow.webp',
    'Standard Pictorial':
      '/images/pricelist-items/coffins-caskets/standard-pictorial.webp',
    Pathway: '/images/pricelist-items/coffins-caskets/pathway.webp',
  };

  const shroudsImageMap: Record<string, string> = {
    'Bamboo Shroud':
      '/images/pricelist-items/shrouds-soft-coffins/bamboo-shroud.webp',
    'Leafpod by Bellacouche':
      '/images/pricelist-items/shrouds-soft-coffins/leafpod.webp',
    'Natural Legacy Wool Coffin (Natural Cream)':
      '/images/pricelist-items/shrouds-soft-coffins/wool-cream.webp',
    'Natural Legacy Wool Coffin (Limestone Grey)':
      '/images/pricelist-items/shrouds-soft-coffins/wool-limestone.webp',
    'Leafcocoon by Bellacouche':
      '/images/pricelist-items/shrouds-soft-coffins/Leafcocoon.webp',
  };

  const urnsImageMap: Record<string, string> = {
    'Cardboard Pictorial Scatter Tube':
      '/images/pricelist-items/urns/scatter-tubes.webp',
    'Natural Bamboo/Wicker/Pandanus/Banana Leaf':
      '/images/pricelist-items/urns/wicker.webp',
    'Solid Oak Wooden Casket':
      '/images/pricelist-items/urns/wooden-casket.webp',
  };

  const categoryImageMap: Record<string, Record<string, string>> = {
    transport: transportImageMap,
    coffins: coffinsImageMap,
    shrouds: shroudsImageMap,
    urns: urnsImageMap,
  };

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    if (price === 0) return 'Included';
    return `£${price.toLocaleString()}`;
  };

  return (
    <main className="funeral-costs-page">
      {/* Hero Section */}
      <section className="costs-hero">
        <div className="costs-hero-content">
          <HeroText delay={0.2}>
            <Heart className="page-hero-heart-icon" aria-hidden="true" />
          </HeroText>
          <HeroText delay={0.3}>
            <h1 className="costs-hero-title">Funeral Costs</h1>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="page-hero-underline" aria-hidden="true" />
          </HeroText>
          <HeroText delay={0.5}>
            <p className="costs-hero-subtitle">
              Transparent, honest pricing with no hidden fees. We believe every
              family deserves to know exactly what they&apos;re paying for.
            </p>
          </HeroText>
        </div>
      </section>

      {/* USP Bar */}
      <section className="usp-bar">
        <StaggerContainer className="usp-container" staggerDelay={0.1}>
          {uspFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="usp-item">
                <feature.icon className="usp-icon" />
                <div className="usp-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Package Cards Section */}
      <section className="packages-section">
        <div className="packages-container">
          <FadeInUp>
            <h2 className="packages-heading">Choose your Funeral</h2>
            <p className="packages-subheading">
              Two carefully designed options to suit different needs and
              budgets. Each package can be personalised to create the perfect
              farewell.
            </p>
          </FadeInUp>

          <StaggerContainer className="packages-grid" staggerDelay={0.15}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <div
                  className={`package-card ${pkg.highlight ? 'package-card-featured' : ''}`}
                >
                  {pkg.highlight && (
                    <div className="package-badge">Most Popular</div>
                  )}
                  <div className="package-header">
                    <pkg.icon className="package-icon" />
                    <h3 className="package-name">{pkg.name}</h3>
                    <p className="package-tagline">{pkg.tagline}</p>
                  </div>
                  <div className="package-price">
                    <span className="price-from">From</span>
                    <span className="price-amount">
                      £{pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                  <ul className="package-features">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>
                        <Check className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Price Comparison Note */}
      <section className="comparison-note">
        <FadeInUp className="comparison-container">
          <Info className="comparison-icon" />
          <div className="comparison-content">
            <h3>How We Compare</h3>
            <p>
              Our prices are typically lower than the UK average. We believe
              that a respectful farewell shouldn&apos;t come with a financial
              burden, which is why we offer quality services at fair,
              transparent prices.
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Standardised Price List */}
      <section className="standardised-section">
        <div className="standardised-container">
          <FadeInUp>
            <h2 className="pricelist-heading">Standardised Price List</h2>
            <p className="pricelist-subheading">
              A legally required summary format to help you compare core funeral
              director charges and common additional fees.
            </p>
          </FadeInUp>

          <div className="standardised-sheet">
            <p className="standardised-intro">
              All funeral directors are legally required to publish this price
              list for a standardised set of products and services. This is to
              help you think through your options and make choices, and to let
              you compare prices between different funeral directors (because
              prices can vary).
            </p>

            <div className="standardised-block">
              <div className="standardised-block-header">
                <h3>ATTENDED FUNERAL (funeral director&apos;s charges only)</h3>
                <div className="standardised-total-wrap">
                  <span>{standardisedPriceList.attended.note}</span>
                  <strong>{standardisedPriceList.attended.total}</strong>
                </div>
              </div>
              <div className="standardised-rows">
                {standardisedPriceList.attended.items.map((item) => (
                  <div key={item.name} className="standardised-row">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="standardised-block">
              <div className="standardised-block-header">
                <h3>UNATTENDED FUNERAL</h3>
              </div>
              <div className="standardised-rows">
                {standardisedPriceList.unattended.map((item) => (
                  <div key={item.name} className="standardised-row">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="standardised-block">
              <div className="standardised-block-header">
                <h3>FEES YOU MUST PAY</h3>
              </div>
              <div className="standardised-rows">
                {standardisedPriceList.feesYouMustPay.map((item) => (
                  <div key={item.name}>
                    <div className="standardised-row">
                      <span>
                        {item.hasFootnote === 1 ? (
                          <>
                            For an Attended or Unattended burial funeral, the{' '}
                            <strong>burial fee</strong>.
                            <sup>{item.hasFootnote}</sup> In this local area,
                            the typical cost of the burial fee for local
                            residents is:
                          </>
                        ) : item.hasFootnote === 2 ? (
                          <>
                            For an Attended cremation funeral, the{' '}
                            <strong>cremation fee</strong>.
                            <sup>{item.hasFootnote}</sup> In this local area,
                            the typical cost of a cremation for local residents
                            is:
                          </>
                        ) : (
                          item.name
                        )}
                      </span>
                      {item.price && <strong>{item.price}</strong>}
                    </div>
                    {item.description && (
                      <div className="standardised-row-description">
                        {item.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="standardised-religious-note">
              <p>
                Please discuss any specific religious, belief-based and/or
                cultural requirements that you have with the funeral director.
              </p>
            </div>

            <div className="standardised-block">
              <div className="standardised-block-header">
                <h3>ADDITIONAL FUNERAL DIRECTOR PRODUCTS AND SERVICES</h3>
              </div>
              <div className="standardised-rows">
                {standardisedPriceList.additional.map((item) => (
                  <div key={item.name} className="standardised-row">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <p className="standardised-footnote">
              1 The burial fee is the charge made for digging and closing a new
              grave, or for reopening and closing an existing grave.
            </p>
            <p className="standardised-footnote">
              2 In England, Wales and Northern Ireland, you will usually need to
              pay doctors&apos; fees as well. This is the charge for two doctors
              to sign the Medical Certificates for Cremation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Price List with Tabs */}
      <section className="pricelist-section">
        <div className="pricelist-container">
          <FadeInUp>
            <h2 className="pricelist-heading">Detailed Price List</h2>
            <p className="pricelist-subheading">
              Every service itemised so you know exactly what you&apos;re paying
              for. Mix and match to create the perfect arrangement.
            </p>
          </FadeInUp>

          {/* Tab Navigation */}
          <div className="pricelist-tabs">
            {priceCategories.map((category) => (
              <button
                key={category.id}
                className={`pricelist-tab ${activeTab === category.id ? 'pricelist-tab-active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pricelist-content">
            {priceCategories.map((category) => (
              <div
                key={category.id}
                className={`pricelist-panel ${activeTab === category.id ? 'pricelist-panel-active' : ''}`}
              >
                <div className="price-table">
                  <div className="price-table-header">
                    <div className="price-table-cell">Service</div>
                    <div className="price-table-cell">Price</div>
                  </div>
                  {category.items.map((item, index) => (
                    <div key={index} className="price-table-row">
                      <div className="price-table-cell">
                        <div className="price-item-content price-item-content-with-image">
                          <div>
                            <div className="price-item-name">{item.name}</div>
                            <div className="price-item-description">
                              {item.description}
                            </div>
                            {item.included.length > 0 && (
                              <div className="price-item-included">
                                Included in:{' '}
                                {item.included
                                  .map((pkg) =>
                                    pkg === 'direct'
                                      ? 'Direct'
                                      : pkg === 'attended'
                                        ? 'Simple Cremation with Service'
                                        : 'Bespoke',
                                  )
                                  .join(', ')}
                              </div>
                            )}
                            {!['crematorium', 'disbursements'].includes(
                              category.id,
                            ) && (
                              <div className="price-item-image-wrap">
                                {(() => {
                                  const imageSrc =
                                    categoryImageMap[category.id]?.[
                                      item.name
                                    ] ?? placeholderImageSrc;

                                  return (
                                    <img
                                      src={imageSrc}
                                      alt={`${item.name} image`}
                                      className="price-item-image"
                                      width={220}
                                      height={124}
                                      loading="lazy"
                                    />
                                  );
                                })()}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="price-table-cell price-cell">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="costs-cta">
        <div className="costs-cta-content">
          <h2>Ready to Discuss Your Needs?</h2>
          <p>
            Our compassionate team is here to help you through every step. Get
            in touch for a free, no-obligation conversation about your options.
          </p>
          <div className="costs-cta-buttons">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
