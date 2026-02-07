import SavedWorkout from "./SavedWorkout";
import NotFoundWorkout from "./NotFoundSavedWorkout";
import { useState } from "react";
import { SavedWorkoutProps } from "@/app/types/exercise";
import toast from "react-hot-toast";
import { currentTabProps } from "@/app/(pages)/workouts/page";
const SavedWorkoutSection = ({
  setCurrentTab,
}: {
  setCurrentTab: (tab: currentTabProps) => void;
}) => {
  const [workouts, setWorkouts] = useState<SavedWorkoutProps[]>(
    Array.isArray(JSON.parse(localStorage.getItem("SavedWorkouts") || "[]"))
      ? JSON.parse(localStorage.getItem("SavedWorkouts") || "[]")
      : [],
  );

  const handleDeleteWorkout = (id: string) => {
    const updatedWorkouts = workouts.filter(
      (workout: SavedWorkoutProps) => workout.id !== id,
    );
    setWorkouts(updatedWorkouts);
    localStorage.setItem("SavedWorkouts", JSON.stringify(updatedWorkouts));
    toast.success("Workout deleted successfully.");
  };
 
  const handleEditWorkout = (id: string) => {
  const selectedWorkout = workouts.find(
    (workout: SavedWorkoutProps) => workout.id === id
  );

  if (!selectedWorkout) return;

  localStorage.setItem(
    "Builder",
    JSON.stringify(selectedWorkout.exercises || [])
  );

  setCurrentTab("builder");
};
  return (
    <div className="flex flex-col gap-5 mt-5 mb-20">
      {workouts.length === 0 ? (
        <NotFoundWorkout
          title="No saved workout exercises yet"
          description="Start building your workout by adding exercises to builder and saved
            it here"
        />
      ) : (
        workouts.map((workout: SavedWorkoutProps, i) => (
          <SavedWorkout
            key={i}
            id={workout.id}
            onDelete={handleDeleteWorkout}
            name={workout.name}
            exercises={workout.exercises}
            onEdit={handleEditWorkout}
          />
        ))
      )}
    </div>
  );
};

export default SavedWorkoutSection;
