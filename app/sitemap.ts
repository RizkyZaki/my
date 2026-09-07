import { getAllBlogsMetadata } from "@/lib/actions/blog.action";
import { allProjects } from "@/lib/projects";
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://zxch.my.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const AllBlogs = await getAllBlogsMetadata();
  const blogEntries: MetadataRoute.Sitemap = AllBlogs.map(({ slug }: any) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = allProjects.map(({ slug }) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...projectEntries,
    ...blogEntries,
  ];
}
