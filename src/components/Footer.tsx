import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink-200 bg-ink-900 text-ink-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">DealMint India</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">
            Curated product picks and deal ideas for shoppers in India. We may earn a commission
            when you buy through our links — at no extra cost to you.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Categories</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-mint-300">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-mint-300">
                About & Affiliate Disclosure
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-mint-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-mint-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800 px-4 py-4 text-center text-xs text-ink-400 sm:px-6">
        © {new Date().getFullYear()} DealMint India. Prices and availability may change on retailer sites.
      </div>
    </footer>
  );
}
