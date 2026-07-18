"use client";

import { motion } from "motion/react";
import { viewportOnce } from "@/lib/motion-variants";

export interface ScoreBar {
  label: string;
  value: number;
  max: number;
}

/**
 * Single-series horizontal bar chart (one accent hue across all bars).
 * Values are direct-labeled at the bar tip.
 */
export function ScoreBarChart({
  data,
  maxLabel,
}: {
  data: ScoreBar[];
  maxLabel: string;
}) {
  return (
    <div className="flex flex-col gap-4" role="img" aria-label="Goethe B2 module scores">
      {data.map((bar, i) => {
        const pct = (bar.value / bar.max) * 100;
        return (
          <div key={bar.label} className="grid grid-cols-[5.5rem_1fr] items-center gap-3 sm:grid-cols-[6.5rem_1fr]">
            <span className="font-mono text-sm text-text-secondary">{bar.label}</span>
            <div className="relative h-6">
              <div className="absolute inset-0 rounded-md bg-surface-2" />
              <motion.div
                className="absolute inset-y-0 left-0 flex items-center justify-end rounded-md bg-gradient-to-r from-accent/60 to-accent pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.1,
                }}
              >
                <span className="font-mono text-xs font-semibold text-[#04110f]">
                  {bar.value}
                </span>
              </motion.div>
            </div>
          </div>
        );
      })}
      <p className="pl-[5.5rem] font-mono text-xs text-text-muted sm:pl-[6.5rem]">
        {maxLabel}
      </p>
    </div>
  );
}
