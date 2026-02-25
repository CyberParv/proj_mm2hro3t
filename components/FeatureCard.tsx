import {
  ChefHat,
  GlassWater,
  Leaf,
  Sparkles,
  Utensils,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon?: string
  title?: string
  description?: string
  className?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChefHat,
  GlassWater,
  Leaf,
  Sparkles,
  Utensils,
}

export default function FeatureCard({
  icon = 'ChefHat',
  title = 'Handcrafted Daily',
  description = 'Fresh pasta, slow-simmered sauces, and house-baked breads each morning.',
  className = '',
}: Partial<FeatureCardProps>) {
  const Icon = iconMap[icon] || Sparkles

  return (
    <div
      className={cn(
        'rounded-lg border border-border/50 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDA15E]/20 text-[#DDA15E]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#722F37]">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
