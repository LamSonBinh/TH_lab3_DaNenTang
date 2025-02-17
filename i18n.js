// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './language/en.json';
import vi from './language/vi.json';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
