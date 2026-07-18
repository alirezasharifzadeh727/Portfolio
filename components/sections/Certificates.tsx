"use client";

import { motion } from "motion/react";
import { ExternalLink, Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { certificates, type Certificate } from "@/data/certificates";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import { viewportOnce } from "@/lib/motion-variants";

export function Certificates() {
  const { dict } = useLanguage();
  const professional = certificates.find((c) => c.isProfessionalCertificate);
  const rest = certificates.filter((c) => !c.isProfessionalCertificate);

  return (
    <section id="certificates" className="scroll-mt-16 py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="05"
          eyebrow={dict.sections.certificatesEyebrow}
          title={dict.sections.certificatesTitle}
        />

        {professional && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-6"
          >
            <ProfessionalCard cert={professional} />
          </motion.div>
        )}

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {rest.map((cert) => (
            <CertCard key={cert.id} cert={cert} verifyLabel={dict.certificates.verify} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ProfessionalCard({ cert }: { cert: Certificate }) {
  const { dict, t } = useLanguage();
  return (
    <AnimatedCard featured className="overflow-hidden">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent-dim">
            <Award className="h-6 w-6 text-accent" />
          </span>
          <div>
            <Badge variant="accent" className="mb-2">
              {dict.certificates.professional}
            </Badge>
            <h3 className="text-lg font-semibold text-text-primary">
              {t(cert.title)}
            </h3>
            <p className="mt-1 font-mono text-xs text-text-secondary">
              {cert.provider} · {cert.period}
            </p>
          </div>
        </div>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-accent/40 bg-accent-dim px-4 py-2.5 font-mono text-sm text-accent-bright transition-colors hover:border-accent hover:bg-accent/20"
          >
            <BadgeCheck className="h-4 w-4" />
            {dict.certificates.verify}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {t(cert.description)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {cert.skills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </AnimatedCard>
  );
}

function CertCard({
  cert,
  verifyLabel,
}: {
  cert: Certificate;
  verifyLabel: string;
}) {
  const { t } = useLanguage();
  return (
    <AnimatedCard className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-2">
        {cert.code ? (
          <span className="font-mono text-xs text-accent">{cert.code}</span>
        ) : (
          <span className="font-mono text-xs text-text-muted">{cert.provider}</span>
        )}
        <span className="font-mono text-xs text-text-muted">{cert.period}</span>
      </div>

      <h3 className="mt-2 text-base font-semibold leading-snug text-text-primary">
        {t(cert.title)}
      </h3>
      <p className="mt-1 font-mono text-xs text-text-secondary">{cert.provider}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {t(cert.description)}
      </p>

      {cert.scoreLabel && (
        <div className="mt-3">
          <Badge variant="accent">{cert.scoreLabel}</Badge>
        </div>
      )}

      <div className="mt-auto pt-4">
        {cert.credentialId && (
          <p className="font-mono text-[0.7rem] text-text-muted">{cert.credentialId}</p>
        )}
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-bright"
          >
            {verifyLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </AnimatedCard>
  );
}
