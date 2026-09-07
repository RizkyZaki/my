import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Zach | Personal Website",
  description:
    "Personal website of Rizky Zaki Zulkarnaen (Zach) — software engineer, blogger, and developer from Indonesia. Explore projects, articles, and more.",
  alternates: { canonical: "https://zxch.my.id" },
};
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden">
      <a
        href="mailto:rizkyzaki682@gmail.com"
        className="fixed top-[50%] -left-[95px] max-sm:hidden z-50 -rotate-90 rounded-b-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium tracking-wide px-4 py-2 transition-colors"
      >
        rizkyzaki682@gmail.com
      </a>

      <div>
        <Hero />
        <Intro />
        <Skills />
        <Quote />
        <Projects
          className="max-md:mx-10"
          heading="Recent Project Works"
          showAll={false}
        />
      </div>
    </main>
  );
}
