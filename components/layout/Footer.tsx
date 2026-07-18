"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

const NAV = [
  "journey",
  "experience",
  "skills",
  "projects",
  "certificates",
  "languages",
  "contact",
] as const;

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  const labels: Record<(typeof NAV)[number], string> = {
    journey: dict.nav.journey,
    experience: dict.nav.experience,
    skills: dict.nav.skills,
    projects: dict.nav.projects,
    certificates: dict.nav.certificates,
    languages: dict.nav.languages,
    contact: dict.nav.contact,
  };

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent-dim font-mono text-sm font-semibold text-accent">
                {personal.initials}
              </span>
              <span className="font-mono text-sm font-medium text-text-primary">
                {personal.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              {dict.footer.tagline}
            </p>
            <p className="mt-3 font-mono text-xs text-text-muted">
              {dict.footer.hobbies}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {labels[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-text-muted">
            © {year} {personal.name}. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/impressum"
              className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
            >
              {dict.footer.impressum}
            </Link>
            <span className="font-mono text-xs text-text-muted">
              {dict.footer.builtWith}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
