"use client";

import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenuProps } from "@/app/types/ui";
import {
  dropdownVariants,
  optionVariants,
} from "@/app/utils/animationVariants";

export default function DropdownMenu({
  label = "Select option",
  options = [],
  value,
  onChange,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o === currentValue);

  return (
    <div ref={ref} className="relative w-full">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen((p) => !p)}
        className="w-full cursor-pointer flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-glow-primary focus:outline-none focus:border-primary focus:shadow-glow-primary"
      >
        <span className="text-sm font-medium">
          {selected ? selected : label}
        </span>

        <BiChevronDown
          size={18}
          className={`transition-all duration-300 ${
            isOpen
              ? "rotate-180 text-primary"
              : "rotate-0 text-muted-foreground"
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute mt-2 w-full z-50 rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-elevated overflow-hidden origin-top"
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((option) => {
                const active = option === currentValue;

                return (
                  <motion.button
                    key={option}
                    variants={optionVariants}
                    onClick={() => {
                      setCurrentValue(option);
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`w-full cursor-pointer text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
