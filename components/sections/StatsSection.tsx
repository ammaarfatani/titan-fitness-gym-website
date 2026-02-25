'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2000, suffix: '+', label: 'Members Transformed' },
  { value: 6, suffix: '+', label: 'Certified Trainers' },
  { value: 15, suffix: '+', label: 'Weekly Classes' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Member Satisfaction' },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

function StatItem({ value, suffix, label, animate }: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 2000, animate);
  return (
    <div className="text-center py-8 px-4 border-b border-r border-surface-border/50 last:border-r-0">
      <div className="font-heading font-bold text-white leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <span className="text-accent">{animate ? count : 0}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-gray-500 font-body text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-card border-y border-surface-border" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
