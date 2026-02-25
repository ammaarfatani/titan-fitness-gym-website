import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import CTABanner from '@/components/sections/CTABanner';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'About Us | Titan Fitness Gym Karachi',
  description:
    'Learn about Titan Fitness Gym — our story, mission, values, and the community we\'ve built in Karachi, Pakistan. Discover what makes us the best gym in Karachi.',
};

const values = [
  {
    icon: FaDumbbell,
    title: 'Strength First',
    desc: 'We build real, functional strength that translates into everyday life. Our programs are designed for measurable, lasting results.',
  },
  {
    icon: FaUsers,
    title: 'Community Driven',
    desc: 'At Titan, you\'re never alone. Our tribe of committed athletes push each other to new heights every single session.',
  },
  {
    icon: FaTrophy,
    title: 'Excellence Standard',
    desc: 'We hold ourselves and our members to the highest standards — in training, nutrition, and mindset.',
  },
  {
    icon: FaHeart,
    title: 'Member Wellbeing',
    desc: 'Your long-term health matters more than short-term gains. We train smart, recover smart, and win together.',
  },
];

const facilityHighlights = [
  'State-of-the-art free weights area (up to 150kg)',
  'Olympic lifting platforms with bumper plates',
  'Cardio zone with 30+ modern machines',
  'Private personal training suites',
  'Functional training & CrossFit area',
  'Separate male and female sections',
  'Modern locker rooms with hot showers',
  'Juice & nutrition bar on-site',
  'Air-conditioned throughout',
  'Secure 24/7 surveillance',
  'Ample parking available',
  'Pro-grade sound system',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Titan Fitness"
        subtitle="Our Story"
        description="Built on sweat, discipline, and results — discover the gym that's redefining fitness in Karachi."
        bgImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
      />

      {/* Our Story */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 className="section-title mb-6">
                Born From <span className="text-gradient">Passion.</span> Built For Results.
              </h2>
              <span className="red-divider mb-8 block" />
              <div className="space-y-5 text-gray-400 font-body text-lg leading-relaxed">
                <p>
                  Titan Fitness Gym was founded with one uncompromising mission: to provide the people of Karachi
                  with a world-class training environment that delivers real, measurable transformation.
                </p>
                <p>
                  What started as a dream shared by passionate fitness professionals has grown into Karachi&apos;s
                  most respected strength and conditioning facility — a place where beginners build confidence
                  and champions sharpen their edge.
                </p>
                <p>
                  We believe every person who walks through our doors deserves elite-level coaching, premium
                  equipment, and an environment that demands the best from them. No excuses. No shortcuts.
                  Just results.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/membership" className="btn-primary">
                  Join Our Tribe
                </Link>
                <Link href="/contact" className="btn-outline">
                  Book Free Trial
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[550px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85"
                  alt="Titan Fitness Gym Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 shadow-2xl">
                <div className="text-5xl font-heading font-bold text-white">5+</div>
                <div className="text-white/80 font-body text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold p-6 shadow-2xl">
                <div className="text-5xl font-heading font-bold text-primary">2000+</div>
                <div className="text-primary/80 font-body text-sm uppercase tracking-wider">Members Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#111111]">
        <div className="container-max text-center">
          <p className="section-label mb-4">Our Mission</p>
          <h2 className="section-title mb-6 max-w-4xl mx-auto">
            To Empower Every Individual To <span className="text-gradient">Exceed Their Limits</span>
          </h2>
          <span className="red-divider mx-auto mb-8 block" />
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-body leading-relaxed">
            We exist to transform lives through fitness — not just bodies, but mindsets. Every program we design,
            every trainer we certify, and every piece of equipment we install serves one purpose: getting you
            to where you want to be, faster and safer than anywhere else in Karachi.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="section-title mb-4">Our Core <span className="text-gradient">Values</span></h2>
            <span className="red-divider mx-auto block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="card-dark p-8 text-center group">
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                  <val.icon className="text-accent group-hover:text-white text-2xl transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 uppercase">{val.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Culture */}
      <section className="py-20 bg-[#111111]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80"
                    alt="Gym community training"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-64 overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&q=80"
                    alt="Members working out together"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80"
                    alt="Personal training session"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-64 overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                    alt="Group fitness class"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Community Culture</p>
              <h2 className="section-title mb-6">
                More Than A Gym. <span className="text-gradient">A Brotherhood.</span>
              </h2>
              <span className="red-divider mb-8 block" />
              <div className="space-y-4 text-gray-400 font-body text-lg leading-relaxed">
                <p>
                  At Titan, you join more than a gym — you become part of a movement. Our members form
                  lifelong bonds forged through shared sweat and mutual accountability.
                </p>
                <p>
                  From beginners finding their first rep to seasoned athletes chasing new PRs, everyone
                  is welcomed, challenged, and celebrated. The Titan culture is built on respect,
                  discipline, and the relentless pursuit of self-improvement.
                </p>
                <p>
                  We host regular fitness events, challenges, and nutrition workshops that keep our
                  community engaged, motivated, and growing together year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">World-Class Facility</p>
            <h2 className="section-title mb-4">Our <span className="text-gradient">Facility</span></h2>
            <span className="red-divider mx-auto block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilityHighlights.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-surface-card border border-surface-border p-5">
                <div className="w-2 h-2 bg-accent flex-shrink-0" />
                <span className="text-gray-300 font-body">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 relative h-80 md:h-[500px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1920&q=80"
              alt="Titan Fitness Gym facility"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <p className="font-heading text-3xl text-white uppercase">
                Where Champions Are Made
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
