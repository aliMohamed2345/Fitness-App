import { ExerciseFiltersProps } from "../types/exercise";

export const returnFilterQueryString = (filters: ExerciseFiltersProps) => {
  if (!filters) return;
  const params = new URLSearchParams();
  if (filters.muscle) params.append("muscle", filters.muscle);
  if (filters.equipment) params.append("equipment", filters.equipment);
  if (filters.force) params.append("force", filters.force);
  if (filters.level) params.append("level", filters.level);
  if (filters.mechanic) params.append("mechanic", filters.mechanic);
  return params.toString();
};
