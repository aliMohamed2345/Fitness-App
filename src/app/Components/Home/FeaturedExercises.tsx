import { demoExercises } from "@/app/utils/data";
import MainHomeHeader from "./MainHomeHeader";

const FeaturedExercises = () => {
  const featuredExercises = demoExercises.slice(0, 4);
  return (
    <section className="container mx-auto px-4 mt-16">
      <MainHomeHeader
        title="Featured Exercises"
        description="Popular movements to get started"
        url="/exercises"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredExercises.map((exercise, index) => (
          // <ExerciseCard
          //   key={exercise.exerciseId}
          //   exercise={exercise}
          //   index={index}
          // />
          <div key={index}>{exercise.bodyPart}</div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedExercises;
