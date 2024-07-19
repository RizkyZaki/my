import React from "react";
import { socialMedia } from "@/data";
import { ContactDrawerDialog } from "./ContactDialog";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="max-w-full mx-auto pt-16 pb-10 relative bg-white dark:bg-black "
    >
      <div
        className="h-[90vh] sm:h-screen w-full
       absolute bottom-0 left-0 right-0 z-0"
      >
        <div className="w-full dark:bg-black bg-white">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#afafaf2e_1px,transparent_1px),linear-gradient(to_bottom,#afafaf2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_95%,#000_70%,transparent_110%)] opacity-50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-10 px-5  flex flex-col items-center">
        <h2 className="heading pb-5">Found my Portfolio really amazing ?</h2>
        <p className="text-black-200 dark:text-white-200 md:mt-10 my-5 text-center max-md:mx-5  lg:max-w-[45vw]">
          Reach out to me today and let&apos;s discuss how I can help <i>you</i>{" "}
          to build your products.
        </p>

        <div className="max-md:mt-10 max-sm:w-full">
          <ContactDrawerDialog />
        </div>
      </div>

      <div className="flex mt-16 flex-row justify-between items-center max-w-7xl mx-auto sm:px-10 px-5 gbody">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Zach
        </p>

        <div className="flex items-center gap-3">
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
      </div>
    </footer>
  );
};

export default Footer;
