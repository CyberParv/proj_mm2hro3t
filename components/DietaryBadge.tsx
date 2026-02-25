import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface DietaryBadgeProps {
  code?: string
  className?: string
}

const descriptions: Record<string, string> = {
  V: 'Vegetarian',
  VG: 'Vegan',
  GF: 'Gluten Free',
}

export default function DietaryBadge({
  code = 'V',
  className = '',
}: Partial<DietaryBadgeProps>) {
  const label = descriptions[code] || 'Dietary'

  return (
    <Badge
      title={label}
      className={cn(
        'rounded-full bg-[#DDA15E]/20 text-xs font-semibold text-[#722F37]',
        className
      )}
    >
      {code}
    </Badge>
  )
}
