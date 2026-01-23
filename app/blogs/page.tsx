import { BackgroundGradientAnimation } from "@/components/aceternity/BgGradient";
import { LinkPreview } from "@/components/aceternity/LinkPreview";
import Divider from "@/components/shared/Divider";
import { getAllBlogsMetadata } from "@/lib/actions/blog.action";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
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

const Blogs = async () => {
  const AllBlogs = await getAllBlogsMetadata();

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-3 pt-28 pb-20 scroll-pt-24">
        {/* Hero Section */}
        <div className="relative mb-16">
          <BackgroundGradientAnimation
            containerClassName="h-48 sm:h-56 rounded-3xl"
            size="24px"
          >
            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none">
              <p className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/30 mb-4">
                Blog
              </p>
              <p className="text-base md:text-xl text-white/70 font-normal max-w-2xl text-center">
                Thoughts, stories, and insights from my journey
              </p>
            </div>
          </BackgroundGradientAnimation>
        </div>

        {/* Blog Stats */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {AllBlogs.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Articles</p>
          </div>
          <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              ∞
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ideas</p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8">
          {AllBlogs.map((blog: any, i: number) => (
            <article 
              key={i}
              className="group relative bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900 rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-6 p-8 lg:p-10">
                {/* Number Badge */}
                <div className="flex-shrink-0 flex items-start lg:items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-4xl lg:text-6xl w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center shadow-xl">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 cursor-pointer">
                      {blog.title}
                    </h2>
                  </Link>

                  {/* Gradient Underline */}
                  <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-32 transition-all duration-300"></div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-indigo-100 dark:bg-indigo-950/50 px-4 py-2 rounded-full">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                        {blog.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-950/50 px-4 py-2 rounded-full">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-semibold text-purple-700 dark:text-purple-300">
                        {Math.floor(Math.random() * 10 + 5)} min read
                      </span>
                    </div>
                  </div>

                  {/* Preview (if available) */}
                  {blog.description && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 flex items-center lg:items-end">
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="group/link relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative z-10">Read More</span>
                    <ExternalLink className="relative z-10 w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image Preview on Hover */}
              {blog.img && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                  <div 
                    className="w-full h-full bg-cover bg-center blur-sm"
                    style={{ backgroundImage: `url(${blog.img})` }}
                  ></div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Empty State */}
        {AllBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No blogs yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay tuned for upcoming articles!
            </p>
          </div>
        )}

        <Divider />
      </div>
    </div>
  );
};

export default Blogs;
