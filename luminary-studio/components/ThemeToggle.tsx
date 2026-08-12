"use client";

import { useTheme } from "@/lib/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-white/10 border border-white/20 dark:border-white/10 flex items-center cursor-pointer overflow-hidden"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute w-5 h-5 rounded-full flex items-center justify-center text-xs"
        animate={{
          x: theme === "dark" ? 2 : 26,
          backgroundColor: theme === "dark" ? "#22d3ee" : "#a855f7",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}
