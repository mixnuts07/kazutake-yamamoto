import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en.json";
import japanese from "./ja.json";

const resources = {
  en: { translation: english },
  ja: { translation: japanese },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
