import type { Metadata } from 'next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaClock } from 'react-icons/fa';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Titan Fitness Gym Karachi',
  description:
    'Get in touch with Titan Fitness Gym in Karachi. Visit us, call us, or drop us a message. Book your free trial today!',
};

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: 'Plot 42, Block 7, Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
    href: 'https://maps.google.com/?q=Gulshan-e-Iqbal+Karachi',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+92 300 123 4567',
    href: 'tel:+923001234567',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@titanfitnesspk.com',
    href: 'mailto:info@titanfitnesspk.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+92 300 123 4567',
    href: 'https://wa.me/923001234567',
  },
];

const hours = [
  { day: 'Monday – Friday', time: '6:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
  { day: 'Public Holidays', time: '9:00 AM – 5:00 PM' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We're Here For You"
        description="Have a question? Ready to start your journey? We'd love to hear from you."
        bgImage="https://images.unsplash.com/photo-1596357395217-80de13130e92?w=1920&q=80"
      />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <p className="section-label mb-4">Contact Information</p>
              <h2 className="section-title mb-6">
                Let&apos;s <span className="text-gradient">Connect</span>
              </h2>
              <span className="red-divider mb-8 block" />
              <p className="text-gray-400 font-body text-lg leading-relaxed mb-10">
                Whether you want to book a free trial, ask about our programs, or just come by for a tour —
                we&apos;re always happy to help. Our team typically responds within a few hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 p-5 bg-surface-card border border-surface-border hover:border-accent/50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <info.icon className="text-accent group-hover:text-white transition-colors duration-300 text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-body text-xs uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-white font-body font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="bg-surface-card border border-surface-border p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-accent text-lg" />
                  <h3 className="font-heading text-xl font-bold text-white uppercase">Opening Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-400 font-body text-sm">{h.day}</span>
                      <span className="text-white font-body text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://m.facebook.com/titanfitnesspk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#0f5fce] text-white font-heading font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-300 text-sm"
                >
                  <FaFacebook className="text-lg" />
                  Facebook
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-300 text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-surface-card border border-surface-border p-8">
                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">Send Us A Message</h3>
                <p className="text-gray-500 font-body text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-white uppercase mb-6">Find Us On The Map</h3>
            <div className="w-full h-80 md:h-[450px] border border-surface-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.979543780752!2d67.08!3d24.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0249a7e9b9%3A0x8e6e7e6de7a0c4a1!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Titan Fitness Gym Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
