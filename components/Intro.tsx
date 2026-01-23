"use client";

import React, { useRef } from "react";
import { ShimmerButton } from "./aceternity/StyledButton";
import { ChevronRight } from "lucide-react";
import Divider from "./shared/Divider";
import { SparklesCore } from "./aceternity/Sparkles";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          markers: false,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      tl.from(introRef.current, {
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
    { scope: introRef }
  );

  return (
    <section
      ref={introRef}
      className="pt-10 mb-14 h-auto relative w-screen mx-auto"
    >
      <div className="!w-screen absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={1.6}
          particleDensity={20}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      {/* Enhanced Heading with Gradient */}
      <div className="relative text-center mb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <h2 className="relative heading pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400">
          Who Am I ?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
          A passionate developer crafting digital experiences
        </p>
      </div>

      <div className="mt-20 max-w-7xl mx-auto sm:px-10 xs:px-5 px-2 gbody">
        {/* Enhanced Content Card */}
        <div className="relative group">
          {/* Decorative corner elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl group-hover:from-cyan-500/30 transition-all duration-500"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-xl group-hover:from-blue-500/30 transition-all duration-500"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/80 via-blue-50/50 to-white/80 dark:from-gray-900/80 dark:via-blue-950/30 dark:to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50 p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative space-y-6">
              <div className="max-sm:ml-3 font-bold text-3xl lg:text-5xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                Hello! I am Zach,
              </div>
              
              <div className="text-xl lg:text-2xl my-5 max-sm:ml-3">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  Hello! im Rizky Zaki, aka Zach. My journey into web development
                  began in high school in 2021, marked by victories in provincial and
                  district-level competitions. This success propelled me into the
                  broader world of programming, where I started taking on freelance
                  projects. Through hands-on experiences, Ive honed my skills and
                  developed a deep passion for crafting digital solutions. Im excited
                  about the continual growth and challenges in the dynamic field of
                  web development.
                  <br /> <br />
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                    Fast-forward to today, I specialize in developing high-quality
                    solutions that delight our clients and exceed their expectations at
                    PST.
                  </span>
                  <br /> <br />
                  Im currently pursuing a bachelors degree in Information Systems at
                  one of the top universities in Indonesia
                  <br />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    The campus is called Telkom University,
                  </span>
                </p>
              </div>
              
              <Link href="/about" className="inline-block">
                <ShimmerButton
                  title="Read More.."
                  position="right"
                  icon={<ChevronRight className="ml-3" />}
                  otherClasses="max-sm:w-full mt-5 mb-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Intro;
