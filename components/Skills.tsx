"use client";

import React, { useRef } from "react";
import IconCloud from "@/components/magicui/icon-cloud";
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
      <h2 className="heading">My Tech Stack</h2>

      <div className="my-10 gbody">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default Skills;
