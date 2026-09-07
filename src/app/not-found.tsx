import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="text-sm font-semibold text-mint-700">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900">Page not found</h1>
      <p className="mt-3 text-ink-600">That link does not match any DealMint India page.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-xl bg-mint-600 px-5 py-3 text-sm font-semibold text-white hover:bg-mint-700"
      >
        Back to home
      </Link>
    </div>
  );
}
