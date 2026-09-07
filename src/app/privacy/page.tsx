import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DealMint India — how we handle information on this site.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <header>
        <p className="text-sm font-semibold text-mint-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / Privacy
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: 7 September 2026</p>
      </header>

      <section className="space-y-4 rounded-2xl border border-ink-200 bg-white p-5 leading-relaxed text-ink-600 sm:p-6">
        <p>
          DealMint India ("we", "us") respects your privacy. This policy explains
          what information may be collected when you use this website and how it may be used.
        </p>

        <h2 className="text-lg font-semibold text-ink-900">Information we collect</h2>
        <p>
          We do not require an account to browse DealMint India. Depending on how the site is hosted
          and which analytics or contact tools are enabled, we may receive:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Basic server logs (IP address, browser type, pages visited, timestamps)</li>
          <li>Information you voluntarily send via the contact form or email</li>
          <li>Anonymous analytics data if a privacy-friendly analytics tool is added later</li>
        </ul>

        <h2 className="text-lg font-semibold text-ink-900">Affiliate and retailer cookies</h2>
        <p>
          When you click Amazon or Flipkart affiliate links, those retailers may set cookies or use
          similar technologies to attribute referrals according to their own privacy policies. We do
          not control retailer tracking. Please review Amazon and Flipkart privacy notices for
          details.
        </p>

        <h2 className="text-lg font-semibold text-ink-900">How we use information</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To operate and improve the website</li>
          <li>To respond to messages you send us</li>
          <li>To understand aggregate traffic patterns (if analytics are enabled)</li>
        </ul>

        <h2 className="text-lg font-semibold text-ink-900">Third-party services</h2>
        <p>
          Hosting providers, email tools, and affiliate networks may process data under their own
          terms. We only share information as needed to run the site or as required by law.
        </p>

        <h2 className="text-lg font-semibold text-ink-900">Your choices</h2>
        <p>
          You can control cookies through your browser settings. For questions about this policy,
          use our{" "}
          <Link href="/contact" className="font-semibold text-mint-700 hover:underline">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-lg font-semibold text-ink-900">Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. The Last updated date at
          the top will change when revisions are published.
        </p>
      </section>
    </article>
  );
}
