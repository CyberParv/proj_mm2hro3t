import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote?: string
  author?: string
  title?: string
  rating?: number
  className?: string
}

export default function TestimonialCard({
  quote = 'Every dish tastes like it came from Nonna’s kitchen. We celebrate every anniversary here.',
  author = 'Maria L.',
  title = 'Springfield',
  rating = 5,
  className = '',
}: Partial<TestimonialCardProps>) {
  return (
    <div
      className={cn(
        'rounded-lg bg-[#FEFAE0] p-6 shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="flex items-center gap-1 text-[#DDA15E]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn('h-4 w-4', index < rating ? 'fill-[#DDA15E]' : '')}
          />
        ))}
      </div>
      <div className="mt-4 text-4xl text-[#722F37]">“</div>
      <p className="mt-2 text-sm italic text-[#4a1f24]">{quote}</p>
      <div className="mt-6 text-sm font-semibold text-[#722F37]">
        {author}
        <span className="ml-2 font-normal text-[#722F37]/70">— {title}</span>
      </div>
    </div>
  )
}
