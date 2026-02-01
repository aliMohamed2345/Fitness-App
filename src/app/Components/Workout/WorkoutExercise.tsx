"use client";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

interface WorkoutExerciseProps {
  name: string;
  reps: number;
  sets: number;
}
const WorkoutExercise = ({ name, reps, sets }: WorkoutExerciseProps) => {
  const [currentReps, setCurrentReps] = useState<number>(reps);
  const [currentSets, setCurrentSets] = useState<number>(sets);
  return (
    <div className="p-5 border-border border hover:border-primary transition-all hover:bg-accent flex items-center justify-between flex-col sm:flex-row text-foreground rounded-2xl">
      <p className="font-bold text-lg ">{name}</p>
      <div className="flex gap-8 items-center mt-4 sm:mt-0">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex gap-3 items-center justify-between">
            <p>Sets</p>
            <div className="items-center flex gap-2">
              <button
                className={`p-2 rounded-lg border-border cursor-pointer border hover:border-primary hover:bg-accent ${currentSets === 1 && "cursor-default opacity-50"}`}
                onClick={() => setCurrentSets((prev) => Math.max(1, prev - 1))}
              >
                <FaMinus />
              </button>
              {currentSets}
              <button
                className={`p-2 rounded-lg border-border cursor-pointer border hover:border-primary hover:bg-accent ${currentSets === 10 && "cursor-default opacity-50"}`}
                onClick={() => setCurrentSets((prev) => Math.min(10, prev + 1))}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <p>Reps</p>
            <div className="items-center flex gap-2">
              <button
                className={`p-2 rounded-lg border-border cursor-pointer border hover:border-primary hover:bg-accent ${currentReps === 1 && `cursor-default opacity-50`}`}
                onClick={() => setCurrentReps((prev) => Math.max(1, prev - 1))}
              >
                <FaMinus />
              </button>
              {currentReps}
              <button
                className={`p-2 rounded-lg border-border cursor-pointer border hover:border-primary hover:bg-accent ${currentReps === 50 && "cursor-default opacity-50"}`}
                onClick={() => setCurrentReps((prev) => Math.min(50, prev + 1))}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <button className="p-2 hidden sm:block rounded-lg hover:bg-muted w-fit cursor-pointer text-destructive transition-all">
            <FaTrash />
          </button>
        </div>
        <button className="p-2 block sm:hidden rounded-lg hover:bg-muted w-fit cursor-pointer text-destructive transition-all">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default WorkoutExercise;
