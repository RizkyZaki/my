"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./aceternity/ImageSlider";
import Link from "next/link";

export function HeroImagesSlider() {
  const images = [
    "https://images.unsplash.com/photo-1665602878676-219e01293b51?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666891827542-3b03e82159b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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
        {/* Main Title */}
        <motion.div className="text-center mb-6">
          <motion.p className="font-bold text-4xl md:text-7xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 py-4 select-none leading-tight">
            My Creative
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-neutral-300 text-lg md:text-xl mt-4 font-light"
          >
            Transforming ideas into elegant digital solutions
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="#projects">
            <button className="group relative px-8 py-4 backdrop-blur-sm border-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-400/40 text-white font-semibold text-lg mx-auto text-center rounded-full hover:border-indigo-400/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-indigo-400 to-transparent" />
            </button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-8 mt-12"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
            <p className="text-neutral-400 text-sm mt-1">Projects</p>
          </div>
          <div className="w-px h-12 bg-neutral-600"></div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">5+</p>
            <p className="text-neutral-400 text-sm mt-1">Technologies</p>
          </div>
          <div className="w-px h-12 bg-neutral-600"></div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
            <p className="text-neutral-400 text-sm mt-1">Passion</p>
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
