import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://titanfitnesspk.com'),
  title: {
    default: 'Titan Fitness Gym | Best Gym in Karachi, Pakistan',
    template: '%s | Titan Fitness Gym',
  },
  description:
    'Titan Fitness Gym — Karachi\'s premier strength and conditioning gym. Expert personal trainers, modern equipment, weight loss programs, and group classes. Transform your body today!',
  keywords: [
    'gym in Pakistan',
    'best gym in Karachi',
    'strength training Karachi',
    'weight loss gym Pakistan',
    'personal training Karachi',
    'fitness center Karachi',
    'gym membership Karachi',
    'Titan Fitness Gym',
    'group fitness classes Pakistan',
    'nutrition guidance Karachi',
  ],
  authors: [{ name: 'Titan Fitness Gym' }],
  creator: 'Titan Fitness Gym',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://titanfitnesspk.com',
    siteName: 'Titan Fitness Gym',
    title: 'Titan Fitness Gym | Best Gym in Karachi, Pakistan',
    description:
      'Transform your body at Titan Fitness Gym — Karachi\'s premier strength & conditioning facility. Expert trainers, modern equipment, proven results.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Titan Fitness Gym - Best Gym in Karachi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Fitness Gym | Best Gym in Karachi, Pakistan',
    description: 'Transform your body at Titan Fitness Gym — Karachi\'s premier strength & conditioning facility.',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://titanfitnesspk.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0d0d0d] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
