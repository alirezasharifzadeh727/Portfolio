"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Lang } from "./dictionaries";

const STORAGE_KEY = "portfolio-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  dict: Dictionary;
  /** Convenience: pick the correct string from a { de, en } pair. */
  t: <T>(pair: { de: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-lang");
    if (attr === "en" || attr === "de") return attr;
  }
  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore write failures (private mode, etc.)
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "de" ? "en" : "de")),
    [],
  );

  const dict = dictionaries[lang];
  const t = useCallback(
    <T,>(pair: { de: T; en: T }): T => pair[lang],
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, dict, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/**
 * Inline script (runs before hydration) that reads the persisted language
 * and stamps it onto <html data-lang> so the first paint matches the choice.
 * Mirrors the standard dark-mode-flash-prevention pattern.
 */
export const languageInitScript = `(() => {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var lang = stored === 'en' || stored === 'de' ? stored : 'de';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  } catch (e) {
    document.documentElement.setAttribute('data-lang', 'de');
  }
})();`;
