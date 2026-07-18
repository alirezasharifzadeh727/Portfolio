"use client";

import { motion } from "motion/react";
import { viewportOnce } from "@/lib/motion-variants";

/**
 * Honest skill bar: fill reflects a 3-tier scale (1=Grundlagen, 2=Fortgeschritten,
 * 3=Praxis) — not a fabricated percentage. Tier label is shown explicitly.
 */
export function SkillBar({
  name,
  tierLabel,
  level,
  evidence,
  evidenceLabel,
  index = 0,
}: {
  name: string;
  tierLabel: string;
  level: number; // 1..3
  evidence: string;
  evidenceLabel: string;
  index?: number;
}) {
  const pct = (level / 3) * 100;

  return (
    <div className="py-4">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="font-mono text-sm font-medium text-text-primary">
          {name}
        </span>
        <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-accent">
          {tierLabel}
        </span>
      </div>

      {/* track */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-surface-2">
        {/* segment ticks at 1/3 and 2/3 */}
        <span className="absolute left-1/3 top-0 h-full w-px bg-background/70" aria-hidden />
        <span className="absolute left-2/3 top-0 h-full w-px bg-background/70" aria-hidden />
        <motion.span
          className="block h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1 + index * 0.08,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-text-muted">
        <span className="text-text-secondary">{evidenceLabel}:</span> {evidence}
      </p>
    </div>
  );
}
