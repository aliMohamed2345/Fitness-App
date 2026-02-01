import Image from "next/image";
import { FiTarget } from "react-icons/fi";
import { LuDumbbell } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";

const dummyData = {
  bodyPart: "waist",
  equipment: "body weight",
  id: "0006",
  name: "alternate heel touchers",
  target: "abs",
  secondaryMuscles: ["obliques", "core", "hip flexors"],
  instructions: [
    "Lie flat on your back with your knees bent and feet flat on the ground.",
    "Extend your arms straight out to the sides, parallel to the ground.",
    "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
    "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
    "Continue alternating sides for the desired number of repetitions.",
  ],
  description:
    "Alternate heel touchers is a bodyweight exercise targeting the abdominal muscles, particularly the obliques. It involves lying on your back, lifting your shoulders, and reaching side to side to touch your heels, engaging your core throughout.",
  difficulty: "advanced",
  category: "strength",
};

const ExerciseId = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border shadow-card bg-card">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop"
            alt={dummyData.name}
            fill
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
            {dummyData.name}
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-transparent bg-card p-5 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-glow-primary">
              <FiTarget className="w-6 h-6 text-primary mb-3" />
              <div className="text-xs sm:text-base mb-1 text-muted-foreground font-bold">
                Target Muscle
              </div>
              <div className="font-bold capitalize text-sm sm:text-lg text-foreground">
                {dummyData.target}
              </div>
            </div>

            <div className="group rounded-2xl border border-secondary/20 bg-linear-to-br from-secondary/10 to-transparent bg-card p-5 shadow-card transition-all duration-300 hover:border-secondary/40 hover:shadow-glow-secondary">
              <LuDumbbell className="w-6 h-6 text-secondary mb-3" />
              <div className="text-xs sm:text-base mb-1 text-muted-foreground font-bold">
                Equipment
              </div>
              <div className="font-bold capitalize text-sm sm:text-lg text-foreground">
                {dummyData.equipment}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-foreground flex gap-2 items-center text-xl font-semibold">
              <SlEnergy className="w-5 h-5 text-destructive" />
              Secondary Muscles
            </h6>

            <div className="flex flex-wrap gap-2 ">
              {dummyData.secondaryMuscles.map((muscle) => (
                <span
                  key={muscle}
                  className="font-semibold text-muted-foreground border border-border px-3 py-1.5 rounded-full bg-accent/40 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all cursor-default"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="text-foreground flex gap-2 items-center text-xl font-semibold">
              <MdOutlineStickyNote2 className="w-5 h-5 text-destructive" />
              Description
            </h6>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {dummyData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-foreground">
          <CiCircleList className="text-destructive w-6 h-6" />
          Instructions
        </h2>

        <div className="flex flex-col gap-4 mb-10">
          {dummyData.instructions.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 items-center justify-start rounded-xl border border-border hover:border-primary bg-card p-4 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <span className="min-w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                {i + 1}
              </span>

              <p className="text-muted-foreground leading-relaxed font-bold text-sm sm:text-base">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseId;
