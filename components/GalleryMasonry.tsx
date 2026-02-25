'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = 'A Glimpse Inside Our Evening',
  subheadline = 'Warm lighting, artisan plates, and the comforting glow of the hearth.',
  images = [
    { url: '/images/gallery-1.jpg', alt: 'Candlelit dining room', caption: 'A warm, intimate dining room.' },
    { url: '/images/hero.jpg', alt: 'Chef plating dish', caption: 'Seasonal plates finished at the pass.' },
    { url: '/images/about.jpg', alt: 'Open fire grill', caption: 'Open-fire kitchen with live flames.' },
    { url: '/images/gallery-1.jpg', alt: 'Signature cocktail', caption: 'House-crafted cocktails and aperitifs.' },
    { url: '/images/hero.jpg', alt: 'Farm fresh ingredients', caption: 'Locally sourced ingredients daily.' },
    { url: '/images/about.jpg', alt: 'Chef team', caption: 'A dedicated culinary team.' },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function(img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                onClick={function() { setSelectedImage(img); }}
              >
                <Image src={img.url} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-white">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={function() { setSelectedImage(null); }}
          >
            <div className="relative max-h-[85vh] max-w-[90vw] w-full h-full">
              <Image src={selectedImage.url} alt={selectedImage.alt} fill className="rounded-lg object-contain" unoptimized />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
