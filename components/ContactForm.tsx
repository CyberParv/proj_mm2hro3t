'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactForm({
  headline = 'Plan Your Evening With Us',
  subheadline = 'Reservations, private dining, and special requests—our team is ready to help.',
  contactInfo = [
    { icon: 'Phone', label: 'Reservations', value: '(212) 555-0188' },
    { icon: 'Mail', label: 'Email', value: 'hello@emberandolive.com' },
    { icon: 'MapPin', label: 'Location', value: '214 Hearthstone Ave, New York, NY' },
    { icon: 'Clock', label: 'Hours', value: 'Tue–Sun: 5pm–10pm' },
  ],
}: Partial<ContactFormProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Reservation or inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your party, date, and preferences..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function(info, i) {
                const IconComponent = iconMap[info.icon];
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl text-primary">
                      {IconComponent ? React.createElement(IconComponent, { className: 'h-6 w-6' }) : <span className="h-6 w-6 rounded-full bg-primary/20" />}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
