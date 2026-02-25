import Link from 'next/link';
import { FaDumbbell, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-center px-4">
      <FaDumbbell className="text-accent text-8xl mb-8 opacity-30" />
      <h1 className="font-heading font-bold text-white text-8xl mb-4 uppercase">404</h1>
      <p className="section-label mb-4">Page Not Found</p>
      <h2 className="font-heading text-3xl font-bold text-white uppercase mb-4">
        Looks Like You&apos;re Off Track
      </h2>
      <p className="text-gray-400 font-body text-lg max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to your fitness journey.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary flex items-center gap-2">
          <FaHome /> Back to Home
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
