"use client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import DropdownMenu from "./DropDownMenu";
import {
  muscleList,
  equipmentList,
  levelList,
  ForceList,
  mechanicList,
} from "@/app/utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import {
  EquipmentListProps,
  levelFilterProps,
  muscleListProps,
  forceListProps,
  mechanicListProps,
} from "@/app/types/exercise";
import { QueryProps } from "@/app/types/exercise";
import { backdropVariants, modalVariants } from "@/app/utils/animationVariants";

const Modal = () => {
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<QueryProps | null>(null);
  const router = useRouter();

  const handleQueryParams = () => {
    const params = new URLSearchParams();
    if (query?.muscle) params.append("muscle", query.muscle);
    if (query?.equipments) params.append("equipments", query.equipments);
    if (query?.force) params.append("force", query.force);
    if (query?.level) params.append("level", query.level);
    if (query?.mechanic) params.append("mechanic", query.mechanic);
    router.push(`/exercises?${params.toString()}`);
    setIsModelOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModelOpen(true)}
        className="group relative flex items-center justify-center rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-2.5 shadow-card text-muted-foreground cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary/40 hover:shadow-glow-primary hover:scale-105"
      >
        <CiFilter
          size={22}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsModelOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 "
            >
              <div className="relative rounded-3xl border border-border/60 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-auto">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
                  <h2 className="text-lg font-semibold text-foreground">
                    Filter Exercises
                  </h2>

                  <button
                    onClick={() => setIsModelOpen(false)}
                    className="rounded-xl p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground cursor-pointer"
                  >
                    <IoClose size={20} />
                  </button>
                </div>

                <div className="px-3 py-4 sm:px-6 sm:py-8 flex flex-col gap-7">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Muscle
                    </label>
                    <DropdownMenu
                      label="Select Muscle"
                      options={muscleList.map((m) => m.replaceAll("_", " "))}
                      onChange={(value) =>
                        setQuery((prev) => ({
                          ...prev,
                          muscle: value as muscleListProps,
                        }))
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Equipment
                    </label>
                    <DropdownMenu
                      label="Select equipment"
                      options={equipmentList.map((e) => e.replaceAll("_", " "))}
                      onChange={(value) =>
                        setQuery((prev) => ({
                          ...prev,
                          equipments: value as EquipmentListProps,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Level
                    </label>
                    <DropdownMenu
                      label="Select Level"
                      options={levelList.map((l) => l.replaceAll("_", " "))}
                      onChange={(value) =>
                        setQuery((prev) => ({
                          ...prev,
                          level: value as levelFilterProps,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Force
                    </label>
                    <DropdownMenu
                      label="Select Force"
                      options={ForceList.map((f) => f.replaceAll("_", " "))}
                      onChange={(value) =>
                        setQuery((prev) => ({
                          ...prev,
                          force: value as forceListProps,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Mechanic
                    </label>
                    <DropdownMenu
                      label="Select mechanic"
                      options={mechanicList.map((m) => m.replaceAll("_", " "))}
                      onChange={(value) =>
                        setQuery((prev) => ({
                          ...prev,
                          mechanic: value as mechanicListProps,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={handleQueryParams}
                    className="group relative w-full overflow-hidden rounded-2xl border border-primary/40 bg-primary/10 px-5 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
                      Apply Filters
                      <BiSearch className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
