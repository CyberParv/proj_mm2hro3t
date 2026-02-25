'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryImageProps {
  imageSrc?: string
  alt?: string
  caption?: string
  onClick?: () => void
  variant?: 'grid' | 'lightbox'
}

export default function GalleryImage({
  imageSrc = '/images/gallery-1.jpg',
  alt = 'Gallery image',
  caption = 'Bella Cucina moments',
  onClick = undefined,
  variant = 'grid',
}: Partial<GalleryImageProps>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative w-full overflow-hidden rounded-lg',
        variant === 'lightbox' ? 'cursor-default' : 'cursor-pointer'
      )}
      type="button"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={1200}
        height={900}
        className={cn(
          'h-auto w-full object-cover transition-transform duration-500',
          variant === 'grid' ? 'group-hover:scale-105' : ''
        )}
        unoptimized={imageSrc.startsWith('http')}
      />
      {variant === 'grid' && (
        <div className="absolute inset-0 flex items-end justify-start bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/40">
          <span className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {caption}
          </span>
        </div>
      )}
    </button>
  )
}
