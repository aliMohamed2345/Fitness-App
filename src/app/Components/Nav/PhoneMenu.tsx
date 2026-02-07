"use client";

import { navMenuData } from "@/app/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PhoneMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-30 w-full sm:hidden bg-card/95 backdrop-blur-xl border-t border-border shadow-(--shadow-elevated)">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navMenuData.map((navItem, i) => {
          const isActive =
            navItem.path === "/"
              ? pathname === "/"
              : pathname.startsWith(navItem.path);

          return (
            <Link
              key={i}
              href={navItem.path}
              className={`group relative flex flex-col items-center gap-1 px-3 py-2 transition-all
                text-accent-foreground hover:text-primary
                ${isActive && "text-primary"}
              `}
            >
              <navItem.icon
                size={24}
                className={`
                  transition-all duration-300
                  ${
                    isActive &&
                    `scale-110 drop-shadow-primary-glow`
                  }
                `}
              />

              <span
                className={`
                  text-xs font-medium transition-all duration-300
                  ${isActive && "drop-shadow-primary-glow"} `}
              >
                {navItem.title}
              </span>

              <span
                className={`absolute bottom-0 h-1 rounded-full  transition-all duration-300  group-hover:bg-primary
                  ${
                    isActive
                      ? "w-6 shadow-primary-glow bg-primary"
                      : "w-1 opacity-40 bg-accent-foreground"
                  }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PhoneMenu;
