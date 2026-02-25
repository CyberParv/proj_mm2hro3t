import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  name?: string
  title?: string
  bio?: string
  imageSrc?: string
  className?: string
}

export default function TeamMemberCard({
  name = 'Isabella Romano',
  title = 'Executive Chef',
  bio = 'Third-generation chef blending classic recipes with modern Italian flair.',
  imageSrc = '/images/team.jpg',
  className = '',
}: Partial<TeamMemberCardProps>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border/50 bg-card p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-[#DDA15E]">
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          className="h-full w-full object-cover"
          unoptimized={imageSrc.startsWith('http')}
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#722F37]">{name}</h3>
      <p className="text-sm text-[#DDA15E]">{title}</p>
      <p className="mt-3 text-sm text-muted-foreground">{bio}</p>
    </div>
  )
}
