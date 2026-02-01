import SavedWorkout from "./SavedWorkout";

const SavedWorkoutSection = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 mb-20">
      <SavedWorkout
        name="Push Day"
        exercises={["Barbell Bench Press", "Overhead Press", "Tricep Dips"]}
      />
      <SavedWorkout
        name="Push Day"
        exercises={["Barbell Bench Press", "Overhead Press", "Tricep Dips"]}
      />
      <SavedWorkout
        name="Push Day"
        exercises={["Barbell Bench Press", "Overhead Press", "Tricep Dips"]}
      />
      <SavedWorkout
        name="Push Day"
        exercises={["Barbell Bench Press", "Overhead Press", "Tricep Dips"]}
      />
    </div>
  );
};

export default SavedWorkoutSection;
