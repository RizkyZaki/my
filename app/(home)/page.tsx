import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="fixed top-[50%] -left-[95px] max-sm:hidden z-50 -rotate-90 bg-blue-400 dark:text-black p-2">
        rizkyzaki682@gmail.com
      </div>

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
