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

      <h2 className="heading">Who Am I ?</h2>
      <div className="mt-20 max-w-7xl mx-auto sm:px-10 xs:px-5 px-2 gbody">
        <div className="max-sm:ml-3 font-semibold text-3xl lg:text-5xl">
          Hello! I am Zach,
        </div>
        <div className="text-2xl lg:text-4xl my-5 max-sm:ml-3">
          <p className="leading-snug max-sm:font-extralight text-[#2c2a36] dark:text-[#c3cffb]">
            Hello! im Rizky Zaki, aka Zach. My journey into web development
            began in high school in 2021, marked by victories in provincial and
            district-level competitions. This success propelled me into the
            broader world of programming, where I started taking on freelance
            projects. Through hands-on experiences, Ive honed my skills and
            developed a deep passion for crafting digital solutions. Im excited
            about the continual growth and challenges in the dynamic field of
            web development.
            <br /> <br />
            Fast-forward to today, I specialize in developing high-quality
            solutions that delight our clients and exceed their expectations at
            PST.
            <br /> <br />
            Im currently pursuing a bachelors degree in Information Systems at
            one of the top universities in Indonesia
            <br />
            The campus is called Telkom University,
          </p>
        </div>
        <Link href="/about">
          <ShimmerButton
            title="Read More.."
            position="right"
            icon={<ChevronRight className="ml-3" />}
            otherClasses="max-sm:w-full mt-5 mb-10"
          />
        </Link>
      </div>

      <Divider />
    </section>
  );
};

export default Intro;
