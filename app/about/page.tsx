import { BackgroundGradientAnimation } from "@/components/aceternity/BgGradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { socialMedia } from "@/data";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Me | Zach",
  description:
    "Read more about Zach, a Computer Science undergraduate with a passion for programming, new technologies, and aspiring to become a Software Development Engineer.",
  openGraph: {
    title: "About Me | Zach",
    description:
      "Read more about Zach, a Computer Science undergraduate with a passion for programming, new technologies, and aspiring to become a Software Development Engineer.",
    images: [
      {
        url: "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png",
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-3 pt-28 pb-10 scroll-pt-24">
        <BackgroundGradientAnimation
          containerClassName="h-28 sm:h-40 rounded-xl"
          size="24px"
        >
          <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              About Me
            </p>
          </div>
        </BackgroundGradientAnimation>

        <div className="ml-5 h-24 w-24 sm:h-48 sm:w-48 relative -top-12 sm:-top-20">
          <Avatar className="rounded-2xl border-[2px] border-zinc-400 absolute z-20 hover:scale-105 transition ease-in-out shadow-zinc-700 shadow-2xl h-24 w-24 sm:h-48 sm:w-48">
            <AvatarImage src="/images/project/myfoto.jpeg" />
            <AvatarFallback className="rounded-2xl uppercase tracking-widest text-lg font-light">
              Zach
            </AvatarFallback>
          </Avatar>

          <h1 className="-bottom-12 absolute sm:ml-5 secondaryHeading">Zach</h1>
        </div>

        <p className="ml-3 max-md:mt-5 md:ml-5 text-xl font-semibold">
          Student of Information System | Software Engineer
        </p>

        <p className="font-medium text-lg mt-3 flex items-center justify-start px-3 sm:px-5">
          <MapPin size={18} className="mr-2" />
          <span className="text-[#38394d] dark:text-[#b3b5ff]">
            Bandung, Indonesia
          </span>
        </p>

        <div className="max-w-7xl mx-auto flex flex-wrap flex-col md:flex-row gap-8 mt-10 max-md:hidden px-5">
          <div className="border rounded-lg relative">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              Email ID
            </Badge>
            <Link
              href="#contact"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <Mail size={18} className="mr-2" />
              rizkyzaki682@gmail.com
            </Link>
          </div>

          <div className="border rounded-lg relative">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              LinkedIn
            </Badge>
            <Link
              href="https://www.linkedin.com/in/rizkyzaki/"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <Linkedin size={18} className="mr-2" />
              linkedin.com/in/sirzch
            </Link>
          </div>

          <div className="border rounded-lg relative ">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              Github
            </Badge>
            <Link
              href="https://github.com/RizkyZaki"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <FaGithub size={18} className="mr-2" />
              github.com/RizkyZaki
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-5 mx-3 md:hidden">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.link}
              className="w-8 h-8 z-10 cursor-pointer flex justify-center items-center rounded-full border"
            >
              <profile.img />
            </Link>
          ))}
        </div>

        <div className="md:px-5 space-y-8">
          {/* Introduction Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg relative mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Hello there! 👋
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span>, currently pursuing a Bachelor&apos;s degree in <span className="font-semibold text-purple-600 dark:text-purple-400">System Information</span> at Telkom University. I&apos;m in my second year with a strong passion for software development and engineering.
                </p>
                <p>
                  Based in <span className="font-semibold">Bandung, Indonesia</span>, I specialize in developing and engineering scalable solutions. My goal is to become a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Senior Software Development Engineer</span>, and I have a deep interest in <span className="font-semibold text-pink-600 dark:text-pink-400">Artificial Intelligence (AI)</span> and modern web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Qualifications Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                🎓 Academic Qualifications
              </h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              {/* Bachelor Degree */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bachelor of System Information
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                    2023 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Telkom University, Bandung
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">GPA:</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3.51</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">(out of 4.00)</span>
                </div>
              </div>

              {/* High School */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Senior High School (Class XII)
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                    Graduated 2023
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  SMK BINA KERJA
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">Score:</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">89.6%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                💻 Professional Experience
              </h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              {/* Current Position */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      IT Support & Helpdesk – Telkom One Stop Service (TOSS)
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      Telkom University
                    </p>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-full">
                      Current
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                      Sept 2025 - Present
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Responsible for providing technical support and application assistance for Telkom One Stop Service (TOSS), an internal digital correspondence platform. Handled user support, issue troubleshooting, and system monitoring to ensure smooth application operations, while coordinating with related teams to resolve technical and functional issues efficiently.
                </p>
              </div>

              {/* Fullstack Intern */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-green-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Fullstack Intern
                    </h3>
                    <p className="text-base font-semibold text-green-600 dark:text-green-400">
                      PT Amanah Karya Indonesia
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium ml-4">
                    Aug - Dec 2025
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Developed and implemented the Widget Amanah feature, covering both frontend and backend functionality. Responsible for integrating the widget into the existing system, managing API connections, and ensuring data accuracy and system security. Collaborated with the development team to align the feature with business requirements.
                </p>
              </div>

              {/* Head of Software Engineer */}
              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Head Of Software Engineer
                    </h3>
                    <p className="text-base font-semibold text-purple-600 dark:text-purple-400">
                      PT Efort Digital Multisolution
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium ml-4">
                    Jun 2025 - May 2026
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Lead and manage the software engineering team in designing, developing, and maintaining scalable web and application systems. Responsible for system architecture planning, code quality standards, and development workflows. Coordinate with product, UI/UX, and stakeholder teams to ensure technology solutions align with business needs.
                </p>
              </div>

              {/* Lead Software Engineer */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Lead Software Engineer
                    </h3>
                    <p className="text-base font-semibold text-orange-600 dark:text-orange-400">
                      80&Co (Erines)
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium ml-4">
                    Apr - Nov 2025
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Lead and manage the development team, ensuring timely and quality delivery of software projects. Architect and design scalable, secure, and maintainable software systems. Collaborate with product managers, designers, and other stakeholders to define technical requirements and priorities. Set best practices for coding standards, testing, CI/CD, and agile development.
                </p>
              </div>

              {/* AI Backend Developer */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-pink-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      AI Backend Developer
                    </h3>
                    <p className="text-base font-semibold text-pink-600 dark:text-pink-400">
                      80&Co (OCT-Path)
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium ml-4">
                    Sept 2024 - Feb 2025
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Develop and maintain responsive web applications using modern front-end and back-end technologies. Build and maintain RESTful APIs and server-side logic. Build Platform for Remote Worker Next-generation human resources management system Integrated with Blockchain.
                </p>
              </div>

              {/* Software Engineer */}
              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Software Engineer
                    </h3>
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      PT. Pratama Teknologi Solusi
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium ml-4">
                    May 2023 - May 2026
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Design, develop, and maintain scalable web and mobile applications. Write clean, efficient, and well-documented code. Collaborate with UI/UX designers, product managers, and other developers to deliver solutions. Troubleshoot, debug, and optimize code for performance. Participate in code reviews and provide constructive feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                🌟 Achievements
              </h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-4">
              {/* 1st Place - LKS District */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        🥇 1st Place
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        LKS District Web Technologies
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Winner of Web Technology Competition at District Level
                    </p>
                  </div>
                </div>
              </div>

              {/* 5th Place - LKS Province */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        🏆 5th Place
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        LKS Province Web Technologies
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Top 5 Finalist in Provincial Web Technology Competition
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Product - CCI the hack */}
              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        ⭐ Best Product
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        CCI the hack
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Awarded Best Product in Hackathon Competition
                    </p>
                  </div>
                </div>
              </div>

              {/* 1st Place - Innovation IT Industries */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-green-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        🥇 1st Place
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Innovation IT Industries - Coderex
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Champion of IT Innovation Competition
                    </p>
                  </div>
                </div>
              </div>

              {/* Finalist - Cyvero 2024 */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5 border-l-4 border-pink-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        🎯 Finalist
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Cyvero 2024 Telkom University
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Selected as Finalist in Cyvero Competition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                💪 Technical Skills
              </h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              {/* Programming Languages */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">👨‍💻</span>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Python", "Java", "JavaScript", "PHP", "Kotlin", "C++", "C"].map((lang) => (
                    <span key={lang} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-semibold text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Technologies */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Frameworks & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Laravel", "React", "Node.js", "Express", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-lg font-semibold text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Concepts */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  Core Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Object Oriented Programming", "RESTful APIs", "Scalable Systems", "CI/CD", "Blockchain"].map((concept) => (
                    <span key={concept} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg font-semibold text-sm">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Tools */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Visual Studio Code", "Git & GitHub", "Docker", "Postman"].map((tool) => (
                    <span key={tool} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-lg font-semibold text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Fast Learner", "Team Collaboration", "Problem Solving", "Consistent", "Punctual", "Code Review"].map((skill) => (
                    <span key={skill} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-4 py-2 rounded-lg font-semibold text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies Section */}
          <div className="max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                🎾 Interests & Hobbies
              </h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  I&apos;m passionate about <span className="font-semibold text-pink-600 dark:text-pink-400">learning new technologies</span> and working with them to build innovative solutions. I love <span className="font-semibold text-purple-600 dark:text-purple-400">programming</span> and solving complex problems by implementing <span className="font-semibold">Data Structures and Algorithms</span>.
                </p>
                <p>
                  Believe it or not, my hobby is actually programming! As I aspire to become a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Software Development Engineer</span>, I&apos;m also enthusiastic about <span className="font-semibold text-pink-600 dark:text-pink-400">Machine Learning</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">AI technologies</span>.
                </p>
                <p>
                  I&apos;m here to solve real-world problems with my skills and dedication. When I&apos;m not coding, I enjoy listening to music. 😅
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-medium">
                    Feel free to reach out via the contact section below or through my social media handles!
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic mt-2">Thanks for visiting! 🙏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
