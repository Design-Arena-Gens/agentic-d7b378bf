import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Fiamma | Artisan Pizza Kitchen',
  description:
    'Experience true Neapolitan flavors at Fiamma. Wood-fired pizzas, seasonal small plates, and an intimate dining experience in the heart of the city.',
  openGraph: {
    title: 'Fiamma | Artisan Pizza Kitchen',
    description:
      'Experience true Neapolitan flavors at Fiamma. Wood-fired pizzas, seasonal small plates, and an intimate dining experience in the heart of the city.',
    url: 'https://agentic-d7b378bf.vercel.app',
    siteName: 'Fiamma',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601925260369-d5971cf9b3f5?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Artisan pizza with basil and mozzarella'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiamma_pizza',
    title: 'Fiamma | Artisan Pizza Kitchen',
    description:
      'Experience true Neapolitan flavors at Fiamma. Wood-fired pizzas, seasonal small plates, and an intimate dining experience in the heart of the city.',
    images: [
      'https://images.unsplash.com/photo-1601925260369-d5971cf9b3f5?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  metadataBase: new URL('https://agentic-d7b378bf.vercel.app')
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-dark text-white antialiased">
        <div className="fixed inset-x-0 top-0 -z-10 h-[120vh] hero-overlay blur-3xl opacity-70" />
        {children}
      </body>
    </html>
  );
}
