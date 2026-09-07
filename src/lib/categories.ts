export type CategorySlug =
  | "electronics"
  | "fashion"
  | "home-kitchen"
  | "beauty"
  | "books-learning";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "Electronics",
    description: "Phones, earbuds, gadgets and everyday tech picks for India.",
    icon: "📱",
    accent: "bg-sky-50 text-sky-800 border-sky-100",
  },
  {
    slug: "fashion",
    name: "Fashion",
    description: "Comfortable everyday wear and accessories for Indian weather.",
    icon: "👗",
    accent: "bg-rose-50 text-rose-800 border-rose-100",
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    description: "Practical appliances and kitchen helpers for Indian homes.",
    icon: "🏠",
    accent: "bg-amber-50 text-amber-900 border-amber-100",
  },
  {
    slug: "beauty",
    name: "Beauty",
    description: "Skincare and personal care essentials worth adding to cart.",
    icon: "✨",
    accent: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-100",
  },
  {
    slug: "books-learning",
    name: "Books / Learning",
    description: "Books and learning tools for students and lifelong learners.",
    icon: "📚",
    accent: "bg-emerald-50 text-emerald-800 border-emerald-100",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
