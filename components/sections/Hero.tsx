"use client";

import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <HeroBackdrop />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:gap-8">
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Status eyebrow */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-dim px-3 py-1.5 font-mono text-xs text-accent-bright"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {dict.hero.status}
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 font-mono text-sm text-text-secondary"
            >
              {personal.name}
              <span className="mx-2 text-text-muted">·</span>
              {dict.hero.role}
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              <span className="text-text-primary">{dict.hero.headlineLead} </span>
              <span className="bg-gradient-to-r from-accent-bright to-accent bg-clip-text text-transparent">
                {dict.hero.headlineHighlight}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {dict.hero.subline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#projects" variant="primary">
                {dict.hero.ctaProjects}
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                {dict.hero.ctaContact}
              </ButtonLink>
              <ButtonLink
                href={personal.resumeFile}
                download={personal.resumeDownloadName}
                variant="ghost"
              >
                <Download className="h-4 w-4" />
                {dict.hero.ctaResume}
              </ButtonLink>
            </motion.div>
          </motion.div>

          {/* Monogram */}
          <div className="order-first flex justify-center md:order-none md:justify-end">
            <Monogram size={200} />
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#journey"
        aria-label={dict.hero.scroll}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-text-muted transition-colors hover:text-accent md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>{dict.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* dotted grid */}
      <div className="bg-grid mask-radial-fade absolute inset-0" />
      {/* accent glow top-right */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[90px]" />

      {/* floating data ticks */}
      {FLOATERS.map((f, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs text-accent/25"
          style={{ left: f.left, top: f.top }}
          animate={{ y: [0, -12, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          }}
        >
          {f.text}
        </motion.span>
      ))}
    </div>
  );
}

const FLOATERS = [
  { text: "01010", left: "8%", top: "22%", dur: 7, delay: 0 },
  { text: "{ }", left: "18%", top: "68%", dur: 8, delay: 1.2 },
  { text: "SELECT *", left: "72%", top: "18%", dur: 9, delay: 0.6 },
  { text: "df.head()", left: "84%", top: "72%", dur: 7.5, delay: 1.8 },
  { text: "π", left: "60%", top: "82%", dur: 8.5, delay: 0.9 },
];
