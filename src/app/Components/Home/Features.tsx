import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

import { features } from "@/app/utils/data";
const Features = () => {
  return (
    <section className="container mx-auto px-4 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="mb-4  inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/20 text-secondary">
          <FiZap className="w-3 h-3" />
          Training Features
        </div>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-accent-foreground ">
          Train Smarter. Move Stronger.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="h-full cursor-pointer"
          >
            <div className="group relative h-full rounded-xl border border-border bg-card text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />

              <div className="relative p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-muted/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <feature.icon
                    className={`w-6 h-6 transition-transform duration-300 group-hover:rotate-6 ${feature.color}`}
                  />
                </div>

                <h3 className="font-bold mb-1 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
