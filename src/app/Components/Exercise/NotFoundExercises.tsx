import { IoSearch } from "react-icons/io5";
import Link from "next/link";
const NotFoundExercises = () => {
  return (
    <div className="flex items-center justify-center px-4 py-16 ">
      <div className="w-full max-w-md rounded-3xl border-2 border-border/60 hover:border-primary transition-all bg-accent backdrop-blur-xl shadow-2xl shadow-black/30 p-8 text-center flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex items-center justify-center h-32 w-32 rounded-full border border-border bg-background/60">
            <IoSearch size={70} className="text-primary opacity-90" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-xl sm:text-2xl text-foreground">
            No exercises found
          </h4>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xs mx-auto">
            Try adjusting your search or filters to find what you&apos;re
            looking for
          </p>
        </div>

        <Link
          href={`/exercises`}
          className="group cursor-pointer relative overflow-hidden rounded-2xl border border-primary/40 bg-primary/10 px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Clear all filters
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundExercises;
