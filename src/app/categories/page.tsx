import type { Metadata } from "next";
import Link from "next/link";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse DealMint India categories — Electronics, Fashion, Home & Kitchen, Beauty, and Books/Learning.",
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold text-mint-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / Categories
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">All categories</h1>
        <p className="mt-3 text-ink-600">
          Explore curated sample deals across five everyday shopping categories for India.
        </p>
      </header>

      <CategoryGrid />

      <section>
        <h2 className="mb-4 text-xl font-bold text-ink-900">All sample products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
