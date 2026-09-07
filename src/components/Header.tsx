"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/categories";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-mint-600 text-sm font-bold text-white">
            DM
          </span>
          <span>
            DealMint <span className="text-mint-700">India</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
          <Link href="/categories" className="hover:text-mint-700">
            Categories
          </Link>
          {categories.slice(0, 3).map((c) => (
            <Link key={c.slug} href={`/categories/${c.slug}`} className="hover:text-mint-700">
              {c.name}
            </Link>
          ))}
          <Link href="/about" className="hover:text-mint-700">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-mint-600 px-3.5 py-1.5 text-white hover:bg-mint-700"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-ink-200 p-2 text-ink-700 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-ink-700">
            <Link href="/categories" onClick={() => setOpen(false)}>
              All Categories
            </Link>
            {categories.map((c) => (
              <Link key={c.slug} href={`/categories/${c.slug}`} onClick={() => setOpen(false)}>
                {c.icon} {c.name}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)}>
              About & Disclosure
            </Link>
            <Link href="/privacy" onClick={() => setOpen(false)}>
              Privacy Policy
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
