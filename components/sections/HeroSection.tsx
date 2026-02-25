'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90"
          alt="Titan Fitness Gym — Best Gym in Karachi"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        {/* Red accent glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      </div>

      {/* Diagonal Red Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent z-10" />
      <div className="absolute left-2 top-0 bottom-0 w-px bg-accent/20 z-10" />

      {/* Content */}
      <div className="container-max relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-8 h-px bg-accent" />
            <span className="section-label">Karachi&apos;s Premier Fitness Destination</span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading font-bold text-white uppercase leading-none mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.25s', fontSize: 'clamp(3rem, 8vw, 4rem)' }}
          >
            Transform Your Body.{' '}
            <span className="text-gradient block">
              Unleash Your Strength.
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-gray-300 font-body text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Pakistan&apos;s most results-driven gym. Expert coaches, world-class equipment,
            and a community that pushes you to your limits — and beyond.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.55s' }}
          >
            <Link href="/membership" className="btn-primary text-base px-10 py-5 group">
              Join Now — Start Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/contact" className="btn-outline text-base px-10 py-5">
              <FaPlay className="text-sm" />
              Book Free Trial
            </Link>
          </div>

          {/* Quick Stats */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            {[
              { value: '2000+', label: 'Members' },
              { value: '6+', label: 'Expert Trainers' },
              { value: '5+', label: 'Years Experience' },
              { value: '15+', label: 'Weekly Classes' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading font-bold text-white text-3xl leading-none">{stat.value}</span>
                <span className="text-gray-500 font-body text-sm uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent" />
        <div className="w-4 h-4 border-2 border-accent rotate-45" />
      </div>
    </section>
  );
}
