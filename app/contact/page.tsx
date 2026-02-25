import HeroImage from "@/components/HeroImage";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/gallery-1.jpg"
        headline="Visit Us"
        subheadline="We'd love to welcome you to our table."
        primaryCta={{ label: "Call (555) 742-1985", href: "tel:+15557421985" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 lg:grid-cols-3">
          <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-3">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-muted-foreground">
              742 Evergreen Terrace
              <br />
              Springfield, IL 62701
            </p>
          </Card>
          <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-3">
            <h3 className="text-xl font-semibold">Hours</h3>
            <p className="text-muted-foreground">Tue-Thu: 5:00 PM - 9:30 PM</p>
            <p className="text-muted-foreground">Fri-Sat: 5:00 PM - 10:30 PM</p>
            <p className="text-muted-foreground">Sunday: 4:00 PM - 9:00 PM</p>
            <p className="text-muted-foreground">Monday: Closed</p>
          </Card>
          <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-3">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-muted-foreground">(555) 742-1985</p>
            <p className="text-muted-foreground">info@bellacucina.com</p>
            <p className="text-muted-foreground">
              Free parking available in rear lot. Street parking also available.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-start">
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-md">
            <iframe
              title="Bella Cucina Map"
              src="https://maps.google.com/maps?q=742%20Evergreen%20Terrace%20Springfield&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
            />
          </div>
          <ContactForm
            headline="Send Us a Message"
            subheadline="We typically respond within one business day."
            contactInfo={[
              { icon: "Phone", label: "Phone", value: "(555) 742-1985" },
              {
                icon: "Mail",
                label: "Email",
                value: "info@bellacucina.com",
              },
              {
                icon: "MapPin",
                label: "Address",
                value: "742 Evergreen Terrace, Springfield",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
