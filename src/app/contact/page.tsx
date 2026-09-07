import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DealMint India with product suggestions or questions about the site.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-sm font-semibold text-mint-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Contact</h1>
        <p className="mt-3 text-ink-600">
          Suggestions, corrections, or partnership questions — we read every message. Replace the
          placeholder email in the form component before going live.
        </p>
      </header>

      <ContactForm />

      <p className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-600">
        Prefer email directly? Update{" "}
        <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">CONTACT_EMAIL</code> in{" "}
        <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">src/components/ContactForm.tsx</code>
        .
      </p>
    </div>
  );
}
