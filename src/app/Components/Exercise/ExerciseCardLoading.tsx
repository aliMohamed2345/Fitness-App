"use client";

import { motion } from "framer-motion";
import { shimmer } from "@/app/utils/animationVariants";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-muted/40 ${className}`}>
      <motion.div
        variants={shimmer}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}

const ExerciseCardLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm sm:max-w-full rounded-2xl bg-card border border-border shadow-card overflow-hidden"
    >
      <SkeletonBlock className="w-full aspect-square sm:aspect-4/3 md:aspect-square" />

      <div className="p-3 sm:p-4 space-y-3">
        <SkeletonBlock className="h-5 w-3/4 rounded-lg" />

        <div className="flex gap-2">
          <SkeletonBlock className="h-5 w-16 rounded-full" />
          <SkeletonBlock className="h-5 w-14 rounded-full" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <SkeletonBlock className="h-4 w-20 rounded" />
          <SkeletonBlock className="h-8 w-20 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ExerciseCardLoading;
