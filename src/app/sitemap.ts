import type { MetadataRoute } from "next";

const base = "https://harsh-portfolio-seven-drab.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/data", "/software"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
