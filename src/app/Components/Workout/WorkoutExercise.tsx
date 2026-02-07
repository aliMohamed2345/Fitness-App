"use client";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { WorkoutExerciseProps } from "@/app/types/exercise";

const WorkoutExercise = ({
  name,
  reps,
  sets,
  id,
  onDelete,
}: WorkoutExerciseProps) => {
  const [currentReps, setCurrentReps] = useState<number>(reps);
  const [currentSets, setCurrentSets] = useState<number>(sets);

  const [builder, setBuilder] = useState<WorkoutExerciseProps[]>(
    Array.isArray(JSON.parse(localStorage.getItem("Builder") || "[]"))
      ? JSON.parse(localStorage.getItem("Builder") || "[]")
      : [],
  );

  const changeValueOfSetsOrReps = (
    type: "sets" | "reps",
    direction: "increase" | "decrease",
  ) => {
    const updatedBuilder = builder.map((exercise) => {
      if (exercise.id !== id) return exercise;

      if (type === "sets") {
        const newValue =
          direction === "increase"
            ? Math.min(exercise.sets + 1, 10)
            : Math.max(1, exercise.sets - 1);

        setCurrentSets(newValue);
        return { ...exercise, sets: newValue };
      }

      if (type === "reps") {
        const newValue =
          direction === "increase"
            ? Math.min(exercise.reps + 1, 50)
            : Math.max(1, exercise.reps - 1);

        setCurrentReps(newValue);
        return { ...exercise, reps: newValue };
      }

      return exercise;
    });

    setBuilder(updatedBuilder);
    localStorage.setItem("Builder", JSON.stringify(updatedBuilder));
  };

  return (
    <div className="p-5 border-border border hover:border-primary transition-all hover:bg-accent flex items-center justify-between flex-col sm:flex-row text-foreground rounded-2xl">
      <p className="font-bold text-lg">{name}</p>

      <div className="flex gap-8 items-center mt-4 sm:mt-0">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex gap-3 items-center justify-between">
            <p>Sets</p>

            <div className="items-center flex gap-2">
              <button
                className={`p-2 cursor-pointer rounded-lg border-border border hover:border-primary hover:bg-accent transition ${
                  currentSets === 1 && "cursor-default opacity-50"
                }`}
                disabled={currentSets === 1}
                onClick={() => changeValueOfSetsOrReps("sets", "decrease")}
              >
                <FaMinus />
              </button>

              {currentSets}

              <button
                className={`p-2 cursor-pointer rounded-lg border-border border hover:border-primary hover:bg-accent transition ${
                  currentSets === 10 && "cursor-default opacity-50"
                }`}
                disabled={currentSets === 10}
                onClick={() => changeValueOfSetsOrReps("sets", "increase")}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-between">
            <p>Reps</p>

            <div className="items-center flex gap-2">
              <button
                className={`p-2 cursor-pointer rounded-lg border-border border hover:border-primary hover:bg-accent transition ${
                  currentReps === 1 && "cursor-default opacity-50"
                }`}
                disabled={currentReps === 1}
                onClick={() => changeValueOfSetsOrReps("reps", "decrease")}
              >
                <FaMinus />
              </button>

              {currentReps}

              <button
                className={`p-2 cursor-pointer rounded-lg border-border border hover:border-primary hover:bg-accent transition ${
                  currentReps === 50 && "cursor-default opacity-50"
                }`}
                disabled={currentReps === 50}
                onClick={() => changeValueOfSetsOrReps("reps", "increase")}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <button className="p-2 hidden sm:block rounded-lg hover:bg-muted cursor-pointer text-destructive transition">
            <FaTrash />
          </button>
        </div>

        <button
          onClick={() => onDelete(id)}
          className="p-2 block sm:hidden rounded-lg hover:bg-muted cursor-pointer text-destructive transition"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default WorkoutExercise;
