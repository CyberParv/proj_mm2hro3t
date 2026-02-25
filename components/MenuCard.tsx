import { cn } from '@/lib/utils'
import DietaryBadge from '@/components/DietaryBadge'

interface MenuCardProps {
  name?: string
  description?: string
  price?: string
  dietary?: string[]
  className?: string
}

export default function MenuCard({
  name = 'Handmade Gnocchi',
  description = 'Potato gnocchi with roasted garlic cream, sage, and aged parmesan.',
  price = '$18',
  dietary = ['V'],
  className = '',
}: Partial<MenuCardProps>) {
  return (
    <div
      className={cn(
        'group rounded-lg border border-border/50 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="mb-4 h-1 w-10 bg-[#DDA15E] transition-all duration-300 group-hover:w-16" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[#722F37]">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="text-lg font-semibold text-[#DDA15E]">{price}</span>
      </div>
      {dietary.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {dietary.map((badge) => (
            <DietaryBadge key={badge} code={badge} />
          ))}
        </div>
      )}
    </div>
  )
}
