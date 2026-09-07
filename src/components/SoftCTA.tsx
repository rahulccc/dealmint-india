import Link from "next/link";

export default function SoftCTA() {
  return (
    <section className="rounded-3xl border border-ink-200 bg-ink-900 px-5 py-8 text-center text-white sm:px-8">
      <h2 className="text-2xl font-bold tracking-tight">Looking for something specific?</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base">
        Browse categories or tell us what you are comparing — we keep DealMint focused on useful,
        non-spammy recommendations for shoppers in India.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/categories"
          className="inline-flex rounded-xl bg-mint-500 px-5 py-3 text-sm font-semibold text-ink-900 hover:bg-mint-400"
        >
          Explore deals
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-xl border border-ink-600 px-5 py-3 text-sm font-semibold text-white hover:border-ink-400"
        >
          Send a suggestion
        </Link>
      </div>
    </section>
  );
}
