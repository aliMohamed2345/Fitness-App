"use client";

import PageHeader from "@/app/Components/Exercise/PageHeader";
import { useState } from "react";
import BuilderSection from "@/app/Components/Workout/BuilderSection";
import SavedWorkoutSection from "@/app/Components/Workout/SavedWorkoutSection";

export type currentTabProps = "builder" | "saved";

const getStorageItem = (key: string, fallback: unknown) => {
  if (typeof window === "undefined") return fallback;

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const Workout = () => {
  const builderData = getStorageItem("Builder", []);
  const savedWorkoutData = getStorageItem("SavedWorkouts", []);

  const numberOfBuilderWorkouts = Array.isArray(builderData)
    ? builderData.length
    : 0;

 const numberOfSavedWorkoutData = Array.isArray(savedWorkoutData)
  ? savedWorkoutData.length
  : 0;

  const [currentTab, setCurrentTab] =
    useState<currentTabProps>("builder");

  return (
    <div className="pt-20 mx-auto p-2">
      <PageHeader
        title="Workout Builder"
        description="Create and manage your training sessions"
      />

      <div className="flex gap-5">
        <button
          onClick={() => setCurrentTab("builder")}
          className={`p-2 cursor-pointer flex justify-center items-center gap-5  w-full ${
            currentTab === "builder"
              ? "bg-linear-to-br from-primary to-secondary text-white scale-105"
              : ""
          } rounded-lg border border-border font-bold`}
        >
          Builder
          <span className="bg-primary text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
            {numberOfBuilderWorkouts}
          </span>
        </button>

        <button
          onClick={() => setCurrentTab("saved")}
          className={`p-2 flex items-center justify-center gap-5  w-full cursor-pointer ${
            currentTab === "saved"
              ? "bg-linear-to-br from-primary to-secondary text-white scale-105"
              : ""
          } rounded-lg border border-border font-bold`}
        >
          Saved Workouts
          <span className="bg-primary text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
            {numberOfSavedWorkoutData}
          </span>
        </button>
      </div>

      {currentTab === "builder" && <BuilderSection />}
      {currentTab === "saved" && (
        <SavedWorkoutSection setCurrentTab={setCurrentTab} />
      )}
    </div>
  );
};

export default Workout;
