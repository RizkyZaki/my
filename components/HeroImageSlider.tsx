"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./aceternity/ImageSlider";
import Link from "next/link";
import { projects } from "@/data";

export function HeroImagesSlider() {
  const images = [
    "https://images.unsplash.com/photo-1665602878676-219e01293b51?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666891827542-3b03e82159b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const liveCount = projects.filter((project) => project.link).length;
  const techCount = new Set(
    projects.flatMap((project) =>
      project.iconLists.map((icon) => icon.replace(/^\//, ""))
    )
  ).size;

  return (
    <ImagesSlider className="h-[50rem] mb-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center px-4"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
          Portfolio
        </motion.span>

        <motion.div className="text-center mt-6 mb-6">
          <motion.p className="font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 py-2 select-none leading-[1.05]">
            Things I&apos;ve
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              actually shipped
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-neutral-300 text-base md:text-xl mt-5 font-light max-w-xl mx-auto"
          >
            Government portals, super apps, marketplaces and the odd CLI tool —
            each one built end to end.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="#projects">
            <button className="group relative px-8 py-4 backdrop-blur-sm border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-base mx-auto text-center rounded-full transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Browse all projects
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-6 sm:gap-10 mt-14"
        >
          {[
            { value: projects.length, label: "Projects" },
            { value: liveCount, label: "Live online" },
            { value: techCount, label: "Technologies" },
          ].map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && <div className="w-px h-10 bg-white/25"></div>}
              <div className="text-center">
                <dt className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                  {stat.value}
                </dt>
                <dd className="text-neutral-400 text-xs sm:text-sm mt-1">
                  {stat.label}
                </dd>
              </div>
            </React.Fragment>
          ))}
        </motion.dl>
      </motion.div>
    </ImagesSlider>
  );
}
