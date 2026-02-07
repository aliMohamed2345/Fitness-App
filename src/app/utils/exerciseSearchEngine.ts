import { allExercisesId } from "./data";
import { SearchOptions } from "../types/exercise";

export function searchExercisesLocal({
  query = "",
  page = 1,
  limit = 10,
}: SearchOptions) {
  const normalizedQuery = query.toLowerCase();

  const filtered = allExercisesId.filter((id) =>
    id.toLowerCase().includes(normalizedQuery),
  );

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    ids: filtered.slice(start, end),
    total: filtered.length,
    hasMore: end < filtered.length,
  };
}
