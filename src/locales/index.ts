import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import enNavigation from './en/navigation.json';
import enPortfolio from './en/portfolio.json';

import ruCommon from './ru/common.json';
import ruNavigation from './ru/navigation.json';
import ruPortfolio from './ru/portfolio.json';

const resources = {
    en: {
        common: enCommon,
        navigation: enNavigation,
        portfolio: enPortfolio,
    },
    ru: {
        common: ruCommon,
        navigation: ruNavigation,
        portfolio: ruPortfolio,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        defaultNS: 'common',
        ns: ['common', 'navigation', 'portfolio'],

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },
    });

export default i18n;