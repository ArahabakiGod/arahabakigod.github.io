import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguageStore } from '../stores/languageStore';
import { useEffect } from 'react';

export const useTranslation = (namespace?: string) => {
    const { t, i18n } = useI18nTranslation(namespace);
    const { currentLanguage } = useLanguageStore();

    useEffect(() => {
        const handleLanguageChanged = (lng: string) => {
            if (lng !== currentLanguage) {
                useLanguageStore.setState({ currentLanguage: lng });
            }
        };

        i18n.on('languageChanged', handleLanguageChanged);

        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [currentLanguage, i18n]);

    const changeLanguage = async (lng: string) => {
        console.log("changeLanguage called:", lng);
        await i18n.changeLanguage(lng);
    };

    const getCurrentLanguage = () => {
        return i18n.language || currentLanguage || 'en';
    };

    return {
        t,
        i18n,
        currentLanguage: getCurrentLanguage(),
        changeLanguage,
        isLanguage: (lng: string) => getCurrentLanguage() === lng,
    };
};

export const useCommonTranslation = () => useTranslation('common');
export const useNavigationTranslation = () => useTranslation('navigation');
export const usePortfolioTranslation = () => useTranslation('portfolio');