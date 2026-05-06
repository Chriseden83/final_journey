'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  HeroText,
} from '@/components/animations';

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'X3muVaxvBo6vvGYHa';

// Zod validation schema with regex for email
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address',
    ),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Please enter a valid phone number'),
  funeralType: z.enum(
    [
      'personalised-funeral',
      'direct-cremation',
      'alternative-funeral',
      'other',
    ],
    {
      message: 'Please select a funeral type',
    },
  ),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Funeral type options
const funeralTypeOptions = [
  { value: 'personalised-funeral', label: 'Personalised Funeral' },
  { value: 'direct-cremation', label: 'Direct Cremation' },
  { value: 'alternative-funeral', label: 'Alternative Funeral' },
  { value: 'other', label: 'Other / General Enquiry' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_4tgxkwl',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rvwp1oa',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          funeral_type: funeralTypeOptions.find(
            (opt) => opt.value === data.funeralType,
          )?.label,
          message: data.message,
          to_email: 'ceden1983@gmail.com',
        },
      );
      console.log('EmailJS success:', result);

      setSubmitStatus('success');
      reset();
    } catch (error: unknown) {
      const emailError = error as { text?: string; status?: number };
      console.error('EmailJS error:', emailError?.text || emailError);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <HeroText delay={0.2}>
            <h1 className="contact-hero-title">Contact Us</h1>
          </HeroText>
          <HeroText delay={0.4}>
            <p className="contact-hero-subtitle">
              We&apos;re here to help when you need us
            </p>
          </HeroText>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <FadeInLeft delay={0.2} className="contact-form-wrapper">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <p className="contact-section-text">
                Please complete the form below and we will get back to you as
                soon as possible.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form"
                noValidate
              >
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name{' '}
                    <span className="required" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Enter your full name"
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address{' '}
                    <span className="required" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="Enter your email address"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number{' '}
                    <span className="required" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                    placeholder="Enter your phone number"
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error" role="alert">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Funeral Type Options */}
                <fieldset className="form-group form-fieldset">
                  <legend className="form-label">
                    Type of Service{' '}
                    <span className="required" aria-hidden="true">
                      *
                    </span>
                  </legend>
                  <div
                    className="form-options"
                    role="radiogroup"
                    aria-required="true"
                  >
                    {funeralTypeOptions.map((option) => (
                      <label key={option.value} className="form-option">
                        <input
                          type="radio"
                          value={option.value}
                          {...register('funeralType')}
                          className="form-radio"
                        />
                        <span className="form-option-label">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.funeralType && (
                    <span
                      id="funeralType-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.funeralType.message}
                    </span>
                  )}
                </fieldset>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message{' '}
                    <span className="required" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    rows={5}
                    placeholder="Please tell us how we can help you..."
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <span
                      id="message-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary form-submit"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                <div aria-live="polite" aria-atomic="true">
                  {submitStatus === 'success' && (
                    <div className="form-success" role="status">
                      <p>
                        Thank you for your message. We will be in touch shortly.
                      </p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="form-error-message" role="alert">
                      <p>
                        Something went wrong. Please try again or call us
                        directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </FadeInLeft>

            {/* Contact Information */}
            <FadeInRight delay={0.3} className="contact-info-wrapper">
              <h2 className="contact-section-title">How to Find Us</h2>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.8965799037445!2d-2.9472419!3d54.8907741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487cf3c85d8a2c47%3A0x4e5d6f8c0b2a9c8d!2s2%20Durdar%20Rd%2C%20Carlisle%20CA2%204SA!5e0!3m2!1sen!2suk!4v1647345678901!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Final Journey Funerals Location"
                />
              </div>

              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Address</h3>
                    <p>2 Durdar Road</p>
                    <p>Carlisle, Cumbria</p>
                    <p>CA2 4SA</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Phone</h3>
                    <a href="tel:01228595060" className="contact-link">
                      01228 595060
                    </a>
                    <a href="tel:07745354100" className="contact-link">
                      07745 354100
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <a
                      href="mailto:info@finaljourneyfunerals.co.uk"
                      className="contact-link"
                    >
                      info@finaljourneyfunerals.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
}
