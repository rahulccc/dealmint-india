import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import SoftCTA from "@/components/SoftCTA";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="space-y-12 sm:space-y-16">
      <Hero />

      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <strong>Affiliate disclosure:</strong> Some links on DealMint India are affiliate links. If
        you buy through them, we may earn a commission at no extra cost to you.{" "}
        <a href="/about" className="font-semibold underline">
          Learn more
        </a>
        .
      </p>

      <HowItWorks />

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Featured deals</h2>
          <p className="mt-2 text-ink-600">
            Sample picks with India prices (₹). Replace with live products before launch.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategoryGrid />
      <SoftCTA />
    </div>
  );
}
