import { IoHome } from "react-icons/io5";
import { LuDumbbell } from "react-icons/lu";
import { MdEventNote } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoTrophy } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import {
  Exercise,
  Workout,
  CompletedWorkout,
  Recipe,
} from "@/app/types/exercise";
import { FiClock, FiZap } from "react-icons/fi";

export const navMenuData = [
  { title: "Home", path: "/", icon: IoHome },
  { title: "Exercises", path: "/exercises", icon: LuDumbbell },
  { title: "Workouts", path: "/workouts", icon: MdEventNote },
];

export const staticStats = {
  exercises: 150,
  recipes: 50,
  workouts: 25,
  users: "10k+",
};

export const workoutPrograms = [
  {
    id: "1",
    name: "Push Pull Legs",
    duration: "6 weeks",
    level: "Intermediate",
    icon: "💪",
  },
  {
    id: "2",
    name: "Full Body Strength",
    duration: "4 weeks",
    level: "Beginner",
    icon: "🏋️",
  },
  {
    id: "3",
    name: "HIIT Fat Burn",
    duration: "8 weeks",
    level: "Advanced",
    icon: "🔥",
  },
  {
    id: "4",
    name: "Core & Mobility",
    duration: "4 weeks",
    level: "All Levels",
    icon: "🧘",
  },
];

export const features = [
  {
    title: "150+ Exercises",
    desc: "A complete exercise library covering all muscle groups with proper form guidance.",
    icon: LuDumbbell,
    color: "text-primary",
  },
  {
    title: "Target Muscles",
    desc: "Train specific muscles with categorized and targeted workouts.",
    icon: GiMuscleUp,
    color: "text-secondary",
  },
  {
    title: "Workout Programs",
    desc: "Structured programs for beginners, intermediate, and advanced athletes.",
    icon: IoTrophy,
    color: "text-primary",
  },
  {
    title: "Time Efficient",
    desc: "Quick workouts and long training sessions tailored to your schedule.",
    icon: FiClock,
    color: "text-secondary",
  },
  {
    title: "Fat Burning",
    desc: "High-intensity and strength workouts designed to maximize calorie burn.",
    icon: FaFireFlameCurved,
    color: "text-destructive",
  },
  {
    title: "Performance Tracking",
    desc: "Track progress, workout consistency, and training intensity over time.",
    icon: FiZap,
    color: "text-primary",
  },
];

export const testimonials = [
  {
    name: "Alex M.",
    text: "Lost 20lbs in 3 months with the meal plans!",
    rating: 5,
  },
  { name: "Sarah K.", text: "Best workout app for home training.", rating: 5 },
  { name: "Mike R.", text: "The exercise library is incredible!", rating: 5 },
];

// Extended demo exercises for full app usage
export const demoExercises: Exercise[] = [
  {
    exerciseId: "0001",
    name: "barbell bench press",
    bodyPart: "chest",
    target: "pectorals",
    equipment: "barbell",
    secondaryMuscles: ["triceps", "anterior deltoids"],
    instructions: [
      "Lie flat on a bench with your feet on the ground.",
      "Grip the barbell with hands slightly wider than shoulder-width.",
      "Unrack the bar and lower it to your chest.",
      "Press the bar back up to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0002",
    name: "dumbbell lateral raise",
    bodyPart: "shoulders",
    target: "deltoids",
    equipment: "dumbbell",
    secondaryMuscles: ["traps"],
    instructions: [
      "Stand with dumbbells at your sides.",
      "Raise arms out to the sides until parallel to the floor.",
      "Lower back down with control.",
      "Keep a slight bend in your elbows throughout.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0003",
    name: "barbell squat",
    bodyPart: "upper legs",
    target: "quads",
    equipment: "barbell",
    secondaryMuscles: ["glutes", "hamstrings", "core"],
    instructions: [
      "Position the barbell on your upper back.",
      "Stand with feet shoulder-width apart.",
      "Bend knees and hips to lower into a squat.",
      "Keep your chest up and back straight.",
      "Drive through heels to return to standing.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0004",
    name: "pull-up",
    bodyPart: "back",
    target: "lats",
    equipment: "body weight",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Hang from a bar with hands wider than shoulders.",
      "Pull your body up until chin is over the bar.",
      "Lower yourself back down with control.",
      "Avoid swinging or kipping.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1598971639058-bb1ab3a0b37d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0005",
    name: "dumbbell bicep curl",
    bodyPart: "upper arms",
    target: "biceps",
    equipment: "dumbbell",
    secondaryMuscles: ["forearms"],
    instructions: [
      "Stand with dumbbells at your sides, palms facing forward.",
      "Curl the weights up toward your shoulders.",
      "Squeeze at the top of the movement.",
      "Lower back down slowly.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0006",
    name: "cable tricep pushdown",
    bodyPart: "upper arms",
    target: "triceps",
    equipment: "cable",
    secondaryMuscles: [],
    instructions: [
      "Stand facing a cable machine with rope attachment.",
      "Grip the rope and keep elbows at your sides.",
      "Push down until arms are fully extended.",
      "Return to starting position with control.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0007",
    name: "leg press",
    bodyPart: "upper legs",
    target: "quads",
    equipment: "leverage machine",
    secondaryMuscles: ["glutes", "hamstrings"],
    instructions: [
      "Sit in the leg press machine with feet shoulder-width on the platform.",
      "Release the safety and lower the weight by bending knees.",
      "Press the platform away by extending your legs.",
      "Do not lock out knees at the top.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0008",
    name: "plank",
    bodyPart: "waist",
    target: "abs",
    equipment: "body weight",
    secondaryMuscles: ["shoulders", "glutes"],
    instructions: [
      "Start in a push-up position on your forearms.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and hold the position.",
      "Avoid letting your hips sag or pike up.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0009",
    name: "deadlift",
    bodyPart: "back",
    target: "spine",
    equipment: "barbell",
    secondaryMuscles: ["glutes", "hamstrings", "traps"],
    instructions: [
      "Stand with feet hip-width apart, barbell over mid-foot.",
      "Bend at hips and knees to grip the bar.",
      "Keep your back flat and chest up.",
      "Drive through your heels to stand up.",
      "Lower the bar back down with control.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0010",
    name: "dumbbell shoulder press",
    bodyPart: "shoulders",
    target: "deltoids",
    equipment: "dumbbell",
    secondaryMuscles: ["triceps", "traps"],
    instructions: [
      "Sit or stand with dumbbells at shoulder height.",
      "Press the weights overhead until arms are extended.",
      "Lower back to starting position.",
      "Keep core engaged throughout.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0011",
    name: "lat pulldown",
    bodyPart: "back",
    target: "lats",
    equipment: "cable",
    secondaryMuscles: ["biceps", "rhomboids"],
    instructions: [
      "Sit at a lat pulldown machine and grip the bar.",
      "Pull the bar down to your upper chest.",
      "Squeeze your shoulder blades together.",
      "Slowly return to starting position.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1598971639058-bb1ab3a0b37d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0012",
    name: "romanian deadlift",
    bodyPart: "upper legs",
    target: "hamstrings",
    equipment: "barbell",
    secondaryMuscles: ["glutes", "lower back"],
    instructions: [
      "Stand with barbell at hip level.",
      "Push hips back while lowering the bar.",
      "Keep legs mostly straight with slight bend.",
      "Feel stretch in hamstrings then return up.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0013",
    name: "incline dumbbell press",
    bodyPart: "chest",
    target: "pectorals",
    equipment: "dumbbell",
    secondaryMuscles: ["anterior deltoids", "triceps"],
    instructions: [
      "Lie on an incline bench set to 30-45 degrees.",
      "Hold dumbbells at chest level.",
      "Press weights up until arms are extended.",
      "Lower with control to starting position.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0014",
    name: "cable fly",
    bodyPart: "chest",
    target: "pectorals",
    equipment: "cable",
    secondaryMuscles: ["anterior deltoids"],
    instructions: [
      "Stand between cable machines with handles at chest height.",
      "Step forward slightly with arms outstretched.",
      "Bring handles together in front of chest.",
      "Slowly return to starting position.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0015",
    name: "walking lunges",
    bodyPart: "upper legs",
    target: "quads",
    equipment: "body weight",
    secondaryMuscles: ["glutes", "hamstrings"],
    instructions: [
      "Stand tall with feet together.",
      "Step forward with one leg into a lunge.",
      "Lower until both knees are at 90 degrees.",
      "Push off front foot and step forward with other leg.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=400&fit=crop",
  },
  {
    exerciseId: "0016",
    name: "face pull",
    bodyPart: "shoulders",
    target: "rear deltoids",
    equipment: "cable",
    secondaryMuscles: ["traps", "rhomboids"],
    instructions: [
      "Set cable at face height with rope attachment.",
      "Pull rope toward face, separating hands.",
      "Squeeze shoulder blades at peak.",
      "Return to starting position with control.",
    ],
    gifUrl:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop",
  },
];

// Sample completed workouts for demo
export const demoCompletedWorkouts: CompletedWorkout[] = [
  {
    id: "cw-1",
    workoutId: "w-1",
    workoutName: "Push Day Destroyer",
    exercises: [
      {
        exerciseId: "0001",
        exerciseName: "barbell bench press",
        sets: 4,
        reps: 8,
        weight: 185,
      },
      {
        exerciseId: "0002",
        exerciseName: "dumbbell lateral raise",
        sets: 3,
        reps: 12,
        weight: 20,
      },
      {
        exerciseId: "0006",
        exerciseName: "cable tricep pushdown",
        sets: 3,
        reps: 15,
        weight: 50,
      },
    ],
    completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    totalVolume: 8440,
    duration: 55,
  },
  {
    id: "cw-2",
    workoutId: "w-2",
    workoutName: "Leg Day Intensity",
    exercises: [
      {
        exerciseId: "0003",
        exerciseName: "barbell squat",
        sets: 5,
        reps: 5,
        weight: 225,
      },
      {
        exerciseId: "demo-7",
        exerciseName: "leg press",
        sets: 4,
        reps: 10,
        weight: 360,
      },
    ],
    completedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    totalVolume: 20025,
    duration: 48,
  },
  {
    id: "cw-3",
    workoutId: "w-3",
    workoutName: "Pull Day Power",
    exercises: [
      {
        exerciseId: "demo-4",
        exerciseName: "pull-up",
        sets: 4,
        reps: 10,
        weight: 0,
      },
      {
        exerciseId: "demo-5",
        exerciseName: "dumbbell bicep curl",
        sets: 3,
        reps: 12,
        weight: 35,
      },
    ],
    completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    totalVolume: 1260,
    duration: 42,
  },
  {
    id: "cw-4",
    workoutId: "w-1",
    workoutName: "Push Day Destroyer",
    exercises: [
      {
        exerciseId: "demo-1",
        exerciseName: "barbell bench press",
        sets: 4,
        reps: 8,
        weight: 195,
      },
      {
        exerciseId: "demo-2",
        exerciseName: "dumbbell lateral raise",
        sets: 3,
        reps: 12,
        weight: 25,
      },
    ],
    completedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    totalVolume: 7140,
    duration: 52,
  },
  {
    id: "cw-5",
    workoutId: "w-4",
    workoutName: "Core Crusher",
    exercises: [
      {
        exerciseId: "demo-8",
        exerciseName: "plank",
        sets: 3,
        reps: 1,
        weight: 0,
      },
    ],
    completedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    totalVolume: 0,
    duration: 25,
  },
];

// Sample saved workouts
export const demoSavedWorkouts: Workout[] = [
  {
    id: "w-1",
    name: "Push Day Destroyer",
    exercises: [
      {
        exerciseId: "demo-1",
        exerciseName: "barbell bench press",
        sets: 4,
        reps: 8,
      },
      {
        exerciseId: "demo-2",
        exerciseName: "dumbbell lateral raise",
        sets: 3,
        reps: 12,
      },
      {
        exerciseId: "demo-6",
        exerciseName: "cable tricep pushdown",
        sets: 3,
        reps: 15,
      },
    ],
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "w-2",
    name: "Leg Day Intensity",
    exercises: [
      { exerciseId: "demo-3", exerciseName: "barbell squat", sets: 5, reps: 5 },
      { exerciseId: "demo-7", exerciseName: "leg press", sets: 4, reps: 10 },
    ],
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "w-3",
    name: "Pull Day Power",
    exercises: [
      { exerciseId: "demo-4", exerciseName: "pull-up", sets: 4, reps: 10 },
      {
        exerciseId: "demo-5",
        exerciseName: "dumbbell bicep curl",
        sets: 3,
        reps: 12,
      },
    ],
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Sample favorites
export const demoFavorites = ["demo-1", "demo-3", "demo-4", "demo-5"];

// Helper to get exercise by ID
export const getExerciseById = (id: string): Exercise | undefined => {
  return demoExercises.find((ex) => ex.exerciseId === id);
};

// Helper to filter exercises
export const filterExercises = (
  exercises: Exercise[],
  {
    search,
    bodyPart,
    equipment,
  }: { search?: string; bodyPart?: string; equipment?: string },
): Exercise[] => {
  return exercises.filter((ex) => {
    const matchesSearch =
      !search ||
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.target.toLowerCase().includes(search.toLowerCase()) ||
      ex.bodyPart.toLowerCase().includes(search.toLowerCase());
    const matchesBodyPart = !bodyPart || ex.bodyPart === bodyPart;
    const matchesEquipment = !equipment || ex.equipment === equipment;
    return matchesSearch && matchesBodyPart && matchesEquipment;
  });
};



export const exerciseActions = [
  {
    label: "Upper Body",
    icon: "💪",
    path: "/exercises?bodyPart=upper arms",
    color: "from-primary/20 to-primary/5",
  },
  {
    label: "Lower Body",
    icon: "🦵",
    path: "/exercises?bodyPart=upper legs",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    label: "High Protein",
    icon: "🥩",
    path: "/recipes",
    color: "from-destructive/20 to-destructive/5",
  },
  {
    label: "Track Macros",
    icon: "📊",
    path: "/nutrition",
    color: "from-primary/20 to-primary/5",
  },
];


