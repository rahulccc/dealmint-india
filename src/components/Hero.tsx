import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-mint-100 bg-gradient-to-br from-mint-50 via-white to-sky-50 px-5 py-10 sm:px-8 sm:py-14">
      <div className="relative z-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-mint-700">
          Trusted picks for Indian shoppers
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
          Find clearer deals before you buy on Amazon & Flipkart
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          DealMint India highlights practical products with short why-buy notes — so you spend less
          time scrolling and more time deciding with confidence.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-xl bg-mint-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mint-700"
          >
            Browse categories
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-800 hover:border-mint-300"
          >
            How we earn (disclosure)
          </Link>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-mint-200/40 blur-3xl"
      />
    </section>
  );
}
