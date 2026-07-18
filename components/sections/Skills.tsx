"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { skills, softSkills, tierLabels } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, viewportOnce } from "@/lib/motion-variants";

export function Skills() {
  const { dict, t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow={dict.sections.skillsEyebrow}
          title={dict.sections.skillsTitle}
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Technical skill bars */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="divide-y divide-border"
          >
            {skills.map((skill, i) => {
              const tier = tierLabels[skill.tier];
              return (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  tierLabel={t({ de: tier.de, en: tier.en })}
                  level={tier.level}
                  evidence={t(skill.evidence)}
                  evidenceLabel={dict.skills.evidenceLabel}
                  index={i}
                />
              );
            })}
          </motion.div>

          {/* Soft skills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
              {dict.sections.skillsSoftTitle}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {softSkills.map((s, i) => (
                <Badge key={i} className="px-4 py-2 text-sm">
                  {t(s)}
                </Badge>
              ))}
            </div>

            {/* tier legend */}
            <div className="mt-10 rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {t({ de: "Skala", en: "Scale" })}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                {(["grundlagen", "fortgeschritten", "praxis"] as const).map(
                  (key) => (
                    <li key={key} className="flex items-center gap-3">
                      <span className="flex gap-1">
                        {[1, 2, 3].map((n) => (
                          <span
                            key={n}
                            className={
                              n <= tierLabels[key].level
                                ? "h-1.5 w-5 rounded-full bg-accent"
                                : "h-1.5 w-5 rounded-full bg-surface-2"
                            }
                          />
                        ))}
                      </span>
                      <span>{t({ de: tierLabels[key].de, en: tierLabels[key].en })}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
