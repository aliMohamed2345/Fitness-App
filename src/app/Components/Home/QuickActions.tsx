import { exerciseActions } from "@/app/utils/data";
import { motion } from "framer-motion";
import Link from "next/link";
import MainHomeHeader from "./MainHomeHeader";
const QuickActions = () => {
  return (
    <section className="container mx-auto px-4 mt-16">
      <MainHomeHeader
        title="Quick Actions"
        description="Jump straight into your most common workout actions"
        url="/exercises"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {exerciseActions.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, ease: "easeOut" }}
          >
            <Link href={item.path} className="group block h-full">
              <div
                className={`
                  relative h-full overflow-hidden rounded-xl
                  border border-border bg-card text-card-foreground
                  shadow-card transition-all duration-300
                  hover:shadow-elevated hover:border-primary/30
                  hover:-translate-y-1
                `}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br ${item.color}`}
                />

                <div className="relative z-10 p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-muted/40 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                  </div>

                  <div className="font-bold tracking-wide">{item.label}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
