import { cn } from '@/lib/utils'

interface MapEmbedProps {
  src?: string
  title?: string
  className?: string
}

export default function MapEmbed({
  src = 'https://www.google.com/maps?q=742%20Evergreen%20Terrace%20Springfield&output=embed',
  title = 'Bella Cucina Location Map',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border/50 shadow-md',
        className
      )}
    >
      <iframe
        src={src}
        title={title}
        className="h-[320px] w-full md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
