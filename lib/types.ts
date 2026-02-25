export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  cta: NavigationItem;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  dietary?: string[];
  serves?: string;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  rating?: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryCategory {
  name: string;
  images: GalleryImage[];
}

export interface FormFieldOption {
  label: string;
  value: string;
}

export type FieldType = "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}
