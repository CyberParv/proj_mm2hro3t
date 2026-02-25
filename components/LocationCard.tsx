import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LocationCardProps {
  icon?: string
  title?: string
  details?: string[]
  className?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Phone,
  Mail,
  Sparkles,
}

export default function LocationCard({
  icon = 'MapPin',
  title = 'Visit Us',
  details = [
    '742 Evergreen Terrace',
    'Springfield, USA',
    '(555) 239-1985',
  ],
  className = '',
}: Partial<LocationCardProps>) {
  const Icon = iconMap[icon] || Sparkles

  return (
    <div
      className={cn(
        'rounded-lg border border-border/50 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDA15E]/20 text-[#DDA15E]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-[#722F37]">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}
