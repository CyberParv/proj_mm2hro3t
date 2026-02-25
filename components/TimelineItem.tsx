import { cn } from '@/lib/utils'

interface TimelineItemProps {
  year?: string
  title?: string
  description?: string
  className?: string
}

export default function TimelineItem({
  year = '1985',
  title = 'Bella Cucina Opens',
  description = 'The Romano family brings a taste of Tuscany to Springfield.',
  className = '',
}: Partial<TimelineItemProps>) {
  return (
    <div className={cn('relative pl-10', className)}>
      <div className="absolute left-0 top-1 h-full w-px bg-[#DDA15E]/40" />
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDA15E] text-xs font-semibold text-[#722F37]">
        {year}
      </div>
      <div className="space-y-2 rounded-lg border border-border/50 bg-card p-5 shadow-md">
        <h4 className="text-lg font-semibold text-[#722F37]">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
