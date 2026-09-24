import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shmuelleider.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/projects", "/blog"].map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
  }));
}
