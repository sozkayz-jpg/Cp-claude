import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://carplaygo.fr";

  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/produit", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/compatibilite", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.7, changeFrequency: "daily" as const },
    { route: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/installation", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const staticEntries = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-05-27"),
    changeFrequency,
    priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  let compatEntries: MetadataRoute.Sitemap = [];

  try {
    const posts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      select: { slug: true, updatedAt: true },
    });
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    /* ignore if prisma not available during build */
  }

  const brands = [
    "audi", "bmw", "mercedes", "volkswagen",
    "toyota", "ford", "peugeot", "renault",
  ];
  compatEntries = brands.map((slug) => ({
    url: `${baseUrl}/compatibilite/${slug}`,
    lastModified: new Date("2026-05-27"),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...compatEntries];
}
