import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import huTranslations from "./translations/hu.json";
import enTranslations from "./translations/en.json";

type Language = "hu" | "en";

type Translations = typeof huTranslations;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string | string[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  hu: huTranslations,
  en: enTranslations,
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from localStorage, default to 'hu'
    const saved = localStorage.getItem("language") as Language;
    return saved && (saved === "hu" || saved === "en") ? saved : "hu";
  });

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, params?: Record<string, string | number>): string | string[] => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to Hungarian if key not found
        value = translations.hu;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    // Return array if value is an array
    if (Array.isArray(value)) {
      return value;
    }

    // Return string if value is a string
    if (typeof value === "string") {
      // Replace parameters
      if (params) {
        return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
          return params[paramKey]?.toString() || match;
        });
      }
      return value;
    }

    // Fallback: return key if value is not string or array
    return key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
