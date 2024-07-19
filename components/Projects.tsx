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
      className={`max-w-7xl mx-auto sm:px-10 px-5 pt-10 ${className}`}
    >
      <h2 className="heading pb-5 mb-20">{heading}</h2>

      <div className="flex flex-col gap-10 gbody">
        {displayedProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className={`flex max-xl:flex-col-reverse items-center max-xl:border max-xl:rounded-xl max-xl:shadow-md p-1 justify-between w-full mb-10 h-fit ${
              id % 2 === 1 && "flex-row-reverse"
            }`}
          >
            <div className="xl:w-1/2 max-xl:w-[90%] flex flex-col items-start mx-5">
              <h3 className="secondaryHeading pb-8">{title}</h3>
              <p className="text-justify pb-8 font-extralight text-lg">{des}</p>

              <div className="flex flex-row w-full items-center justify-between max-xl:mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-black/[0.2] dark:border-white/[0.2] rounded-full bg-gradient-to-r from-slate-900 dark:to-slate-800 to-slate-600 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image src={icon} alt="icon" className="p-2" fill />
                    </div>
                  ))}
                </div>
                <Link href={link} className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Live project
                  </p>
                  <FaLocationArrow
                    className="ms-3 animate-pulse"
                    color="#CBACF9"
                  />
                </Link>
              </div>
            </div>

            <div className="w-[1px] h-52 border border-gray-400 dark:border-gray-600 max-xl:hidden" />

            <div className="md:w-[60%] mx-5 max-xl:mt-3">
              <Image
                src={img}
                alt="Project1"
                height={700}
                width={700}
                className={`rounded-lg shadow-2xl shadow-black-200 dark:shadow-slate-800 transition ease-in-out ${
                  id % 2 === 1
                    ? "-rotate-3 hover:-rotate-2"
                    : "rotate-3 hover:rotate-2"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};

export default Projects;
