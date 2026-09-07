import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import {
  allProjects,
  getProjectBySlug,
  getRelatedProjects,
  iconSrc,
  techName,
} from "@/lib/projects";

const BASE_URL = "https://zxch.my.id";

/** The project list is fixed at build time — anything else is a real 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project not found | Zach" };
  }

  const title = `${project.title} | Zach`;

  return {
    title,
    description: project.des,
    alternates: { canonical: `${BASE_URL}/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.des,
      type: "article",
      url: `${BASE_URL}/projects/${project.slug}`,
      images: [{ url: project.img }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.des,
      images: [project.img],
    },
  };
}

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.des,
    image: `${BASE_URL}${project.img}`,
    url: `${BASE_URL}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Rizky Zaki Zulkarnaen",
      url: BASE_URL,
    },
    ...(project.link ? { sameAs: project.link } : {}),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium muted-copy hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              Project {String(project.id).padStart(2, "0")}
            </span>
            {project.link ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 text-[11px] font-semibold muted-copy">
                <Lock size={11} />
                No public link yet
              </span>
            )}
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed muted-copy">
            {project.des}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-7 py-3.5 text-sm font-semibold text-white dark:text-gray-900 hover:gap-3 hover:shadow-lg transition-all duration-300"
            >
              Visit {hostOf(project.link)}
              <ArrowUpRight size={16} />
            </a>
          )}
        </header>

        {/* Screenshot — contained so nothing gets cropped away */}
        <figure className="mt-14 surface-card overflow-hidden">
          <div className="relative aspect-[16/9] bg-gray-50 dark:bg-gray-900">
            <Image
              src={project.img}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
              priority
            />
          </div>
        </figure>

        {/* Stack */}
        <section className="mt-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="secondaryHeading !text-2xl md:!text-3xl">
              Built with
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.iconLists.map((icon, index) => (
                <span
                  key={`${icon}-${index}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="relative w-4 h-4 shrink-0">
                    <Image
                      src={iconSrc(icon)}
                      alt=""
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </span>
                  {techName(icon)}
                </span>
              ))}
            </div>
          </div>

          <dl className="surface-card divide-y divide-gray-200 dark:divide-gray-800 h-fit">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm muted-copy">Status</dt>
              <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                {project.link ? "Live" : "Unlisted"}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm muted-copy">Technologies</dt>
              <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                {project.iconLists.length}
              </dd>
            </div>
            {project.link && (
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-sm muted-copy">Live at</dt>
                <dd className="text-sm font-semibold text-right truncate">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {hostOf(project.link)}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </section>

        {/* Keep browsing */}
        {related.length > 0 && (
          <section className="mt-24">
            <div className="flex items-end justify-between gap-4">
              <h2 className="secondaryHeading !text-2xl md:!text-3xl">
                More projects
              </h2>
              <Link
                href="/projects"
                className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline whitespace-nowrap"
              >
                View all
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.slug}`}
                  className="group flex flex-col surface-card overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={`${item.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm muted-copy line-clamp-2">
                      {item.des}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
