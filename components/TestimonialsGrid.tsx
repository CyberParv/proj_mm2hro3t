import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
}

interface TestimonialsGridProps {
  headline: string;
  subheadline?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({
  headline = 'Loved by Guests Near and Far',
  subheadline = 'Stories from diners who savor the warmth, flavor, and ambiance of Ember & Olive.',
  testimonials = [
    {
      quote: 'Every course was beautifully plated and bursting with flavor. The open-fire vegetables were unforgettable.',
      name: 'Isabella Cruz',
      title: 'Food Critic',
      rating: 5,
    },
    {
      quote: 'The service was gracious and the wine pairing elevated every dish. Perfect for a special night out.',
      name: 'Marcus Lee',
      title: 'Sommelier & Guest',
      rating: 5,
    },
    {
      quote: 'We hosted a private dinner and the team made it seamless. Guests raved about the tasting menu.',
      name: 'Priya Patel',
      title: 'Event Host',
      rating: 5,
    },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(function(t, i) {
            var initials = t.name.split(' ').map(function(n) { return n[0]; }).join('');
            return (
              <Card key={i} className="border bg-background">
                <CardContent className="p-6">
                  {t.rating && (
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: t.rating }).map(function(_, j) {
                        return <span key={j} className="text-yellow-500">&#9733;</span>;
                      })}
                    </div>
                  )}
                  <p className="text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar>
                      {t.avatarUrl ? <AvatarImage src={t.avatarUrl} alt={t.name} /> : null}
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
