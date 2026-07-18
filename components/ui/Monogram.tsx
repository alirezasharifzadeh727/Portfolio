"use client";

import { motion } from "motion/react";
import { personal } from "@/data/personal";

/**
 * Animated "AS" monogram used in place of a portrait. A rounded-square frame
 * draws itself in, with a soft pulsing glow, and corner ticks that read as a
 * data node / chart frame.
 */
export function Monogram({ size = 168 }: { size?: number }) {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-3xl bg-accent/20 blur-2xl"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full"
        aria-hidden
      >
        {/* frame */}
        <motion.rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx="20"
          fill="none"
          stroke="url(#monoStroke)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.6 }}
        />
        {/* corner ticks */}
        <g stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
          <line x1="20" y1="6" x2="20" y2="12" />
          <line x1="80" y1="88" x2="80" y2="94" />
          <line x1="6" y1="80" x2="12" y2="80" />
          <line x1="88" y1="20" x2="94" y2="20" />
        </g>
        <defs>
          <linearGradient id="monoStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* initials */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center font-mono text-5xl font-semibold tracking-tight text-text-primary"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        {personal.initials}
      </motion.span>
    </motion.div>
  );
}
