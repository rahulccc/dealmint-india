import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dealmint-india.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DealMint India — Clearer Amazon & Flipkart picks",
    template: "%s | DealMint India",
  },
  description:
    "DealMint India helps shoppers discover practical product picks with short why-buy notes. Affiliate links to Amazon.in and Flipkart may earn us a commission.",
  keywords: [
    "DealMint India",
    "Amazon Associates India",
    "Flipkart affiliate",
    "deals India",
    "product recommendations",
  ],
  authors: [{ name: "DealMint India" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "DealMint India",
    title: "DealMint India — Clearer Amazon & Flipkart picks",
    description:
      "Practical product picks for Indian shoppers with transparent affiliate disclosure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DealMint India",
    description: "Practical Amazon & Flipkart picks for Indian shoppers.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
