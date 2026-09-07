"use client";
import React, { useRef } from "react";
import { Spotlight } from "./aceternity/Spotlight";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Divider from "./shared/Divider";
import { MagicButton } from "./aceternity/StyledButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ShareButton from "./ShareButton";
import { projects } from "@/data";

const Hero = () => {
  const imgRef = useRef(null);

  useGSAP(
    () => {
      gsap.to("img", {
        y: -20,
        rotate: 6,
        stagger: 2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: imgRef }
  );

  return (
    <section className="max-w-7xl mx-auto sm:px-10 px-5 max-md:mx-10 pt-36">
      <div>
        <Spotlight
          className="top-24 left-32 lg:top-28 lg:left-64 h-[100vh] lg:w-[50vw] w-[90vw]"
          fill="white"
        />
      </div>

      <div
        className="h-[90vh] sm:h-screen w-full
       absolute top-0 left-0 right-0 z-0"
      >
        <div className="relative h-full w-full bg-white dark:bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_30%,#000_70%,transparent_110%)] max-sm:opacity-50 dark:sm:opacity-100 sm:opacity-50" />
        </div>
      </div>

      <div className="flex flex-col justify-center relative mb-14 z-20">
        <div className="flex flex-col items-center justify-center">
          <div className="relative max-md:mt-10 mt-6" ref={imgRef}>
            <h1 className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] text-[6rem] xs:text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] leading-none font-semibold tracking-tighter bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-300 dark:via-violet-300 dark:to-indigo-200 bg-clip-text text-transparent select-none">
              Sir Zach
            </h1>
            <Image
              src="/images/purple-curve.png"
              alt="hero-designer"
              width={118}
              height={118}
              className="absolute left-40 top-8 -z-10 max-md:w-20 max-sm:w-14 max-sm:left-20 max-md:top-0"
            />
            <Image
              src="/images/rainbow-twist.png"
              alt="hero-designer"
              width={118}
              height={118}
              className="absolute right-16 bottom-4 -z-10 max-md:w-20 max-md:bottom-4 max-sm:-bottom-4"
            />
          </div>

          <h2 className="max-w-2xl text-center text-base sm:text-xl muted-copy max-md:mt-8 mt-4">
            I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Rizky Zaki Zulkarnaen</span> — a
            software engineer from Indonesia building government platforms,
            super apps, and everything in between.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 max-md:mt-10 mt-8 max-sm:w-full">
            <Link href="/resume/" className="max-sm:w-full">
              <MagicButton
                title="Resume"
                position="right"
                icon={<FaLocationArrow />}
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex h-12 w-full sm:w-60 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-7 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
            >
              See the work
            </Link>
          </div>

          {/* Quick facts */}
          <dl className="grid grid-cols-3 gap-px mt-12 w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800">
            {[
              { value: `${projects.length}`, label: "Projects shipped" },
              { value: "2021", label: "Coding since" },
              { value: "Bandung", label: "Based in" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-black px-3 py-4 text-center"
              >
                <dt className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </dt>
                <dd className="text-[11px] sm:text-xs muted-copy mt-1">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <ShareButton className="sm:hidden mt-10" />
        </div>
        <Divider className="mt-10" />
      </div>
    </section>
  );
};

export default Hero;
