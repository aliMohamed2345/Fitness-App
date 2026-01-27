// import { motion } from 'framer-motion';
// import { Heart, Plus, Dumbbell } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Exercise } from '@/types/exercise';
// import { useWorkoutStore } from '@/stores/workoutStore';
// import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom';
// import Image from 'next/image';
// interface ExerciseCardProps {
//   exercise: Exercise;
//   index?: number;
//   showAddButton?: boolean;
// }

// // Placeholder images for exercises without valid GIFs
// const EXERCISE_PLACEHOLDERS: Record<string, string> = {
//   chest: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
//   back: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop',
//   shoulders: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=400&fit=crop',
//   'upper arms': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
//   'upper legs': 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=400&fit=crop',
//   waist: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
//   cardio: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop',
//   default: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
// };

// export function ExerciseCard({ exercise, index = 0, showAddButton = true }: ExerciseCardProps) {
//   const { toggleFavorite, isFavorite, addExerciseToWorkout, currentWorkout } = useWorkoutStore();
//   const favorited = isFavorite(exercise.exerciseId);
//   const isInWorkout = currentWorkout.some((e) => e.exerciseId === exercise.exerciseId);

//   const getDifficultyBadge = () => {
//     if (['body weight', 'assisted'].includes(exercise.equipment)) {
//       return <Badge variant="beginner">Beginner</Badge>;
//     }
//     if (['barbell', 'olympic barbell', 'trap bar'].includes(exercise.equipment)) {
//       return <Badge variant="advanced">Advanced</Badge>;
//     }
//     return <Badge variant="intermediate">Intermediate</Badge>;
//   };

//   // Get appropriate image URL
//   const getImageUrl = () => {
//     if (exercise.gifUrl && exercise.gifUrl.startsWith('http')) {
//       return exercise.gifUrl;
//     }
//     return EXERCISE_PLACEHOLDERS[exercise.bodyPart] || EXERCISE_PLACEHOLDERS.default;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.05, duration: 0.3 }}
//     >
//       <Card className="group overflow-hidden hover:shadow-elevated hover:border-primary/50 transition-all duration-300">
//         {/* Image Container */}
//         <Link to={`/exercise/${exercise.exerciseId}`}>
//           <div className="relative aspect-square bg-muted overflow-hidden">
//             <Image
        
//               src={getImageUrl()}
//               alt={exercise.name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               loading="lazy"
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.src = EXERCISE_PLACEHOLDERS[exercise.bodyPart] || EXERCISE_PLACEHOLDERS.default;
//               }}
//             />
//             {/* Overlay gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
//             {/* Favorite button */}
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleFavorite(exercise.exerciseId);
//               }}
//               className={cn(
//                 'absolute top-3 right-3 p-2 rounded-full transition-all',
//                 favorited
//                   ? 'bg-destructive/20 text-destructive'
//                   : 'bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground'
//               )}
//             >
//               <Heart className={cn('w-5 h-5', favorited && 'fill-current')} />
//             </button>

//             {/* Difficulty badge */}
//             <div className="absolute top-3 left-3">
//               {getDifficultyBadge()}
//             </div>
//           </div>
//         </Link>

//         <CardContent className="p-4">
//           <Link to={`/exercise/${exercise.exerciseId}`}>
//             <h3 className="font-bold text-sm capitalize line-clamp-2 mb-2 group-hover:text-primary transition-colors">
//               {exercise.name}
//             </h3>
//           </Link>

//           <div className="flex flex-wrap gap-1.5 mb-3">
//             <Badge variant="electric" className="text-[10px]">
//               {exercise.target}
//             </Badge>
//             <Badge variant="muted" className="text-[10px]">
//               {exercise.bodyPart}
//             </Badge>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
//               <Dumbbell className="w-3.5 h-3.5" />
//               <span className="capitalize">{exercise.equipment}</span>
//             </div>

//             {showAddButton && (
//               <Button
//                 variant={isInWorkout ? 'secondary' : 'electric'}
//                 size="sm"
//                 className="h-8 text-xs"
//                 onClick={() => addExerciseToWorkout(exercise)}
//                 disabled={isInWorkout}
//               >
//                 <Plus className="w-3.5 h-3.5 mr-1" />
//                 {isInWorkout ? 'Added' : 'Add'}
//               </Button>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }
