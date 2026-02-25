import HeroImage from "@/components/HeroImage";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTABanner from "@/components/CTABanner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/hero.jpg"
        headline="Where Family Recipes Meet Italian Tradition"
        subheadline="Experience the warmth of authentic Italian cuisine, handcrafted with love by the Rossi family for over three generations in Springfield."
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
        secondaryCta={{ label: "View Our Menu", href: "/menu" }}
        overlayOpacity="0.4"
      />

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesGrid
            badge="La Nostra Storia"
            headline="Our Story"
            subheadline="Since 1985, the Rossi family has been bringing the flavors of Tuscany to Springfield."
            features={[
              {
                icon: "Utensils",
                title: "Handmade Daily",
                description:
                  "Fresh pasta made every morning using Nonna's original recipes.",
              },
              {
                icon: "Wine",
                title: "Curated Wines",
                description:
                  "Over 80 Italian wines selected from family vineyards.",
              },
              {
                icon: "Heart",
                title: "Family Owned",
                description: "Three generations of Rossi family hospitality.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Taste Our Favorites
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Signature Dishes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Tagliatelle al Ragù della Nonna",
                description:
                  "Hand-cut ribbon pasta with slow-simmered beef and pork ragù, Parmigiano-Reggiano.",
                price: "$26",
                badge: "Nonna's Recipe",
              },
              {
                name: "Ossobuco alla Milanese",
                description:
                  "Braised veal shank with saffron risotto, gremolata, and roasted vegetables.",
                price: "$42",
                badge: "Chef's Selection",
              },
              {
                name: "Burrata Caprese",
                description:
                  "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic, extra virgin olive oil.",
                price: "$18",
                badge: "Seasonal",
              },
            ].map((item) => (
              <Card
                key={item.name}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
                <Badge variant="secondary" className="w-fit">
                  {item.badge}
                </Badge>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-md px-8 py-4 font-medium tracking-wide uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Explore Full Menu
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <GalleryMasonry
          headline="Un'Atmosfera Accogliente"
          subheadline="Step into our rustic Tuscan-inspired dining room where warm candlelight and the aroma of fresh herbs create the perfect setting."
          images={[
            {
              url: "/images/gallery-1.jpg?v=1",
              alt: "Bella Cucina main dining room",
              caption: "Main dining room",
            },
            {
              url: "/images/gallery-1.jpg?v=2",
              alt: "Private dining in our wine cellar",
              caption: "Wine cellar private dining",
            },
            {
              url: "/images/gallery-1.jpg?v=3",
              alt: "Al fresco dining on our garden patio",
              caption: "Garden patio",
            },
            {
              url: "/images/gallery-1.jpg?v=4",
              alt: "Our open kitchen",
              caption: "Open kitchen",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsGrid
            headline="What Our Guests Say"
            subheadline="Voices from Our Table"
            testimonials={[
              {
                quote:
                  "The best Italian food outside of Italy. The tagliatelle transported me straight to my grandmother's kitchen in Bologna. Absolutely magical.",
                name: "Margaret Chen",
                title: "Food Critic, Springfield Gazette",
                rating: 5,
                avatarUrl: "/images/team.jpg?v=1",
              },
              {
                quote:
                  "We've celebrated every anniversary here for 15 years. The Rossi family treats us like their own. The ossobuco is simply perfection.",
                name: "Robert & Linda Thompson",
                title: "Loyal Guests Since 2009",
                rating: 5,
                avatarUrl: "/images/team.jpg?v=2",
              },
              {
                quote:
                  "From the moment you walk in, you feel the warmth and passion. The wine selection is impeccable and the tiramisu is the best I've ever had.",
                name: "James Morrison",
                title: "Local Business Owner",
                rating: 5,
                avatarUrl: "/images/team.jpg?v=3",
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Bring Bella Cucina to Your Event"
        description="From intimate dinner parties to grand celebrations, let us bring the flavors of Italy to your special occasion."
        ctaLabel="Plan Your Event"
        ctaHref="/catering"
      />

      <CTABanner
        headline="Reserve Your Table Tonight"
        description="Join us for an unforgettable dining experience. Open Tuesday - Sunday, 5:00 PM - 10:00 PM."
        ctaLabel="Make a Reservation"
        ctaHref="/reservations"
        secondaryCtaLabel="Call Us"
        secondaryCtaHref="tel:+15557421985"
      />
    </main>
  );
}
