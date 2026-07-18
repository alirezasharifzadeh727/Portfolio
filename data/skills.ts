export type SkillTier = "grundlagen" | "fortgeschritten" | "praxis";

export interface Skill {
  name: string;
  tier: SkillTier;
  evidence: { de: string; en: string };
}

export const tierLabels: Record<SkillTier, { de: string; en: string; level: number }> = {
  grundlagen: { de: "Grundlagen", en: "Foundational", level: 1 },
  fortgeschritten: { de: "Fortgeschritten", en: "Intermediate", level: 2 },
  praxis: { de: "Praxiserfahrung", en: "Applied experience", level: 3 },
};

export const skills: Skill[] = [
  {
    name: "Excel / Microsoft 365",
    tier: "praxis",
    evidence: {
      de: "5 Jahre Berufspraxis + IBM-Kurs „Analyzing Data with Excel“",
      en: "5 years of professional practice + IBM course “Analyzing Data with Excel”",
    },
  },
  {
    name: "Python",
    tier: "fortgeschritten",
    evidence: {
      de: "Python Basics, Data Science Project, Analyzing Data with Python + Capstone",
      en: "Python Basics, Data Science Project, Analyzing Data with Python + Capstone",
    },
  },
  {
    name: "SQL",
    tier: "fortgeschritten",
    evidence: {
      de: "SQL for Data Science — angewandt im Capstone-Projekt",
      en: "SQL for Data Science — applied in the capstone project",
    },
  },
  {
    name: "Datenvisualisierung & Dashboards",
    tier: "fortgeschritten",
    evidence: {
      de: "Cognos & Python — statische, interaktive und Geo-Visualisierungen",
      en: "Cognos & Python — static, interactive, and geospatial visualizations",
    },
  },
  {
    name: "Java",
    tier: "grundlagen",
    evidence: {
      de: "Alison-Kurs „Basics and Structure of Java Programming“ (88 %)",
      en: "Alison course “Basics and Structure of Java Programming” (88%)",
    },
  },
];

export const softSkills: { de: string; en: string }[] = [
  { de: "Teamfähigkeit", en: "Teamwork" },
  { de: "Kommunikationsfähigkeit", en: "Communication" },
  { de: "Zuverlässigkeit", en: "Reliability" },
  { de: "Kreativität", en: "Creativity" },
  { de: "Analytisches Denken", en: "Analytical thinking" },
];
