const LoadingExerciseId = ({length=3}:{length?:number}) => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border bg-card animate-pulse" />

        <div className="flex flex-col gap-6">
          <div className="h-8 sm:h-12 w-3/4 bg-muted rounded-md animate-pulse" />

          <div className="grid grid-cols-2 gap-4">
            <div className="h-24 rounded-2xl bg-muted p-5 animate-pulse" />
            <div className="h-24 rounded-2xl bg-muted p-5 animate-pulse" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-6 w-1/2 bg-muted rounded-md animate-pulse" />
            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-20 rounded-full bg-accent animate-pulse" />
              <div className="h-8 w-24 rounded-full bg-accent animate-pulse" />
              <div className="h-8 w-16 rounded-full bg-accent animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-6 w-1/3 bg-muted rounded-md animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-accent rounded-md animate-pulse" />
              <div className="h-4 w-5/6 bg-accent rounded-md animate-pulse" />
              <div className="h-4 w-2/3 bg-accent rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="h-8 w-1/3 bg-muted rounded-md animate-pulse mb-6" />

        <div className="flex flex-col gap-4 mb-10">
          {Array.from({ length }).map((_, i) => (
            <div
              key={i}
              className="flex gap-4 items-center justify-start rounded-xl border border-border bg-card p-4 animate-pulse"
            >
              <div className="min-w-10 h-10 rounded-full bg-accent animate-pulse" />
              <div className="h-4 w-5/6 bg-accent rounded-md animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingExerciseId;
