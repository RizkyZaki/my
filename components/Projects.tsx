"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Divider from "./shared/Divider";
import SectionHeading from "./shared/SectionHeading";
import { allProjects, iconSrc, techName } from "@/lib/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = ({
  className,
  heading,
  showAll,
}: {
  className?: string;
  heading?: string;
  showAll?: Boolean;
}) => {
  let projectsRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          markers: false,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      tl.from(projectsRef.current, {
        opacity: 0,
        duration: 1,
      });

      tl.from("h2", {
        y: 50,
        scale: 0,
        opacity: 0,
        duration: 0.5,
      });

      tl.from(".gbody", {
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
    },
    { scope: projectsRef }
  );

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`max-w-7xl mx-auto sm:px-10 px-5 pt-10 pb-20 ${className}`}
    >
      <SectionHeading
        className="mb-14"
        eyebrow="Selected work"
        title={heading}
        subtitle={
          showAll
            ? `${allProjects.length} projects shipped — client work, government systems, and side quests.`
            : "A few of the things I shipped most recently."
        }
      />

      <div className="gbody grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map(({ id, slug, title, des, img, iconLists, link }) => (
          <Link
            key={id}
            href={`/projects/${slug}`}
            className="group flex flex-col surface-card overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
              <Image
                src={img}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {link && (
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-gray-700 dark:text-gray-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Live
                </span>
              )}

              <span className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur text-gray-900 dark:text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-bold text-lg leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>

              <p className="text-sm leading-relaxed muted-copy line-clamp-2">
                {des}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-900 flex items-center justify-between gap-3">
                <div className="flex items-center">
                  {iconLists.slice(0, 4).map((icon, iconIndex) => (
                    <span
                      key={`${icon}-${iconIndex}`}
                      title={techName(icon)}
                      className="relative -ml-2 first:ml-0 grid place-items-center w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                    >
                      <span className="relative w-4 h-4">
                        <Image
                          src={iconSrc(icon)}
                          alt={techName(icon)}
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </span>
                    </span>
                  ))}
                  {iconLists.length > 4 && (
                    <span className="-ml-2 grid place-items-center w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-[10px] font-semibold muted-copy">
                      +{iconLists.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  View details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && (
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-7 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:gap-3 transition-all duration-300"
          >
            See all {allProjects.length} projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}

      <Divider />
    </section>
  );
};

export default Projects;
