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
                console.log("setLanguage called with:", lang);
                i18n.changeLanguage(lang);
                set({ currentLanguage: lang });
                console.log("New lang: " + lang + "/ Stored lang: " + localStorage.getItem('i18nextLng'));
            },

            initializeLanguage: () => {
                const i18nLang = i18n.language || 'en';
                const storedLang = get().currentLanguage;

                console.log("storedLang: " + storedLang + "/ i18nLang: " + i18nLang);

                if (storedLang !== i18nLang) {
                    set({ currentLanguage: i18nLang });
                    console.log("Synchronized with i18next:", i18nLang);
                }
            },
        }),
        {
            name: 'language-storage',
            onRehydrateStorage: () => (state) => {
                return new Promise<void>((resolve) => {
                    if (state) {
                        const storedLang = state.currentLanguage;
                        const i18nLang = i18n.language || 'en';

                        console.log("onRehydrate - storedLang:", storedLang, "i18nLang:", i18nLang);

                        if (storedLang && storedLang !== i18nLang) {
                            i18n.changeLanguage(storedLang).then(() => {
                                console.log("Language rehydrated:", storedLang);
                                resolve();
                            });
                        } else {
                            resolve();
                        }
                    } else {
                        resolve();
                    }
                });
            },
        }
    )
);

export const useInitializeLanguage = () => {
    const { initializeLanguage } = useLanguageStore();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            initializeLanguage();
        }, 100);

        return () => clearTimeout(timer);
    }, [initializeLanguage]);
};