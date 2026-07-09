import { siteImages } from "@/lib/images";

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  priceAmount: number;
  image: string;
  featured?: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export const productCategories = [
  "Tous",
  "Santé",
  "Fitness",
  "Bien-être",
  "Maison",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products: Product[] = [
  {
    slug: "complements-vitamines",
    name: "Compléments vitaminiques premium",
    category: "Santé",
    description:
      "Formules enrichies en vitamines et minéraux essentiels pour renforcer votre immunité.",
    price: "35 000 FC",
    priceAmount: 35000,
    image: siteImages.products.complements,
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 128,
  },
  {
    slug: "tapis-yoga-pro",
    name: "Tapis de yoga professionnel",
    category: "Fitness",
    description:
      "Tapis antidérapant haute densité, idéal pour yoga, pilates et étirements.",
    price: "55 000 FC",
    priceAmount: 55000,
    image: siteImages.products.yoga,
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 94,
  },
  {
    slug: "purificateur-air",
    name: "Purificateur d'air intelligent",
    category: "Maison",
    description:
      "Technologie HEPA pour un air intérieur pur, silencieux et économe en énergie.",
    price: "185 000 FC",
    priceAmount: 185000,
    image: siteImages.products.purificateur,
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
  },
  {
    slug: "bandes-resistance",
    name: "Kit bandes de résistance",
    category: "Fitness",
    description:
      "Ensemble complet de bandes élastiques pour un entraînement musculaire polyvalent.",
    price: "28 000 FC",
    priceAmount: 28000,
    image: siteImages.products.bandes,
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 52,
  },
  {
    slug: "huiles-essentielles",
    name: "Huiles essentielles bio",
    category: "Bien-être",
    description:
      "Sélection d'huiles pures pour aromathérapie, relaxation et soins naturels.",
    price: "22 000 FC",
    priceAmount: 22000,
    image: siteImages.products.huiles,
    featured: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 81,
  },
  {
    slug: "balance-connectee",
    name: "Balance connectée",
    category: "Maison",
    description:
      "Suivez votre poids et composition corporelle avec précision via application mobile.",
    price: "75 000 FC",
    priceAmount: 75000,
    image: siteImages.products.balance,
    featured: false,
    inStock: false,
    rating: 4.5,
    reviewCount: 39,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("fr-FR")} FC`;
}
