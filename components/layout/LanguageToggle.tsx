"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const options = ["de", "en"] as const;

export function LanguageToggle() {
  const { lang, setLang, dict } = useLanguage();

  return (
    <div
      role="group"
      aria-label={dict.langToggle.label}
      className="relative flex items-center rounded-full border border-border bg-surface-2 p-0.5 font-mono text-xs"
    >
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            className={cn(
              "relative z-10 rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors",
              active ? "text-[#04110f]" : "text-text-secondary hover:text-text-primary",
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {opt}
          </button>
        );
      })}
    </div>
  );
}
