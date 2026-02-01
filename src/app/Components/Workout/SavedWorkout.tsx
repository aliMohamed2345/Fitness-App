import { FiEdit } from "react-icons/fi";

interface SavedWorkoutProps {
  name: string;
  exercises: string[];
}

const SavedWorkout = ({ name, exercises }: SavedWorkoutProps) => {
  return (
    <div className="flex flex-col gap-3 p-5 border-border border hover:border-primary rounded-2xl hover:bg-accent transition-all group">
      <div className="flex justify-between">
        <p className="text-xl text-foreground font-bold">{name}</p>
        <span className="p-1.5 font-bold rounded-full bg-primary/40 text-primary text-xs">
          {exercises.length} exercises
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {exercises.slice(0,3).map((exercise, i) => (
          <span
            className="bg-accent p-1.5 rounded-full text-muted-foreground text-xs group-hover:bg-background "
            key={i}
          >
            {exercise}
          </span>
        ))}
      </div>
      <div className="flex gap-5">
        <button className="p-2 rounded-lg flex items-center justify-center gap-5 font-bold hover:bg-muted  cursor-pointer transition-all w-full bg-linear-to-br from-primary to-secondary hover:border-primary text-white hover:scale-105">
          Edit
          <FiEdit className="inline ml-2" />
        </button>
        <button className="p-2 rounded-lg flex items-center justify-center gap-5 font-bold cursor-pointer text-destructive transition-all w-full border border-destructive hover:bg-destructive hover:text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SavedWorkout;
