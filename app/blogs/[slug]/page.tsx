import React from 'react';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Metadata } from "next";
import {
  getBlogContent,
  getBlogMetadata,
  getAllBlogsMetadata,
  estimateReadTime,
} from "@/lib/actions/blog.action";
import BackToTop from "./BackToTop";

const BASE_URL = "https://zxch.my.id";
const DEFAULT_OG = "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png";

export async function generateStaticParams() {
  const metadata = await getAllBlogsMetadata();
  return metadata.map(({ slug }: { slug: string }) => ({ slug }));
}

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

  const pageUrl = `${BASE_URL}/blogs/${params.slug}`;
  const shareText = metadata?.title ?? "Article by Zach";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareTargets = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
    },
  ];

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

          <span className="eyebrow">Article</span>

          {metadata?.title && (
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {metadata.title}
            </h1>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm muted-copy border-t border-gray-200 dark:border-gray-800 pt-6">
            <span className="flex items-center gap-2 font-medium text-gray-900 dark:text-white">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500"></span>
              Rizky Zaki Zulkarnaen
            </span>

            {metadata?.date && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {metadata.date}
              </span>
            )}

            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} min read
            </span>
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
              prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
              prose-em:text-violet-700 dark:prose-em:text-violet-300 prose-em:italic
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
              prose-th:bg-gray-50 dark:prose-th:bg-gray-900
              prose-th:text-gray-900 dark:prose-th:text-white prose-th:font-bold prose-th:p-4
              prose-td:border-gray-300 dark:prose-td:border-gray-800 prose-td:p-4
              prose-td:text-gray-800 dark:prose-td:text-gray-200"
          >
            {blog}
          </Markdown>
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="muted-copy font-medium">Share this article:</span>
              <div className="flex gap-3">
                {shareTargets.map((target) => (
                  <a
                    key={target.name}
                    href={target.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${target.name}`}
                    title={`Share on ${target.name}`}
                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all hover:scale-110"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={target.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <BackToTop />
          </div>
        </footer>
      </div>
    </div>
  );
}
