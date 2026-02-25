'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface CateringInquiryFormProps {
  className?: string
}

export default function CateringInquiryForm({
  className = '',
}: Partial<CateringInquiryFormProps>) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'space-y-6 rounded-lg border border-border/50 bg-card p-8 shadow-md',
        className
      )}
    >
      <div>
        <h3 className="text-2xl font-semibold text-[#722F37]">
          Catering Inquiry
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us about your event and our team will craft a custom menu.
        </p>
      </div>

      {submitted && (
        <div className="rounded-md border border-[#DDA15E]/40 bg-[#FEFAE0] p-4 text-sm text-[#722F37]">
          Thank you! We will respond within 24 hours with a tailored proposal.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="catering-name">Full Name</Label>
          <Input
            id="catering-name"
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="Luca Bianchi"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="catering-email">Email</Label>
          <Input
            id="catering-email"
            type="email"
            value={values.email}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder="luca@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-type">Event Type</Label>
          <Input
            id="event-type"
            value={values.eventType}
            onChange={(event) => onChange('eventType', event.target.value)}
            placeholder="Wedding reception, corporate dinner"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-date">Event Date</Label>
          <Input
            id="event-date"
            type="date"
            value={values.date}
            onChange={(event) => onChange('date', event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-guests">Guest Count</Label>
          <Input
            id="event-guests"
            type="number"
            min="10"
            max="300"
            value={values.guests}
            onChange={(event) => onChange('guests', event.target.value)}
            placeholder="80"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Details & Preferences</Label>
        <Textarea
          id="details"
          value={values.details}
          onChange={(event) => onChange('details', event.target.value)}
          placeholder="Dietary needs, venue location, service style, and any inspiration."
          rows={5}
        />
      </div>

      <Button
        type="submit"
        className="rounded-md bg-[#722F37] px-8 py-4 text-xs font-semibold uppercase tracking-wide text-[#FEFAE0] hover:bg-[#5c242b]"
      >
        Send Inquiry
      </Button>
    </form>
  )
}
