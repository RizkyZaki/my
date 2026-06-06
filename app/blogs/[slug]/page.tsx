import React from 'react';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogContent, getBlogMetadata } from "@/lib/actions/blog.action";
import BackToTop from "./BackToTop";

const BASE_URL = "https://www.zach.my";
const DEFAULT_OG = "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await getBlogMetadata(params.slug);
  const title = meta?.title ? `${meta.title} | Zach Blog` : "Blog | Zach";
  const description =
    meta?.description ||
    "Artikel dan tulisan dari Zach — Rizky Zaki Zulkarnaen, software engineer Indonesia.";
  const image = meta?.img || DEFAULT_OG;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/blogs/${params.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      authors: ["Rizky Zaki Zulkarnaen"],
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-4xl mb-6 mt-8 font-bold text-gray-900 dark:text-white">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl mb-5 mt-8 pb-3 border-b border-indigo-300/50 dark:border-indigo-500/30 font-bold text-gray-900 dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-2xl mb-4 mt-6 font-bold text-gray-900 dark:text-white">{children}</h3>
  ),
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const [blog, metadata] = await Promise.all([
    getBlogContent(params.slug),
    getBlogMetadata(params.slug),
  ]);

  const readTime = estimateReadTime(blog);

  const jsonLd = metadata
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: metadata.title,
        image: metadata.img,
        author: {
          "@type": "Person",
          name: "Rizky Zaki Zulkarnaen",
          url: BASE_URL,
        },
        publisher: {
          "@type": "Person",
          name: "Rizky Zaki Zulkarnaen",
          url: BASE_URL,
        },
        datePublished: metadata.date,
        url: `${BASE_URL}/blogs/${params.slug}`,
      }
    : null;

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-28 pb-20">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <header className="mb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 mb-8 group transition-colors"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Blogs</span>
          </Link>

          {metadata?.title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight">
              {metadata.title}
            </h1>
          )}

          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            {metadata?.date && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/10 backdrop-blur-sm border border-indigo-200 dark:border-indigo-500/20 px-5 py-2.5 rounded-full">
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                  {metadata.date}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 px-5 py-2.5 rounded-full">
              <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-purple-700 dark:text-purple-300">
                {readTime} min read
              </span>
            </div>
          </div>
        </header>

        <article className="relative">
          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
            className="blogContent prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold
              prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline prose-a:font-semibold
              hover:prose-a:text-indigo-700 dark:hover:prose-a:text-indigo-300 hover:prose-a:underline
              prose-a:transition-all prose-a:decoration-2 prose-a:underline-offset-4
              prose-strong:text-purple-700 dark:prose-strong:text-purple-300 prose-strong:font-bold
              prose-em:text-pink-700 dark:prose-em:text-pink-300 prose-em:italic
              prose-code:text-indigo-700 dark:prose-code:text-indigo-300
              prose-code:bg-indigo-100/80 dark:prose-code:bg-indigo-950/50
              prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
              prose-code:border prose-code:border-indigo-200/50 dark:prose-code:border-indigo-800/50
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-950
              prose-pre:border-2 prose-pre:border-gray-300 dark:prose-pre:border-gray-800
              prose-pre:rounded-2xl prose-pre:shadow-xl prose-pre:p-6
              prose-blockquote:border-l-4 prose-blockquote:border-indigo-500
              prose-blockquote:bg-indigo-50/50 dark:prose-blockquote:bg-indigo-950/30
              prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
              prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200
              prose-blockquote:shadow-lg
              prose-ul:space-y-3 prose-ul:my-6
              prose-ol:space-y-3 prose-ol:my-6
              prose-li:text-gray-800 dark:prose-li:text-gray-200 prose-li:leading-relaxed
              prose-img:rounded-2xl prose-img:shadow-2xl
              prose-img:border-2 prose-img:border-gray-300 dark:prose-img:border-gray-800
              prose-img:my-8
              prose-hr:border-gray-300 dark:prose-hr:border-gray-800 prose-hr:my-12
              prose-table:border-2 prose-table:border-gray-300 dark:prose-table:border-gray-800
              prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-xl
              prose-th:bg-gradient-to-r prose-th:from-indigo-100 prose-th:to-purple-100
              dark:prose-th:from-indigo-950/50 dark:prose-th:to-purple-950/50
              prose-th:text-indigo-700 dark:prose-th:text-indigo-300 prose-th:font-bold prose-th:p-4
              prose-td:border-gray-300 dark:prose-td:border-gray-800 prose-td:p-4
              prose-td:text-gray-800 dark:prose-td:text-gray-200"
          >
            {blog}
          </Markdown>
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Share this article:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <BackToTop />
          </div>
        </footer>
      </div>
    </div>
  );
}
