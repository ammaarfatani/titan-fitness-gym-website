'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaRunning, FaUserTie, FaUsers, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: FaDumbbell,
    title: 'Strength Training',
    desc: 'Scientifically programmed lifting protocols to build real, functional strength and muscle mass.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    href: '/services#strength-training',
    color: 'group-hover:bg-accent',
  },
  {
    icon: FaRunning,
    title: 'Weight Loss',
    desc: 'Strategic fat-loss programs combining smart cardio, resistance training, and nutritional science.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    href: '/services#weight-loss',
    color: 'group-hover:bg-accent',
  },
  {
    icon: FaUserTie,
    title: 'Personal Training',
    desc: 'One-on-one elite coaching tailored entirely to your goals, schedule, and current fitness level.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    href: '/services#personal-training',
    color: 'group-hover:bg-accent',
  },
  {
    icon: FaUsers,
    title: 'Group Classes',
    desc: 'High-energy classes in HIIT, boxing, yoga, and Zumba — motivation amplified by your tribe.',
    image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=600&q=80',
    href: '/services#group-classes',
    color: 'group-hover:bg-accent',
  },
  {
    icon: FaAppleAlt,
    title: 'Nutrition Guidance',
    desc: 'Personalized meal plans built around your goals and Pakistani cuisine — no crash diets.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    href: '/services#nutrition-guidance',
    color: 'group-hover:bg-accent',
  },
  {
    icon: FaHeartbeat,
    title: 'Fitness Assessment',
    desc: 'Comprehensive baselines and quarterly check-ins to measure every inch of your progress.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    href: '/services#fitness-assessment',
    color: 'group-hover:bg-accent',
  },
];

export default function ServicesOverview() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="section-title mb-4">
              Programs Built For <span className="text-gradient">You</span>
            </h2>
            <span className="red-divider block" />
          </div>
          <Link href="/services" className="btn-outline text-sm px-6 py-3 self-start md:self-auto flex-shrink-0">
            View All Services
            <FaArrowRight />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className={`relative overflow-hidden group block transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-surface-card/80 backdrop-blur-sm border border-surface-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${service.color} border-transparent`}>
                    <service.icon className="text-accent group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white uppercase mb-1">{service.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 font-body text-sm leading-relaxed transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-accent font-heading text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn More <FaArrowRight className="text-xs" />
                </div>
              </div>

              {/* Top left border accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
