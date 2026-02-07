"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { BuilderExercisesProps, ExercisesProps } from "@/app/types/exercise";
import { useState, useEffect } from "react";
import { youtubeAPI } from "@/app/utils/fetchData";
const getBuilder = () => {
  if (typeof window === "undefined") return [];

  try {
    const data = JSON.parse(localStorage.getItem("Builder") || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const saveBuilder = (data: BuilderExercisesProps[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("Builder", JSON.stringify(data));
};

const isExerciseInBuilder = (exerciseId: string) => {
  const builder = getBuilder();
  return builder.some((exercise: { id: string }) => exercise.id === exerciseId);
};

export function ExerciseCard({ exercise }: { exercise: ExercisesProps }) {
  const difficultyColorStyle = () => {
    switch (exercise?.level) {
      case "beginner":
        return "bg-primary/30 text-primary";
      case "intermediate":
        return "bg-secondary/30 text-secondary";
      case "expert":
        return "bg-destructive/30 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  const addToBuilder = () => {
    const builder = getBuilder();

    const exists = builder.some(
      (exercise: { id: string }) => exercise.id === exercise.id,
    );

    if (exists) return;

    const exerciseToAdd = {
      id: crypto.randomUUID(),
      name: exercise.name,
      sets: 3,
      reps: 12,
    };

    builder.push(exerciseToAdd);
    saveBuilder(builder);
  };
  const [img, setImg] = useState<string>("");
  useEffect(() => {
    youtubeAPI.searchVideo(`${exercise?.name} exercise`).then((res) => {
      console.log(res?.data.contents[0]?.video?.thumbnails);
      setImg(res.data?.contents[0]?.video?.thumbnails[1]?.url);
    });
  }, [exercise]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-sm sm:max-w-full rounded-2xl group bg-card shadow-card overflow-hidden border border-border hover:border-primary transition-all"
    >
      <div className="relative w-full aspect-square sm:aspect-4/3 md:aspect-square">
        <Image
          src={`${img ? img : `#`}`}
          alt={exercise?.name}
          fill
          className="object-cover"
          loading="lazy"
          unoptimized
        />

        <span
          className={`absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full ${difficultyColorStyle()} px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold`}
        >
          {exercise?.level.toUpperCase()}
        </span>
      </div>

      <div className="p-3 sm:p-4 space-y-3">
        <Link
          href={{
            pathname: `exercises/${exercise?.id}`,
            query: img ? { img } : {},
          }}
          className="block text-sm sm:text-base font-semibold text-card-foreground group-hover:text-primary transition cursor-pointer line-clamp-2"
        >
          {exercise?.name}
        </Link>

        <div className="flex gap-2 flex-wrap">
          <span className="rounded-full bg-primary/30 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-primary">
            {exercise?.primaryMuscles[0]}
          </span>

          {exercise?.secondaryMuscles.length > 0 && (
            <span className="rounded-full bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-muted-foreground">
              {exercise?.secondaryMuscles[0]}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-1 sm:pt-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span className="text-base sm:text-lg">🏋️</span>
            <span className="truncate max-w-30 sm:max-w-none">
              {exercise?.equipment}
            </span>
          </div>

          <button
            onClick={addToBuilder}
            className="flex items-center gap-1 sm:gap-2 rounded-xl bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer transition"
          >
            {isExerciseInBuilder(exercise?.id) ? (
              <>
                <FaCheck />
                Added
              </>
            ) : (
              <>
                <BiPlus size={16} />
                ADD
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
