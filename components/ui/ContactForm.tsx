'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import type ReCAPTCHAType from 'react-google-recaptcha';

const ReCAPTCHA = dynamic(
  async () => {
    const mod = await import('react-google-recaptcha');
    return mod.default;
  },
  { ssr: false }
) as typeof ReCAPTCHAType;

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  recaptcha?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHAType | null>(null);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (min 2 characters)';
    }
    if (!formData.phone.trim() || !/^[0-9+\-\s()]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    if (!recaptchaToken) {
      errs.recaptcha = 'Please complete the reCAPTCHA verification';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Titan Fitness Gym',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-6" />
        <h3 className="font-heading text-2xl font-bold text-white uppercase mb-3">Message Sent!</h3>
        <p className="text-gray-400 font-body mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline text-sm px-6 py-3"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-500/50 text-red-400 font-body text-sm">
          <FaExclamationTriangle className="flex-shrink-0" />
          Failed to send message. Please try again or contact us via WhatsApp.
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-gray-400 font-body text-sm uppercase tracking-widest mb-2">
          Full Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          autoComplete="name"
          className={`w-full bg-[#0d0d0d] border ${errors.name ? 'border-red-500' : 'border-surface-border'} text-white font-body px-4 py-3 placeholder-gray-600 focus:border-accent transition-colors duration-200`}
        />
        {errors.name && <p className="text-red-400 font-body text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-gray-400 font-body text-sm uppercase tracking-widest mb-2">
          Phone Number *
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 300 123 4567"
          autoComplete="tel"
          className={`w-full bg-[#0d0d0d] border ${errors.phone ? 'border-red-500' : 'border-surface-border'} text-white font-body px-4 py-3 placeholder-gray-600 focus:border-accent transition-colors duration-200`}
        />
        {errors.phone && <p className="text-red-400 font-body text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-gray-400 font-body text-sm uppercase tracking-widest mb-2">
          Email Address *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="email"
          className={`w-full bg-[#0d0d0d] border ${errors.email ? 'border-red-500' : 'border-surface-border'} text-white font-body px-4 py-3 placeholder-gray-600 focus:border-accent transition-colors duration-200`}
        />
        {errors.email && <p className="text-red-400 font-body text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-gray-400 font-body text-sm uppercase tracking-widest mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your fitness goals, questions, or how we can help..."
          className={`w-full bg-[#0d0d0d] border ${errors.message ? 'border-red-500' : 'border-surface-border'} text-white font-body px-4 py-3 placeholder-gray-600 focus:border-accent transition-colors duration-200 resize-none`}
        />
        {errors.message && <p className="text-red-400 font-body text-xs mt-1">{errors.message}</p>}
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
          onChange={(token) => {
            setRecaptchaToken(token);
            if (errors.recaptcha) setErrors((prev) => ({ ...prev, recaptcha: undefined }));
          }}
          onExpired={() => setRecaptchaToken(null)}
          theme="dark"
        />
        {errors.recaptcha && <p className="text-red-400 font-body text-xs mt-1">{errors.recaptcha}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>

      <p className="text-gray-600 font-body text-xs text-center">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
