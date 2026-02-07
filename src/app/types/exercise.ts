export type EquipmentListProps =
  | "barbell"
  | "dumbbell"
  | "other"
  | "body_only"
  | "cable"
  | "machine"
  | "kettlebells"
  | "bands"
  | "medicine_ball"
  | "exercise_ball"
  | "foam_roll"
  | "e-z_curl_bar";

export type mechanicListProps = "isolation" | "compound";
export type muscleListProps =
  | "quadriceps"
  | "shoulders"
  | "abdominals"
  | "chest"
  | "hamstrings"
  | "triceps"
  | "biceps"
  | "lats"
  | "middle_back"
  | "forearms"
  | "glutes"
  | "traps"
  | "adductors"
  | "abductors"
  | "neck";
export type levelFilterProps = "beginner" | "intermediate" | "expert";

export type forceListProps = "pull" | "push" | "static";
export interface ExerciseFiltersProps {
  muscle?: muscleListProps;
  equipment?: EquipmentListProps;
  force?: forceListProps;
  level?: levelFilterProps;
  mechanic?: mechanicListProps;
}

export interface QueryProps {
  muscle?: muscleListProps;
  equipments?: EquipmentListProps;
  level?: levelFilterProps;
  force?: forceListProps;
  mechanic?: mechanicListProps;
}

export interface WorkoutExerciseProps {
  id: string;
  name: string;
  reps: number;
  sets: number;
  onDelete: (id: string) => void;
}

export interface SavedWorkoutProps {
  id: string;
  name: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  exercises: WorkoutExerciseProps[];
}

export interface BuilderExercisesProps {
  id: string;
  name: string;
  reps: number;
  sets: number;
}

export interface ExercisesProps {
  category: string;
  id: string;
  equipment: EquipmentListProps;
  force: forceListProps;
  images: string[];
  instructions: string[];
  level: levelFilterProps;
  mechanic: mechanicListProps;
  name: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
}

export interface SearchOptions {
  query?: string;
  page?: number;
  limit?: number;
}
export interface videoProps {
  video: {
    video_id: string;
    title: string;
    thumbnails: {
      url: string;
      height: number;
      width: number;
    }[];
  }[];
}
