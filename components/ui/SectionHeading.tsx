"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/motion-variants";

export function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  /** two-digit section number, e.g. "02" */
  index: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span className="text-text-muted">{index}</span>
        <span className="h-px w-8 bg-accent/50" />
        <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
    </motion.div>
  );
}
