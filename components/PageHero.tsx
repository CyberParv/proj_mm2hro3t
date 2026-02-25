import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title?: string
  imageSrc?: string
  className?: string
}

export default function PageHero({
  title = 'Bella Cucina',
  imageSrc = '/images/about.jpg',
  className = '',
}: Partial<PageHeroProps>) {
  return (
    <section className={cn('relative h-[50vh] overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center px-4 md:px-8">
        <h1 className="text-3xl font-semibold text-[#FEFAE0] md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
