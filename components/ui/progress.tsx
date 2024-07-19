"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/utils/cn";
import { SparklesCore } from "../aceternity/Sparkles";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    textContent?: string;
  }
>(({ className, value, textContent, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-8 sm:h-6 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <div className="flex items-center md:hidden ml-5 z-10 absolute text-xl text-white font-semibold h-full">
      {textContent}
    </div>
    <ProgressPrimitive.Indicator
      className="h-full w-full rounded-e-xl flex-1 bg-gradient-to-r from-yellow-400 to-yellow-200 dark:from-yellow-200 dark:to-yellow-400 transition-all relative"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      <SparklesCore
        // TODO: Take a key as prop and pass it here in id
        id={textContent}
        background="transparent"
        minSize={2.0}
        maxSize={3.0}
        particleDensity={100}
        className="h-full w-full absolute pr-2"
        particleColor="#FFFFFF"
      />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
