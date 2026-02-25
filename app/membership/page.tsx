import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PageHero from '@/components/ui/PageHero';
import MembershipForm from '@/components/ui/MembershipForm';

export const metadata: Metadata = {
  title: 'Membership Plans | Titan Fitness Gym Karachi — Affordable Gym Packages',
  description:
    'Choose the perfect Titan Fitness Gym membership plan in Karachi. Basic, Standard & Premium packages with flexible pricing. Try us free for 3 days!',
};

 const plans = [
  {
    name: 'Basic',
    subtitle: 'Perfect for Starters',
    price: 3500,
    period: 'month',
    color: 'border-surface-border',
    badge: null,
    features: [
      { text: 'Full Gym Access (6 AM – 10 PM)', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Initial Fitness Assessment', included: true },
      { text: 'Access to Cardio Zone', included: true },
      { text: 'Free weights & Machines Access', included: true },
      { text: 'Group Classes (2/week)', included: false },
      { text: 'Nutrition Consultation', included: false },
      { text: 'Personal Training Sessions', included: false },
      { text: 'Priority Booking', included: false },
      { text: 'Guest Passes (2/month)', included: false },
    ],
    cta: 'Start Basic',
  },
  {
    name: 'Standard',
    subtitle: 'Most Popular Choice',
    price: 6500,
    period: 'month',
    color: 'border-accent',
    badge: 'MOST POPULAR',
    features: [
      { text: 'Full Gym Access (6 AM – 10 PM)', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Initial Fitness Assessment', included: true },
      { text: 'Access to Cardio Zone', included: true },
      { text: 'Free weights & Machines Access', included: true },
      { text: 'Group Classes (Unlimited)', included: true },
      { text: 'Monthly Nutrition Consultation', included: true },
      { text: 'Personal Training Sessions (2/month)', included: false },
      { text: 'Priority Booking', included: false },
      { text: 'Guest Passes (2/month)', included: false },
    ],
    cta: 'Start Standard',
  },
  {
    name: 'Premium',
    subtitle: 'For Serious Athletes',
    price: 12000,
    period: 'month',
    color: 'border-gold',
    badge: 'BEST VALUE',
    features: [
      { text: 'Full Gym Access (24/7)', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Full Fitness Assessment (Quarterly)', included: true },
      { text: 'Access to Cardio Zone', included: true },
      { text: 'Free weights & Machines Access', included: true },
      { text: 'Group Classes (Unlimited)', included: true },
      { text: 'Bi-Weekly Nutrition Consultation', included: true },
      { text: 'Personal Training (8 Sessions/month)', included: true },
      { text: 'Priority Booking & Scheduling', included: true },
      { text: 'Guest Passes (4/month)', included: true },
    ],
    cta: 'Go Premium',
  },
];

const faqs = [
  {
    q: 'Is there a joining fee?',
    a: 'Yes, a one-time registration fee of PKR 1,000 applies for all plans. This is waived if you sign up for a 6-month or annual plan.',
  },
  {
    q: 'Can I freeze my membership?',
    a: 'Yes! You can freeze your membership for up to 30 days per year at no charge. Just notify us 3 days in advance.',
  },
  {
    q: 'Do you offer student or couples discounts?',
    a: 'Absolutely. We offer 15% off for students (with valid ID) and 20% off couples packages. Contact us for details.',
  },
  {
    q: 'What is the free trial?',
    a: 'Our 3-day free trial gives you full access to the gym, one group class, and a fitness assessment — completely free, no commitment required.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes, you can change your plan at any time. Upgrades are effective immediately; downgrades take effect at the next billing cycle.',
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership Plans"
        subtitle="Invest In Yourself"
        description="Flexible, affordable plans designed to fit every goal and every budget."
        bgImage="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=1920&q=80"
      />

      {/* Free Trial Banner */}
      <section className="bg-accent py-6">
        <div className="container-max text-center">
          <p className="font-heading text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
            🎯 Try Titan Free For 3 Days — No Credit Card Required!
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Flexible Pricing</p>
            <h2 className="section-title mb-4">Choose Your <span className="text-gradient">Plan</span></h2>
            <span className="red-divider mx-auto block mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto font-body text-lg">
              All plans include access to world-class equipment and a passionate community. Upgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card-dark border-2 ${plan.color} relative ${
                  plan.name === 'Standard' ? 'membership-popular' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-6 py-1.5 font-heading text-xs font-bold uppercase tracking-widest ${
                        plan.name === 'Standard' ? 'bg-accent text-white' : 'bg-gold text-primary'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="font-heading text-3xl font-bold text-white uppercase mb-1">{plan.name}</h3>
                  <p className="text-gray-500 font-body text-sm mb-6">{plan.subtitle}</p>

                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-gray-400 font-body text-lg self-start mt-2">PKR</span>
                    <span className={`font-heading text-6xl font-bold ${plan.name === 'Premium' ? 'text-gold' : plan.name === 'Standard' ? 'text-accent' : 'text-white'}`}>
                      {plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 font-body mb-2">/{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 font-body text-sm">
                        {feature.included ? (
                          <FaCheck className="text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <FaTimes className="text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#join-form"
                    className={`w-full text-center block font-heading font-semibold uppercase tracking-widest py-4 px-6 transition-all duration-300 hover:scale-105 ${
                      plan.name === 'Premium'
                        ? 'bg-gold hover:bg-gold-dark text-primary'
                        : plan.name === 'Standard'
                        ? 'bg-accent hover:bg-accent-dark text-white'
                        : 'bg-surface-border hover:bg-gray-600 text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 font-body text-sm mt-8">
            * Prices are per month. Discounts available on 3-month, 6-month & annual packages. Contact us for custom team/corporate plans.
          </p>
        </div>
      </section>

      {/* Join Form */}
      <section id="join-form" className="py-20 bg-[#111111]">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Ready to Start?</p>
              <h2 className="section-title mb-4">Join Titan <span className="text-gradient">Today</span></h2>
              <span className="red-divider mx-auto block mb-4" />
              <p className="text-gray-400 font-body">
                Fill in your details and our team will contact you within 24 hours to confirm your membership.
              </p>
            </div>
            <MembershipForm plans={plans} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Common Questions</p>
            <h2 className="section-title mb-4">Membership <span className="text-gradient">FAQ</span></h2>
            <span className="red-divider mx-auto block" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-dark p-6">
                <h3 className="font-heading text-lg font-bold text-white uppercase mb-3">{faq.q}</h3>
                <p className="text-gray-400 font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
