import ExerciseCardLoading from "./ExerciseCardLoading";
const ExerciseLoadingGrid = ({ length = 10 }: { length?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 place-items-center">
      {Array.from({ length: length }).map((_, i) => (
        <ExerciseCardLoading key={i} />
      ))}
    </div>
  );
};

export default ExerciseLoadingGrid;
