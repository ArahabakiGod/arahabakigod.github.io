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
                localStorage.setItem('i18nextLng', lang);
            },

            initializeLanguage: () => {
                const storedLang = localStorage.getItem('i18nextLng');
                const i18nLang = i18n.language;
                const targetLang = storedLang || i18nLang || 'en';

                if (targetLang !== i18nLang) {
                    i18n.changeLanguage(targetLang);
                }

                set({ currentLanguage: targetLang });
            },
        }),
        {
            name: 'i18nextLng',
            onRehydrateStorage: () => (state) => {
                if (state) {
                    const storedLang = state.currentLanguage;
                    const i18nLang = i18n.language;

                    if (storedLang && storedLang !== i18nLang) {
                        i18n.changeLanguage(storedLang);
                    }

                    state.currentLanguage = storedLang || i18nLang || 'en';
                }
            },
        }
    )
);

export const useInitializeLanguage = () => {
    const { initializeLanguage } = useLanguageStore();

    React.useEffect(() => {
        const initLang = () => {
            initializeLanguage();
        };

        if (i18n.isInitialized){
            initLang();
        } else {
            i18n.on('initialized', initLang);
            return () => i18n.off('initialized', initLang);
        }
    }, [initializeLanguage]);
};