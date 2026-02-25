'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'Bella Cucina',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Catering', href: '/catering' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Reserve a Table',
  ctaHref = '/reservations',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-[#FEFAE0]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-wide text-[#722F37]">
            {brandName}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-[#606C38] md:inline">
            Trattoria
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-[#722F37] transition-colors',
                'hover:text-[#DDA15E]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="rounded-md bg-[#722F37] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#FEFAE0] hover:bg-[#5c242b]"
            asChild
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-border/60 p-2 text-[#722F37] md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#722F37] px-6 py-8 text-[#FEFAE0] md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">{brandName}</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md border border-[#FEFAE0]/30 p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium hover:text-[#DDA15E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            className="mt-10 rounded-md bg-[#DDA15E] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#722F37] hover:bg-[#c7904f]"
            asChild
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>

          <div className="mt-auto text-sm text-[#FEFAE0]/70">
            742 Evergreen Terrace, Springfield
          </div>
        </div>
      )}
    </header>
  )
}
