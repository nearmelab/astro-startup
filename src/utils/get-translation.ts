import i18next from "i18next";
import ar from "../../public/locales/ar/translation.json";
import en from "../../public/locales/en/translation.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
} as const;

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
});

export const getTranslation = (lang: string) => {
  return i18next.getFixedT(lang);
};
