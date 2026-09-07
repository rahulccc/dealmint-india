import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory, type CategorySlug } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug as CategorySlug);

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold text-mint-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/categories" className="hover:underline">
            Categories
          </Link>{" "}
          / {category.name}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">
          <span aria-hidden>{category.icon} </span>
          {category.name}
        </h1>
        <p className="mt-3 text-ink-600">{category.description}</p>
      </header>

      {items.length === 0 ? (
        <p className="rounded-xl border border-ink-200 bg-white p-6 text-ink-600">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
