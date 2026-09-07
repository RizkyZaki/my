import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const WORDS_PER_MINUTE = 200;

/** Placeholder entries in meta.json that aren't real articles. */
const NON_ARTICLE_SLUGS = new Set(["footer"]);

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

export function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** First readable sentences of a post, with markdown/JSX noise stripped out. */
export function buildExcerpt(content: string, maxLength = 190): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+.*$/gm, " ")
    .replace(/[*_`>#|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}

/**
 * Article list with read time and excerpt derived from the actual MDX,
 * so the listing never has to invent those numbers.
 */
export async function getAllBlogsWithStats(): Promise<any[]> {
  const all = await getAllBlogsMetadata();

  return all
    .filter((meta: any) => !NON_ARTICLE_SLUGS.has(meta.slug))
    .map((meta: any) => {
      let raw = "";
      try {
        raw = fs.readFileSync(
          path.join(CONTENT_DIR, "blogs", `${meta.slug}.mdx`),
          "utf-8"
        );
      } catch {
        raw = "";
      }

      return {
        ...meta,
        readTime: raw ? estimateReadTime(raw) : null,
        excerpt: raw ? buildExcerpt(raw) : "",
      };
    });
}
