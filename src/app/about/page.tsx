import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Affiliate Disclosure",
  description:
    "Learn about DealMint India and our Amazon Associates / Flipkart affiliate disclosure.",
};

export default function AboutPage() {
  return (
    <article className="prose-custom mx-auto max-w-3xl space-y-6">
      <header>
        <p className="text-sm font-semibold text-mint-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / About
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">
          About DealMint India
        </h1>
      </header>

      <section className="rounded-2xl border border-ink-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-ink-900">Our purpose</h2>
        <p className="mt-3 text-ink-600 leading-relaxed">
          DealMint India is a clean, trustworthy deal and product-recommendation site for shoppers
          in India. We focus on practical picks across Electronics, Fashion, Home & Kitchen, Beauty,
          and Books/Learning — with short why-buy notes instead of spammy hype.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-amber-950">Affiliate disclosure</h2>
        <p className="mt-3 text-amber-950/90 leading-relaxed">
          DealMint India participates in the Amazon Associates Programme and may participate in the
          Flipkart Affiliate Programme. This means that when you click certain links on this site
          and complete a purchase, we may earn a commission from the retailer —{" "}
          <strong>at no additional cost to you</strong>.
        </p>
        <p className="mt-3 text-amber-950/90 leading-relaxed">
          As an Amazon Associate we earn from qualifying purchases. Product prices, availability,
          and offers are controlled by Amazon.in, Flipkart, and other retailers and may change
          without notice. Always verify final price and delivery details on the retailer page before
          buying.
        </p>
        <p className="mt-3 text-amber-950/90 leading-relaxed">
          Recommendations are editorial opinions for informational purposes. We do not claim that
          any product is the best for every shopper. Sample products on this starter site
          are placeholders for demonstration until real ASINs and Flipkart product links are added.
        </p>
      </section>

      <section className="rounded-2xl border border-ink-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-ink-900">Transparency principles</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-600">
          <li>Affiliate links are disclosed clearly on the site.</li>
          <li>We aim for useful, non-spammy content suitable for programme review.</li>
          <li>Contact us if a listing looks outdated or incorrect.</li>
        </ul>
        <p className="mt-4 text-ink-600">
          Questions?{" "}
          <Link href="/contact" className="font-semibold text-mint-700 hover:underline">
            Reach out here
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
