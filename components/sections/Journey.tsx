"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { journey } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { viewportOnce } from "@/lib/motion-variants";

export function Journey() {
  const { dict, t } = useLanguage();

  return (
    <section id="journey" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          eyebrow={dict.sections.journeyEyebrow}
          title={dict.sections.journeyTitle}
        />

        <motion.ol
          className="relative"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {journey.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              date={entry.date}
              title={t(entry.title)}
              description={t(entry.description)}
              isLast={i === journey.length - 1}
              side={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
