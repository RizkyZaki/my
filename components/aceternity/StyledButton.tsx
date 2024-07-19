import React from "react";
import { Button } from "../ui/button";

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div
      className="relative inline-flex h-12  w-full overflow-hidden rounded-lg p-[1px] focus:outline-none sm:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-950 px-7 text-sm font-medium text-black dark:text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </div>
  );
};

export const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[linear-gradient(110deg,#F1F5F9,45%,#FFFFFF,55%,#F1F5F9)] bg-[length:200%_100%] px-6 font-medium dark:text-white text-black-200  transition-colors shadow-xl dark:shadow-black-100 relative ${otherClasses}`}
      onClick={handleClick}
    >
      <div className="absolute h-full w-full dark:bg-black rounded-lg -z-10" />
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </div>
  );
};
