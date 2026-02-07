import axios from "axios";
import {
  muscleListProps,
  EquipmentListProps,
  ExerciseFiltersProps,
  forceListProps,
  levelFilterProps,
  mechanicListProps,
} from "../types/exercise";
import { returnFilterQueryString } from "./helper";
const baseURL = `https://exercise-db-fitness-workout-gym.p.rapidapi.com`;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`,
  },
  timeout: 10000,
  method: "GET",
});

//Global Error Handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error.message);
  },
);

export const apiEndpoints = {
  MechanicFilter: (isolation: mechanicListProps) => `/mechanic/${isolation}`,
  EquipmentsFilter: (equipment: EquipmentListProps) =>
    `/equipment/${equipment}`,

  muscleFilter: (muscle: muscleListProps) => `/muscle/${muscle}`,
  LevelFilter: (level: levelFilterProps) => `/level/${level}`,
  ForceFilter: (force: forceListProps) => `/force/${force}`,
  GetExerciseById: (ExerciseId: string) => `/exercise/${ExerciseId}`,
  GetExerciseByMultipleFilters: (filters: ExerciseFiltersProps) =>
    `/exercises/filter?${returnFilterQueryString(filters)}`,
  AllExercises: `/exercises`,
};

export const youtubeAxiosInstance = axios.create({
  baseURL: `https://youtube-v2.p.rapidapi.com`,
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
    "x-rapidapi-host": `${process.env.NEXT_PUBLIC_YOUTUBE_HOST}`,
  },
  method: "GET",
  timeout: 10000,
});

youtubeAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Youtube API Error:", error);
    return Promise.reject(error.message);
  },
);

export const youtubeApiEndpoints= {
  SearchVideo:(search:string)=>`/search?query=${search}&hl=en&gl=US`
}