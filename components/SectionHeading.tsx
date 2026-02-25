import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  headline?: string
  subheadline?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  headline = 'Section Title',
  subheadline = '',
  align = 'center',
  className = '',
}: Partial<SectionHeadingProps>) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-[#DDA15E]">
        Bella Cucina
      </p>
      <h2 className="text-3xl font-semibold text-[#722F37] md:text-4xl">
        {headline}
      </h2>
      {subheadline && (
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          {subheadline}
        </p>
      )}
      <div
        className={cn(
          'mx-auto h-1 w-16 bg-[#DDA15E]',
          align === 'left' ? 'mx-0' : 'mx-auto'
        )}
      />
    </div>
  )
}
