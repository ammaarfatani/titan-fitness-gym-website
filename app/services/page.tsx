import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaRunning, FaUserTie, FaUsers, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Services | Titan Fitness Gym Karachi — Strength, Weight Loss, Personal Training',
  description:
    'Explore Titan Fitness Gym\'s full range of services: strength training, weight loss programs, personal training, group classes, and nutrition guidance in Karachi, Pakistan.',
};

const services = [
  {
    id: 'strength-training',
    icon: FaDumbbell,
    title: 'Strength Training',
    tagline: 'Build Real Power. Build Real Results.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description:
      'Our strength training programs are designed using proven, science-backed methodologies including powerlifting, Olympic lifting, and hypertrophy training. Whether you\'re a beginner or an advanced lifter, we have a program tailored to your goals.',
    benefits: [
      'Customized periodized training plans',
      'Access to Olympic bars and bumper plates',
      'Coaching on perfect form & technique',
      'Progressive overload tracking',
      'Strength benchmarks & testing',
      'Injury prevention protocols',
    ],
  },
  {
    id: 'weight-loss',
    icon: FaRunning,
    title: 'Weight Loss Programs',
    tagline: 'Burn Fat. Build Confidence. Transform Fast.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    description:
      'Our medically-informed weight loss programs combine strategic cardio, resistance training, and nutritional guidance to create a sustainable calorie deficit while preserving muscle mass. We take the guesswork out of fat loss.',
    benefits: [
      'Metabolic rate assessment',
      'Structured cardio & HIIT programs',
      'Weekly body composition tracking',
      'Personalized calorie targets',
      'Accountability check-ins',
      'Lifestyle habit coaching',
    ],
  },
  {
    id: 'personal-training',
    icon: FaUserTie,
    title: 'Personal Training',
    tagline: '1-on-1 Coaching. Unlimited Potential.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    description:
      'Experience the fastest path to your goals with our elite personal training service. Each trainer is certified, experienced, and laser-focused on your success. Sessions are fully customized and scheduled at your convenience.',
    benefits: [
      'Dedicated certified personal trainer',
      'Fully personalized workout programs',
      'Real-time form correction & coaching',
      'Flexible scheduling (morning to night)',
      'Monthly progress assessments',
      'Direct WhatsApp support from trainer',
    ],
  },
  {
    id: 'group-classes',
    icon: FaUsers,
    title: 'Group Classes',
    tagline: 'Train Together. Win Together.',
    image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=800&q=80',
    description:
      'Our high-energy group classes bring the intensity of elite training to a fun, motivating team environment. From high-intensity intervals to boxing fitness, our timetable has something for every level and preference.',
    benefits: [
      '15+ classes per week on rotating schedule',
      'HIIT, Kickboxing, Zumba, Yoga & more',
      'Maximum 15 members per class',
      'Professional instructor-led sessions',
      'Suitable for all fitness levels',
      'Community accountability & motivation',
    ],
  },
  {
    id: 'nutrition-guidance',
    icon: FaAppleAlt,
    title: 'Nutrition Guidance',
    tagline: 'Food Is Fuel. Master It.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    description:
      'Training is only half the equation. Our certified nutrition coaches create sustainable, realistic meal plans based on your goals, preferences, and lifestyle. No crash diets. No fads. Just science-driven nutrition that works.',
    benefits: [
      'Personalized macro & calorie targets',
      'Pakistani cuisine-friendly meal plans',
      'Supplement guidance & recommendations',
      'Weekly nutrition check-ins',
      'Recipe ideas & meal prep tips',
      'Goal-specific protocols (bulk/cut/maintain)',
    ],
  },
  {
    id: 'fitness-assessment',
    icon: FaHeartbeat,
    title: 'Fitness Assessment',
    tagline: 'Know Your Starting Point. Measure Every Win.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    description:
      'Every Titan member receives a comprehensive fitness assessment to establish baselines and build a roadmap to your goals. We measure what matters — body composition, strength, endurance, and flexibility — so progress is never guesswork.',
    benefits: [
      'Body composition & BMI analysis',
      'Strength & endurance benchmarks',
      'Posture & mobility screening',
      'Goal-setting consultation',
      'Quarterly re-assessment included',
      'Printed progress report',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="World-Class Training"
        description="Every service is designed with one goal: your transformation. No fluff, just results."
        bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
      />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="section-title mb-4">Programs Built For <span className="text-gradient">Champions</span></h2>
            <span className="red-divider mx-auto block mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
              From beginner-friendly programs to elite performance training — every service at Titan is designed
              to get you measurable results.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-80 md:h-[450px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  <div className="absolute top-6 left-6 bg-accent p-4">
                    <service.icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-accent font-heading text-sm tracking-[0.3em] uppercase mb-2">{service.tagline}</p>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">
                    {service.title}
                  </h2>
                  <span className="red-divider mb-6 block" />
                  <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-heading text-white text-sm tracking-widest uppercase mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-300 font-body">
                          <span className="w-5 h-5 bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent text-xs font-bold">✓</span>
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/membership" className="btn-primary">
                      Get Started
                    </Link>
                    <Link href="/contact" className="btn-outline">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
