import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface FooterProps {
  brandName?: string
  emailPlaceholder?: string
}

export default function Footer({
  brandName = 'Bella Cucina',
  emailPlaceholder = 'you@example.com',
}: Partial<FooterProps>) {
  const quickLinks = [
    { label: 'Our Story', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Catering', href: '/catering' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  const hours = [
    { day: 'Mon - Thu', time: '4:00 PM - 9:30 PM' },
    { day: 'Fri - Sat', time: '4:00 PM - 10:30 PM' },
    { day: 'Sunday', time: '4:00 PM - 9:00 PM' },
  ]

  return (
    <footer className="bg-[#722F37] text-[#FEFAE0]">
      <div className="h-3 w-full bg-[repeating-linear-gradient(45deg,#DDA15E,#DDA15E_10px,#FEFAE0_10px,#FEFAE0_20px)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">{brandName}</h3>
          <p className="text-sm leading-relaxed text-[#FEFAE0]/80">
            Family-owned Italian dining since 1985. Warm hospitality, regional
            flavors, and a table always ready for you.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="rounded-full border border-[#FEFAE0]/40 p-2 transition hover:border-[#DDA15E] hover:text-[#DDA15E]"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DDA15E]">
            Explore
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[#DDA15E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DDA15E]">
            Hours
          </h4>
          <div className="space-y-2 text-sm text-[#FEFAE0]/80">
            {hours.map((slot) => (
              <div key={slot.day} className="flex items-center justify-between">
                <span>{slot.day}</span>
                <span>{slot.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DDA15E]">
            Visit
          </h4>
          <div className="space-y-3 text-sm text-[#FEFAE0]/80">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[#DDA15E]" />
              <span>742 Evergreen Terrace, Springfield</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#DDA15E]" />
              <span>(555) 239-1985</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#DDA15E]" />
              <span>ciao@bellacucina.com</span>
            </div>
          </div>

          <form className="mt-6 space-y-3">
            <Label htmlFor="newsletter" className="text-sm font-medium">
              Newsletter
            </Label>
            <Input
              id="newsletter"
              type="email"
              placeholder={emailPlaceholder}
              className={cn(
                'border-[#FEFAE0]/40 bg-transparent text-[#FEFAE0] placeholder:text-[#FEFAE0]/50'
              )}
            />
            <Button className="w-full rounded-md bg-[#DDA15E] text-[#722F37] hover:bg-[#c7904f]">
              Join the Table
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#FEFAE0]/20 py-6 text-center text-xs text-[#FEFAE0]/70">
        © 2024 Bella Cucina. Crafted with amore in Springfield.
      </div>
    </footer>
  )
}
