import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-md border border-transparent bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground',
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'

export { Badge }
