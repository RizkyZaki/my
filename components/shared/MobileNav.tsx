"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="p-0">
        <div className="w-full h-full flex flex-col items-center justify-center pb-10">
          <div className="fixed top-0 sm:hidden z-50 bg-blue-400 dark:text-black p-2">
            rizkyzaki682@gmail.com
          </div>
          <div>
            {navItems.map((navItem: any, idx: number) => (
              <SheetClose key={idx} asChild>
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-neutral-50 items-center flex space-x-2 hover:text-neutral-300 py-3 mr-5"
                  )}
                >
                  <navItem.icon className="mr-4" />
                  <span className="cursor-pointer text-2xl">
                    {navItem.name}
                  </span>
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
