import Divider from "@/components/shared/Divider";
import SectionHeading from "@/components/shared/SectionHeading";
import { getAllBlogsWithStats } from "@/lib/actions/blog.action";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Zach",
  description:
    "Read the blogs that are written by me. Interweaved with informations and my practical knowledge, these blogs will definitely speak something new to you.",
  openGraph: {
    title: "Blogs | Zach",
    description:
      "Read the blogs that are written by me. Interweaved with informations and my practical knowledge, these blogs will definitely speak something new to you.",
    images: [
      {
        url: "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png",
      },
    ],
  },
};

const Meta = ({ date, readTime }: { date?: string; readTime?: number | null }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs muted-copy">
    {date && (
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays size={14} />
        {date}
      </span>
    )}
    {readTime ? (
      <span className="inline-flex items-center gap-1.5">
        <Clock size={14} />
        {readTime} min read
      </span>
    ) : null}
  </div>
);

const Blogs = async () => {
  const allBlogs = await getAllBlogsWithStats();
  const [featured, ...rest] = allBlogs;

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-32 pb-20 scroll-pt-24">
        <SectionHeading
          align="left"
          eyebrow="Writing"
          title="Notes from the build log"
          subtitle="Thoughts, breakdowns and lessons picked up while shipping things — mostly in Indonesian, occasionally in English."
        />

        <div className="mt-6 text-sm muted-copy">
          {allBlogs.length} {allBlogs.length === 1 ? "article" : "articles"}
        </div>

        {allBlogs.length === 0 ? (
          <div className="mt-16 surface-card p-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No blogs yet
            </h3>
            <p className="muted-copy">Stay tuned for upcoming articles!</p>
          </div>
        ) : (
          <>
            {/* Featured — the most recent article */}
            <Link
              href={`/blogs/${featured.slug}`}
              className="group block mt-12 surface-card overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="relative min-h-[220px] lg:min-h-[380px] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  {featured.img && (
                    <Image
                      src={featured.img}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                  <span className="eyebrow">Latest</span>

                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    {featured.title}
                  </h2>

                  {featured.excerpt && (
                    <p className="muted-copy leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}

                  <Meta date={featured.date} readTime={featured.readTime} />

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all">
                    Read article
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* The rest */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((blog: any) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col surface-card overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    {blog.img && (
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-bold text-lg leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {blog.title}
                    </h3>

                    {blog.excerpt && (
                      <p className="text-sm muted-copy leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-2">
                      <Meta date={blog.date} readTime={blog.readTime} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <Divider />
      </div>
    </div>
  );
};

export default Blogs;
