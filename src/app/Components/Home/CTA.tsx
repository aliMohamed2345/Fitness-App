import { motion } from "framer-motion";
import { IoTrophy } from "react-icons/io5";
import { LuDumbbell, LuUtensilsCrossed } from "react-icons/lu";
import Link from "next/link";
const CTA = () => {
  return (
    <section className="container mx-auto px-4 mt-16 mb-8">
      <div className="bg-linear-to-r from-primary/20 via-card to-secondary/20 border-primary/20 rounded-xl border bg-card text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30">
        <div className="p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
              <IoTrophy className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Begin your fitness journey today with our comprehensive workout
              and nutrition tools.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/workouts">
                <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] bg-linear-to-r from-primary to-[hsl(220,100%,60%)] text-primary-foreground font-bold uppercase tracking-wide shadow-glow-primary hover:shadow-[0_0_50px_hsl(189_100%_50%/0.5)] hover:scale-[1.02] h-12 px-8 text-base">
                  <LuDumbbell className="w-4 h-4 mr-2" />
                  Start Workout
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
