"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { goetheModules, goetheMeta, languages } from "@/data/languages";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ScoreBarChart } from "@/components/ui/ScoreBarChart";
import { fadeInUp, viewportOnce } from "@/lib/motion-variants";

export function Languages() {
  const { dict, t } = useLanguage();

  return (
    <section id="languages" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="06"
          eyebrow={dict.sections.languagesEyebrow}
          title={dict.sections.languagesTitle}
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Goethe module chart */}
          <AnimatedCard standalone>
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
              {dict.languages.goetheModulesTitle}
            </h3>
            <div className="mt-6">
              <ScoreBarChart
                data={goetheModules.map((m) => ({
                  label: t(m.module),
                  value: m.score,
                  max: m.max,
                }))}
                maxLabel={dict.languages.max}
              />
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-mono text-sm text-text-primary">
                {t(goetheMeta.title)}
              </p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {goetheMeta.examDate} · {t(goetheMeta.issued)}
              </p>
            </div>
          </AnimatedCard>

          {/* Language levels */}
          <motion.ul
            className="flex flex-col gap-3"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {languages.map((l) => (
              <motion.li key={l.language.en} variants={fadeInUp}>
                <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30">
                  <span className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-accent" />
                    <span className="font-medium text-text-primary">
                      {t(l.language)}
                    </span>
                  </span>
                  <span className="font-mono text-sm text-accent-bright">
                    {t(l.level)}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
