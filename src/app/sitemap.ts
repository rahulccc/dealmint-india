import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dealmint-india.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/categories", "/about", "/privacy", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${siteUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
