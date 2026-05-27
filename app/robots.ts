import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://carplaygo.fr";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/compte",
          "/auth",
          "/checkout",
          "/api",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: "/admin",
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: "/admin",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
