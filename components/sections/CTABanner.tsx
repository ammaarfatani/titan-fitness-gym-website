import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&q=80"
          alt="Join Titan Fitness Gym"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-transparent" />
      </div>

      {/* Red bar accent */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-accent" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <p className="section-label mb-4">Your Time Is Now</p>
          <h2 className="font-heading font-bold text-white uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Stop Waiting. <span className="text-gradient">Start Winning.</span>
          </h2>
          <p className="text-gray-300 font-body text-xl leading-relaxed mb-10 max-w-xl">
            Every day you wait is a day behind. Join Titan Fitness Gym today and experience the
            transformation that Karachi is talking about. First 3 days completely free — no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/membership" className="btn-primary text-base px-10 py-5 group">
              Join Now — It&apos;s Free to Start
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="https://wa.me/923001234567?text=Hi! I want to book my free trial at Titan Fitness Gym."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold uppercase tracking-widest px-10 py-5 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-gray-500 font-body text-sm mt-6">
            📍 Gulshan-e-Iqbal, Karachi &nbsp;|&nbsp; 📞 +92 300 123 4567 &nbsp;|&nbsp; No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
