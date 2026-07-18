export interface JourneyEntry {
  id: string;
  date: string;
  title: { de: string; en: string };
  description: { de: string; en: string };
}

export const journey: JourneyEntry[] = [
  {
    id: "school",
    date: "2013 – 2017",
    title: {
      de: "Erste Schritte in der IT",
      en: "First steps into IT",
    },
    description: {
      de: "Am Gymnasium erste Berührung mit Programmierung — QuickBasic, Visual Basic und später C++. Die Freude am analytischen Denken und am gemeinsamen Debuggen mit Mitschülern legte den Grundstein.",
      en: "During secondary school, first contact with programming — QuickBasic, Visual Basic, and later C++. The enjoyment of analytical thinking and debugging together with classmates planted the seed.",
    },
  },
  {
    id: "logistics",
    date: "2020 – 2025",
    title: {
      de: "Logistik für finanzielle Unabhängigkeit",
      en: "Logistics for financial independence",
    },
    description: {
      de: "Nach dem Abitur zunächst eine Tätigkeit als Logistiker, um den eigenen Lebensunterhalt zu sichern. Dabei entstand nebenbei ein Gespür für strukturierte Daten — von Excel-Auswertungen bis zur Digitalisierung von Lieferterminen.",
      en: "After finishing school, work as a logistics coordinator to become financially independent. Along the way, a feel for structured data grew — from Excel analysis to digitizing delivery schedules.",
    },
  },
  {
    id: "pivot",
    date: "2025",
    title: {
      de: "Die bewusste Entscheidung",
      en: "The deliberate pivot",
    },
    description: {
      de: "Nach finanzieller Stabilität die klare Entscheidung: nicht dauerhaft in der Logistik bleiben, sondern der eigentlichen Leidenschaft folgen — IT und Datenanalyse.",
      en: "Once financially stable, a clear decision: not to stay in logistics long-term, but to pursue the real passion — IT and data analytics.",
    },
  },
  {
    id: "reskilling",
    date: "02.2025 – 02.2026",
    title: {
      de: "Gezielte Weiterbildung",
      en: "Focused reskilling",
    },
    description: {
      de: "Eine strukturierte Kursreihe bei IBM/edX — von Datenbankgrundlagen über Excel und SQL bis Python — mündete im IBM Data Analyst Professional Certificate. Parallel dazu Java-Grundlagen zur Erweiterung der Programmierkenntnisse.",
      en: "A structured course sequence with IBM/edX — from database fundamentals through Excel and SQL to Python — culminating in the IBM Data Analyst Professional Certificate. Alongside that, Java fundamentals to broaden programming skills.",
    },
  },
  {
    id: "now",
    date: "2026",
    title: {
      de: "Auf dem Weg zur Ausbildung",
      en: "On the way to an apprenticeship",
    },
    description: {
      de: "Jetzt auf der Suche nach einer Ausbildung als Fachinformatiker für Daten- und Prozessanalyse, um das Gelernte in der Praxis zu vertiefen und langfristig in der IT Fuß zu fassen.",
      en: "Now looking for an apprenticeship as an IT Specialist for Data and Process Analysis, to deepen these skills in practice and build a long-term career in IT.",
    },
  },
];
