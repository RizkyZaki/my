import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function getBlogContent(slug: string): Promise<string> {
  const filePath = path.join(CONTENT_DIR, "blogs", `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}

export async function getAllBlogsMetadata(): Promise<any[]> {
  const filePath = path.join(CONTENT_DIR, "meta.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function getBlogMetadata(slug: string): Promise<any> {
  const all = await getAllBlogsMetadata();
  return all.find((meta: any) => meta.slug === slug) ?? null;
}
