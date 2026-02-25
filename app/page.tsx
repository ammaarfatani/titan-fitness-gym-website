import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TrainersPreview from '@/components/sections/TrainersPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Titan Fitness Gym | Best Gym in Karachi, Pakistan — Transform Your Body',
  description:
    'Join Titan Fitness Gym, Karachi\'s most results-driven fitness center. Certified trainers, modern equipment, personal training, weight loss programs & group classes. Book your free trial today!',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesOverview />
      <TrainersPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
