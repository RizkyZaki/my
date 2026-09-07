import { getQuotation } from "@/lib/actions/quote.action";
import React from "react";
import Divider from "./shared/Divider";

const Quote = async () => {
  const quote = await getQuotation();

  return (
    <>
      <figure className="max-w-3xl mx-auto px-5 sm:px-10 my-16">
        <div className="relative surface-card px-8 py-10 sm:px-12 sm:py-14 shadow-sm overflow-hidden">
          {/* Oversized quote mark, purely decorative */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 left-6 select-none font-serif text-[10rem] leading-none text-gray-100 dark:text-gray-900"
          >
            &ldquo;
          </span>

          <blockquote className="relative text-xl sm:text-2xl font-light leading-relaxed text-center text-gray-900 dark:text-white text-balance">
            {quote.quote}
          </blockquote>

          <figcaption className="relative mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gray-300 dark:bg-gray-700"></span>
            <span className="text-sm font-medium tracking-wide muted-copy">
              {quote.author}
            </span>
            <span className="h-px w-8 bg-gray-300 dark:bg-gray-700"></span>
          </figcaption>
        </div>
      </figure>

      <Divider />
    </>
  );
};

export default Quote;
