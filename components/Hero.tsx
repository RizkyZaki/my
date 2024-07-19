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
          <div className="relative max-md:mt-14" ref={imgRef}>
            <h1 className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] text-[6rem] xs:text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] font-semibold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent select-none">
              Im Zach
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

          <h2 className="uppercase tracking-widest max-sm:text-xs text-lg text-center text-black-100 dark:text-blue-100 max-md:mt-8">
            Hola My name Rizky Zaki Welcome To My Portfolio.
          </h2>

          <Link
            href="https://zach-resume.vercel.app/"
            className="max-md:mt-10 max-sm:w-full max-xs:px-5"
            target="_blank"
          >
            <MagicButton
              title="Resume"
              position="right"
              icon={<FaLocationArrow />}
            />
          </Link>
          <ShareButton className="sm:hidden mt-10" />
        </div>
        <Divider className="mt-10" />
      </div>
    </section>
  );
};

export default Hero;
