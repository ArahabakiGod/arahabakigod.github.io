import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguageStore } from '../stores/languageStore';

export const useTranslation = (namespace?: string) => {
    const { t, i18n } = useI18nTranslation(namespace);
    const { currentLanguage, setLanguage } = useLanguageStore();

    const changeLanguage = (lng: string) => {
        setLanguage(lng);
    };

    const getCurrentLanguage = () => currentLanguage || i18n.language;

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