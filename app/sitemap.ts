import { getAllBlogsMetadata } from "@/lib/actions/blog.action";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const AllBlogs = await getAllBlogsMetadata();
  const blogEntries: MetadataRoute.Sitemap = AllBlogs.map(({ slug }: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...blogEntries,
  ];
}
