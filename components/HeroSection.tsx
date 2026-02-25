'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  imageSrc?: string
}

export default function HeroSection({
  headline = 'A Taste of Italy in the Heart of Springfield',
  subheadline = 'Bella Cucina has been a family table since 1985, serving handcrafted pastas, slow-simmered sauces, and warm hospitality.',
  primaryCtaLabel = 'Explore the Menu',
  primaryCtaHref = '/menu',
  secondaryCtaLabel = 'Book a Table',
  secondaryCtaHref = '/reservations',
  imageSrc = '/images/hero.jpg',
}: Partial<HeroSectionProps>) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Bella Cucina hero"
          fill
          className="object-cover"
          style={{ transform: 'translateY(' + offset + 'px)' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-28 text-[#FEFAE0] md:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#DDA15E]">
            Benvenuti a Bella Cucina
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            {headline}
          </h1>
          <p className="text-lg text-[#FEFAE0]/80">{subheadline}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className={cn(
                'rounded-md bg-[#DDA15E] px-8 py-5 text-xs font-semibold uppercase tracking-wide text-[#722F37] hover:bg-[#c7904f]'
              )}
              asChild
            >
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button
              variant="outline"
              className={cn(
                'rounded-md border-[#FEFAE0]/50 px-8 py-5 text-xs font-semibold uppercase tracking-wide text-[#FEFAE0] hover:border-[#DDA15E] hover:text-[#DDA15E]'
              )}
              asChild
            >
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#FEFAE0]/70">
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
