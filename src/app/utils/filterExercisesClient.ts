import { ExerciseFiltersProps, ExercisesProps } from "../types/exercise";
export function filterExercisesClient(
  exercises: ExercisesProps[],
  filters: ExerciseFiltersProps,
) {
  return exercises.filter((ex) => {
    if (filters.equipment && ex.equipment !== filters.equipment) return false;
    if (filters.muscle && !ex.primaryMuscles.includes(filters.muscle))
      return false;
    return true;
  });
}
