import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Flame, Leaf, Star, Utensils, Wine, Heart, Briefcase, Gift } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Heart, Briefcase, Gift, 
  ChefHat,
  Flame,
  Leaf,
  Star,
  Utensils,
  Wine,
};

export default function FeaturesGrid({
  badge = 'Our Experience',
  headline = 'Crafted Moments, Elevated Dining',
  subheadline = 'From open-fire dishes to curated wine pairings, every detail is designed to delight.',
  features = [
    {
      icon: 'Flame',
      title: 'Open-Fire Kitchen',
      description: 'Live-fire cooking brings bold flavors to seasonal meats, vegetables, and seafood.',
    },
    {
      icon: 'Leaf',
      title: 'Farm-Forward Menu',
      description: 'We partner with nearby growers to source peak-season produce daily.',
    },
    {
      icon: 'Wine',
      title: 'Sommelier Pairings',
      description: 'Thoughtful wine flights and cocktails crafted to complement every course.',
    },
    {
      icon: 'ChefHat',
      title: 'Chef’s Tasting',
      description: 'A multi-course journey showcasing our chef’s signature techniques.',
    },
    {
      icon: 'Utensils',
      title: 'Private Dining',
      description: 'Intimate rooms for celebrations, corporate dinners, and special occasions.',
    },
    {
      icon: 'Star',
      title: 'Warm Hospitality',
      description: 'A refined yet welcoming ambiance with attentive, knowledgeable service.',
    },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function(feature, index) {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card key={index} className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {IconComponent ? React.createElement(IconComponent, { className: 'h-6 w-6' }) : <span className="h-6 w-6 rounded-full bg-primary/30" />}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
