import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.use(HttpApi)
.init({
    lng: navigator.language,
    fallbackLng: ['de', 'en'], // Look through these languages and choose the first one that is supported
    debug: true,
    detection: {
        order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain']
    },
    backend: {
        loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { useSuspence: false }
});

export default i18n;