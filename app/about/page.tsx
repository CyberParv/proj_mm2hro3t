import HeroImage from "@/components/HeroImage";
import StatsCounter from "@/components/StatsCounter";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/about.jpg"
        headline="La Nostra Famiglia"
        subheadline="Three generations of passion, one unforgettable table."
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            From Tuscany to Springfield
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            In 1985, Maria Rossi arrived in Springfield with little more than
            her mother's handwritten recipe book and a dream. Having grown up in
            a small village outside Florence, Maria learned to cook at her
            grandmother's side, where every meal was an act of love and every
            recipe told a story.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            With her husband Giuseppe, Maria opened a tiny trattoria on
            Evergreen Terrace. The red-checkered tablecloths and the aroma of
            fresh ragù simmering on the stove quickly drew neighbors and soon,
            people from across the city.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Today, their son Marco leads the kitchen, having trained in Bologna
            and Rome before returning home to honor his family's legacy. His
            sister Sofia manages the front of house, ensuring every guest
            receives the same warm welcome Nonna Maria gave to her first
            customers nearly 40 years ago.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <StatsCounter
            stats={[
              { value: "1985", label: "Year Founded" },
              { value: "80+", label: "Italian Wines" },
              { value: "3", label: "Family Generations" },
              { value: "40", label: "Years of Hospitality" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Meet the Family
            </h2>
            <p className="text-muted-foreground">
              The Rossi family welcomes you with heart and tradition.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Marco Rossi",
                title: "Executive Chef",
                bio: "Trained at Osteria Francescana in Modena, Marco brings modern technique to Nonna's classic recipes.",
                image: "/images/team.jpg?v=1",
              },
              {
                name: "Sofia Rossi",
                title: "General Manager",
                bio: "Sofia's warmth and attention to detail ensure every guest feels like family from the moment they arrive.",
                image: "/images/team.jpg?v=2",
              },
              {
                name: "Maria Rossi",
                title: "Founder & Nonna",
                bio: "Still visits daily to taste the ragù and share stories with longtime guests.",
                image: "/images/team.jpg?v=3",
              },
            ].map((member) => (
              <Card
                key={member.name}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-4 text-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">
                    {member.title}
                  </p>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
