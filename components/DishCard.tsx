import Image from 'next/image'
import { cn } from '@/lib/utils'

interface DishCardProps {
  name?: string
  description?: string
  price?: string
  imageSrc?: string
  badge?: string
  className?: string
}

export default function DishCard({
  name = 'Pappardelle al Ragu',
  description = 'Wide ribbons of pasta with slow-braised beef ragu and pecorino.',
  price = '$24',
  imageSrc = '/images/hero.jpg',
  badge = 'Chef Favorite',
  className = '',
}: Partial<DishCardProps>) {
  return (
    <div
      className={cn(
        'group overflow-hidden rounded-lg border border-border/50 bg-card shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={imageSrc.startsWith('http')}
        />
        {badge && (
          <div className="absolute left-4 top-4 rounded-full bg-[#DDA15E] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#722F37]">
            {badge}
          </div>
        )}
      </div>
      <div className="space-y-2 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#722F37]">{name}</h3>
          <span className="text-lg font-semibold text-[#DDA15E]">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
