import { projects } from "@/data";

export type RawProject = (typeof projects)[number];
export type Project = RawProject & { slug: string };

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Titles are unique today, but a collision would silently make two projects
 * share a URL — so any repeat gets its id appended.
 */
const buildSlugs = (): Project[] => {
  const counts = new Map<string, number>();

  for (const project of projects) {
    const base = slugify(project.title);
    counts.set(base, (counts.get(base) ?? 0) + 1);
  }

  return projects.map((project) => {
    const base = slugify(project.title);
    return {
      ...project,
      slug: (counts.get(base) ?? 0) > 1 ? `${base}-${project.id}` : base,
    };
  });
};

/** Newest first — the data file is ordered oldest to newest. */
export const allProjects: Project[] = buildSlugs().slice().reverse();

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug) ?? null;

/** Neighbours in display order, for "keep browsing" links on the detail page. */
export const getRelatedProjects = (slug: string, limit = 3) => {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return [];

  return [...allProjects.slice(index + 1), ...allProjects.slice(0, index)].slice(
    0,
    limit
  );
};

const techNames: Record<string, string> = {
  adonisjs: "AdonisJS",
  alpine: "Alpine.js",
  astro: "Astro",
  dart: "Dart",
  figma: "Figma",
  flutter: "Flutter",
  git: "Git",
  java: "Java",
  javascript: "JavaScript",
  kotlin: "Kotlin",
  laravel: "Laravel",
  livewire: "Livewire",
  mongodb: "MongoDB",
  mysql: "MySQL",
  nextjs: "Next.js",
  nodejs: "Node.js",
  php: "PHP",
  postgre: "PostgreSQL",
  prisma: "Prisma",
  python: "Python",
  "shadcn-ui": "shadcn/ui",
  sql: "SQL",
  tailwind: "Tailwind CSS",
  tensorflow: "TensorFlow",
  three: "Three.js",
  typescript: "TypeScript",
  vue: "Vue.js",
};

/** Some entries in the data file omit the leading slash — next/image needs it. */
export const iconSrc = (icon: string) =>
  icon.startsWith("/") || icon.startsWith("http") ? icon : `/${icon}`;

export const techName = (icon: string) => {
  const key = iconSrc(icon).slice(1).replace(".svg", "");
  return techNames[key] ?? key;
};
