"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

/**
 * Terminal-style card shell with a hover glow.
 * Uses fadeInUp as its variant so it can be dropped inside a staggered group,
 * or animate on its own with `standalone`.
 */
export function AnimatedCard({
  children,
  className,
  featured = false,
  standalone = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  standalone?: boolean;
}) {
  const standaloneProps = standalone
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  return (
    <motion.div
      variants={fadeInUp}
      {...standaloneProps}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-surface p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.15),0_18px_40px_-18px_rgba(45,212,191,0.35)]",
        featured
          ? "border-accent/30 shadow-[0_0_0_1px_rgba(45,212,191,0.12),0_20px_60px_-30px_rgba(45,212,191,0.4)]"
          : "border-border",
        className,
      )}
    >
      {/* top hairline that lights up on hover */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300",
          featured
            ? "via-accent/60 opacity-100"
            : "via-accent/50 opacity-0 group-hover:opacity-100",
        )}
      />
      {children}
    </motion.div>
  );
}
