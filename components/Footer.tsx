import React from "react";
import { navItems, socialMedia } from "@/data";
import { ContactDrawerDialog } from "./ContactDialog";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="max-w-full mx-auto pt-24 pb-10 relative bg-white dark:bg-black"
    >
      <div
        className="h-[90vh] sm:h-screen w-full
       absolute bottom-0 left-0 right-0 z-0"
      >
        <div className="w-full dark:bg-black bg-white">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#afafaf2e_1px,transparent_1px),linear-gradient(to_bottom,#afafaf2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_95%,#000_70%,transparent_110%)] opacity-50" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-10 px-5 flex flex-col items-center text-center">
        <span className="eyebrow">Get in touch</span>

        <h2 className="mt-4 heading">
          Let&apos;s build something
          <br className="max-sm:hidden" /> worth shipping.
        </h2>

        <p className="mt-5 max-w-xl muted-copy text-base sm:text-lg">
          Got a product, a platform, or a half-formed idea? Reach out and
          let&apos;s talk about how I can help you build it.
        </p>

        <div className="mt-10 max-sm:w-full">
          <ContactDrawerDialog />
        </div>
      </div>

      <div className="relative mt-20 max-w-7xl mx-auto sm:px-10 px-5">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 gbody">
          <p className="text-sm muted-copy order-3 md:order-1">
            &copy; {year} Rizky Zaki Zulkarnaen. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-sm muted-copy hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 order-2 md:order-3">
            {socialMedia.map((profile) => (
              <Link
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 z-10 cursor-pointer flex justify-center items-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-colors"
              >
                <profile.img />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
