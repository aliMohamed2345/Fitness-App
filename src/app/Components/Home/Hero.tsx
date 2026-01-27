import { FaFireFlameCurved } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuDumbbell } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero pt-24 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-4  inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/20 text-primary">
            <FaFireFlameCurved className="w-3 h-3 mr-1" />
            Your Complete Fitness Platform
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight uppercase mb-4 text-foreground">
            TRANSFORM YOUR
            <br />
            <span className="bg-linear-to-r from-bg-gradient-primary-start to-bg-gradient-primary-end bg-clip-text text-transparent">
              BODY & MIND
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Access 150+ exercises and
            custom workout programs. Everything you need to achieve your fitness
            goals.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/exercises">
              <button className="inline-flex items-center rounded-2xl cursor-pointer justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] bg-linear-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground font-bold uppercase tracking-wide shadow-glow-primary hover:shadow-[0_0_50px_hsl(189_100%_50%/0.5)] hover:scale-[1.02] h-14 px-5 sm:px-10 text-sm sm:text-lg">
                <LuDumbbell className="w-5 h-5 mr-2" />
                Browse Exercises
              </button>
            </Link>
            <Link href="/nutrition">
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
