'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaCheckCircle } from 'react-icons/fa';

interface Plan {
  name: string;
  price: number;
}

export default function MembershipForm({ plans }: { plans: Plan[] }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: 'Standard',
    goal: '',
    experience: '',
    trial: 'no',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim() || !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) errs.phone = 'Valid phone number required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.goal) errs.goal = 'Please select your primary goal';
    if (!recaptchaToken) errs.recaptcha = 'Please verify you are not a robot';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: `MEMBERSHIP APPLICATION\n\nPlan: ${formData.plan}\nGoal: ${formData.goal}\nExperience: ${formData.experience}\nWants Free Trial: ${formData.trial}\n\nAdditional Info: ${formData.message}`,
          to_name: 'Titan Fitness Gym',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-[#0d0d0d] border ${errors[field] ? 'border-red-500' : 'border-surface-border'} text-white font-body px-4 py-3 placeholder-gray-600 focus:border-accent transition-colors duration-200`;

  if (success) {
    return (
      <div className="text-center py-16 bg-surface-card border border-surface-border">
        <FaCheckCircle className="text-green-400 text-7xl mx-auto mb-6" />
        <h3 className="font-heading text-3xl font-bold text-white uppercase mb-3">Application Received!</h3>
        <p className="text-gray-400 font-body text-lg max-w-md mx-auto mb-6">
          Welcome to the Titan family! Our team will call you within a few hours to finalize your membership.
        </p>
        <a
          href="https://wa.me/923001234567?text=Hi! I just submitted my membership application."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          Confirm via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-surface-card border border-surface-border p-8">
      {/* Name */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Full Name *</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClass('name')} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Phone Number *</label>
        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+92 300 123 4567" className={inputClass('phone')} />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Email Address *</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass('email')} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Plan */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Membership Plan *</label>
        <select name="plan" value={formData.plan} onChange={handleChange} className={inputClass('plan')}>
          {plans.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name} — PKR {p.price.toLocaleString()}/month
            </option>
          ))}
        </select>
      </div>

      {/* Goal */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Primary Goal *</label>
        <select name="goal" value={formData.goal} onChange={handleChange} className={inputClass('goal')}>
          <option value="">Select your main goal</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Building">Muscle Building / Strength</option>
          <option value="Body Recomposition">Body Recomposition</option>
          <option value="Athletic Performance">Athletic Performance</option>
          <option value="General Fitness">General Fitness & Health</option>
          <option value="Stress Relief">Stress Relief & Wellness</option>
        </select>
        {errors.goal && <p className="text-red-400 text-xs mt-1">{errors.goal}</p>}
      </div>

      {/* Experience */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Training Experience</label>
        <select name="experience" value={formData.experience} onChange={handleChange} className={inputClass('experience')}>
          <option value="">Select experience level</option>
          <option value="Beginner (Never trained)">Beginner (Never trained)</option>
          <option value="Beginner (< 1 year)">Beginner (&lt; 1 year)</option>
          <option value="Intermediate (1-3 years)">Intermediate (1–3 years)</option>
          <option value="Advanced (3+ years)">Advanced (3+ years)</option>
        </select>
      </div>

      {/* Free Trial */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Would you like a free 3-day trial first?</label>
        <div className="flex gap-4">
          {['yes', 'no'].map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="trial"
                value={val}
                checked={formData.trial === val}
                onChange={handleChange}
                className="accent-accent w-4 h-4"
              />
              <span className="text-gray-300 font-body capitalize">{val === 'yes' ? 'Yes, start with trial' : 'No, join directly'}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-400 font-body text-xs uppercase tracking-widest mb-2">Additional Information</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any health conditions, schedule preferences, or questions for our team..."
          className={`${inputClass('message')} resize-none`}
        />
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
          onChange={(token) => {
            setRecaptchaToken(token);
            if (errors.recaptcha) setErrors((p) => ({ ...p, recaptcha: '' }));
          }}
          onExpired={() => setRecaptchaToken(null)}
          theme="dark"
        />
        {errors.recaptcha && <p className="text-red-400 text-xs mt-1">{errors.recaptcha}</p>}
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          '🏋️ Submit Membership Application'
        )}
      </button>
    </form>
  );
}
