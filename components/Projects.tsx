"use client";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Divider from "./shared/Divider";
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
        stagger: 1,
      });
    },
    { scope: projectsRef }
  );
  const displayedProjects = showAll ? projects : projects.slice(-4);
  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`max-w-7xl mx-auto sm:px-10 px-5 pt-10 pb-20 ${className}`}
    >
      {/* Header with gradient */}
      <div className="mb-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <h2 className="relative heading pb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {heading}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
          Explore my latest work and creative solutions
        </p>
      </div>

      <div className="flex flex-col gap-12 gbody">
        {displayedProjects.map(({ id, title, des, img, iconLists, link }, index) => (
          <div
            key={id}
            className={`group relative flex max-xl:flex-col items-stretch justify-between w-full overflow-hidden rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 ${
              id % 2 === 1 && "xl:flex-row-reverse"
            }`}
          >
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full"></div>

            {/* Content Section */}
            <div className="relative z-10 xl:w-1/2 max-xl:w-full flex flex-col items-start p-8 lg:p-12 space-y-6">
              {/* Project Info Header */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <span className="relative z-10">Project #{id}</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-all"></div>
                </span>
                {index < 3 && (
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-4 py-2 rounded-full border border-yellow-200 dark:border-yellow-800">
                    🔥 Popular
                  </span>
                )}
              </div>

              {/* Title with Gradient Underline */}
              <div className="space-y-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {title}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-32 transition-all duration-300"></div>
              </div>

              {/* Description with Better Typography */}
              <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed line-clamp-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {des}
              </p>

              {/* Tech Stack Section - Improved */}
              <div className="w-full space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    Technology Stack
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>
                
                <div className="flex items-center gap-3 flex-wrap">
                  {iconLists.map((icon, iconIndex) => (
                    <div
                      key={`${icon}-${iconIndex}`}
                      className="group/icon relative"
                    >
                      <div className="relative border-2 border-white dark:border-gray-900 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center hover:scale-110 hover:rotate-6 hover:z-10 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                        <Image src={icon} alt="tech-icon" className="p-2.5" fill />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>
                      </div>
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Tech {iconIndex + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button - Enhanced */}
              <div className="pt-4 w-full">
                {link ? (
                  <Link 
                    href={link}
                    target="_blank"
                    className="group/link relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Live Project
                    </span>
                    <FaLocationArrow className="relative z-10 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" size={16} />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-semibold px-8 py-4 rounded-2xl cursor-not-allowed">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Private Project
                  </div>
                )}
              </div>
            </div>

            {/* Elegant Divider */}
            <div className="relative xl:w-[2px] w-full xl:h-auto h-[2px] max-xl:my-8">
              <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-b max-xl:bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-b max-xl:bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
            </div>

            {/* Image Section - Enhanced */}
            <div className="relative z-10 xl:w-1/2 max-xl:w-full p-8 lg:p-12 flex items-center">
              <div className="relative w-full overflow-hidden rounded-2xl group-hover:scale-[1.03] transition-all duration-700">
                {/* Multiple Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10 rounded-2xl"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 skew-x-12"></div>
                
                {/* Main Image */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="relative group/badge">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md opacity-75 group-hover/badge:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-sm">
                      <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </div>
                  </div>
                </div>

                {/* View Count Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl z-30 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Live Project</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};

export default Projects;
