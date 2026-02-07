import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { MainHomeHeaderProps } from "@/app/types/ui";

const MainHomeHeader = ({ title, description, url }: MainHomeHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8">
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-accent-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto sm:mx-0">
          {description}
        </p>
      </div>

      <Link href={url} className="mx-auto sm:mx-0 ">
        <button className="group cursor-pointer text-accent-foreground inline-flex items-center gap-2 text-sm sm:text-base font-semibold h-9 px-4 rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.97]">
          View all
          <FaChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 hidden sm:block" />
        </button>
      </Link>
    </div>
  );
};

export default MainHomeHeader;
