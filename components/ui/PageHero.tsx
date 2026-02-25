import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, description, bgImage, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[400px] flex items-end">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/50" />
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent z-10" />

      <div className="container-max relative z-10 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-gray-500 font-body text-sm mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
            <FaHome className="text-xs" /> Home
          </Link>
          <FaChevronRight className="text-xs" />
          <span className="text-accent">{breadcrumb || title}</span>
        </nav>

        {/* Content */}
        <p className="section-label mb-3">{subtitle}</p>
        <h1 className="font-heading font-bold text-white uppercase leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          {title.split(' ').map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient"> {word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>
        <span className="red-divider mb-5 block" />
        <p className="text-gray-400 font-body text-lg max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
