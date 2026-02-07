import {
  EquipmentListProps,
  ExerciseFiltersProps,
  forceListProps,
  levelFilterProps,
  mechanicListProps,
  muscleListProps,
} from "../types/exercise";
import { axiosInstance, apiEndpoints, youtubeApiEndpoints, youtubeAxiosInstance } from "./axios";

export const ExerciseAPI = {
  getAllExercises: () => axiosInstance.get(apiEndpoints.AllExercises),
  getExerciseById: (Id: string) =>
    axiosInstance.get(apiEndpoints.GetExerciseById(Id)),
  getExercisesByMuscle: (muscle: muscleListProps) =>
    axiosInstance.get(apiEndpoints.muscleFilter(muscle)),
  getExerciseByEquipment: (equipment: EquipmentListProps) =>
    axiosInstance.get(apiEndpoints.EquipmentsFilter(equipment)),
  getExerciseByForce: (force: forceListProps) =>
    axiosInstance.get(apiEndpoints.ForceFilter(force)),
  getExerciseByLevel: (level: levelFilterProps) =>
    axiosInstance.get(apiEndpoints.LevelFilter(level)),
  getExerciseByMechanic: (mechanic: mechanicListProps) =>
    axiosInstance.get(apiEndpoints.MechanicFilter(mechanic)),
  getExercisesByMultipleFilters: (filters: ExerciseFiltersProps) =>
    axiosInstance.get(apiEndpoints.GetExerciseByMultipleFilters(filters)),
};

export const youtubeAPI = {
  searchVideo: (search: string) =>
    youtubeAxiosInstance.get(youtubeApiEndpoints.SearchVideo(search)),
};
