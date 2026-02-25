import Link from 'next/link';
import { FaDumbbell, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/trainers', label: 'Our Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services#strength-training', label: 'Strength Training' },
  { href: '/services#weight-loss', label: 'Weight Loss' },
  { href: '/services#personal-training', label: 'Personal Training' },
  { href: '/services#group-classes', label: 'Group Classes' },
  { href: '/services#nutrition-guidance', label: 'Nutrition Guidance' },
  { href: '/services#fitness-assessment', label: 'Fitness Assessment' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-surface-border">
      {/* Main Footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <FaDumbbell className="text-white text-lg" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-xl uppercase tracking-widest leading-none block">TITAN</span>
                <span className="font-heading text-accent text-xs uppercase tracking-[0.4em] leading-none block">Fitness Gym</span>
              </div>
            </Link>
            <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
              Karachi&apos;s premier strength and conditioning gym. Transforming bodies and minds since 2019.
            </p>
            <div className="flex gap-3">
              <a
                href="https://m.facebook.com/titanfitnesspk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-card border border-surface-border flex items-center justify-center text-gray-400 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/titanfitnesspk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-card border border-surface-border flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-600 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-card border border-surface-border flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-600 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-accent font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-500 hover:text-accent font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Gulshan-e-Iqbal+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-500 hover:text-accent transition-colors duration-200 font-body text-sm group"
                >
                  <FaMapMarkerAlt className="text-accent mt-0.5 flex-shrink-0" />
                  Plot 42, Block 7, Gulshan-e-Iqbal, Karachi, Sindh, Pakistan
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 text-gray-500 hover:text-accent transition-colors duration-200 font-body text-sm"
                >
                  <FaPhone className="text-accent flex-shrink-0" />
                  +92 300 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@titanfitnesspk.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-accent transition-colors duration-200 font-body text-sm"
                >
                  <FaEnvelope className="text-accent flex-shrink-0" />
                  info@titanfitnesspk.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-surface-card border border-surface-border">
              <p className="text-white font-heading text-xs uppercase tracking-widest font-bold mb-1">Hours Today</p>
              <p className="text-accent font-body text-sm">6:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-border">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 font-body text-sm">
            © {new Date().getFullYear()} Titan Fitness Gym. All rights reserved.
          </p>
          <p className="text-gray-600 font-body text-sm">
            🇵🇰 Proudly serving Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
