'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageUrl: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: string;
}

export default function HeroImage({
  imageUrl = '/images/hero.jpg',
  headline = 'Savor the Soul of Seasonal Cuisine',
  subheadline = 'A refined dining experience rooted in local ingredients, open-fire cooking, and warm hospitality in the heart of the city.',
  primaryCta = { label: 'Reserve a Table', href: '#reservation' },
  secondaryCta = { label: 'Explore the Menu', href: '#menu' },
  overlayOpacity = 'bg-black/50',
}: Partial<HeroImageProps>) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
      <div className={'absolute inset-0 ' + overlayOpacity} />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white text-white hover:bg-white/10" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
