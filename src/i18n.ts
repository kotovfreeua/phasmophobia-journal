import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "@/locales";

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  load: "languageOnly",
  resources
});

i18n.on("languageChanged", (lng) => document.documentElement.setAttribute("lang", lng));

document.documentElement.lang = i18n.language;

export default i18n;
