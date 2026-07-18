export interface ExperienceEntry {
  role: { de: string; en: string };
  company: string;
  companyDescription: { de: string; en: string };
  period: string;
  location: string;
  bullets: { de: string; en: string }[];
  skillsGained: { de: string; en: string }[];
}

export const experience: ExperienceEntry = {
  role: {
    de: "Logistiker",
    en: "Logistics Coordinator",
  },
  company: "HOUNAM GmbH",
  companyDescription: {
    de: "Ingenieurbüro für Energie-, Wasser- und Gasleitungsnetze sowie Pumpstationen im Großraum Hormozgan.",
    en: "Engineering firm for power, water, and gas pipeline networks and pump stations in the Hormozgan region.",
  },
  period: "03.2020 – 07.2025",
  location: "Bandar Abbas, Iran",
  bullets: [
    {
      de: "Planung, Budgetierung und Kostenkontrolle für Beschaffung und Lagerhaltung",
      en: "Planning, budgeting, and cost control for procurement and warehousing",
    },
    {
      de: "Auswahl von Lieferanten sowie Steuerung von Lager- und Verteilungsprozessen",
      en: "Vendor selection and management of warehouse and distribution operations",
    },
    {
      de: "Digitalisierung und strukturierte Verwaltung von Lieferterminen und Kundendaten",
      en: "Digitized and structured management of delivery schedules and customer data",
    },
    {
      de: "Datenanalyse und -aufbereitung mit Excel zur Unterstützung von Entscheidungen",
      en: "Data analysis and preparation in Excel to support decision-making",
    },
  ],
  skillsGained: [
    { de: "Excel", en: "Excel" },
    { de: "Datenstrukturierung", en: "Data Structuring" },
    { de: "Prozessplanung", en: "Process Planning" },
    { de: "Teamarbeit", en: "Teamwork" },
  ],
};
