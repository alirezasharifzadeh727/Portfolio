export interface GoetheModule {
  module: { de: string; en: string };
  score: number;
  max: number;
}

export interface LanguageEntry {
  language: { de: string; en: string };
  level: { de: string; en: string };
  note?: { de: string; en: string };
}

export const goetheModules: GoetheModule[] = [
  { module: { de: "Lesen", en: "Reading" }, score: 93, max: 100 },
  { module: { de: "Hören", en: "Listening" }, score: 80, max: 100 },
  { module: { de: "Schreiben", en: "Writing" }, score: 98, max: 100 },
  { module: { de: "Sprechen", en: "Speaking" }, score: 68, max: 100 },
];

export const goetheMeta = {
  title: { de: "Goethe-Zertifikat B2 · bestanden", en: "Goethe Certificate B2 · passed" },
  examDate: "20.10.2025",
  issued: { de: "ausgestellt in Maskat, 02.11.2025", en: "issued in Muscat, 02.11.2025" },
};

export const languages: LanguageEntry[] = [
  {
    language: { de: "Deutsch", en: "German" },
    level: { de: "B2 · Goethe-zertifiziert", en: "B2 · Goethe-certified" },
  },
  {
    language: { de: "Englisch", en: "English" },
    level: { de: "B2", en: "B2" },
  },
  {
    language: { de: "Persisch", en: "Persian" },
    level: { de: "Muttersprache", en: "Native" },
  },
];
