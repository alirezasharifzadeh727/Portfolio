"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function TimelineItem({
  date,
  title,
  description,
  isLast = false,
  side = "left",
}: {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  side?: "left" | "right";
}) {
  return (
    <motion.li variants={fadeInUp} className="relative">
      {/* Mobile / stacked layout: line on the left */}
      <div className="flex gap-5 md:hidden">
        <div className="flex flex-col items-center">
          <span className="relative mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/30" />
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" />
          </span>
          {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
        </div>
        <div className={cn("pb-10", isLast && "pb-0")}>
          <TimelineCardBody date={date} title={title} description={description} />
        </div>
      </div>

      {/* Desktop alternating layout — every child gets an explicit column
          so there is no auto-placement ambiguity around the center line. */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
        {/* left cell */}
        <div className="col-start-1 text-right">
          {side === "left" && (
            <TimelineCardBody
              date={date}
              title={title}
              description={description}
              align="right"
            />
          )}
        </div>
        {/* center line */}
        <div className="col-start-2 flex flex-col items-center">
          <span className="relative mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/30" />
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" />
          </span>
          {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
        </div>
        {/* right cell */}
        <div className="col-start-3">
          {side === "right" && (
            <TimelineCardBody
              date={date}
              title={title}
              description={description}
              align="left-constrained"
            />
          )}
        </div>
      </div>
    </motion.li>
  );
}

function TimelineCardBody({
  date,
  title,
  description,
  align = "left",
}: {
  date: string;
  title: string;
  description: string;
  align?: "left" | "right" | "left-constrained";
}) {
  return (
    <div
      className={cn(
        "pb-10",
        align === "right" && "md:ml-auto md:max-w-sm",
        align === "left-constrained" && "md:max-w-sm",
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
        {date}
      </span>
      <h3 className="mt-1.5 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}
