"use client";

import { Building2, MapPin, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const { dict, t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow={dict.sections.experienceEyebrow}
          title={dict.sections.experienceTitle}
        />

        <AnimatedCard standalone featured className="max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-text-primary">
                {t(experience.role)}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-accent" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  {experience.location}
                </span>
              </div>
            </div>
            <span className="shrink-0 rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text-secondary">
              {experience.period}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {t(experience.companyDescription)}
          </p>

          <ul className="mt-6 space-y-3">
            {experience.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-text-secondary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t(b)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
            {experience.skillsGained.map((s, i) => (
              <Badge key={i} variant="accent">
                {t(s)}
              </Badge>
            ))}
          </div>
        </AnimatedCard>
      </Container>
    </section>
  );
}
