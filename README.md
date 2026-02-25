# Bella Cucina

> Authentic Italian Cuisine Since 1985

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Experience authentic Italian cuisine at Bella Cucina. Family-owned since 1985, we serve handmade pasta, traditional recipes, and fine Italian wines. Reserve your table at 742 Evergreen Terrace, Springfield.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Customer testimonials

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, feature-highlight, menu-preview, gallery-preview, testimonials, cta-section, cta-banner, location-preview
- **Menu** (`/menu`) — page-hero, menu-full, cta-banner
- **Our Story** (`/about`) — page-hero, story-section, team-section, values-section
- **Gallery** (`/gallery`) — page-hero, gallery-masonry
- **Reservations** (`/reservations`) — page-hero, reservation-form, info-cards
- **Catering** (`/catering`) — page-hero, content-section, services-grid, catering-packages, contact-form
- **Contact** (`/contact`) — page-hero, contact-details, map-section, contact-form

## Project Structure

```
├── .env.example
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── catering/
│   │   │   └── route.ts
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── reservations/
│   │       └── route.ts
│   ├── catering/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── reservations/
│       └── page.tsx
├── components.json
├── components/
│   ├── CTABanner.tsx
│   ├── CateringInquiryForm.tsx
│   ├── CateringPackageCard.tsx
│   ├── ContactForm.tsx
│   ├── DietaryBadge.tsx
│   ├── DishCard.tsx
│   ├── FeatureCard.tsx
│   ├── FeaturesGrid.tsx
│   ├── Footer.tsx
│   ├── FooterMultiColumn.tsx
│   ├── GalleryGrid.tsx
│   ├── GalleryImage.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroImage.tsx
│   ├── HeroSection.tsx
│   ├── LocationCard.tsx
│   ├── MapEmbed.tsx
│   ├── MenuCard.tsx
│   ├── MenuCategory.tsx
│   ├── Navbar.tsx
│   ├── PageHero.tsx
│   ├── ReservationForm.tsx
│   ├── SectionHeading.tsx
│   ├── StatsCounter.tsx
│   ├── TeamMemberCard.tsx
│   ├── TestimonialCard.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── TestimonialsGrid.tsx
│   ├── TimelineItem.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       └── textarea.tsx
├── lib/
│   ├── email.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validators.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#722F37](https://via.placeholder.com/15/722F37/000000?text=+) | `#722F37` |
| Secondary | ![#606C38](https://via.placeholder.com/15/606C38/000000?text=+) | `#606C38` |
| Accent | ![#DDA15E](https://via.placeholder.com/15/DDA15E/000000?text=+) | `#DDA15E` |
| Background | ![#FEFAE0](https://via.placeholder.com/15/FEFAE0/000000?text=+) | `#FEFAE0` |

## Typography

- **Headings:** Cormorant Garamond
- **Body:** Lato

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm2hro3t.git

# Navigate to the project
cd proj_mm2hro3t

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm2hro3t)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
