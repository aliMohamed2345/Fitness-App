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
    exerciseId: "demo-1",
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
    exerciseId: "demo-2",
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
    exerciseId: "demo-3",
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
    exerciseId: "demo-4",
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
    exerciseId: "demo-5",
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
    exerciseId: "demo-6",
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
    exerciseId: "demo-7",
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
    exerciseId: "demo-8",
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
    exerciseId: "demo-9",
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
    exerciseId: "demo-10",
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
    exerciseId: "demo-11",
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
    exerciseId: "demo-12",
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
    exerciseId: "demo-13",
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
    exerciseId: "demo-14",
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
    exerciseId: "demo-15",
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
    exerciseId: "demo-16",
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
        exerciseId: "demo-1",
        exerciseName: "barbell bench press",
        sets: 4,
        reps: 8,
        weight: 185,
      },
      {
        exerciseId: "demo-2",
        exerciseName: "dumbbell lateral raise",
        sets: 3,
        reps: 12,
        weight: 20,
      },
      {
        exerciseId: "demo-6",
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
        exerciseId: "demo-3",
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

export const demoRecipes: Recipe[] = [
  {
    id: "recipe-1",
    name: "Protein Power Oatmeal",
    description:
      "Start your day with this protein-packed oatmeal topped with fresh berries and nuts.",
    category: "breakfast",
    calories: 450,
    protein: 35,
    carbs: 52,
    fat: 12,
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      { name: "Rolled oats", amount: "1", unit: "cup" },
      { name: "Protein powder", amount: "1", unit: "scoop" },
      { name: "Almond milk", amount: "1.5", unit: "cups" },
      { name: "Banana", amount: "1", unit: "medium" },
      { name: "Mixed berries", amount: "0.5", unit: "cup" },
      { name: "Almonds", amount: "2", unit: "tbsp" },
      { name: "Honey", amount: "1", unit: "tbsp" },
    ],
    instructions: [
      "Bring almond milk to a boil in a small saucepan.",
      "Add oats and reduce heat to medium-low.",
      "Cook for 5 minutes, stirring occasionally.",
      "Remove from heat and stir in protein powder.",
      "Top with sliced banana, berries, almonds, and honey.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800&h=600&fit=crop",
    tags: ["high-protein", "fiber", "quick"],
  },
  {
    id: "recipe-2",
    name: "Grilled Chicken Salad",
    description:
      "A refreshing and filling salad with grilled chicken, avocado, and a zesty lemon dressing.",
    category: "lunch",
    calories: 520,
    protein: 45,
    carbs: 18,
    fat: 32,
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      { name: "Chicken breast", amount: "400", unit: "g" },
      { name: "Mixed greens", amount: "4", unit: "cups" },
      { name: "Avocado", amount: "1", unit: "large" },
      { name: "Cherry tomatoes", amount: "1", unit: "cup" },
      { name: "Cucumber", amount: "1", unit: "medium" },
      { name: "Red onion", amount: "0.25", unit: "cup" },
      { name: "Olive oil", amount: "3", unit: "tbsp" },
      { name: "Lemon juice", amount: "2", unit: "tbsp" },
      { name: "Garlic", amount: "2", unit: "cloves" },
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and minced garlic.",
      "Grill chicken for 6-7 minutes per side until cooked through.",
      "Let chicken rest for 5 minutes, then slice.",
      "Arrange mixed greens on plates.",
      "Top with sliced chicken, avocado, tomatoes, cucumber, and onion.",
      "Whisk together olive oil and lemon juice for dressing.",
      "Drizzle dressing over salad and serve.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    tags: ["low-carb", "high-protein", "keto"],
  },
  {
    id: "recipe-3",
    name: "Salmon with Quinoa",
    description:
      "Omega-3 rich salmon paired with fluffy quinoa and roasted vegetables.",
    category: "dinner",
    calories: 650,
    protein: 48,
    carbs: 42,
    fat: 28,
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    difficulty: "Medium",
    ingredients: [
      { name: "Salmon fillets", amount: "2", unit: "pieces" },
      { name: "Quinoa", amount: "1", unit: "cup" },
      { name: "Broccoli", amount: "2", unit: "cups" },
      { name: "Bell peppers", amount: "2", unit: "medium" },
      { name: "Olive oil", amount: "3", unit: "tbsp" },
      { name: "Lemon", amount: "1", unit: "whole" },
      { name: "Garlic powder", amount: "1", unit: "tsp" },
      { name: "Paprika", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Cook quinoa according to package directions.",
      "Season salmon with garlic powder, paprika, salt, and pepper.",
      "Toss vegetables with olive oil and spread on baking sheet.",
      "Place salmon on top of vegetables.",
      "Bake for 20-25 minutes until salmon flakes easily.",
      "Serve salmon and vegetables over quinoa with lemon wedges.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
    tags: ["omega-3", "complete-protein", "meal-prep"],
  },
  {
    id: "recipe-4",
    name: "Greek Yogurt Parfait",
    description:
      "Layers of creamy Greek yogurt, crunchy granola, and fresh fruits.",
    category: "snack",
    calories: 320,
    protein: 22,
    carbs: 38,
    fat: 10,
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      { name: "Greek yogurt", amount: "1", unit: "cup" },
      { name: "Granola", amount: "0.5", unit: "cup" },
      { name: "Mixed berries", amount: "0.5", unit: "cup" },
      { name: "Honey", amount: "1", unit: "tbsp" },
      { name: "Chia seeds", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Add half the yogurt to a glass or bowl.",
      "Layer with half the granola and berries.",
      "Repeat layers with remaining ingredients.",
      "Drizzle with honey and sprinkle chia seeds.",
      "Serve immediately for best crunch.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
    tags: ["quick", "no-cook", "probiotics"],
  },
  {
    id: "recipe-5",
    name: "Pre-Workout Energy Bites",
    description:
      "No-bake energy balls packed with oats, peanut butter, and natural sugars for sustained energy.",
    category: "pre-workout",
    calories: 180,
    protein: 8,
    carbs: 22,
    fat: 9,
    prepTime: 15,
    cookTime: 0,
    servings: 12,
    difficulty: "Easy",
    ingredients: [
      { name: "Rolled oats", amount: "1", unit: "cup" },
      { name: "Peanut butter", amount: "0.5", unit: "cup" },
      { name: "Honey", amount: "0.25", unit: "cup" },
      { name: "Dark chocolate chips", amount: "0.25", unit: "cup" },
      { name: "Chia seeds", amount: "2", unit: "tbsp" },
      { name: "Vanilla extract", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Mix all ingredients in a large bowl until well combined.",
      "Refrigerate mixture for 30 minutes.",
      "Roll into 12 equal-sized balls.",
      "Store in airtight container in refrigerator.",
      "Eat 1-2 bites 30-60 minutes before workout.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=600&fit=crop",
    tags: ["no-bake", "energy", "portable"],
  },
  {
    id: "recipe-6",
    name: "Post-Workout Protein Shake",
    description:
      "The ultimate recovery shake with whey protein, banana, and almond butter.",
    category: "post-workout",
    calories: 420,
    protein: 40,
    carbs: 35,
    fat: 14,
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      { name: "Whey protein", amount: "1.5", unit: "scoops" },
      { name: "Banana", amount: "1", unit: "large" },
      { name: "Almond butter", amount: "1", unit: "tbsp" },
      { name: "Almond milk", amount: "1.5", unit: "cups" },
      { name: "Ice cubes", amount: "5", unit: "pieces" },
      { name: "Cinnamon", amount: "0.5", unit: "tsp" },
    ],
    instructions: [
      "Add almond milk and protein powder to blender.",
      "Add banana, almond butter, and cinnamon.",
      "Add ice cubes.",
      "Blend until smooth, about 30 seconds.",
      "Drink within 30 minutes after workout.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&h=600&fit=crop",
    tags: ["recovery", "quick", "muscle-building"],
  },
  {
    id: "recipe-7",
    name: "Turkey Meatballs",
    description:
      "Lean turkey meatballs baked to perfection, great for meal prep.",
    category: "high-protein",
    calories: 280,
    protein: 32,
    carbs: 8,
    fat: 14,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { name: "Ground turkey", amount: "500", unit: "g" },
      { name: "Egg", amount: "1", unit: "large" },
      { name: "Breadcrumbs", amount: "0.25", unit: "cup" },
      { name: "Parmesan cheese", amount: "0.25", unit: "cup" },
      { name: "Garlic", amount: "3", unit: "cloves" },
      { name: "Italian herbs", amount: "1", unit: "tbsp" },
      { name: "Onion powder", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Mix all ingredients in a large bowl.",
      "Form mixture into 20 meatballs.",
      "Place on lined baking sheet.",
      "Bake for 18-20 minutes until cooked through.",
      "Serve with marinara sauce or over zucchini noodles.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop",
    tags: ["lean-protein", "meal-prep", "freezer-friendly"],
  },
  {
    id: "recipe-8",
    name: "Cauliflower Fried Rice",
    description: "Low-carb twist on classic fried rice using cauliflower rice.",
    category: "low-carb",
    calories: 220,
    protein: 18,
    carbs: 12,
    fat: 14,
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      { name: "Cauliflower rice", amount: "4", unit: "cups" },
      { name: "Eggs", amount: "3", unit: "large" },
      { name: "Chicken breast", amount: "200", unit: "g" },
      { name: "Sesame oil", amount: "2", unit: "tbsp" },
      { name: "Soy sauce", amount: "3", unit: "tbsp" },
      { name: "Garlic", amount: "3", unit: "cloves" },
      { name: "Green onions", amount: "4", unit: "stalks" },
      { name: "Frozen peas", amount: "0.5", unit: "cup" },
    ],
    instructions: [
      "Cook diced chicken in sesame oil until done. Set aside.",
      "Scramble eggs in the same pan. Set aside.",
      "Add more oil and sauté garlic for 30 seconds.",
      "Add cauliflower rice and cook for 5-6 minutes.",
      "Add peas and cook for 2 minutes.",
      "Return chicken and eggs to pan.",
      "Add soy sauce and green onions. Toss to combine.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop",
    tags: ["keto", "low-carb", "asian"],
  },
  {
    id: "recipe-9",
    name: "Chicken Meal Prep Bowls",
    description:
      "Complete meal prep solution with seasoned chicken, rice, and roasted veggies.",
    category: "meal-prep",
    calories: 550,
    protein: 42,
    carbs: 48,
    fat: 18,
    prepTime: 20,
    cookTime: 30,
    servings: 5,
    difficulty: "Medium",
    ingredients: [
      { name: "Chicken thighs", amount: "1", unit: "kg" },
      { name: "Brown rice", amount: "2", unit: "cups" },
      { name: "Broccoli", amount: "3", unit: "cups" },
      { name: "Sweet potato", amount: "2", unit: "large" },
      { name: "Olive oil", amount: "4", unit: "tbsp" },
      { name: "Cajun seasoning", amount: "2", unit: "tbsp" },
      { name: "Garlic powder", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Cook brown rice according to package directions.",
      "Preheat oven to 425°F (220°C).",
      "Season chicken with Cajun seasoning and garlic powder.",
      "Cube sweet potatoes and toss with olive oil.",
      "Arrange chicken and sweet potatoes on baking sheet.",
      "Bake for 20 minutes, add broccoli, bake 10 more minutes.",
      "Divide rice, chicken, and veggies into 5 containers.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    tags: ["meal-prep", "balanced", "batch-cooking"],
  },
  {
    id: "recipe-10",
    name: "Egg White Omelette",
    description:
      "Light and fluffy egg white omelette loaded with vegetables and feta.",
    category: "breakfast",
    calories: 280,
    protein: 28,
    carbs: 8,
    fat: 16,
    prepTime: 10,
    cookTime: 8,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      { name: "Egg whites", amount: "5", unit: "large" },
      { name: "Spinach", amount: "1", unit: "cup" },
      { name: "Mushrooms", amount: "0.5", unit: "cup" },
      { name: "Bell pepper", amount: "0.5", unit: "medium" },
      { name: "Feta cheese", amount: "2", unit: "tbsp" },
      { name: "Olive oil", amount: "1", unit: "tsp" },
    ],
    instructions: [
      "Whisk egg whites with salt and pepper.",
      "Sauté vegetables in olive oil until tender.",
      "Remove vegetables and set aside.",
      "Add egg whites to pan and cook until edges set.",
      "Add vegetables and cheese to one half.",
      "Fold omelette and cook 1 more minute.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
    tags: ["low-fat", "high-protein", "vegetarian"],
  },
  {
    id: "recipe-11",
    name: "Beef Stir Fry",
    description: "Quick and flavorful beef stir fry with colorful vegetables.",
    category: "dinner",
    calories: 480,
    protein: 38,
    carbs: 22,
    fat: 28,
    prepTime: 15,
    cookTime: 12,
    servings: 3,
    difficulty: "Medium",
    ingredients: [
      { name: "Beef sirloin", amount: "400", unit: "g" },
      { name: "Broccoli", amount: "2", unit: "cups" },
      { name: "Bell peppers", amount: "2", unit: "medium" },
      { name: "Snap peas", amount: "1", unit: "cup" },
      { name: "Soy sauce", amount: "3", unit: "tbsp" },
      { name: "Sesame oil", amount: "2", unit: "tbsp" },
      { name: "Ginger", amount: "1", unit: "tbsp" },
      { name: "Garlic", amount: "4", unit: "cloves" },
    ],
    instructions: [
      "Slice beef against the grain into thin strips.",
      "Mix soy sauce, ginger, and garlic for sauce.",
      "Heat sesame oil in wok over high heat.",
      "Stir fry beef for 2-3 minutes. Remove and set aside.",
      "Add vegetables and stir fry for 4-5 minutes.",
      "Return beef to wok with sauce.",
      "Toss everything together for 1 minute.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop",
    tags: ["quick", "high-protein", "asian"],
  },
  {
    id: "recipe-12",
    name: "Cottage Cheese Bowl",
    description:
      "Protein-rich cottage cheese topped with fruits and a drizzle of honey.",
    category: "snack",
    calories: 250,
    protein: 24,
    carbs: 28,
    fat: 6,
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      { name: "Cottage cheese", amount: "1", unit: "cup" },
      { name: "Pineapple chunks", amount: "0.5", unit: "cup" },
      { name: "Walnuts", amount: "2", unit: "tbsp" },
      { name: "Honey", amount: "1", unit: "tbsp" },
      { name: "Cinnamon", amount: "0.25", unit: "tsp" },
    ],
    instructions: [
      "Add cottage cheese to a bowl.",
      "Top with pineapple chunks.",
      "Sprinkle with chopped walnuts.",
      "Drizzle honey over the top.",
      "Finish with a dash of cinnamon.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    tags: ["no-cook", "high-protein", "quick"],
  },
];

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
