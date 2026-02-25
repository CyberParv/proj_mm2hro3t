import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Ember & Olive',
  description = 'Seasonal Mediterranean-inspired cuisine, crafted with local produce, open-fire techniques, and a welcoming sense of celebration.',
  columns = [
    {
      title: 'Visit',
      links: [
        { label: 'Reservations', href: '#reservation' },
        { label: 'Hours & Location', href: '#contact' },
        { label: 'Private Dining', href: '#contact' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Menu', href: '#menu' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Chef Story', href: '#about' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Gift Cards', href: '/gift-cards' },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function(col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function(link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
