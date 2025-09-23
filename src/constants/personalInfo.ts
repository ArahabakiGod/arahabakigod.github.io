export interface PersonalInfo {
    fullName: string;
    firstName: string;
    lastName: string;
    location: string;
    timezone: string;
    experience: {
        years: number;
        startYear: number;
    };
    avatar: string;
    resume: {
        en: string;
        ru: string;
    };
    availability: 'available' | 'busy' | 'not-available';
    birthDate: string;
}

export const personalInfo: PersonalInfo = {
    fullName: "Stepan Ustinov",
    firstName: "Stepan",
    lastName: "Ustinov",
    location: "Minsk, Belarus",
    timezone: "GMT+3",
    experience: {
        years: 3,
        startYear: 2022
    },
    avatar: "/images/avatar.jpg",
    resume: {
        en: "/documents/stepan-ustinov-resume-en.pdf",
        ru: "/documents/stepan-ustinov-resume-ru.pdf"
    },
    availability: "available",
    birthDate: "2001-12-25"
};

export const getExperienceText = (t: (key: string, options?: any) => string): string => {
    const { years, startYear } = personalInfo.experience;
    return t('personal.experience', {
        count: years,
        years,
        startYear
    });
};

export const getAge = (): number => {
    const birthDate = new Date(personalInfo.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

export const getResumeLink = (language: 'en' | 'ru' = 'en'): string => {
    return personalInfo.resume[language];
};

export const getAvailabilityStatus = (t: (key: string) => string): string => {
    return t(`personal.availability.${personalInfo.availability}`);
};

export const getLocationText = (t: (key: string, options?: any) => string): string => {
    return t('personal.location', { location: personalInfo.location });
};

export const getTimezoneText = (t: (key: string, options?: any) => string): string => {
    return t('personal.timezone', { timezone: personalInfo.timezone });
};