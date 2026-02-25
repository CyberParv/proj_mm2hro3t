'use client'

import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import TestimonialCard from '@/components/TestimonialCard'

interface Testimonial {
  quote: string
  author: string
  title: string
  rating: number
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  intervalMs?: number
}

export default function TestimonialsCarousel({
  testimonials = [
    {
      quote:
        'Bella Cucina feels like stepping into Tuscany. The pasta tasting is unforgettable.',
      author: 'James R.',
      title: 'Local Guide',
      rating: 5,
    },
    {
      quote:
        'The service is warm, the wine list is thoughtful, and the tiramisu is the best in town.',
      author: 'Lena K.',
      title: 'Food Writer',
      rating: 5,
    },
    {
      quote:
        'Perfect for date night. The gnocchi melts in your mouth and the ambiance is magical.',
      author: 'Alex T.',
      title: 'Springfield',
      rating: 4,
    },
  ],
  intervalMs = 6000,
}: Partial<TestimonialsCarouselProps>) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = testimonials.length
  const activeTestimonial = useMemo(
    () => testimonials[active % total],
    [active, testimonials, total]
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs, paused, total])

  return (
    <section
      className="space-y-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TestimonialCard
          quote={activeTestimonial.quote}
          author={activeTestimonial.author}
          title={activeTestimonial.title}
          rating={activeTestimonial.rating}
        />
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              onClick={() => setActive(index)}
              className={cn(
                'w-full rounded-lg border border-border/40 bg-card p-4 text-left transition-all duration-300',
                index === active
                  ? 'border-[#DDA15E] shadow-md'
                  : 'hover:border-[#DDA15E]/70'
              )}
            >
              <p className="text-sm text-muted-foreground">
                {testimonial.quote}
              </p>
              <p className="mt-2 text-xs font-semibold text-[#722F37]">
                {testimonial.author}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              index === active ? 'bg-[#DDA15E]' : 'bg-[#DDA15E]/40'
            )}
            aria-label={'Go to testimonial ' + (index + 1)}
          />
        ))}
      </div>
    </section>
  )
}
