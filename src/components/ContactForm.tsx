"use client";

import { FormEvent, useState } from "react";

/** Replace with your real inbox before launch */
const CONTACT_EMAIL = "hello@dealmint-india.example.com";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = encodeURIComponent(`DealMint India contact from ${name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm outline-none ring-mint-500 focus:ring-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm outline-none ring-mint-500 focus:ring-2"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm outline-none ring-mint-500 focus:ring-2"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-mint-600 px-4 py-3 text-sm font-semibold text-white hover:bg-mint-700 sm:w-auto"
      >
        Open email draft
      </button>
      {status === "ready" && (
        <p className="text-sm text-ink-600">
          Your email app should open with a pre-filled message. If it does not, write to{" "}
          <a className="font-semibold text-mint-700 underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
