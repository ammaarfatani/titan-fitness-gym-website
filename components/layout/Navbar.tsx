'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || isOpen
            ? 'bg-[#0d0d0d]/98 backdrop-blur-md shadow-lg shadow-black/50 border-b border-surface-border'
            : 'bg-transparent'
        )}
      >
        <nav className="container-max flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors duration-300">
              <FaDumbbell className="text-white text-lg" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-xl uppercase tracking-widest leading-none block">
                TITAN
              </span>
              <span className="font-heading text-accent text-xs uppercase tracking-[0.4em] leading-none block">
                Fitness Gym
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'font-heading text-sm font-medium uppercase tracking-widest px-4 py-2 transition-colors duration-200 relative group',
                    pathname === link.href ? 'text-accent' : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={clsx(
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-3/4'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/membership"
              className="hidden sm:flex btn-primary text-sm px-5 py-2.5"
            >
              Join Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors duration-200 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col justify-center transition-all duration-300 lg:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container-max">
          <ul className="space-y-1 mb-10">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                className={clsx(
                  'transition-all duration-300',
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                )}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    'block font-heading text-5xl font-bold uppercase tracking-tight py-3 border-b border-surface-border/50 transition-colors duration-200',
                    pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/membership" className="btn-primary text-center">
              Join Now
            </Link>
            <Link href="/contact" className="btn-outline text-center">
              Book Free Trial
            </Link>
          </div>
          <div className="mt-10 pt-6 border-t border-surface-border">
            <p className="text-gray-600 font-body text-sm">
              📍 Gulshan-e-Iqbal, Karachi, Pakistan
            </p>
            <p className="text-gray-600 font-body text-sm mt-1">
              📞 +92 300 123 4567
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
