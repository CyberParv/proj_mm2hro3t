import HeroImage from "@/components/HeroImage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuCategories = [
  {
    name: "Antipasti",
    description: "Begin your journey with our starters",
    items: [
      {
        name: "Burrata Caprese",
        description:
          "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic, extra virgin olive oil",
        price: "$18",
        dietary: ["V", "GF"],
      },
      {
        name: "Carpaccio di Manzo",
        description:
          "Thinly sliced beef tenderloin, arugula, capers, shaved Parmigiano, truffle oil",
        price: "$21",
        dietary: ["GF"],
      },
      {
        name: "Calamari Fritti",
        description:
          "Crispy fried calamari with spicy marinara and lemon aioli",
        price: "$17",
      },
      {
        name: "Bruschetta Trio",
        description:
          "Classic tomato basil, wild mushroom, and whipped ricotta with honey",
        price: "$14",
        dietary: ["V"],
      },
      {
        name: "Antipasto della Casa",
        description:
          "Prosciutto di Parma, sopressata, mortadella, aged cheeses, olives, roasted peppers",
        price: "$24",
        serves: "Serves 2-3",
      },
    ],
  },
  {
    name: "Pasta",
    description: "Handmade daily using Nonna Maria's recipes",
    items: [
      {
        name: "Tagliatelle al Ragù della Nonna",
        description:
          "Hand-cut ribbon pasta, slow-simmered beef and pork ragù, Parmigiano-Reggiano",
        price: "$26",
        badge: "Signature",
      },
      {
        name: "Cacio e Pepe",
        description: "Tonnarelli pasta, Pecorino Romano, cracked black pepper",
        price: "$22",
        dietary: ["V"],
      },
      {
        name: "Linguine alle Vongole",
        description:
          "Littleneck clams, white wine, garlic, fresh parsley, Calabrian chili",
        price: "$28",
      },
      {
        name: "Pappardelle ai Funghi",
        description:
          "Wide ribbon pasta, wild mushroom medley, truffle cream, fresh thyme",
        price: "$25",
        dietary: ["V"],
      },
      {
        name: "Rigatoni alla Vodka",
        description:
          "Tube pasta, San Marzano tomato cream, pancetta, fresh basil",
        price: "$24",
      },
      {
        name: "Ravioli di Zucca",
        description:
          "Butternut squash filled pasta, brown butter, sage, amaretti crumble",
        price: "$26",
        dietary: ["V"],
        badge: "Seasonal",
      },
    ],
  },
  {
    name: "Secondi",
    description: "Main courses from land and sea",
    items: [
      {
        name: "Ossobuco alla Milanese",
        description:
          "Braised veal shank, saffron risotto, gremolata, roasted vegetables",
        price: "$42",
        badge: "Chef's Selection",
      },
      {
        name: "Branzino al Forno",
        description:
          "Whole roasted Mediterranean sea bass, lemon, capers, cherry tomatoes, olives",
        price: "$38",
        dietary: ["GF"],
      },
      {
        name: "Pollo alla Parmigiana",
        description:
          "Breaded chicken breast, San Marzano tomato sauce, fresh mozzarella, basil",
        price: "$29",
      },
      {
        name: "Bistecca Fiorentina",
        description:
          "32oz Porterhouse, rosemary, garlic, extra virgin olive oil, roasted potatoes",
        price: "$85",
        serves: "Serves 2",
        dietary: ["GF"],
      },
      {
        name: "Saltimbocca alla Romana",
        description:
          "Veal medallions, prosciutto, sage, white wine butter sauce, spinach",
        price: "$36",
      },
    ],
  },
  {
    name: "Dolci",
    description: "Sweet endings to your meal",
    items: [
      {
        name: "Tiramisù della Casa",
        description:
          "Nonna Maria's recipe: espresso-soaked ladyfingers, mascarpone cream, cocoa",
        price: "$12",
        badge: "House Favorite",
      },
      {
        name: "Panna Cotta",
        description:
          "Vanilla bean cream, seasonal berry compote, fresh mint",
        price: "$10",
        dietary: ["GF"],
      },
      {
        name: "Cannoli Siciliani",
        description:
          "Crispy shells, sweet ricotta, chocolate chips, candied orange, pistachios",
        price: "$11",
      },
      {
        name: "Affogato",
        description: "Vanilla gelato drowned in fresh espresso, amaretto",
        price: "$9",
        dietary: ["GF"],
      },
      {
        name: "Torta di Cioccolato",
        description:
          "Warm flourless chocolate cake, raspberry coulis, whipped cream",
        price: "$13",
        dietary: ["GF"],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/gallery-1.jpg"
        headline="Il Nostro Menu"
        subheadline="Crafted with passion, served with love. All pasta is made fresh daily in our kitchen."
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {menuCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50 p-6 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-primary font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.badge ? (
                        <Badge variant="secondary">{item.badge}</Badge>
                      ) : null}
                      {item.serves ? (
                        <Badge variant="outline">{item.serves}</Badge>
                      ) : null}
                      {item.dietary?.map((diet) => (
                        <Badge key={diet} variant="outline">
                          {diet}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            Please inform your server of any allergies. Consuming raw or
            undercooked meats, poultry, seafood, or eggs may increase your risk
            of foodborne illness.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to Taste Italy?"
        description="Reserve your table and let our family welcome you with the flavors of Tuscany."
        ctaLabel="Reserve Your Table"
        ctaHref="/reservations"
      />
    </main>
  );
}
