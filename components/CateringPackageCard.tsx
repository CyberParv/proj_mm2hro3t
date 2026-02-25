import { cn } from '@/lib/utils'

interface CateringPackageCardProps {
  name?: string
  description?: string
  price?: string
  items?: string[]
  highlighted?: boolean
  className?: string
}

export default function CateringPackageCard({
  name = 'La Famiglia Feast',
  description = 'Ideal for weddings and celebrations with abundant Italian classics.',
  price = '$48 / guest',
  items = [
    'Antipasti spread and house focaccia',
    'Choice of two fresh pastas',
    'Seasonal salads and sides',
    'Dolci dessert table',
  ],
  highlighted = false,
  className = '',
}: Partial<CateringPackageCardProps>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border/50 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl',
        highlighted ? 'border-[#DDA15E] shadow-lg' : '',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#722F37]">{name}</h3>
        <span className="text-sm font-semibold text-[#DDA15E]">{price}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-[#722F37]/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#DDA15E]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
