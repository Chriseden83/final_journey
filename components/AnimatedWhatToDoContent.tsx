'use client';

import Link from 'next/link';
import {
  Phone,
  ClipboardList,
  Users,
  Building2,
  FileText,
  Heart,
  Car,
  Flower2,
  Music,
  Camera,
  UtensilsCrossed,
  ChevronRight,
} from 'lucide-react';
import { FadeInUp, HeroText } from '@/components/animations';

const registrarOffices = [
  {
    name: 'Carlisle',
    address: 'Lady Gillfords House, Petteril Bank Road, Carlisle, CA1 3AJ',
    tel: '0300 303 2472',
  },
  {
    name: 'Wigton',
    address: 'Wigton Library, Wigton, CA7 9NJ',
    tel: '0300 303 2472',
  },
  {
    name: 'Penrith',
    address: "Penrith Library, St Andrew's Churchyard, Penrith, CA11 7YA",
    tel: '0300 303 2472',
  },
  {
    name: 'Kendal',
    address: 'County Offices, Busher Walk, Kendal, LA9 4RQ',
    tel: '0300 303 2472',
  },
  {
    name: 'Whitehaven',
    address: 'College House, Flatt Walk, Whitehaven, CA28 7RW',
    tel: '0300 303 2472',
  },
  {
    name: 'Barrow in Furness',
    address: 'Nan Tait Centre, Abbey Road, Barrow in Furness, LA14 1LG',
    tel: '0300 303 2472',
  },
];

const whoToNotify = [
  'Vehicle registration and driving licence (DVLA)',
  'Passport Office',
  'Motoring insurance and breakdown providers',
  'Insurance companies',
  'Pension plans',
  'Bank and building society',
  'Credit card companies',
  'Utilities (gas, electricity, water, telephone)',
  'Employers or employees',
  'Council tax',
  'Benefit agency / DWP',
  'Income tax (HMRC)',
  'Mortgage provider',
  'Internet provider',
  "Child's school or childcare provider",
  'Doctors and dentists',
  'Hospital clinics or private health care',
  'Solicitor',
];

export default function AnimatedWhatToDoContent() {
  return (
    <main className="guide-page">
      {/* Hero Section */}
      <section className="guide-hero">
        <div className="guide-hero-content">
          <HeroText delay={0.2}>
            <h1 className="guide-hero-title">What to Do When Someone Dies</h1>
          </HeroText>
          <HeroText delay={0.4}>
            <p className="guide-hero-subtitle">
              A gentle guide to help you through the practical steps during a
              difficult time. We&apos;re here to support you every step of the
              way.
            </p>
          </HeroText>
        </div>
      </section>

      {/* Quick Steps Overview */}
      <section className="guide-overview">
        <div className="guide-container">
          <FadeInUp>
            <div className="overview-grid">
              <div className="overview-card">
                <ClipboardList className="overview-icon" />
                <h3>Obtain a Medical Certificate</h3>
                <p>Contact the doctor to confirm death and receive paperwork</p>
              </div>
              <div className="overview-card">
                <Building2 className="overview-icon" />
                <h3>Register the Death</h3>
                <p>Visit the registrar within 5 days with the certificate</p>
              </div>
              <div className="overview-card">
                <Users className="overview-icon" />
                <h3>Choose a Funeral Director</h3>
                <p>Find someone you trust to guide you through arrangements</p>
              </div>
              <div className="overview-card">
                <Heart className="overview-icon" />
                <h3>Plan the Farewell</h3>
                <p>Create a meaningful service that reflects their life</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="guide-content">
        <div className="guide-container">
          {/* Immediate Steps */}
          <FadeInUp>
            <div className="guide-section" id="immediate">
              <h2>
                <ClipboardList className="section-icon" />
                Immediate Steps
              </h2>

              <div className="guide-card">
                <h3>If the person dies at home</h3>
                <p>
                  Contact your doctor no matter what time of day it is. They
                  will arrange to come and confirm death, issuing you with a
                  &apos;medical certificate&apos; to confirm the cause of death.
                  The person&apos;s body cannot be moved until this has
                  happened.
                </p>
                <p>
                  If you already know that you would like the person cremated,
                  tell your doctor as they will need to prepare different forms
                  and make further arrangements.
                </p>
              </div>

              <div className="guide-card">
                <h3>Caring for them at home</h3>
                <ul>
                  <li>Keep the room as cold as possible</li>
                  <li>Switch off any electric blankets</li>
                  <li>
                    If they are on a pressure relieving mattress, this can be
                    left on
                  </li>
                  <li>
                    You may want to wash and dress them, brush their hair, close
                    their eyes and mouth
                  </li>
                  <li>
                    Roll up a towel and place it under the chin if necessary
                  </li>
                </ul>
              </div>

              <div className="guide-card guide-card-highlight">
                <h3>If death occurs suddenly</h3>
                <p>
                  If the person has not been seen by a doctor within the last 14
                  days, or if death was:
                </p>
                <ul>
                  <li>Following an accident or injury</li>
                  <li>Due to an industrial disease</li>
                  <li>During a surgical operation</li>
                  <li>Of unknown or unexplained cause</li>
                </ul>
                <p>
                  The body will immediately be in care of the coroner. A Post
                  Mortem may be carried out to establish the cause of death. The
                  police may be involved and may want to question family members
                  &ndash; this is standard procedure. This can be an upsetting
                  time, but please know it is normal.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Registration */}
          <FadeInUp>
            <div className="guide-section" id="registration">
              <h2>
                <Building2 className="section-icon" />
                Registering the Death
              </h2>

              <div className="guide-card">
                <h3>Within 5 days</h3>
                <p>
                  In England and Wales, a death must be registered within 5 days
                  of the date of death, unless the Registrar says this period
                  may be extended or if the coroner is involved. The
                  registration itself will take approximately 30 minutes.
                </p>
                <p>
                  Take the medical certificate to the registrar. You may bring a
                  friend or relative with you, along with any documents (medical
                  card, birth certificates, marriage certificates) that relate
                  to the person who has died.
                </p>
                <p>
                  <em>
                    If you are upset, the Registrar will understand and will
                    give you the time you need.
                  </em>
                </p>
              </div>

              <div className="guide-card">
                <h3>Who can register the death?</h3>
                <p>The law states that the following may register a death:</p>
                <ol>
                  <li>A relative of the deceased</li>
                  <li>A person present at the death</li>
                  <li>
                    The occupier of the house or institution where the death
                    took place
                  </li>
                  <li>
                    The person arranging the funeral (instructing the funeral
                    director)
                  </li>
                </ol>
              </div>

              <div className="guide-card">
                <h3>After registration you will receive:</h3>
                <ul>
                  <li>
                    <strong>A green form</strong> &ndash; to allow arrangements
                    for burial or cremation. Give this to the Funeral Directors
                    or directly to the burial/cremation authorities.
                  </li>
                  <li>
                    <strong>Registration/Notification of Death Form</strong>{' '}
                    &ndash; for Social Security purposes. Complete and return to
                    any local DWP office without delay.
                  </li>
                  <li>
                    <strong>Death certificates</strong> &ndash; may be required
                    by banks, building societies, solicitors, insurance and
                    pension claims. Cost approximately £11 each at time of
                    registration.
                  </li>
                </ul>
                <p className="guide-tip">
                  <strong>Tip:</strong> Purchase several death certificates at
                  registration &ndash; many organisations require originals, not
                  photocopies.
                </p>
              </div>

              <div className="guide-card">
                <h3>Local Registrar Offices in Cumbria</h3>
                <div className="registrar-list">
                  {registrarOffices.map((office) => (
                    <div key={office.name} className="registrar-item">
                      <strong>{office.name}</strong>
                      <span>{office.address}</span>
                      <a href={`tel:${office.tel.replace(/\s/g, '')}`}>
                        {office.tel}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Choosing a Funeral Director */}
          <FadeInUp>
            <div className="guide-section" id="funeral-director">
              <h2>
                <Users className="section-icon" />
                Choosing a Funeral Director
              </h2>

              <div className="guide-card">
                <p>
                  You do not have to use a funeral director and may want to
                  organise the funeral yourself. You may want to use some but
                  not all of a funeral director&apos;s services.
                </p>
                <p>
                  It is important to choose someone that you trust and
                  understands what it is you want, so you may want to call
                  around different organisations before you decide.
                </p>
              </div>

              <div className="guide-card guide-card-branded">
                <h3>How Final Journey Can Help</h3>
                <p>
                  At Final Journey we welcome such enquiries. We can help as
                  much or as little as you want. Whether it is help with
                  transport from A-B, supplying a coffin, through to organising
                  all aspects of the funeral.
                </p>
                <ul>
                  <li>
                    We will talk you through any aspects of the process you need
                    to know
                  </li>
                  <li>
                    We can collect the person&apos;s body and take them into our
                    care until the funeral
                  </li>
                  <li>We can advise and support keeping the body at home</li>
                  <li>
                    We will meet with you to discuss arrangements at your home
                    or at our office
                  </li>
                </ul>
                <Link href="/contact" className="guide-cta-link">
                  Get in touch with us
                  <ChevronRight className="cta-arrow" />
                </Link>
              </div>
            </div>
          </FadeInUp>

          {/* Organising the Funeral */}
          <FadeInUp>
            <div className="guide-section" id="organising">
              <h2>
                <Heart className="section-icon" />
                Organising the Funeral
              </h2>

              <div className="guide-card">
                <p>
                  A funeral is one of those rare events which is not necessarily
                  improved by professionals. Your funeral needs to be created
                  and conducted according to the culture, customs and language
                  of your family. You have choices:
                </p>
                <ul>
                  <li>
                    <strong>Direct cremation/burial</strong> &ndash; no funeral
                    service
                  </li>
                  <li>
                    <strong>Memorial service</strong> &ndash; a funeral at which
                    the dead person is not present
                  </li>
                  <li>
                    <strong>Family-organised farewell</strong> &ndash; with or
                    without ashes, anywhere you want, at any time
                  </li>
                  <li>
                    <strong>Private funeral</strong> &ndash; only certain people
                    invited
                  </li>
                  <li>
                    <strong>Personalised conventional funeral</strong> &ndash;
                    alternative hearse, colourful coffin, dress code, theme,
                    different music
                  </li>
                  <li>
                    <strong>Traditional funeral</strong> &ndash; with all the
                    traditional elements
                  </li>
                </ul>
              </div>

              <div className="options-grid">
                <div className="option-card">
                  <Car className="option-icon" />
                  <h4>Transport</h4>
                  <p>
                    Choose our Gold Mercedes Vito hearse, traditional hearse
                    with limousines, motorcycle hearse, VW Campervan, horse and
                    cart, or your own vehicle.
                  </p>
                  <Link href="/services/transport-options">
                    View transport options
                  </Link>
                </div>

                <div className="option-card">
                  <FileText className="option-icon" />
                  <h4>Coffins</h4>
                  <p>
                    Traditional wood veneered, bamboo, willow, pandanus, banana
                    leaf, cardboard, pictorial, or woollen shrouds. You can
                    decorate them yourself.
                  </p>
                  <Link href="/funeral-costs">View our price list</Link>
                </div>

                <div className="option-card">
                  <Flower2 className="option-icon" />
                  <h4>Flowers</h4>
                  <p>
                    Simple garden flowers or formal arrangements. We work with
                    talented florists to create tributes right for you.
                  </p>
                </div>

                <div className="option-card">
                  <Music className="option-icon" />
                  <h4>Music</h4>
                  <p>
                    Most crematoriums have the Wesley music system with access
                    to almost anything ever recorded. Live music also works
                    beautifully.
                  </p>
                </div>

                <div className="option-card">
                  <Camera className="option-icon" />
                  <h4>Recording & Photography</h4>
                  <p>
                    Services can be recorded or filmed. We can arrange
                    photography to help you remember everyone who attended.
                  </p>
                </div>

                <div className="option-card">
                  <UtensilsCrossed className="option-icon" />
                  <h4>Food & Drinks</h4>
                  <p>
                    Traditional gathering after the funeral at a venue, village
                    hall, or home. We can help arrange caterers if required.
                  </p>
                </div>
              </div>

              <div className="guide-card">
                <h3>Personal touches</h3>
                <ul>
                  <li>
                    <strong>Dress code</strong> &ndash; ask people to dress in a
                    way that reflects the sense of occasion
                  </li>
                  <li>
                    <strong>Put something on the coffin</strong> &ndash; a
                    single flower stem, a sprig of herb, or a last message
                  </li>
                  <li>
                    <strong>Funeral favours</strong> &ndash; give guests a
                    little keepsake: seeds to plant, a favourite recipe,
                    something that belonged to the person
                  </li>
                  <li>
                    <strong>Raise a toast</strong> &ndash; consider sharing
                    their favourite sweet or raising a glass at the goodbye
                    moment
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>

          {/* Who to Notify */}
          <FadeInUp>
            <div className="guide-section" id="notify">
              <h2>
                <FileText className="section-icon" />
                Who to Notify
              </h2>

              <div className="guide-card">
                <p>
                  When someone dies you will need to contact various
                  organisations to inform them. You may need to send them a
                  death certificate:
                </p>
                <div className="notify-grid">
                  {whoToNotify.map((item, index) => (
                    <div key={index} className="notify-item">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="guide-tip">
                  <strong>Tell Us Once:</strong> This government service helps
                  you notify multiple departments at once. The registrar will
                  provide this form when you register the death.
                </p>
                <p className="guide-tip">
                  <strong>Important:</strong> If the deceased owned a vehicle,
                  check insurance cover before anyone drives it. Permission to
                  drive may cease when the owner dies.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Cremated Remains */}
          <FadeInUp>
            <div className="guide-section" id="ashes">
              <h2>Cremated Remains</h2>
              <div className="guide-card">
                <p>
                  Ashes are available for collection the next day. Final Journey
                  will collect these and arrange to bring them to you.
                </p>
                <Link href="/services/tributes-memorials" className="text-link">
                  Learn about memorial and tribute options
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="guide-cta">
        <div className="guide-cta-content">
          <FadeInUp>
            <h2>We&apos;re Here to Help</h2>
            <p>
              If you have any questions or need support, please don&apos;t
              hesitate to contact us. We&apos;re here to guide you through this
              difficult time with care and compassion.
            </p>
            <div className="guide-cta-buttons">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a
                href="tel:01228595060"
                className="btn-secondary guide-phone-btn"
              >
                <Phone className="phone-icon" />
                01228 595060
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
