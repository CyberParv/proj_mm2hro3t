'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import GalleryImage from '@/components/GalleryImage'
import { cn } from '@/lib/utils'

interface GalleryItem {
  src: string
  alt: string
  caption: string
  category: string
}

interface GalleryGridProps {
  items?: GalleryItem[]
  categories?: string[]
}

export default function GalleryGrid({
  items = [
    {
      src: '/images/gallery-1.jpg',
      alt: 'Dining room',
      caption: 'Candlelit dining room',
      category: 'Interior',
    },
    {
      src: '/images/hero.jpg',
      alt: 'Chef plating',
      caption: 'House specialties',
      category: 'Dishes',
    },
    {
      src: '/images/about.jpg',
      alt: 'Pasta making',
      caption: 'Handmade daily',
      category: 'Kitchen',
    },
    {
      src: '/images/team.jpg',
      alt: 'Team toast',
      caption: 'Our Bella famiglia',
      category: 'People',
    },
  ],
  categories = ['All', 'Interior', 'Dishes', 'Kitchen', 'People'],
}: Partial<GalleryGridProps>) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return items
    return items.filter((item) => item.category === activeCategory)
  }, [activeCategory, items])

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return (prev + 1) % filtered.length
    })
  }

  const goPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return (prev - 1 + filtered.length) % filtered.length
    })
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => setActiveCategory(category)}
            className={cn(
              'rounded-full border-[#DDA15E]/40 px-4 py-2 text-xs uppercase tracking-wide',
              activeCategory === category
                ? 'bg-[#DDA15E] text-[#722F37]'
                : 'text-[#722F37] hover:border-[#DDA15E]'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <div key={item.caption} className="mb-4 break-inside-avoid">
            <GalleryImage
              imageSrc={item.src}
              caption={item.caption}
              alt={item.alt}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && filtered[selectedIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 rounded-full border border-white/40 p-2 text-white"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          <Button
            variant="outline"
            onClick={goPrev}
            className="absolute left-4 border-white/30 text-white hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="max-w-3xl space-y-4 text-center text-white">
            <GalleryImage
              imageSrc={filtered[selectedIndex].src}
              caption={filtered[selectedIndex].caption}
              alt={filtered[selectedIndex].alt}
              variant="lightbox"
            />
            <p className="text-sm text-white/80">
              {filtered[selectedIndex].caption}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={goNext}
            className="absolute right-4 border-white/30 text-white hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </section>
  )
}
