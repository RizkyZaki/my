import React from "react";

/**
 * One heading treatment for every section on the site, so Home, Projects,
 * Blogs and About stop each inventing their own gradient.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) => {
  const centered = align === "center";

  return (
    <div
      className={`relative ${centered ? "text-center" : "text-left"} ${
        className ?? ""
      }`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-current opacity-60"></span>
          {eyebrow}
        </span>
      )}

      <h2
        className={`mt-4 font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white ${
          centered ? "" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg muted-copy ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
