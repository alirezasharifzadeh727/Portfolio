"use client";

import { motion } from "motion/react";
import { Target, GitBranch, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects, type Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import { viewportOnce } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow={dict.sections.projectsEyebrow}
          title={dict.sections.projectsTitle}
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { dict, t } = useLanguage();

  return (
    <AnimatedCard
      featured={project.featured}
      className={cn(
        "flex flex-col",
        project.featured && "md:col-span-2",
      )}
    >
      {/* Terminal-style header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        </div>
        <div className="flex items-center gap-2">
          {project.code && (
            <span className="font-mono text-xs text-text-muted">{project.code}</span>
          )}
          {project.featured && (
            <Badge variant="accent" className="gap-1">
              <Star className="h-3 w-3" />
              {dict.projects.featured}
            </Badge>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-text-primary">
        {t(project.title)}
      </h3>
      <p className="mt-1.5 text-sm text-accent-bright">{t(project.tagline)}</p>

      <div
        className={cn(
          "mt-5 grid gap-5",
          project.featured && "md:grid-cols-2",
        )}
      >
        {/* Problem */}
        <div>
          <CaseLabel icon={<Target className="h-3.5 w-3.5" />}>
            {dict.projects.problem}
          </CaseLabel>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {t(project.problem)}
          </p>

          <CaseLabel icon={<Sparkles className="h-3.5 w-3.5" />} className="mt-5">
            {dict.projects.outcome}
          </CaseLabel>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {t(project.outcome)}
          </p>
        </div>

        {/* Approach steps */}
        <div>
          <CaseLabel icon={<GitBranch className="h-3.5 w-3.5" />}>
            {dict.projects.approach}
          </CaseLabel>
          <ol className="mt-2 space-y-2">
            {project.approach.map((step, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
              >
                <span className="mt-0.5 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t(step)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
        {project.tools.map((tool) => (
          <Badge key={tool}>{tool}</Badge>
        ))}
      </div>
    </AnimatedCard>
  );
}

function CaseLabel({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent",
        className,
      )}
    >
      {icon}
      {children}
    </div>
  );
}
