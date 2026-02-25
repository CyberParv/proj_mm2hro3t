'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface ReservationFormProps {
  className?: string
}

export default function ReservationForm({
  className = '',
}: Partial<ReservationFormProps>) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const onChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const currentErrors: string[] = []
    if (!values.name) currentErrors.push('Name is required.')
    if (!values.email) currentErrors.push('Email is required.')
    if (!values.date) currentErrors.push('Date is required.')
    if (!values.time) currentErrors.push('Time is required.')
    if (!values.guests) currentErrors.push('Guest count is required.')
    setErrors(currentErrors)
    return currentErrors.length === 0
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
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
          Reserve your table
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Book online and we will confirm your reservation shortly.
        </p>
      </div>

      {submitted && (
        <div className="rounded-md border border-[#DDA15E]/40 bg-[#FEFAE0] p-4 text-sm text-[#722F37]">
          Thank you! Your request has been received. We will email you with
          confirmation.
        </div>
      )}

      {errors.length > 0 && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="Giulia Romano"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder="giulia@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={values.date}
            onChange={(event) => onChange('date', event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            type="time"
            value={values.time}
            onChange={(event) => onChange('time', event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="12"
            value={values.guests}
            onChange={(event) => onChange('guests', event.target.value)}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="rounded-md bg-[#722F37] px-8 py-4 text-xs font-semibold uppercase tracking-wide text-[#FEFAE0] hover:bg-[#5c242b]"
      >
        Request Reservation
      </Button>
    </form>
  )
}
