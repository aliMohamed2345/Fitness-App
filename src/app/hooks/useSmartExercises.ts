import { useEffect, useState } from "react";
import { ExerciseAPI } from "@/app/utils/fetchData";
import { searchExercisesLocal } from "../utils/exerciseSearchEngine";
import { fetchExercisesBatch } from "../utils/fetchExercisesBatch";
import { filterExercisesClient } from "../utils/filterExercisesClient";
import {
  EquipmentListProps,
  ExercisesProps,
  forceListProps,
  levelFilterProps,
  mechanicListProps,
  muscleListProps,
} from "../types/exercise";
interface Filters {
  force?: forceListProps;
  level?: levelFilterProps;
  mechanic?: mechanicListProps;
  muscle: muscleListProps;
  equipment: EquipmentListProps;
}

export function useSmartExercises(searchQuery: string, filters: Filters) {
  const [page, setPage] = useState(1);
  const [exercises, setExercises] = useState<ExercisesProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const limit = 12;

  const hasFilters =
    filters.muscle ||
    filters.equipment ||
    filters.force ||
    filters.level ||
    filters.mechanic;
  const convertFiltersToString = JSON.stringify(filters);

  useEffect(() => {
    setExercises([]);
    setPage(1);
  }, [searchQuery, convertFiltersToString]);

  useEffect(() => {
    loadExercises();
  }, [page, searchQuery, convertFiltersToString]);

  async function loadExercises() {
    setLoading(true);

    try {
      if (searchQuery) {
        const { ids, hasMore } = searchExercisesLocal({
          query: searchQuery,
          page,
          limit,
        });

        let data = await fetchExercisesBatch(ids);

        if (hasFilters) {
          data = filterExercisesClient(data, filters);
        }

        setExercises((prev) => [...prev, ...data]);
        setHasMore(hasMore);

        return;
      }

      if (hasFilters && page === 1) {
        const res = await ExerciseAPI.getExercisesByMultipleFilters(filters);

        setExercises(res.data || []);
        setHasMore(false);
        return;
      }

      const { ids, hasMore } = searchExercisesLocal({
        page,
        limit,
      });

      const data = await fetchExercisesBatch(ids);

      setExercises((prev) => [...prev, ...data]);
      setHasMore(hasMore);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    exercises,
    hasMore,
    loading,
    loadMore: () => setPage((p) => p + 1),
  };
}
