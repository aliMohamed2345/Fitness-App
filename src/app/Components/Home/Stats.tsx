import { staticStats } from "@/app/utils/data";
import { motion } from "framer-motion";
const Stats = () => {
  return (
    <section className="relative w-full mx-auto px-4 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center  gap-5 flex-wrap "
      >
        <div className="bg-card/80 p-4 cursor-pointer  backdrop-blur-sm border-primary/20 rounded-xl border-2 text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30 flex items-center justify-center flex-col gap-1">
            <div className="text-xl sm:text-3xl md:text-4xl font-black tabular-nums text-primary">
              {staticStats.exercises}
            </div>
            <div className="text-sm font-medium text-muted-foreground">Exercises</div>
        </div>
        <div className="bg-card/80 p-4 cursor-pointer backdrop-blur-sm border-secondary/20 rounded-xl border-2 text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30 flex items-center justify-center flex-col gap-1">
            <div className="text-xl sm:text-3xl md:text-4xl font-black tabular-nums text-secondary">
              {staticStats.recipes}
            </div>
            <div className="text-sm font-medium text-muted-foreground">Recipes</div>
        </div>
        <div className="bg-card/80 p-4 cursor-pointer backdrop-blur-sm border-destructive/20 rounded-xl border-2 text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30 flex items-center justify-center flex-col gap-1">
            <div className="text-xl sm:text-3xl md:text-4xl font-black tabular-nums text-destructive">
              {staticStats.workouts}
            </div>
            <div className="text-sm font-medium text-muted-foreground">Programs</div>
        </div>
        <div className="bg-card/80 cursor-pointer backdrop-blur-sm rounded-xl border-2 border-border  text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30">
          <div className="p-4 text-center">
            <div className="text-xl sm:text-3xl md:text-4xl font-black tabular-nums">
              {staticStats.users}
            </div>
            <div className="text-sm font-medium text-muted-foreground">Users</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
