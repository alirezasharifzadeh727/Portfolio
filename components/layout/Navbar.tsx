"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { personal } from "@/data/personal";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

const SECTIONS = [
  "journey",
  "experience",
  "skills",
  "projects",
  "certificates",
  "languages",
  "contact",
] as const;

type SectionId = (typeof SECTIONS)[number];

export function Navbar() {
  const { dict } = useLanguage();
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels: Record<SectionId, string> = {
    journey: dict.nav.journey,
    experience: dict.nav.experience,
    skills: dict.nav.skills,
    projects: dict.nav.projects,
    certificates: dict.nav.certificates,
    languages: dict.nav.languages,
    contact: dict.nav.contact,
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label={personal.name}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent-dim font-mono text-sm font-semibold text-accent transition-colors group-hover:border-accent">
            {personal.initials}
          </span>
          <span className="hidden font-mono text-sm font-medium text-text-primary sm:inline">
            {personal.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative rounded-md px-3 py-2 font-mono text-sm transition-colors",
                  active === id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {navLabels[id]}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent shadow-[0_0_8px_1px_rgba(45,212,191,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:text-text-primary lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "h-px w-4 bg-current transition-transform",
                  menuOpen && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-current transition-transform",
                  menuOpen && "-translate-y-[3px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4 sm:px-8">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 font-mono text-sm transition-colors",
                      active === id
                        ? "bg-accent-dim text-accent"
                        : "text-text-secondary hover:bg-surface-2 hover:text-text-primary",
                    )}
                  >
                    {navLabels[id]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
