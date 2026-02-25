'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const trainers = [
  {
    name: 'Ali Hassan',
    role: 'Head Coach & Strength Specialist',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    years: '10 Years',
  },
  {
    name: 'Zara Khan',
    role: 'Body Transformation Coach',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    years: '7 Years',
  },
  {
    name: 'Usman Malik',
    role: 'Sports Performance Coach',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&q=80',
    years: '8 Years',
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Group Fitness & Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    years: '6 Years',
  },
];

export default function TrainersPreview() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Expert Coaching</p>
            <h2 className="section-title mb-4">
              Meet Your <span className="text-gradient">Coaches</span>
            </h2>
            <span className="red-divider block" />
          </div>
          <Link href="/trainers" className="btn-outline text-sm px-6 py-3 self-start md:self-auto flex-shrink-0 flex items-center gap-2">
            Meet All Trainers
            <FaArrowRight />
          </Link>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors duration-500" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-accent px-3 py-1">
                  <span className="text-white font-heading text-xs font-bold uppercase">{trainer.years}</span>
                </div>

                {/* Name Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl font-bold text-white uppercase">{trainer.name}</h3>
                  <p className="text-accent font-body text-sm font-semibold">{trainer.role}</p>
                  {/* View Profile link - appears on hover */}
                  <div className="mt-3 flex items-center gap-2 text-white font-heading text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    View Profile <FaArrowRight className="text-xs" />
                  </div>
                </div>

                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-body mb-4">Ready to train with the best in Karachi?</p>
          <Link href="/contact" className="btn-primary">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
