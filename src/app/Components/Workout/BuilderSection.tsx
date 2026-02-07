"use client";

import { useState } from "react";
import WorkoutExercise from "./WorkoutExercise";
import { FiSave } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import {
  BuilderExercisesProps,
  WorkoutExerciseProps,
} from "@/app/types/exercise";
import NotFoundWorkout from "./NotFoundSavedWorkout";
import toast from "react-hot-toast";

const BuilderSection = () => {
  const [workoutName, setWorkoutName] = useState<string>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("SavedWorkouts") || "[]");
      return Array.isArray(saved) && saved.length > 0
        ? saved[0]?.name || ""
        : "";
    } catch {
      return "";
    }
  });

  const [exercises, setExercises] = useState<BuilderExercisesProps[]>(() => {
    try {
      const builder = JSON.parse(localStorage.getItem("Builder") || "[]");
      return Array.isArray(builder) ? builder : [];
    } catch {
      return [];
    }
  });

  // ✅ Delete whole builder workout
  const handleDeleteBuilderWorkout = () => {
    setExercises([]);
    localStorage.removeItem("Builder");
    toast.success("Workout deleted successfully.");
  };

  // ✅ Delete single exercise
  const handleDeleteExercise = (id: string) => {
    const updated = exercises.filter((ex) => ex.id !== id);

    setExercises(updated);
    localStorage.setItem("Builder", JSON.stringify(updated));
  };

  // ✅ Save Workout
const handleSaveWorkout = () => {
  if (!workoutName.trim()) {
    return toast.error("Workout name is required.");
  }

  try {
    const savedWorkouts = JSON.parse(
      localStorage.getItem("SavedWorkouts") || "[]"
    );

    const workoutsArray = Array.isArray(savedWorkouts)
      ? savedWorkouts
      : [];

    const existingIndex = workoutsArray.findIndex(
      (workout: WorkoutExerciseProps) =>
        workout.name.toLowerCase() === workoutName.toLowerCase()
    );

    const workoutPayload = {
      name: workoutName,
      exercises,
      id:
        existingIndex !== -1
          ? workoutsArray[existingIndex].id 
          : crypto.randomUUID(),
    };

    if (existingIndex !== -1) {
      workoutsArray[existingIndex] = workoutPayload;

      localStorage.setItem(
        "SavedWorkouts",
        JSON.stringify(workoutsArray)
      );

      toast.success("Workout updated successfully.");
    }

    else {
      localStorage.setItem(
        "SavedWorkouts",
        JSON.stringify([...workoutsArray, workoutPayload])
      );

      toast.success("Workout saved successfully.");
    }

    setExercises([]);
    setWorkoutName("");
    localStorage.removeItem("Builder");

  } catch (error) {
    toast.error("Something went wrong while saving workout.");
    console.error(error);
  }
};

  return (
    <div className="flex flex-col gap-5">
      {exercises.length > 0 && (
        <div className="p-3 border mt-10 border-border hover:border-primary rounded-lg group transition-all">
          <input
            type="text"
            placeholder="Workout name (e.g. Push Day)"
            onChange={(e) => setWorkoutName(e.target.value)}
            value={workoutName}
            className="p-3 bg-accent outline-none text-accent-foreground w-full border-border group-hover:border-primary border rounded-xl font-medium"
          />
        </div>
      )}

      <div className="flex flex-col gap-5 mt-8">
        {exercises.length === 0 ? (
          <NotFoundWorkout
            title="No exercises yet"
            description="Start building your workout by adding exercises"
          />
        ) : (
          exercises.map((exercise) => (
            <WorkoutExercise
              key={exercise.id}
              name={exercise.name}
              id={exercise.id}
              sets={exercise.sets}
              reps={exercise.reps}
              onDelete={() => handleDeleteExercise(exercise.id)}
            />
          ))
        )}
      </div>

      {exercises.length > 0 && (
        <div className="flex gap-5 justify-center mt-5 items-center mb-20">
          <button
            onClick={handleSaveWorkout}
            className="p-3 transition-all font-bold border-border rounded-xl cursor-pointer flex justify-center items-center gap-2 border bg-linear-to-br from-primary to-secondary hover:border-primary hover:text-white text-white hover:scale-[1.05] w-full sm:w-60"
          >
            SAVE <FiSave />
          </button>

          <button
            onClick={handleDeleteBuilderWorkout}
            className="p-3 transition-all font-bold border-border rounded-xl cursor-pointer flex justify-center items-center gap-2 border w-full sm:w-60 hover:bg-destructive hover:text-white text-foreground"
          >
            CLEAR <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default BuilderSection;
