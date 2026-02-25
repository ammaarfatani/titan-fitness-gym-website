'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaMedal, FaDumbbell, FaChartLine, FaBullseye } from 'react-icons/fa';

const reasons = [
  {
    icon: FaMedal,
    title: 'Certified Expert Trainers',
    desc: 'Every trainer holds internationally recognized certifications (ISSA, ACE, NASM, NSCA). No guesswork — just science-backed coaching from qualified professionals.',
    highlight: 'ISSA | ACE | NASM | NSCA',
  },
  {
    icon: FaDumbbell,
    title: 'Modern Premium Equipment',
    desc: 'Train with the best. Our facility features top-of-the-line commercial-grade equipment — from Olympic platforms to the latest cardio technology.',
    highlight: 'Commercial Grade Equipment',
  },
  {
    icon: FaChartLine,
    title: 'Structured Smart Programs',
    desc: 'No random workouts. Every program is periodized, progressive, and personalized. We track every metric so you always know you\'re moving forward.',
    highlight: 'Periodized & Personalized',
  },
  {
    icon: FaBullseye,
    title: '100% Results Driven',
    desc: 'We obsess over your outcomes. Our success rate speaks for itself — 98% of committed Titan members achieve their primary goal within 90 days.',
    highlight: '98% Success Rate',
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#111111]" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Overlay Stats */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=85"
                alt="Expert training at Titan Fitness Gym"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 bg-[#0d0d0d]/95 backdrop-blur-sm border border-accent/30 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                  <FaBullseye className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-heading text-white font-bold text-lg uppercase">Free 3-Day Trial</p>
                  <p className="text-gray-400 font-body text-sm">No commitment. No credit card. Just results.</p>
                </div>
                <div className="ml-auto">
                  <a
                    href="/contact"
                    className="bg-accent hover:bg-accent-dark text-white font-heading text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors duration-200 whitespace-nowrap"
                  >
                    Try Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div>
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="section-label mb-4">Why Titan?</p>
              <h2 className="section-title mb-4">
                The Titan <span className="text-gradient">Difference</span>
              </h2>
              <span className="red-divider mb-8 block" />
              <p className="text-gray-400 font-body text-lg leading-relaxed mb-10">
                Dozens of gyms in Karachi. Only one Titan. Here&apos;s what sets us apart from every other facility in Pakistan.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-5 border border-surface-border hover:border-accent/50 bg-surface-card transition-all duration-500 group ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <reason.icon className="text-accent group-hover:text-white text-xl transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white uppercase mb-1">{reason.title}</h3>
                    <span className="text-gold font-body text-xs font-semibold uppercase tracking-widest block mb-2">
                      {reason.highlight}
                    </span>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
