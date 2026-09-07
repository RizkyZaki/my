"use client";

import React, { useRef } from "react";
import { ShimmerButton } from "./aceternity/StyledButton";
import { ChevronRight } from "lucide-react";
import Divider from "./shared/Divider";
import { SparklesCore } from "./aceternity/Sparkles";
import SectionHeading from "./shared/SectionHeading";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    label: "Now",
    title: "Software engineering, end to end",
    body: "Architecture, delivery and code quality for web and mobile systems — mostly public-sector platforms serving real citizens.",
  },
  {
    label: "Studying",
    title: "Information Systems @ Telkom University",
    body: "Bandung, Indonesia. Balancing a degree with shipping production software for clients.",
  },
  {
    label: "Into",
    title: "AI, geospatial & developer tooling",
    body: "Anything that turns messy real-world data into something a person can actually act on.",
  },
];

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
          particleColor="#818CF8"
        />
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-10 xs:px-5 px-2">
        <SectionHeading
          eyebrow="Who am I"
          title={
            <>
              Hello, I&apos;m <span className="accent-text">Zach</span>.
            </>
          }
          subtitle="A developer who started in a high-school computer lab and never really stopped."
        />

        <div className="mt-16 gbody grid lg:grid-cols-5 gap-6">
          {/* Story */}
          <div className="lg:col-span-3 surface-card p-8 lg:p-10 shadow-sm">
            <div className="space-y-5 text-base lg:text-lg leading-relaxed muted-copy">
              <p>
                My journey into web development began in high school in 2021,
                marked by victories in provincial and district-level
                competitions. That success pushed me into the broader world of
                programming, where I started taking on freelance projects.
              </p>
              <p>
                Through hands-on work I&apos;ve sharpened my skills and built a
                real appetite for crafting digital solutions — the kind that get
                used, break, get fixed, and keep running.
              </p>
              <p className="text-gray-900 dark:text-white font-medium">
                Today I specialise in building high-quality solutions that
                delight clients and exceed their expectations at PST.
              </p>
            </div>

            <Link href="/about" className="inline-block">
              <ShimmerButton
                title="Read More.."
                position="right"
                icon={<ChevronRight className="ml-3" />}
                otherClasses="max-sm:w-full mt-8"
              />
            </Link>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group surface-card p-6 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors duration-300"
              >
                <span className="eyebrow">{item.label}</span>
                <h3 className="mt-3 font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed muted-copy">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Intro;
