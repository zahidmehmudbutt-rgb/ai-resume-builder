import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/login", "/signup", "/pricing"],
      disallow: ["/dashboard", "/builder", "/preview", "/settings", "/api", "/checkout"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
