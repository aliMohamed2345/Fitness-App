import { ExerciseCard } from "@/app/Components/Exercise/ExerciseCard";
import PageHeader from "@/app/Components/Exercise/PageHeader";
import SearchBar from "@/app/Components/Exercise/SearchBar";
const Exercises = () => {
  return (
    <div className="pt-20 mx-auto p-2">
      <PageHeader
        title="Exercise Library"
        description="Discover and master 150+ exercises for every muscle group"
      />
      <SearchBar />
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
      <ExerciseCard/>
    </div>
  );
};

export default Exercises;
