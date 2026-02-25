'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Software Engineer, Lost 28kg',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    review:
      'I had tried 3 different gyms before Titan. Nothing ever stuck. But the structure here is different — the trainers actually care, and the community keeps you accountable. I lost 28kg in 6 months and I\'ve never felt stronger in my life.',
    stars: 5,
    metric: '28kg Lost',
  },
  {
    name: 'Fatima Malik',
    role: 'Teacher, Body Transformation',
    image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHx8MHx8fDA%3D',
    review:
      'As a woman, I was nervous about joining a gym. Titan made me feel completely safe and welcomed from day one. Zara\'s coaching is incredible — she built my confidence along with my fitness. The separate ladies section is a huge plus.',
    stars: 5,
    metric: '15kg Lost',
  },
  {
    name: 'Bilal Chaudhry',
    role: 'Cricket Player, Performance Training',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    review:
      'Usman\'s performance training has taken my cricket game to a completely different level. My speed, endurance, and strength have all improved dramatically in just 4 months. I\'d recommend Titan to any serious athlete in Karachi.',
    stars: 5,
    metric: 'Elite Performance',
  },
  {
    name: 'Sana Tariq',
    role: 'Housewife, Post-Pregnancy Fitness',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    review:
      'Post-pregnancy I thought I\'d never get my body back. The team at Titan created a gentle but effective program just for me. Within 5 months I was fitter than before my pregnancy. The nutrition guidance was a game changer.',
    stars: 5,
    metric: '22kg Lost',
  },
  {
    name: 'Kamran Sheikh',
    role: 'Business Owner, Strength Gains',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    review:
      'Ali Hassan is simply the best strength coach I\'ve ever had. His programming is smart, progressive, and actually enjoyable. I went from deadlifting 60kg to 160kg in 8 months. Titan isn\'t just a gym — it\'s a lifestyle upgrade.',
    stars: 5,
    metric: '100kg Strength Gain',
  },
  {
    name: 'Nida Hussain',
    role: 'Doctor, General Fitness',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80',
    review:
      'Even as a doctor who understands fitness science, the level of knowledge the Titan team brings is impressive. The group classes keep things fun while the personal sessions ensure real progress. Best investment I\'ve made in my health.',
    stars: 5,
    metric: 'Total Lifestyle Change',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoplay, activeIndex]);

  const handleNav = (direction: 'next' | 'prev') => {
    setAutoplay(false);
    direction === 'next' ? next() : prev();
  };

  const active = testimonials[activeIndex];

  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #E63946 0px, #E63946 1px, transparent 1px, transparent 30px)`,
            opacity: 0.03,
          }}
        />
      </div>

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Real Results</p>
          <h2 className="section-title mb-4">
            What Our Members <span className="text-gradient">Say</span>
          </h2>
          <span className="red-divider mx-auto block" />
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-card border border-surface-border p-8 md:p-12 relative">
            {/* Quote icon */}
            <FaQuoteLeft className="text-accent/20 text-8xl absolute top-6 left-6" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: active.stars }).map((_, i) => (
                  <FaStar key={i} className="text-gold text-lg" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-gray-300 font-body text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{active.review}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 overflow-hidden flex-shrink-0">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-white uppercase">{active.name}</p>
                  <p className="text-gray-500 font-body text-sm">{active.role}</p>
                </div>
                <div className="ml-auto bg-accent px-4 py-2 hidden sm:block">
                  <span className="font-heading text-white font-bold text-sm uppercase">{active.metric}</span>
                </div>
              </div>
            </div>

            {/* Left accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-accent" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => handleNav('prev')}
              className="w-12 h-12 border border-surface-border hover:border-accent hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setActiveIndex(i); }}
                  className={`transition-all duration-300 ${
                    i === activeIndex ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNav('next')}
              className="w-12 h-12 border border-surface-border hover:border-accent hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setActiveIndex(i); }}
              className={`relative h-16 overflow-hidden transition-all duration-300 ${
                i === activeIndex ? 'border-2 border-accent' : 'border-2 border-transparent opacity-50 hover:opacity-80'
              }`}
              aria-label={`View testimonial by ${t.name}`}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
