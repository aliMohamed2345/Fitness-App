"use client";
import Hero from "./Components/Home/Hero";
import Stats from "./Components/Home/Stats";
import Features from "./Components/Home/Features";
import WorkoutProgram from "./Components/Home/WorkoutProgram";
import FeaturedExercises from "./Components/Home/FeaturedExercises";
import QuickActions from "./Components/Home/QuickActions";
import CTA from "./Components/Home/CTA";
const Home = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <Hero />
      <Stats />
      <Features />
      <WorkoutProgram />
      <FeaturedExercises />
      <QuickActions />
      <CTA />
    </div>
  );
};

export default Home;
