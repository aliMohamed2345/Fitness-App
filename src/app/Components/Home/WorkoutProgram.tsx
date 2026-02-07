import { workoutPrograms } from "@/app/utils/data";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import MainHomeHeader from "./MainHomeHeader";
const WorkoutProgram = () => {
  return (
    <section className="container mx-auto px-4 mt-20">
      <MainHomeHeader
        title="Workout Programs"
        description="Structured training plans designed for every fitness level"
        url="/workouts"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {workoutPrograms.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <div className="group relative h-full cursor-pointer rounded-xl border border-border bg-card text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

              <div className="relative p-4 flex flex-col h-full">
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {program.icon}
                </div>

                <h3 className="font-bold text-sm mb-1 tracking-tight">
                  {program.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FiClock className="w-3 h-3" />
                  <span>{program.duration}</span>
                </div>

                <div className="flex-1" />

                <span className="mt-3 inline-flex w-fit items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 group-hover:border-primary/40">
                  {program.level}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutProgram;
