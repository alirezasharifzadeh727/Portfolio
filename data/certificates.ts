export interface Certificate {
  id: string;
  title: { de: string; en: string };
  provider: string;
  code?: string;
  period: string;
  description: { de: string; en: string };
  skills: string[];
  scoreLabel?: string;
  verifyUrl?: string;
  credentialId?: string;
  isProfessionalCertificate?: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "ibm-professional-certificate",
    isProfessionalCertificate: true,
    title: {
      de: "IBM Data Analyst — Professional Certificate",
      en: "IBM Data Analyst — Professional Certificate",
    },
    provider: "edX · IBM",
    period: "02.2026",
    description: {
      de: "Gesamtzertifikat für den erfolgreichen Abschluss aller Kurse des IBM Data Analyst Programms.",
      en: "Overall credential for completing all courses of the IBM Data Analyst program.",
    },
    skills: ["Python", "SQL", "Excel", "Cognos", "Dashboards"],
    verifyUrl: "https://credentials.edx.org/credentials/25e5ec64b95c43728e575f94b207e43c/",
    credentialId: "25e5ec64b95c43728e575f94b207e43c",
  },
  {
    id: "da0321",
    code: "DA0321",
    title: {
      de: "Data Analytics & Visualization Capstone",
      en: "Data Analytics & Visualization Capstone",
    },
    provider: "edX · IBM",
    period: "01.2026 – 02.2026",
    description: {
      de: "Abschlussprojekt: Datenerhebung, Bereinigung, Analyse und interaktive Dashboards.",
      en: "Capstone project: data collection, cleaning, analysis, and interactive dashboards.",
    },
    skills: ["Python", "APIs", "Web Scraping", "Dashboards"],
    verifyUrl: "https://courses.edx.org/certificates/3226415818704cf0b7d48a8c03473d52",
  },
  {
    id: "dv0101en",
    code: "DV0101EN",
    title: {
      de: "Visualizing Data with Python",
      en: "Visualizing Data with Python",
    },
    provider: "edX · IBM",
    period: "11.2025 – 01.2026",
    description: {
      de: "Statische und interaktive Visualisierungen sowie Visualisierung von Geodaten.",
      en: "Static and interactive visualizations, plus geospatial data visualization.",
    },
    skills: ["Python", "Matplotlib", "Folium"],
    verifyUrl: "https://courses.edx.org/certificates/ae6864beb6284dbe98ae52e6dc0fbe11",
  },
  {
    id: "da0101en",
    code: "DA0101EN",
    title: {
      de: "Analyzing Data with Python",
      en: "Analyzing Data with Python",
    },
    provider: "edX · IBM",
    period: "11.2025 – 01.2026",
    description: {
      de: "Datenaufbereitung, explorative Analyse und Grundlagen des maschinellen Lernens.",
      en: "Data preparation, exploratory analysis, and machine-learning basics.",
    },
    skills: ["Python", "Pandas", "Machine Learning"],
    verifyUrl: "https://courses.edx.org/certificates/2148c5244a944c4ba7285d7053bf4b88",
  },
  {
    id: "py0220en",
    code: "PY0220EN",
    title: {
      de: "Python for Data Science Project",
      en: "Python for Data Science Project",
    },
    provider: "edX · IBM",
    period: "10.2025 – 11.2025",
    description: {
      de: "Anwendung von Python in datengetriebenen Projekten.",
      en: "Applying Python in data-driven projects.",
    },
    skills: ["Python"],
    verifyUrl: "https://courses.edx.org/certificates/8589915b06e14d74a49d95e2bb7c9bb9",
  },
  {
    id: "db0201en",
    code: "DB0201EN",
    title: {
      de: "SQL for Data Science",
      en: "SQL for Data Science",
    },
    provider: "edX · IBM",
    period: "10.2025 – 11.2025",
    description: {
      de: "Abfragen, Filtern und Aggregieren von Daten sowie Arbeiten mit mehreren Tabellen.",
      en: "Querying, filtering, and aggregating data, plus working across multiple tables.",
    },
    skills: ["SQL"],
    verifyUrl: "https://courses.edx.org/certificates/8e9c035319104cc3b4e98f6bea91867f",
  },
  {
    id: "py0101en",
    code: "PY0101EN",
    title: {
      de: "Python Basics for Data Science",
      en: "Python Basics for Data Science",
    },
    provider: "edX · IBM",
    period: "09.2025 – 10.2025",
    description: {
      de: "Grundlegende Programmierung und Datenverarbeitung mit Pandas und NumPy.",
      en: "Basic programming and data processing with Pandas and NumPy.",
    },
    skills: ["Python", "Pandas", "NumPy"],
    verifyUrl: "https://courses.edx.org/certificates/00f1f3255eed417d8c174f4768c6a6f0",
  },
  {
    id: "dv0130",
    code: "DV0130",
    title: {
      de: "Data Visualization & Dashboards with Excel and Cognos",
      en: "Data Visualization & Dashboards with Excel and Cognos",
    },
    provider: "edX · IBM",
    period: "06.2025 – 07.2025",
    description: {
      de: "Erstellung interaktiver Dashboards und fortgeschrittener Diagramme.",
      en: "Building interactive dashboards and advanced charts.",
    },
    skills: ["Excel", "Cognos", "Dashboards"],
    verifyUrl: "https://courses.edx.org/certificates/5f703f923bf8402ca7dc73954daa1a83",
  },
  {
    id: "da0130",
    code: "DA0130",
    title: {
      de: "Analyzing Data with Excel",
      en: "Analyzing Data with Excel",
    },
    provider: "edX · IBM",
    period: "05.2025 – 06.2025",
    description: {
      de: "Datenbereinigung und -analyse sowie Arbeiten mit Pivot-Tabellen.",
      en: "Data cleaning and analysis, plus working with pivot tables.",
    },
    skills: ["Excel", "Pivot-Tabellen"],
    verifyUrl: "https://courses.edx.org/certificates/7f176e0521204bfe9d38006200b43891",
  },
  {
    id: "da0100",
    code: "DA0100",
    title: {
      de: "Data Analytics Basics for Everyone",
      en: "Data Analytics Basics for Everyone",
    },
    provider: "edX · IBM",
    period: "02.2025 – 03.2025",
    description: {
      de: "Datenbankgrundlagen, ETL-Prozesse und Überblick über Big-Data-Technologien.",
      en: "Database fundamentals, ETL processes, and a big-data technology overview.",
    },
    skills: ["ETL", "Big Data"],
    verifyUrl: "https://courses.edx.org/certificates/2e168182becd464b87a1486ebaedc83c",
  },
  {
    id: "java-alison",
    title: {
      de: "Basics and Structure of Java Programming",
      en: "Basics and Structure of Java Programming",
    },
    provider: "Alison",
    period: "10.2025 – 11.2025",
    description: {
      de: "Java-Grundlagen: Klassen, Methoden, Schleifen, Arrays und Programmstruktur.",
      en: "Java fundamentals: classes, methods, loops, arrays, and program structure.",
    },
    skills: ["Java"],
    scoreLabel: "88%",
    credentialId: "Alison ID: 54137457",
  },
  {
    id: "goethe-b2",
    title: {
      de: "Goethe-Zertifikat B2 (Deutsch)",
      en: "Goethe Certificate B2 (German)",
    },
    provider: "Goethe-Institut",
    period: "10.2025",
    description: {
      de: "Nachweis der selbstständigen Sprachverwendung auf Niveau B2 in allen vier Modulen.",
      en: "Proof of independent German-language proficiency at B2 level across all four modules.",
    },
    skills: ["Deutsch B2"],
    credentialId: "Nr. 1103-AB2A-0002524078",
  },
];
