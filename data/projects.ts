export interface Project {
  id: string;
  featured?: boolean;
  code?: string;
  title: { de: string; en: string };
  tagline: { de: string; en: string };
  problem: { de: string; en: string };
  approach: { de: string; en: string }[];
  outcome: { de: string; en: string };
  tools: string[];
}

export const projects: Project[] = [
  {
    id: "capstone",
    featured: true,
    code: "DA0321",
    title: {
      de: "Datenanalyse- & Visualisierungs-Capstone",
      en: "Data Analytics & Visualization Capstone",
    },
    tagline: {
      de: "End-to-End-Datenpipeline — von der Rohquelle bis zum interaktiven Dashboard",
      en: "End-to-end data pipeline — from raw source to interactive dashboard",
    },
    problem: {
      de: "Aus verstreuten, unstrukturierten externen Datenquellen entscheidungsreife Erkenntnisse gewinnen.",
      en: "Turn scattered, unstructured external data sources into decision-ready insight.",
    },
    approach: [
      {
        de: "Datenerhebung über APIs und Web-Scraping",
        en: "Data collection via APIs and web scraping",
      },
      {
        de: "Bereinigung und Normalisierung der Rohdaten",
        en: "Cleaning and normalization of the raw data",
      },
      {
        de: "Explorative Analyse und Mustererkennung",
        en: "Exploratory analysis and pattern recognition",
      },
      {
        de: "Visualisierung mit Python und Aufbau interaktiver Dashboards",
        en: "Visualization with Python and building interactive dashboards",
      },
    ],
    outcome: {
      de: "Eigenständig umgesetzte, vollständige Datenpipeline als Abschlussprojekt des IBM Data Analyst Zertifikats.",
      en: "A complete, independently delivered data pipeline as the capstone of the IBM Data Analyst certificate.",
    },
    tools: ["Python", "Pandas", "NumPy", "APIs", "Web Scraping", "Dashboards"],
  },
  {
    id: "python-ds",
    title: {
      de: "Python für Data Science",
      en: "Python for Data Science",
    },
    tagline: {
      de: "Von Grundlagen bis zur eigenständigen Datenanalyse",
      en: "From fundamentals to independent data analysis",
    },
    problem: {
      de: "Eine solide, praxisnahe Grundlage in Python für datengetriebene Aufgaben aufbauen.",
      en: "Build a solid, practical Python foundation for data-driven work.",
    },
    approach: [
      {
        de: "Programmiergrundlagen mit Pandas und NumPy",
        en: "Programming fundamentals with Pandas and NumPy",
      },
      {
        de: "Datenaufbereitung und explorative Analyse",
        en: "Data preparation and exploratory analysis",
      },
      {
        de: "Grundlagen des maschinellen Lernens",
        en: "Fundamentals of machine learning",
      },
    ],
    outcome: {
      de: "Drei aufeinander aufbauende IBM-Kurse, die in reale Datenprojekte übergingen.",
      en: "Three stacked IBM courses that fed directly into real data projects.",
    },
    tools: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
  {
    id: "sql-db",
    title: {
      de: "SQL & Datenbankgrundlagen",
      en: "SQL & Database Fundamentals",
    },
    tagline: {
      de: "Von ETL-Konzepten zur praktischen Abfrage mehrerer Tabellen",
      en: "From ETL concepts to querying across multiple tables",
    },
    problem: {
      de: "Daten verlässlich aus relationalen Quellen abfragen, filtern und verknüpfen.",
      en: "Reliably query, filter, and join data from relational sources.",
    },
    approach: [
      {
        de: "Datenbankgrundlagen, ETL-Prozesse und Big-Data-Überblick",
        en: "Database fundamentals, ETL processes, and a big-data overview",
      },
      {
        de: "Abfragen, Filtern und Aggregieren von Daten",
        en: "Querying, filtering, and aggregating data",
      },
      {
        de: "Verknüpfen mehrerer Tabellen mit Joins",
        en: "Joining multiple tables",
      },
    ],
    outcome: {
      de: "SQL als tragende Fähigkeit — direkt im Capstone-Projekt eingesetzt.",
      en: "SQL as a core skill — applied directly in the capstone project.",
    },
    tools: ["SQL", "ETL", "Datenbanken"],
  },
  {
    id: "dataviz",
    title: {
      de: "Datenvisualisierung & Dashboards",
      en: "Data Visualization & Dashboards",
    },
    tagline: {
      de: "Zahlen in klare, interaktive Geschichten übersetzen",
      en: "Turning numbers into clear, interactive stories",
    },
    problem: {
      de: "Analyseergebnisse so aufbereiten, dass sie für Entscheider sofort verständlich sind.",
      en: "Present analysis so that it is immediately understandable to decision-makers.",
    },
    approach: [
      {
        de: "Pivot-Analysen und fortgeschrittene Diagramme in Excel",
        en: "Pivot analysis and advanced charts in Excel",
      },
      {
        de: "Interaktive Dashboards mit Cognos",
        en: "Interactive dashboards with Cognos",
      },
      {
        de: "Statische, interaktive und Geo-Visualisierungen mit Python",
        en: "Static, interactive, and geospatial visualizations with Python",
      },
    ],
    outcome: {
      de: "Ein durchgängiger Werkzeugkasten für Visualisierung — von Excel über Cognos bis Python.",
      en: "A full visualization toolkit — from Excel through Cognos to Python.",
    },
    tools: ["Excel", "Cognos", "Python", "Matplotlib", "Folium"],
  },
];
