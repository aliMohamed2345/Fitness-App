"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
// import {useState, useEffect} from 'react'
// Placeholder images for exercises without valid GIFs
// const EXERCISE_PLACEHOLDERS: Record<string, string> = {
//   chest:
//     "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
//   back: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop",
//   shoulders:
//     "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=400&fit=crop",
//   "upper arms":
//     "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
//   "upper legs":
//     "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=400&fit=crop",
//   waist:
//     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
//   cardio:
//     "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop",
//   default:
//     "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
// };
const dummyData = {
  bodyPart: "waist",
  equipment: "body weight",
  id: "0006",
  name: "alternate heel touchers",
  target: "abs",
  secondaryMuscles: ["obliques","core","hip flexors"],
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

export function ExerciseCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const difficultyColorStyle = () => {
    switch (dummyData.difficulty) {
      case "beginner":
        return "bg-primary/30 text-primary";
      case "intermediate":
        return "bg-secondary/30 text-secondary";
      case "advanced":
        return "bg-destructive/30 text-destructive";
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="w-75 rounded-2xl group bg-card shadow-card overflow-hidden border border-border hover:border-primary transition-all"
    >
      {/* IMAGE */}
      <div className="relative h-50 w-full">
        <Image
          src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop"
          alt={dummyData.name}
          fill
          className="object-cover"
          priority
        />

        <span
          className={`absolute top-3 left-3 rounded-full ${difficultyColorStyle()} px-3 py-1 text-xs font-semibold`}
        >
          {dummyData.difficulty.toUpperCase()}
        </span>

        <button
          onClick={() => setIsFavorite((prev) => !prev)}
          className="absolute cursor-pointer top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur"
        >
          {isFavorite ? (
            <IoMdHeart size={20} className="text-destructive" />
          ) : (
            <IoIosHeartEmpty size={20} className="text-destructive" />
          )}
        </button>
      </div>

      <div className="p-4 space-y-3">
        <Link
          href={`/exercises/${dummyData.id}`}
          className="text-base font-semibold text-card-foreground group-hover:text-primary transition cursor-pointer"
        >
          {dummyData.name}
        </Link>

        <div className="flex gap-2 flex-wrap">
          <span className="rounded-full bg-primary/30 px-3 py-1 text-xs font-medium text-primary">
            {dummyData.target}
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {dummyData.bodyPart}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">🏋️</span>
            {dummyData.equipment}
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer transition">
            <BiPlus size={16} />
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
}
