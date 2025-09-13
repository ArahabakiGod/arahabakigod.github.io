import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../locales';

interface LanguageState {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
    initializeLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            currentLanguage: 'en',

            setLanguage: (lang: string) => {
                i18n.changeLanguage(lang);
                set({ currentLanguage: lang });
            },

            initializeLanguage: () => {
                const currentLang = i18n.language || 'en';
                set({ currentLanguage: currentLang });
            },
        }),
        {
            name: 'i18nextLng',
            onRehydrateStorage: () => (state) => {
                if (state) {
                    const storedLang = state.currentLanguage;
                    const i18nLang = i18n.language;

                    if (storedLang !== i18nLang) {
                        i18n.changeLanguage(storedLang);
                    }
                }
            },
        }
    )
);

export const useInitializeLanguage = () => {
    const { initializeLanguage } = useLanguageStore();

    React.useEffect(() => {
        initializeLanguage();
    }, [initializeLanguage]);
};