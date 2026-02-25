import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaMedal } from 'react-icons/fa';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Our Expert Trainers | Titan Fitness Gym Karachi',
  description:
    'Meet Titan Fitness Gym\'s elite team of certified personal trainers in Karachi. Specialists in strength training, weight loss, and sports performance.',
};

const trainers = [
  {
    name: 'Ali Hassan',
    role: 'Head Coach & Strength Specialist',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    experience: '10 Years',
    specialty: 'Powerlifting & Strength Training',
    certifications: ['ISSA Certified Personal Trainer', 'Precision Nutrition Level 1', 'Powerlifting Coach — IPF'],
    bio: 'Ali is the driving force behind Titan\'s training philosophy. A former national powerlifting competitor, he has coached over 300 athletes to personal bests. His structured, evidence-based approach to strength has made him the most sought-after trainer in Karachi.',
    specialties: ['Powerlifting', 'Olympic Lifting', 'Hypertrophy', 'Athletic Performance'],
  },
  {
    name: 'Zara Khan',
    role: 'Weight Loss & Transformation Coach',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    experience: '7 Years',
    specialty: 'Body Transformation & Fat Loss',
    certifications: ['ACE Certified Personal Trainer', 'Behavioral Change Specialist', 'NASM Nutrition Coach'],
    bio: 'Zara specializes in sustainable body transformation — helping clients lose fat, build muscle, and develop the habits that make results last a lifetime. Her empathetic coaching style and deep nutritional knowledge make her particularly effective with female clients.',
    specialties: ['Fat Loss', 'Body Recomposition', 'Female Fitness', 'Behavioral Coaching'],
  },
  {
    name: 'Usman Malik',
    role: 'Sports Performance Coach',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&q=80',
    experience: '8 Years',
    specialty: 'Athletic Performance & Conditioning',
    certifications: ['NSCA CSCS', 'Sports Performance Specialist', 'First Aid & CPR Certified'],
    bio: 'Usman has worked with professional cricketers, football players, and MMA fighters to optimize their athletic performance. His conditioning programs are trusted by Karachi\'s top athletes. He brings elite-level sports science to every training session.',
    specialties: ['Speed & Agility', 'Conditioning', 'Injury Prevention', 'Sports-Specific Training'],
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Group Fitness & Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    experience: '6 Years',
    specialty: 'Group Fitness, Yoga & Mindfulness',
    certifications: ['Yoga Alliance RYT-200', 'Les Mills BODYPUMP', 'Zumba Gold Instructor'],
    bio: 'Ayesha brings energy, expertise, and infectious enthusiasm to every class she leads. Her diverse background in yoga, Zumba, and functional fitness makes her classes favorites among all levels. She believes movement should be joyful as well as effective.',
    specialties: ['Yoga', 'Zumba', 'HIIT Classes', 'Mobility & Flexibility'],
  },
  {
    name: 'Bilal Ahmed',
    role: 'Nutrition & Wellness Coach',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&q=80',
    experience: '5 Years',
    specialty: 'Sports Nutrition & Meal Planning',
    certifications: ['Precision Nutrition Level 2', 'ISSA Nutritionist', 'Kettlebell Instructor'],
    bio: 'Bilal combines scientific nutritional knowledge with practical, real-world strategies that work in the Pakistani lifestyle. He creates meal plans built around local foods that support performance goals without making life complicated.',
    specialties: ['Macro Planning', 'Supplement Guidance', 'Gut Health', 'Performance Nutrition'],
  },
  {
    name: 'Hamza Sheikh',
    role: 'Boxing & Functional Fitness Coach',
    image: 'https://images.unsplash.com/photo-1603217040830-921a5b1f3ea7?w=600&q=80',
    experience: '9 Years',
    specialty: 'Boxing Fitness & Functional Training',
    certifications: ['AIBA Boxing Coach Level 2', 'Functional Movement Screen Certified', 'CPT — NASM'],
    bio: 'Hamza is a former provincial boxing champion who channels his competitive experience into exhilarating training sessions. His boxing fitness classes are the most popular in the gym — combining cardio, strength, and coordination for total-body transformation.',
    specialties: ['Boxing', 'Kickboxing', 'Functional Training', 'Combat Sports Conditioning'],
  },
];

export default function TrainersPage() {
  return (
    <>
      <PageHero
        title="Meet Your Coaches"
        subtitle="Expert Trainers"
        description="Certified professionals who are committed to your transformation — every rep, every session."
        bgImage="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=80"
      />

      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">World-Class Coaching</p>
            <h2 className="section-title mb-4">Your Team of <span className="text-gradient">Champions</span></h2>
            <span className="red-divider mx-auto block mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
              Every Titan trainer is hand-selected for their expertise, passion, and commitment to client success.
              Your results are their obsession.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <div key={i} className="card-dark group overflow-hidden">
                {/* Trainer Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white uppercase">{trainer.name}</h3>
                    <p className="text-accent font-body text-sm font-semibold">{trainer.role}</p>
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-accent px-3 py-1">
                    <span className="text-white font-heading text-xs font-bold uppercase">{trainer.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-5">{trainer.bio}</p>

                  {/* Specialties */}
                  <div className="mb-5">
                    <h4 className="font-heading text-xs text-white tracking-widest uppercase mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((s, j) => (
                        <span
                          key={j}
                          className="text-xs bg-accent/10 border border-accent/30 text-accent px-3 py-1 font-body"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="font-heading text-xs text-white tracking-widest uppercase mb-3">Certifications</h4>
                    <ul className="space-y-1.5">
                      {trainer.certifications.map((cert, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 font-body text-xs">
                          <FaMedal className="text-gold mt-0.5 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`https://wa.me/923001234567?text=Hi, I'd like to book a session with ${trainer.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 w-full transition-colors duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    Book Session
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-surface-card border border-surface-border p-12">
            <h3 className="font-heading text-3xl font-bold text-white uppercase mb-4">
              Not Sure Which Trainer Is Right For You?
            </h3>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute consultation and we&apos;ll match you with the perfect coach for your goals.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
