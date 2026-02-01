import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.sv;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "sv";
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored === "en" || stored === "sv" ? stored : "sv";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "sv" ? "sv" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "sv" ? "sv" : "en";
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
