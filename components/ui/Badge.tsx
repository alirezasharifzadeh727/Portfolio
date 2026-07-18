import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight transition-colors",
        variant === "default" &&
          "border-border bg-surface-2 text-text-secondary",
        variant === "accent" &&
          "border-accent/30 bg-accent-dim text-accent-bright",
        className,
      )}
    >
      {children}
    </span>
  );
}
