import MenuCard from '@/components/MenuCard'
import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

interface MenuItem {
  name: string
  description: string
  price: string
  dietary?: string[]
}

interface MenuCategoryProps {
  title?: string
  description?: string
  items?: MenuItem[]
  className?: string
}

export default function MenuCategory({
  title = 'Antipasti',
  description = 'Begin your meal with house-made breads, seasonal produce, and Italian classics.',
  items = [
    {
      name: 'Burrata e Pomodoro',
      description: 'Creamy burrata, heirloom tomatoes, basil oil, aged balsamic.',
      price: '$14',
      dietary: ['V', 'GF'],
    },
    {
      name: 'Arancini di Riso',
      description: 'Crispy saffron risotto balls with mozzarella and marinara.',
      price: '$12',
      dietary: ['V'],
    },
    {
      name: 'Calamari Fritti',
      description: 'Lightly fried calamari, lemon aioli, chili flakes.',
      price: '$16',
      dietary: [],
    },
  ],
  className = '',
}: Partial<MenuCategoryProps>) {
  return (
    <section className={cn('space-y-10', className)}>
      <SectionHeading
        headline={title}
        subheadline={description}
        align="left"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            dietary={item.dietary}
          />
        ))}
      </div>
    </section>
  )
}
