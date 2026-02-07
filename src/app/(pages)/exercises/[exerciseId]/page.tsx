"use client";

import { FiTarget } from "react-icons/fi";
import { LuDumbbell, LuPlay } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import { SiLevelsdotfyi } from "react-icons/si";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { MdOutlineOndemandVideo } from "react-icons/md";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ExercisesProps, videoProps } from "@/app/types/exercise";
import { ExerciseAPI, youtubeAPI } from "@/app/utils/fetchData";
import LoadingExerciseId from "@/app/Components/Exercise/LoadingExerciseId";
import InfoCard from "@/app/Components/Exercise/InfoCard";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/app/utils/animationVariants";
const dummyVideos = [
  {
    title: `Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber`,
    id: `dr_GAJZviR0`,
    thumbnails: [
      {
        url: `https://i.ytimg.com/vi/dr_GAJZviR0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YIkR5KbMQOxTcaRoIxBF9Vm_6w`,
        height: 270,
        width: 480,
      },
    ],
  },
  {
    id: `dr_GAJZviR0`,
    thumbnails: [
      {
        url: `https://i.ytimg.com/vi/dr_GAJZviR0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YIkR5KbMQOxTcaRoIxBF9Vm_6w`,
        height: 270,
        width: 480,
      },
    ],
  },
  {
    id: `dr_GAJZviR0`,
    thumbnails: [
      {
        url: `https://i.ytimg.com/vi/dr_GAJZviR0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YIkR5KbMQOxTcaRoIxBF9Vm_6w`,
        height: 270,
        width: 480,
      },
    ],
  },
];
const ExerciseId = () => {
  const { exerciseId }: { exerciseId: string } = useParams();

  const [exercise, setExercise] = useState<ExercisesProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState<videoProps[]>();
  const img = useSearchParams().get("img");

  console.log(videos);
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        setIsLoading(true);
        const res = await ExerciseAPI.getExerciseById(exerciseId);
        setExercise(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercise();
  }, [exerciseId]);

  useEffect(() => {
    if (!exercise?.name) return;

    const fetchYoutubeVideos = async () => {
      try {
        const res = await youtubeAPI.searchVideo(`${exercise.name} exercise`);
        setVideos(res?.data?.contents);
      } catch (err) {
        console.error(err);
      }
    };

    fetchYoutubeVideos();
  }, [exercise?.name]);

  if (isLoading) return <LoadingExerciseId />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 pb-16"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid lg:grid-cols-2 gap-12 items-center mb-16"
      >
        <motion.div
          variants={fadeUp}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-card"
        >
          <Image
            src={`${dummyVideos[0].thumbnails[0].url}`}
            alt={exercise?.name || ""}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
            {exercise?.name}
          </h1>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            <motion.div variants={fadeUp}>
              <InfoCard
                icon={<FiTarget size={24} />}
                label="Primary Muscle"
                value={exercise?.primaryMuscles?.[0]}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <InfoCard
                icon={<LuDumbbell size={24} />}
                label="Equipment"
                value={exercise?.equipment}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {exercise?.secondaryMuscles && exercise?.secondaryMuscles?.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
            <SlEnergy className="text-destructive" />
            Secondary Muscles
          </h2>

          <motion.div variants={stagger} className="flex flex-wrap gap-3">
            {exercise.secondaryMuscles.map((m: string) => (
              <motion.span
                key={m}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-border bg-accent/40 font-semibold text-sm hover:border-primary hover:text-primary transition"
              >
                {m}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>
      )}

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-14"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
          <CiCircleList className="text-primary" />
          Exercise Details
        </h2>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeUp}>
            <InfoCard
              label="Level"
              value={exercise?.level}
              icon={<SiLevelsdotfyi />}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <InfoCard
              label="Category"
              value={exercise?.category}
              icon={<BiSolidCategoryAlt />}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <InfoCard
              label="Force"
              value={exercise?.force}
              icon={<FaDumbbell />}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <InfoCard
              label="Mechanic"
              value={exercise?.mechanic}
              icon={<GiGymBag />}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-8">
          <CiCircleList className="text-destructive" />
          Instructions
        </h2>

        <motion.div variants={stagger} className="space-y-4">
          {exercise?.instructions?.map((step: string, i: number) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex gap-4 p-5 items-center text-sm sm:text-lg flex-col sm:flex-row text-center sm:text-left rounded-2xl border border-border bg-card hover:border-primary transition"
            >
              <div className="min-w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {i + 1}
              </div>

              <p className="text-muted-foreground font-semibold leading-relaxed">
                {step}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-14"
      >
        <h3 className="flex items-center gap-2 text-2xl font-bold mb-8">
          <MdOutlineOndemandVideo className="text-destructive" />
          Similar Videos
        </h3>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 group"
        >
          {dummyVideos?.map((video, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Link
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                className="relative block overflow-hidden rounded-xl"
              >
                <Image
                  src={video.thumbnails[0].url}
                  width={video.thumbnails[0].width}
                  height={video.thumbnails[0].height}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  alt={video.title ?? ""}
                />

                <div className="inset-0 absolute w-full h-full bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                  <LuPlay
                    size={40}
                    className="text-background border-4 border-background rounded-full p-1 scale-0 group-hover:scale-100 transition"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default ExerciseId;