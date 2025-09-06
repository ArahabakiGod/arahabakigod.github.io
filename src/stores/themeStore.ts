import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'light',

            setTheme: (theme: Theme) => {
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
                set({ theme });
            },

            toggleTheme: () => {
                const currentTheme = get().theme;
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                get().setTheme(newTheme);
            },
        }),
        {
            name: 'theme-storage',
            onRehydrateStorage: () => (state) => {
                if (state) {
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(state.theme);
                }
            },
        }
    )
);

export const useInitializeTheme = () => {
    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        if (!localStorage.getItem('theme-storage')) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        } else {
            setTheme(theme);
        }
    }, []);
};