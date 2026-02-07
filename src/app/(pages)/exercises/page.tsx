"use client";

import { ExerciseCard } from "@/app/Components/Exercise/ExerciseCard";
import ExerciseLoadingGrid from "@/app/Components/Exercise/ExerciseLoadingGrid";
import NotFoundExercises from "@/app/Components/Exercise/NotFoundExercises";
import PageHeader from "@/app/Components/Exercise/PageHeader";
import SearchBar from "@/app/Components/Exercise/SearchBar";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { useSmartExercises } from "@/app/hooks/useSmartExercises";
import { EquipmentListProps, forceListProps, levelFilterProps, mechanicListProps, muscleListProps } from "@/app/types/exercise";

const Exercises = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  const filters = {
    muscle: searchParams.get("muscle") as muscleListProps,
    equipment: searchParams.get("equipments") as EquipmentListProps,
    force: searchParams.get("force") as forceListProps,
    level: searchParams.get("level") as levelFilterProps,
    mechanic: searchParams.get("mechanic") as mechanicListProps,
  };

  const { exercises, hasMore, loadMore, loading } = useSmartExercises(
    searchQuery,
    filters,
  );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  const removeSearchParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`/exercises?${params.toString()}`);
  };

  return (
    <div className="pt-20 mx-auto p-2 max-w-7xl">
      <PageHeader
        title="Exercise Library"
        description="Discover and master exercises"
      />

      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

      {(filters.muscle ||
        filters.equipment ||
        filters.force ||
        filters.level ||
        filters.mechanic) && (
        <div className="flex gap-2 flex-wrap mt-5">
          Active:
          {filters.muscle && (
            <FilterChip
              label={filters.muscle}
              onRemove={() => removeSearchParam("muscle")}
            />
          )}
          {filters.equipment && (
            <FilterChip
              label={filters.equipment}
              onRemove={() => removeSearchParam("equipments")}
            />
          )}
          {filters.level && (
            <FilterChip
              label={filters.level}
              onRemove={() => removeSearchParam("level")}
            />
          )}
          {filters.force && (
            <FilterChip
              label={filters.force}
              onRemove={() => removeSearchParam("force")}
            />
          )}
          {filters.mechanic && (
            <FilterChip
              label={filters.mechanic}
              onRemove={() => removeSearchParam("mechanic")}
            />
          )}
          <button
            onClick={() => router.replace("/exercises")}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            Clear all
          </button>
        </div>
      )}

      {loading && exercises.length === 0 ? (
        <ExerciseLoadingGrid />
      ) : exercises.length === 0 ? (
        <NotFoundExercises />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      )}

      <div ref={loadMoreRef} className="h-10" />
    </div>
  );
};

export default Exercises;

// ✅ SMALL CHIP COMPONENT
function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="rounded-full px-3 py-1 bg-primary/20 text-primary flex items-center gap-2">
      {label}
      <IoClose
        onClick={onRemove}
        className="cursor-pointer hover:bg-primary/30 rounded-full"
      />
    </span>
  );
}
