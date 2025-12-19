"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Statisch importierte Übersetzungen
import deMain from "@/i18n/locales/de/main.json";
import enMain from "@/i18n/locales/en/main.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    debug: true,
    resources: {
      de: { main: deMain },
      en: { main: enMain },
    },
    ns: ["main"],         // Namespace auf 'main' setzen
    defaultNS: "main",
    interpolation: { escapeValue: false },
    react: { useSuspense: false }, // kein Suspense nötig bei statischem Import
  });

export default i18n;
