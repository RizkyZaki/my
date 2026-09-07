import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionHeading from "@/components/shared/SectionHeading";
import { Linkedin, Mail, MapPin, GraduationCap, Trophy } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
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

/** Lucide and react-icons components have different prop types; both take size/className. */
type IconComponent = React.ComponentType<any>;

const contactLinks: {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
}[] = [
  {
    label: "Email",
    value: "rizkyzaki682@gmail.com",
    href: "#contact",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sirzch",
    href: "https://www.linkedin.com/in/rizkyzaki/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/RizkyZaki",
    href: "https://github.com/RizkyZaki",
    icon: FaGithub,
  },
];

const experiences = [
  {
    role: "IT Support & Helpdesk – Telkom One Stop Service (TOSS)",
    company: "Telkom University",
    period: "Sept 2025 - Present",
    current: true,
    body: "Responsible for providing technical support and application assistance for Telkom One Stop Service (TOSS), an internal digital correspondence platform. Handled user support, issue troubleshooting, and system monitoring to ensure smooth application operations, while coordinating with related teams to resolve technical and functional issues efficiently.",
  },
  {
    role: "Fullstack Intern",
    company: "PT Amanah Karya Indonesia",
    period: "Aug - Dec 2025",
    body: "Developed and implemented the Widget Amanah feature, covering both frontend and backend functionality. Responsible for integrating the widget into the existing system, managing API connections, and ensuring data accuracy and system security. Collaborated with the development team to align the feature with business requirements.",
  },
  {
    role: "Head Of Software Engineer",
    company: "PT Efort Digital Multisolution",
    period: "Jun 2025 - May 2026",
    body: "Lead and manage the software engineering team in designing, developing, and maintaining scalable web and application systems. Responsible for system architecture planning, code quality standards, and development workflows. Coordinate with product, UI/UX, and stakeholder teams to ensure technology solutions align with business needs.",
  },
  {
    role: "Lead Software Engineer",
    company: "80&Co (Erines)",
    period: "Apr - Nov 2025",
    body: "Lead and manage the development team, ensuring timely and quality delivery of software projects. Architect and design scalable, secure, and maintainable software systems. Collaborate with product managers, designers, and other stakeholders to define technical requirements and priorities. Set best practices for coding standards, testing, CI/CD, and agile development.",
  },
  {
    role: "AI Backend Developer",
    company: "80&Co (OCT-Path)",
    period: "Sept 2024 - Feb 2025",
    body: "Develop and maintain responsive web applications using modern front-end and back-end technologies. Build and maintain RESTful APIs and server-side logic. Build Platform for Remote Worker Next-generation human resources management system Integrated with Blockchain.",
  },
  {
    role: "Software Engineer",
    company: "PT. Pratama Teknologi Solusi",
    period: "May 2023 - May 2026",
    body: "Design, develop, and maintain scalable web and mobile applications. Write clean, efficient, and well-documented code. Collaborate with UI/UX designers, product managers, and other developers to deliver solutions. Troubleshoot, debug, and optimize code for performance. Participate in code reviews and provide constructive feedback.",
  },
];

const education = [
  {
    degree: "Bachelor of System Information",
    school: "Telkom University, Bandung",
    period: "2023 - Present",
    metric: "3.51",
    metricLabel: "GPA (out of 4.00)",
  },
  {
    degree: "Senior High School (Class XII)",
    school: "SMK BINA KERJA",
    period: "Graduated 2023",
    metric: "89.6%",
    metricLabel: "Final score",
  },
];

const achievements = [
  {
    rank: "1st Place",
    title: "LKS District Web Technologies",
    body: "Winner of Web Technology Competition at District Level",
  },
  {
    rank: "5th Place",
    title: "LKS Province Web Technologies",
    body: "Top 5 Finalist in Provincial Web Technology Competition",
  },
  {
    rank: "Best Product",
    title: "CCI the hack",
    body: "Awarded Best Product in Hackathon Competition",
  },
  {
    rank: "1st Place",
    title: "Innovation IT Industries - Coderex",
    body: "Champion of IT Innovation Competition",
  },
  {
    rank: "Finalist",
    title: "Cyvero 2024 Telkom University",
    body: "Selected as Finalist in Cyvero Competition",
  },
];

const skillGroups = [
  {
    group: "Programming Languages",
    items: [
      "TypeScript",
      "Python",
      "Java",
      "JavaScript",
      "PHP",
      "Kotlin",
      "C++",
      "C",
    ],
  },
  {
    group: "Frameworks & Technologies",
    items: [
      "Next.js",
      "Laravel",
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    group: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "RESTful APIs",
      "Scalable Systems",
      "CI/CD",
      "Blockchain",
    ],
  },
  {
    group: "Development Tools",
    items: ["Visual Studio Code", "Git & GitHub", "Docker", "Postman"],
  },
  {
    group: "Soft Skills",
    items: [
      "Fast Learner",
      "Team Collaboration",
      "Problem Solving",
      "Consistent",
      "Punctual",
      "Code Review",
    ],
  },
];

const Page = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pt-32 pb-20 scroll-pt-24">
        {/* Profile header */}
        <header className="flex flex-col md:flex-row md:items-end gap-8">
          <Avatar className="rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl h-28 w-28 sm:h-40 sm:w-40 shrink-0">
            <AvatarImage src="/images/project/myfoto.jpeg" alt="Zach" />
            <AvatarFallback className="rounded-3xl uppercase tracking-widest text-lg font-light">
              Zach
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <span className="eyebrow">About me</span>
            <h1 className="mt-3 secondaryHeading">Rizky Zaki Zulkarnaen</h1>
            <p className="mt-2 text-lg font-medium muted-copy">
              Student of Information System · Software Engineer
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm muted-copy">
              <MapPin size={16} className="text-indigo-500" />
              Bandung, Indonesia
            </p>
          </div>
        </header>

        {/* Contact */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {contactLinks.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              className="group surface-card flex items-center gap-3 px-5 py-4 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
            >
              <contact.icon
                size={18}
                className="text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0"
              />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-widest muted-copy">
                  {contact.label}
                </span>
                <span className="block truncate text-sm font-medium text-gray-900 dark:text-white">
                  {contact.value}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Intro */}
        <section className="mt-16 surface-card p-8 lg:p-12">
          <span className="eyebrow">Hello there</span>
          <div className="mt-6 space-y-4 text-lg leading-relaxed muted-copy">
            <p>
              I am a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Software Engineer
              </span>
              , currently pursuing a Bachelor&apos;s degree in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                System Information
              </span>{" "}
              at Telkom University. I&apos;m in my second year with a strong
              passion for software development and engineering.
            </p>
            <p>
              Based in Bandung, Indonesia, I specialize in developing and
              engineering scalable solutions. My goal is to become a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Senior Software Development Engineer
              </span>
              , and I have a deep interest in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Artificial Intelligence (AI)
              </span>{" "}
              and modern web technologies.
            </p>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Experience"
            title="Where I've been building"
          />

          <ol className="mt-10 relative border-l border-gray-200 dark:border-gray-800 ml-3">
            {experiences.map((job) => (
              <li key={`${job.role}-${job.company}`} className="relative pl-8 pb-10 last:pb-0">
                <span
                  className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-black ${
                    job.current ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                ></span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono muted-copy">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold px-2.5 py-0.5 border border-emerald-200 dark:border-emerald-900">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {job.company}
                </p>
                <p className="mt-3 leading-relaxed muted-copy">{job.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Education"
            title="Academic qualifications"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.degree} className="surface-card p-8">
                <GraduationCap size={22} className="text-indigo-500" />
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 muted-copy">{item.school}</p>
                <p className="mt-1 text-xs font-mono muted-copy">
                  {item.period}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-800 flex items-baseline gap-2">
                  <span className="text-3xl font-bold accent-text">
                    {item.metric}
                  </span>
                  <span className="text-sm muted-copy">{item.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Achievements"
            title="Competitions & awards"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="group surface-card p-6 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Trophy size={16} className="text-amber-500 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-widest muted-copy">
                    {item.rank}
                  </span>
                </div>
                <h3 className="mt-3 font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm muted-copy">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Skills"
            title="What I work with"
          />

          <div className="mt-10 surface-card divide-y divide-gray-200 dark:divide-gray-800">
            {skillGroups.map((group) => (
              <div
                key={group.group}
                className="p-8 grid md:grid-cols-4 gap-4 items-start"
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white md:col-span-1">
                  {group.group}
                </h3>
                <div className="md:col-span-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Off the clock"
            title="Interests & hobbies"
          />

          <div className="mt-10 surface-card p-8 lg:p-12 space-y-4 text-lg leading-relaxed muted-copy">
            <p>
              I&apos;m passionate about learning new technologies and working
              with them to build innovative solutions. I love programming and
              solving complex problems by implementing Data Structures and
              Algorithms.
            </p>
            <p>
              Believe it or not, my hobby is actually programming! As I aspire to
              become a Software Development Engineer, I&apos;m also enthusiastic
              about Machine Learning and AI technologies.
            </p>
            <p>
              I&apos;m here to solve real-world problems with my skills and
              dedication. When I&apos;m not coding, I enjoy listening to music.
            </p>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="font-medium text-gray-900 dark:text-white">
                Feel free to reach out via the contact section below or through
                my social media handles.
              </p>
              <p className="mt-2 italic">Thanks for visiting!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
