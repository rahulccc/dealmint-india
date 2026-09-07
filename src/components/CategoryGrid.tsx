import Link from "next/link";
import { categories } from "@/lib/categories";

export default function CategoryGrid() {
  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Shop by category</h2>
          <p className="mt-2 text-ink-600">Mobile-friendly picks across everyday needs.</p>
        </div>
        <Link href="/categories" className="hidden text-sm font-semibold text-mint-700 sm:inline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className={`rounded-2xl border p-5 transition hover:shadow-md ${c.accent}`}
          >
            <span className="text-2xl" aria-hidden>
              {c.icon}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{c.name}</h3>
            <p className="mt-1 text-sm opacity-80">{c.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
