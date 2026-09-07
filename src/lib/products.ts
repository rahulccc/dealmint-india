import type { CategorySlug } from "./categories";

/**
 * SAMPLE PRODUCTS ONLY — fake but realistic placeholders for layout and demo.
 * Replace ASINs, Flipkart paths, prices, and blurbs with real products before publishing.
 * Do not treat these IDs as live affiliate inventory.
 */
export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  priceINR: number;
  originalPriceINR?: number;
  whyBuy: string;
  amazonAsin: string;
  flipkartPath: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "noise-buds-x",
    name: "Noise Air Buds X True Wireless Earbuds",
    category: "electronics",
    priceINR: 1299,
    originalPriceINR: 2999,
    whyBuy: "Solid everyday buds with decent battery and a price that makes sense for commute listening.",
    amazonAsin: "B0SAMPLE001",
    flipkartPath: "noise-air-buds-x/p/itmsample001",
    featured: true,
    badge: "Value pick",
  },
  {
    id: "boat-powerbank",
    name: "boAt 10000mAh Dual Port Power Bank",
    category: "electronics",
    priceINR: 999,
    originalPriceINR: 1999,
    whyBuy: "Compact backup charge for phone + earbuds — handy for long train or cab days.",
    amazonAsin: "B0SAMPLE002",
    flipkartPath: "boat-10000mah-power-bank/p/itmsample002",
    featured: true,
  },
  {
    id: "mi-smart-band",
    name: "Mi Smart Band Fitness Tracker",
    category: "electronics",
    priceINR: 1799,
    originalPriceINR: 2999,
    whyBuy: "Simple sleep and step tracking without paying flagship watch prices.",
    amazonAsin: "B0SAMPLE003",
    flipkartPath: "mi-smart-band/p/itmsample003",
  },
  {
    id: "cotton-kurta-set",
    name: "Cotton Kurta Set — Everyday Comfort",
    category: "fashion",
    priceINR: 899,
    originalPriceINR: 1499,
    whyBuy: "Breathable cotton that works for office WFH days and weekend visits.",
    amazonAsin: "B0SAMPLE004",
    flipkartPath: "cotton-kurta-set/p/itmsample004",
    featured: true,
  },
  {
    id: "running-shoes",
    name: "Lightweight Mesh Running Shoes",
    category: "fashion",
    priceINR: 1499,
    originalPriceINR: 2499,
    whyBuy: "Cushioned enough for morning walks without the premium sneaker markup.",
    amazonAsin: "B0SAMPLE005",
    flipkartPath: "mesh-running-shoes/p/itmsample005",
  },
  {
    id: "travel-backpack",
    name: "Laptop Travel Backpack 25L",
    category: "fashion",
    priceINR: 1199,
    originalPriceINR: 2199,
    whyBuy: "Padded laptop sleeve plus bottle pocket — practical for office and short trips.",
    amazonAsin: "B0SAMPLE006",
    flipkartPath: "laptop-travel-backpack-25l/p/itmsample006",
  },
  {
    id: "mixer-grinder",
    name: "750W Mixer Grinder with 3 Jars",
    category: "home-kitchen",
    priceINR: 2499,
    originalPriceINR: 3999,
    whyBuy: "Reliable mid-range mixer for chutneys, batters, and daily Indian cooking.",
    amazonAsin: "B0SAMPLE007",
    flipkartPath: "750w-mixer-grinder-3-jars/p/itmsample007",
    featured: true,
    badge: "Kitchen staple",
  },
  {
    id: "electric-kettle",
    name: "1.5L Stainless Steel Electric Kettle",
    category: "home-kitchen",
    priceINR: 799,
    originalPriceINR: 1499,
    whyBuy: "Quick chai water and instant noodles — low fuss, easy to clean.",
    amazonAsin: "B0SAMPLE008",
    flipkartPath: "15l-steel-electric-kettle/p/itmsample008",
  },
  {
    id: "nonstick-tawa",
    name: "Non-Stick Flat Tawa 28cm",
    category: "home-kitchen",
    priceINR: 699,
    originalPriceINR: 1299,
    whyBuy: "Even heat for rotis and dosa with less oil — a small upgrade that shows daily.",
    amazonAsin: "B0SAMPLE009",
    flipkartPath: "nonstick-flat-tawa-28cm/p/itmsample009",
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Face Serum 30ml",
    category: "beauty",
    priceINR: 449,
    originalPriceINR: 799,
    whyBuy: "Budget-friendly brightening serum many Indian skin routines start with.",
    amazonAsin: "B0SAMPLE010",
    flipkartPath: "vitamin-c-face-serum-30ml/p/itmsample010",
    featured: true,
  },
  {
    id: "sunscreen-spf50",
    name: "Matte Sunscreen SPF 50 PA++++",
    category: "beauty",
    priceINR: 399,
    originalPriceINR: 599,
    whyBuy: "Non-greasy finish that sits better under humidity than heavy creams.",
    amazonAsin: "B0SAMPLE011",
    flipkartPath: "matte-sunscreen-spf50/p/itmsample011",
  },
  {
    id: "atomic-habits",
    name: "Atomic Habits — Paperback",
    category: "books-learning",
    priceINR: 399,
    originalPriceINR: 599,
    whyBuy: "Clear habit frameworks that students and professionals actually finish reading.",
    amazonAsin: "B0SAMPLE012",
    flipkartPath: "atomic-habits-paperback/p/itmsample012",
    featured: true,
    badge: "Reader favourite",
  },
  {
    id: "python-crash-course",
    name: "Python Crash Course — 3rd Edition",
    category: "books-learning",
    priceINR: 899,
    originalPriceINR: 1299,
    whyBuy: "Project-based intro that pairs well with free online practice platforms.",
    amazonAsin: "B0SAMPLE013",
    flipkartPath: "python-crash-course-3rd/p/itmsample013",
  },
  {
    id: "planner-notebook",
    name: "Undated Daily Planner Notebook A5",
    category: "books-learning",
    priceINR: 349,
    originalPriceINR: 599,
    whyBuy: "Simple layout for goals and weekly reviews without subscription apps.",
    amazonAsin: "B0SAMPLE014",
    flipkartPath: "undated-daily-planner-a5/p/itmsample014",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
