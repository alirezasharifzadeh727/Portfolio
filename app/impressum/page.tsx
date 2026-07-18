"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

export default function ImpressumPage() {
  const { dict } = useLanguage();
  const i = dict.impressum;

  return (
    <main className="min-h-svh py-20">
      <Container className="max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {i.back}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {i.title}
        </h1>
        <p className="mt-2 font-mono text-sm text-text-muted">{i.subtitle}</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
              {i.responsibleTitle}
            </h2>
            <div className="mt-3 space-y-1 text-text-secondary">
              <p className="text-text-primary">{personal.name}</p>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
              {i.contactTitle}
            </h2>
            <div className="mt-3 flex flex-col gap-1 text-text-secondary">
              <a
                href={`mailto:${personal.email}`}
                className="font-mono text-sm transition-colors hover:text-accent"
              >
                {personal.email}
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm transition-colors hover:text-accent"
              >
                {personal.linkedinLabel}
              </a>
            </div>
          </section>

          <p className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-text-muted">
            {i.note}
          </p>
        </div>
      </Container>
    </main>
  );
}
