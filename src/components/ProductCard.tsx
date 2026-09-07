import Link from "next/link";
import type { Product } from "@/lib/products";
import { buildAmazonUrl, buildFlipkartUrl, formatINR } from "@/lib/affiliate";
import { getCategory } from "@/lib/categories";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const category = getCategory(product.category);
  const amazonUrl = buildAmazonUrl(product.amazonAsin);
  const flipkartUrl = buildFlipkartUrl(product.flipkartPath);
  const savings =
    product.originalPriceINR && product.originalPriceINR > product.priceINR
      ? product.originalPriceINR - product.priceINR
      : 0;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-4 shadow-sm transition hover:border-mint-300 hover:shadow-md sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <Link
          href={`/categories/${product.category}`}
          className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 hover:bg-mint-100 hover:text-mint-800"
        >
          {category?.name ?? product.category}
        </Link>
        {product.badge && (
          <span className="rounded-full bg-mint-100 px-2.5 py-1 text-xs font-semibold text-mint-800">
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold leading-snug text-ink-900 sm:text-lg">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{product.whyBuy}</p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-xl font-bold text-ink-900">{formatINR(product.priceINR)}</span>
        {product.originalPriceINR ? (
          <span className="text-sm text-ink-400 line-through">
            {formatINR(product.originalPriceINR)}
          </span>
        ) : null}
        {savings > 0 ? (
          <span className="text-xs font-medium text-mint-700">Save {formatINR(savings)}</span>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center rounded-xl bg-[#FF9900] px-3 py-2.5 text-sm font-semibold text-ink-900 transition hover:brightness-95"
        >
          Buy on Amazon
        </a>
        <a
          href={flipkartUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center rounded-xl bg-[#2874F0] px-3 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Buy on Flipkart
        </a>
      </div>
    </article>
  );
}
