'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Phone,
  Heart,
  Sparkles,
  Crown,
  ChevronRight,
  Info,
  Clock,
  Shield,
  Users,
} from 'lucide-react';

// Package data
const packages = [
  {
    id: 'direct',
    name: 'Direct Cremation',
    tagline: 'Simple & Dignified',
    price: 1695,
    description:
      'A practical and lower-cost option which separates the cremation process from the funeral ceremony. Perfect for families who wish to arrange their own celebration of life.',
    icon: Heart,
    features: [
      'Help completing the necessary paperwork',
      "Doctors' cremation paperwork fees",
      'Collection of the body',
      'Care of the body prior to the cremation',
      'Simple cardboard coffin',
      'Cremation',
      'Simple urn',
      'Delivery of the ashes to you',
      'Fixed price with no hidden extras',
    ],
    highlight: false,
  },
  {
    id: 'attended',
    name: 'Attended Funeral',
    tagline: 'A Meaningful Goodbye',
    price: 1695,
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
  {
    id: 'unattended',
    name: 'Unattended Funeral',
    tagline: 'Flexible Option',
    price: 825,
    cremationPrice: 1695,
    description:
      'A funeral where family and friends may choose to have a ceremony, event or service for the deceased person, but do not attend the burial or cremation itself.',
    icon: Crown,
    features: [
      "Burial option: £825 (funeral director's charges only)",
      'Cremation option: £1,695 (includes cremation fee)',
      'All necessary legal and administrative arrangements',
      'Collection and care of your loved one',
      'Simple dignified coffin',
      'Freedom to hold your own ceremony separately',
      'Flexible timing for your memorial service',
    ],
    highlight: false,
  },
];

// Detailed price list data organized by category
const priceCategories = [
  {
    id: 'professional',
    name: 'Professional Services',
    items: [
      {
        name: 'Legal and administrative arrangements',
        price: 155,
        included: ['attended'],
        description: 'Collecting and transporting deceased within 15 miles',
      },
      {
        name: 'Care of deceased person',
        price: 100,
        included: ['attended'],
        description: 'At our chapel, 2 Durdar Road, Carlisle, CA2 4SA',
      },
      {
        name: 'Oak Veneered Coffin',
        price: 395,
        included: ['attended'],
        description: 'With Brass or Nickel effect fittings or rope handles',
      },
      {
        name: 'Viewing of deceased',
        price: 0,
        included: ['attended'],
        description: 'For family and friends, by appointment',
      },
      {
        name: 'Transport to cemetery/crematorium',
        price: 250,
        included: ['attended'],
        description:
          'Within 20 miles of our premises in a hearse or appropriate vehicle',
      },
      {
        name: 'Additional mileage',
        price: '£1.00/mile',
        included: [],
        description: 'For distances beyond the included radius',
      },
      {
        name: 'Additional transfers',
        price: 125,
        included: [],
        description: 'E.g. to their home, place of worship etc.',
      },
      {
        name: 'Embalming',
        price: 150,
        included: [],
        description: 'Approximate cost',
      },
      {
        name: 'Services outside normal office hours',
        price: 'POA',
        included: [],
        description: 'Prices on request',
      },
    ],
  },
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
        name: 'Light Woodgrain Coffin',
        price: 395,
        included: [],
        description: 'Cardboard coffin with wood effect',
      },
      {
        name: 'Traditional Wood Veneered',
        price: 395,
        included: ['attended'],
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
        name: 'Solid Oak',
        price: 995,
        included: [],
        description: 'Premium quality solid oak',
      },
      {
        name: 'Pathway',
        price: 995,
        included: [],
        description: 'Premium wooden coffin',
      },
      {
        name: 'Bespoke Pictorial',
        price: 'POA',
        included: [],
        description: 'Custom design to your specification',
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
        price: 650,
        included: [],
        description: 'Premium eco-friendly soft coffin',
      },
      {
        name: 'Natural Legacy Wool Coffin (Natural Cream)',
        price: 750,
        included: [],
        description: 'British wool in natural cream',
      },
      {
        name: 'Natural Legacy Wool Coffin (Limestone Grey)',
        price: 795,
        included: [],
        description: 'British wool in limestone grey',
      },
      {
        name: 'Leafcocoon by Bellacouche',
        price: 885,
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
        price: 750,
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Only Fools and Hearses (Trotters)',
        price: 750,
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Horse Drawn Carriage - Black (2 Horses)',
        price: 800,
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Horse Drawn Carriage - White (2 Horses)',
        price: 850,
        included: [],
        description: 'Price on application for distance',
      },
      {
        name: 'Motorbike Hearse and Sidecar',
        price: '£895+',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'VW Bay Hearse / Split Screen / Passenger Bus',
        price: '£995+',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Landrover Hearse',
        price: '£995+',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Morris Minor Hearse',
        price: '£995+',
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Rainbow Hearse',
        price: 1550,
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Pink Hearse',
        price: 1550,
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Leopard Print Hearse',
        price: 2000,
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Union Jack Hearse',
        price: 2000,
        included: [],
        description: 'Distance dependent',
      },
      {
        name: 'Vintage Lorry',
        price: 'POA',
        included: [],
        description: 'Price on application',
      },
      {
        name: 'VW Campervan',
        price: 'POA',
        included: [],
        description: 'Price on application',
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
        price: '£1,150 / £650',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Roucan Loch (Dumfries)',
        price: '£999 / £595',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Distington (Workington)',
        price: '£1,150 / £650',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Eden Valley (Temple, Sowerby, Penrith)',
        price: '£975 / £550',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Beetham Hall (Milnthorpe)',
        price: '£1,025 / £800',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
      {
        name: 'Lancaster',
        price: '£1,230 / £550',
        included: [],
        description: 'Attended (Mon-Fri) / Unattended',
      },
    ],
  },
  {
    id: 'burial',
    name: 'Burial Fees',
    items: [
      {
        name: 'Burial fee (local residents)',
        price: '£350 - £914',
        included: [],
        description: 'Typical cost in this local area',
      },
      {
        name: 'New grave / plot purchase',
        price: '£300 - £1,452',
        included: [],
        description: 'Plus memorial fees - varies by cemetery',
      },
      {
        name: 'Cremation fee (local residents)',
        price: '£960 - £1,090',
        included: [],
        description: 'Typical cost in this local area',
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
        price: '~£100',
        included: [],
        description: 'Approximately - word dependent',
      },
      {
        name: 'Floristry',
        price: 'POA',
        included: [],
        description: 'Prices on request',
      },
      {
        name: 'Webcasting/Live Streaming/Recording',
        price: 'POA',
        included: [],
        description: 'Prices on request',
      },
      {
        name: 'Photographer',
        price: 'POA',
        included: [],
        description: 'Prices on request',
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
    title: 'Dignity Promise',
    description: 'Your loved one treated with utmost respect always',
  },
];

export default function FuneralCostsPage() {
  const [activeTab, setActiveTab] = useState('professional');

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
          <h1 className="costs-hero-title">Funeral Costs</h1>
          <p className="costs-hero-subtitle">
            Transparent, honest pricing with no hidden fees. We believe every
            family deserves to know exactly what they&apos;re paying for.
          </p>
        </div>
      </section>

      {/* USP Bar */}
      <section className="usp-bar">
        <div className="usp-container">
          {uspFeatures.map((feature) => (
            <div key={feature.title} className="usp-item">
              <feature.icon className="usp-icon" />
              <div className="usp-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Cards Section */}
      <section className="packages-section">
        <div className="packages-container">
          <h2 className="packages-heading">Choose Your Package</h2>
          <p className="packages-subheading">
            Three carefully designed options to suit different needs and
            budgets. Each package can be personalised to create the perfect
            farewell.
          </p>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
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
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Note */}
      <section className="comparison-note">
        <div className="comparison-container">
          <Info className="comparison-icon" />
          <div className="comparison-content">
            <h3>How We Compare</h3>
            <p>
              Our prices are typically <strong>30-40% lower</strong> than the UK
              average. The average cost of a funeral in the UK is now over
              £4,000. We believe that a dignified farewell shouldn&apos;t come
              with a financial burden, which is why we offer quality services at
              fair, transparent prices.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Price List with Tabs */}
      <section className="pricelist-section">
        <div className="pricelist-container">
          <h2 className="pricelist-heading">Detailed Price List</h2>
          <p className="pricelist-subheading">
            Every service itemised so you know exactly what you&apos;re paying
            for. Mix and match to create the perfect arrangement.
          </p>

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
                                    ? 'Attended'
                                    : 'Bespoke',
                              )
                              .join(', ')}
                          </div>
                        )}
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
            <a href="tel:01228595060" className="btn-secondary costs-phone-btn">
              <Phone className="phone-icon" />
              01228 595060
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
