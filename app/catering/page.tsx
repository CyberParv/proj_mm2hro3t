import HeroImage from "@/components/HeroImage";
import FeaturesGrid from "@/components/FeaturesGrid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CateringPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/gallery-1.jpg"
        headline="Catering & Private Events"
        subheadline="Bring the flavors of Bella Cucina to your special occasion."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Let Us Create Your Perfect Event
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From intimate gatherings to grand celebrations, our catering team
            brings the same passion and quality you experience in our restaurant
            directly to your venue. Chef Marco personally oversees every
            catering menu to ensure an authentic Italian experience.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesGrid
            headline="Our Services"
            subheadline="Custom menus crafted for every occasion."
            features={[
              {
                icon: "Briefcase",
                title: "Corporate Events",
                description:
                  "Impress clients and colleagues with elegant Italian cuisine. Starting at $35/person.",
              },
              {
                icon: "Heart",
                title: "Wedding Receptions",
                description:
                  "Make your special day unforgettable with a custom Italian feast.",
              },
              {
                icon: "PartyPopper",
                title: "Private Parties",
                description:
                  "Birthdays, anniversaries, graduations—celebrate life's moments with authentic flavors.",
              },
              {
                icon: "Gift",
                title: "Holiday Gatherings",
                description:
                  "Let us handle the cooking for your holiday celebrations.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Sample Catering Packages
            </h2>
            <p className="text-muted-foreground">
              Tailored menus available for every event.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Antipasto Reception",
                description: "Perfect for cocktail parties and networking events",
                price: "$28/person",
                includes: [
                  "Artisanal cheese & charcuterie display",
                  "Bruschetta trio",
                  "Arancini",
                  "Caprese skewers",
                  "Marinated olives & vegetables",
                ],
              },
              {
                name: "Family Style Feast",
                description: "Our most popular option for seated dinners",
                price: "$65/person",
                includes: [
                  "Mixed green salad",
                  "Fresh bread & olive oil",
                  "Choice of 2 pastas",
                  "Choice of 2 secondi",
                  "Seasonal vegetables",
                  "Tiramisu or Panna Cotta",
                ],
              },
              {
                name: "Grand Italian Celebration",
                description: "The complete Bella Cucina experience",
                price: "$95/person",
                includes: [
                  "Antipasto display",
                  "Soup or salad course",
                  "Pasta course",
                  "Choice of 3 entrées",
                  "Sides & vegetables",
                  "Dessert station",
                  "Coffee & espresso service",
                ],
              },
            ].map((pkg) => (
              <Card
                key={pkg.name}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>
                <p className="text-primary font-semibold">{pkg.price}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <a href="/contact">Request a Catering Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
