import type { MetadataRoute } from "next";
import { cases } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...cases.map((c) => ({ url: `${site.url}/work/${c.slug}`, lastModified: now, priority: 0.8 })),
    { url: `${site.url}/cv`, lastModified: now, priority: 0.6 },
  ];
}
