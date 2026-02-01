"use client";
import { useState } from "react";
import WorkoutExercise from "./WorkoutExercise";
import { FiSave } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
const BuilderSection = () => {
  const [workoutName, setWorkoutName] = useState<string>("");
  return (
    <div className="flex flex-col gap-5">
      <div className="p-3 border mt-10 border-border hover:border-primary rounded-lg group transition-all">
        <input
          type="text"
          placeholder="Workout name (e.g. Push Day)"
          onChange={(e) => setWorkoutName(e.target.value)}
          value={workoutName}
          className="p-3 bg-accent outline-none text-accent-foreground w-full border-border group-hover:border-primary border rounded-xl font-medium"
        />
      </div>
      <div className="flex flex-col gap-5 mt-8">
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
        <WorkoutExercise name="Barbell Bench Press" sets={4} reps={10} />
      </div>
      <div className="flex gap-5 justify-center mt-5 items-center mb-20">
        <button className="p-3 transition-all font-bold border-border rounded-xl cursor-pointer flex justify-center items-center gap-2 border bg-linear-to-br from-primary to-secondary hover:border-primary hover:text-white text-white hover:scale-[1.05] w-full sm:w-60">
          SAVE <FiSave />
        </button>
        <button className="p-3 transition-all font-bold border-border rounded-xl cursor-pointer flex justify-center items-center gap-2 border w-full sm:w-60  hover:bg-destructive hover:text-white text-foreground">
          CLEAR <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default BuilderSection;
