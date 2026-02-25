import HeroImage from "@/components/HeroImage";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ReservationsPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/hero.jpg"
        headline="Reserve Your Table"
        subheadline="Join us for an unforgettable evening of Italian hospitality."
        primaryCta={{ label: "Call (555) 742-1985", href: "tel:+15557421985" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-8 space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold">Book Online</h2>
              <p className="text-muted-foreground">
                For parties of 8 or more, please call us directly at (555)
                742-1985.
              </p>
            </div>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" name="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" name="phone" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" name="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8+</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="occasion">Special Occasion</Label>
                <Select>
                  <option>None</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Business Dinner</option>
                  <option>Date Night</option>
                  <option>Other</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder="Dietary restrictions, seating preferences, etc."
                />
              </div>
              <Button type="submit" className="w-full">
                Request Reservation
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
