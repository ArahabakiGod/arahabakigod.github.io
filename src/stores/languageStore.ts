import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../locales';

interface LanguageState {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            currentLanguage: 'en',
            setLanguage: (lang: string) => {
                i18n.changeLanguage(lang);
                set({ currentLanguage: lang });
            },
        }),
        {
            name: 'i18nextLng',
        }
    )
);