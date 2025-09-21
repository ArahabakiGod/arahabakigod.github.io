import React from "react";
import US from "country-flag-icons/react/3x2/US";
import RU from "country-flag-icons/react/3x2/RU";
// import DE from 'country-flag-icons/react/3x2/DE';


export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: React.ReactNode;
  countryCode: string;
}

export const availableLanguages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    countryCode: "US",
    flag: <US className="w-4 h-3 rounded-sm" />
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    countryCode: "RU",
    flag: <RU className="w-4 h-3 rounded-sm" />
  },
];

export const futureLanguages: Omit<Language, "flag">[] = [
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    countryCode: "DE"
  }
];

export const loadCountryFlag = async (
  countryCode: string
): Promise<React.ComponentType<any> | null> => {
  try {
    const flagModule = await import(
      `country-flag-icons/react/3x2/${countryCode}`
    );
    return flagModule.default;
  } catch (error) {
    console.warn(`Flag for country ${countryCode} not found`);
    return null;
  }
};

export const getLanguageByCode = (code: string): Language | undefined => {
  return availableLanguages.find((lang) => lang.code === code);
};

export const getDefaultLanguage = (): Language => {
  return availableLanguages[0];
};

export const getSupportedLanguageCodes = (): string[] => {
  return availableLanguages.map((lang) => lang.code);
};

export const isLanguageSupported = (code: string): boolean => {
  return getSupportedLanguageCodes().includes(code);
};

export const getLanguageDisplayName = (
  code: string,
  t: (key: string) => string
): string => {
  const language = getLanguageByCode(code);
  if (!language) return code.toUpperCase();

  const translationKey = `languages.${code}`;
  try {
    const translated = t(translationKey);
    return translated !== translationKey ? translated : language.nativeName;
  } catch {
    return language.nativeName;
  }
};

export const getCountryCodeByLanguage = (
  languageCode: string
): string | undefined => {
  const language = getLanguageByCode(languageCode);
  return language?.countryCode;
};
