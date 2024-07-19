"use server";
import { Octokit } from "octokit";
import { revalidatePath } from "next/cache";
import { Base64 } from "js-base64";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_KEY,
});

export async function getBlogContent(slug: string) {
  try {
    const res = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: "RizkyZaki",
        repo: "Blog-Collections",
        path: `blogs/${slug}.mdx`,
      }
    );

    if (Array.isArray(res.data)) {
      throw new Error("Expected a single file, but received an array.");
    }

    if (res.data.type !== "file" || !res.data.content) {
      throw new Error("Expected a file with content.");
    }

    const encoded = res.data.content;
    const decoded = Base64.decode(encoded);
    return decoded;
  } catch (error) {
    console.error("Error fetching blog content:", error);
    throw error;
  }
}

export async function getAllBlogsMetadata() {
  try {
    const res = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: "RizkyZaki",
        repo: "Blog-Collections",
        path: `meta.json`,
      }
    );

    if (Array.isArray(res.data)) {
      throw new Error("Expected a single file, but received an array.");
    }

    if (res.data.type !== "file" || !res.data.content) {
      throw new Error("Expected a file with content.");
    }

    const encoded = res.data.content;
    const decoded = Base64.decode(encoded);
    revalidatePath("/blogs");
    return JSON.parse(decoded);
  } catch (error) {
    console.error("Error fetching blogs metadata:", error);
    throw error;
  }
}
