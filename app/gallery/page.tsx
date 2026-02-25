import HeroImage from "@/components/HeroImage";
import GalleryMasonry from "@/components/GalleryMasonry";

export default function GalleryPage() {
  return (
    <main>
      <HeroImage
        imageUrl="/images/gallery-1.jpg"
        headline="A Glimpse Inside"
        subheadline="Experience the warmth and beauty of Bella Cucina."
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
      />

      <section className="py-20 md:py-28 bg-background">
        <GalleryMasonry
          headline="Our Space, Our Dishes, Our Moments"
          subheadline="From the wine cellar to the garden patio, every corner tells a story."
          images={[
            { url: "/images/gallery-1.jpg?v=1", alt: "Main dining room" },
            { url: "/images/gallery-1.jpg?v=2", alt: "Wine cellar" },
            { url: "/images/gallery-1.jpg?v=3", alt: "Garden patio" },
            { url: "/images/gallery-1.jpg?v=4", alt: "Wine bar" },
            { url: "/images/gallery-1.jpg?v=5", alt: "Open kitchen" },
            { url: "/images/gallery-1.jpg?v=6", alt: "Cozy corner booth" },
            { url: "/images/gallery-1.jpg?v=7", alt: "Handmade pasta" },
            { url: "/images/gallery-1.jpg?v=8", alt: "Ossobuco alla Milanese" },
            { url: "/images/gallery-1.jpg?v=9", alt: "House tiramisu" },
            { url: "/images/gallery-1.jpg?v=10", alt: "Burrata Caprese" },
            { url: "/images/gallery-1.jpg?v=11", alt: "Florentine steak" },
            { url: "/images/gallery-1.jpg?v=12", alt: "Sicilian cannoli" },
            { url: "/images/gallery-1.jpg?v=13", alt: "Private event" },
            { url: "/images/gallery-1.jpg?v=14", alt: "Chef at work" },
            { url: "/images/gallery-1.jpg?v=15", alt: "Family celebration" },
            { url: "/images/gallery-1.jpg?v=16", alt: "Nonna greeting guests" },
          ]}
        />
      </section>
    </main>
  );
}
