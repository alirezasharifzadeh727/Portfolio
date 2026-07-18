import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#04110f] hover:bg-accent-bright hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.6)] active:translate-y-px",
  ghost:
    "border border-border-strong text-text-primary hover:border-accent/50 hover:text-accent-bright hover:bg-accent-dim active:translate-y-px",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
