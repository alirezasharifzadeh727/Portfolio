"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, viewportOnce } from "@/lib/motion-variants";

export function Contact() {
  const { dict } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="07"
          eyebrow={dict.sections.contactEyebrow}
          title={dict.sections.contactTitle}
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <p className="text-lg leading-relaxed text-text-secondary">
            {dict.contact.lead}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Email card */}
            <div className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <Mail className="h-4 w-4" />
                {dict.contact.emailLabel}
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="mt-3 block break-all font-mono text-sm text-text-primary transition-colors hover:text-accent-bright"
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary transition-colors hover:text-accent"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" />
                    {dict.contact.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    {dict.contact.copy}
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <LinkedinIcon className="h-4 w-4" />
                {dict.contact.linkedin}
              </div>
              <span className="mt-3 break-all font-mono text-sm text-text-primary transition-colors group-hover:text-accent-bright">
                {personal.linkedinLabel}
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 font-mono text-xs text-text-secondary transition-colors group-hover:text-accent">
                {dict.contact.linkedin}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
