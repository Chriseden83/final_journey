import type { Metadata } from 'next';
import MuchLovedWidget from '@/components/MuchLovedWidget';

export const metadata: Metadata = {
  title: 'Tributes | Final Journey Funerals',
  description:
    'View and search tributes for those we have had the honour to serve. Leave your condolences and celebrate the lives of loved ones.',
};

export default function TributesPage() {
  return (
    <div className="tributes-page">
      {/* Hero Section */}
      <section className="tributes-hero">
        <div className="tributes-hero-content">
          <h1>Tributes</h1>
          <p>
            Honouring the lives of those we have had the privilege to serve.
            Search or browse to find a tribute and leave your condolences.
          </p>
        </div>
      </section>

      {/* MuchLoved Widget Section */}
      <section className="tributes-content">
        <div className="container">
          <MuchLovedWidget variant="cards" showHeadings={false} />
        </div>
      </section>
    </div>
  );
}
