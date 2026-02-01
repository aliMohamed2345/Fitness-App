"use client";
import PageHeader from "@/app/Components/Exercise/PageHeader";
import { useState } from "react";
import BuilderSection from "@/app/Components/Workout/BuilderSection";
import SavedWorkoutSection from "@/app/Components/Workout/SavedWorkoutSection";
type currentTabProps = "builder" | "saved";
const Workout = () => {
  const [currentTab, setCurrentTab] = useState<currentTabProps>("builder");

  return (
    <div className="pt-20 mx-auto p-2">
      <PageHeader
        title="Workout Builder"
        description="Create and manage your training sessions"
      />

      <div className="flex gap-5">
        <button
          onClick={() => setCurrentTab("builder")}
          className={`p-2 sm:p-2.5 w-full ${currentTab === "builder" && `bg-linear-to-br from-primary to-secondary hover:border-primary text-white hover:scale-105`} rounded-lg cursor-pointer bg-background transition-all border border-border hover:border-primary text-foreground font-bold min-w-19 sm:min-w-38 hover:bg-accent flex justify-center gap-2 items-center sm:text-lg text-xs `}
        >
          Builder
          <span className="bg-primary sm:text-sm text-xs text-white rounded-full p-1 w-4 h-4 sm:w-8 sm:h-8 flex items-center justify-center">
            2
          </span>
        </button>
        <button
          onClick={() => setCurrentTab("saved")}
          className={`p-2 sm:p-2.5 w-full ${currentTab === "saved" && `bg-linear-to-br from-primary to-secondary hover:border-primary text-white hover:scale-105`} rounded-lg cursor-pointer bg-background transition-all border border-border hover:border-primary text-foreground font-bold min-w-24 sm:min-w-48 hover:bg-accent flex justify-center gap-2 items-center sm:text-lg text-xs`}
        >
          Saved Workouts
          <span className="bg-primary sm:text-sm text-xs text-white rounded-full p-1 w-4 h-4 sm:w-8 sm:h-8 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
      {currentTab === "builder" && <BuilderSection />}
      {currentTab ==="saved"&& <SavedWorkoutSection/>}
    </div>
  );
};

export default Workout;
