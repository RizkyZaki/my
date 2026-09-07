"use client";

import React, { useRef } from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import SectionHeading from "./shared/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "laravel",
  "nextdotjs",
  "vuedotjs",
  "vuetify",
  "mysql",
  "python",
  "tensorflow",
  "react",
  "css3",
  "express",
  "prisma",
  "postgresql",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

const stack = [
  {
    group: "Languages",
    items: ["TypeScript", "PHP", "Dart", "Python", "Java", "Kotlin", "C++"],
  },
  {
    group: "Frameworks",
    items: ["Next.js", "Laravel", "Flutter", "Vue.js", "Astro", "Livewire"],
  },
  {
    group: "Data & infra",
    items: ["PostgreSQL", "MySQL", "Prisma", "Docker", "Git", "CI/CD"],
  },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          markers: false,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      tl.from(skillsRef.current, {
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
    { scope: skillsRef }
  );

  return (
    <section
      ref={skillsRef}
      className="max-w-7xl mx-auto sm:px-10 px-5 pt-10 max-md:mx-10 mb-14 skillRef"
    >
      <SectionHeading
        eyebrow="Toolbox"
        title="My tech stack"
        subtitle="The tools I reach for daily — and the ones I keep sharpening."
      />

      <div className="mt-14 gbody grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          {stack.map((section) => (
            <div key={section.group}>
              <span className="eyebrow">{section.group}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
