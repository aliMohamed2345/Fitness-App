export interface Exercise {
  exerciseId: string;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  secondaryMuscles: string[];
  instructions: string[];
  gifUrl: string;
}

export interface WorkoutExercise {
  exerciseId: string;
  exerciseName: string;
  sets: number;
  reps: number;
  weight?: number;
}

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  createdAt: string;
  updatedAt?: string;
}

export interface CompletedWorkout {
  id: string;
  workoutId: string;
  workoutName: string;
  exercises: WorkoutExercise[];
  completedAt: string;
  totalVolume: number;
  duration?: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: RecipeCategory;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: Ingredient[];
  instructions: string[];
  imageUrl: string;
  tags: string[];
}
export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export type RecipeCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "pre-workout"
  | "post-workout"
  | "high-protein"
  | "low-carb"
  | "meal-prep";
