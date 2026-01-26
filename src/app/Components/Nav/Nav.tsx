"use client";
import { IoIosArrowUp } from "react-icons/io";
import Theme from "./Theme";
// import SideMenu from "./SideMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { newsCategories } from "@/app/utils/data";
import { navMenuData } from "@/app/utils/data";
import { useState, useRef, useEffect } from "react";
import { LuDumbbell } from "react-icons/lu";
import { FaHome, FaRegStar } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import PhoneMenu from "./PhoneMenu";
// import SearchArea from "./SearchArea";
// import ResponsiveSearchArea from "./ResponsiveSearchArea";
const Nav = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const [isCategoryListOpen, setIsCategoryListOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node))
        setIsCategoryListOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <header className=" border fixed w-full z-10 border-border bg-accent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3 ">
              {/* <SideMenu /> */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center text-background">
                  <LuDumbbell className="w-6 h-6 text-background" />
                </div>
                <span
                  className="text-lg sm:text-2xl font-bold tracking-tight sm:block text-foreground
                "
                >
                  FIT<span className="text-primary"> FORGE</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block "></div>
          <div className="hidden md:block ">
            <div className="flex items-center gap-4 font-bold">
              {navMenuData.map((navItem, i) => (
                <Link
                  href={navItem.path}
                  key={i}
                  className={`${
                    path === navItem.path &&
                    `bg-linear-to-br from-primary to-secondary text-primary-foreground`
                  } p-2 font-bold text-accent-foreground rounded-md hover:bg-background hover:text-background-foreground transition-all relative flex gap-2 items-center cursor-pointer`}
                >
                  <navItem.icon /> {navItem.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="gap-1 cursor-pointer flex items-center ">
            {/* <SearchArea /> */}
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
