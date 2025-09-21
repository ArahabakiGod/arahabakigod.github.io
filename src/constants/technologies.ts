export interface Technology {
    id: string;
    nameKey: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    color?: string;
    descriptionKey?: string;
    icon?: string;
}

export interface TechStackItem {
    nameKey: string;
    color?: string;
}

export const footerTechnologies: TechStackItem[] = [
    {
        nameKey: "technologies.react",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
        nameKey: "technologies.typescript",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
        nameKey: "technologies.tailwind",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    },
    {
        nameKey: "technologies.vite",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
        nameKey: "technologies.i18next",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
        nameKey: "technologies.framerMotion",
        color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    },
];

export const fullTechnologyStack: Technology[] = [
    //FE
    {
        id: "react",
        nameKey: "technologies.react",
        category: "frontend",
        level: "expert",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.react"
    },
    {
        id: "typescript",
        nameKey: "technologies.typescript",
        category: "frontend",
        level: "advanced",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.typescript"
    },
    {
        id: "javascript",
        nameKey: "technologies.javascript",
        category: "frontend",
        level: "advanced",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        descriptionKey: "technologies.descriptions.javascript"
    },
    {
        id: "html",
        nameKey: "technologies.html",
        category: "frontend",
        level: "expert",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        descriptionKey: "technologies.descriptions.html"
    },
    {
        id: "css",
        nameKey: "technologies.css",
        category: "frontend",
        level: "advanced",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.css"
    },
    {
        id: "react-router",
        nameKey: "technologies.reactRouter",
        category: "frontend",
        level: "advanced",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        descriptionKey: "technologies.descriptions.reactRouter"
    },
    {
        id: "react-query",
        nameKey: "technologies.reactQuery",
        category: "frontend",
        level: "intermediate",
        color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
        descriptionKey: "technologies.descriptions.reactQuery"
    },
    {
        id: "axios",
        nameKey: "technologies.axios",
        category: "frontend",
        level: "advanced",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        descriptionKey: "technologies.descriptions.axios"
    },
    {
        id: "zustand",
        nameKey: "technologies.zustand",
        category: "frontend",
        level: "advanced",
        color: "bg-brown-100 text-brown-800 dark:bg-brown-900 dark:text-brown-200",
        descriptionKey: "technologies.descriptions.zustand"
    },
    {
        id: "redux",
        nameKey: "technologies.redux",
        category: "frontend",
        level: "intermediate",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        descriptionKey: "technologies.descriptions.redux"
    },
    {
        id: "material-ui",
        nameKey: "technologies.materialUi",
        category: "frontend",
        level: "advanced",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.materialUi"
    },
    {
        id: "tailwind",
        nameKey: "technologies.tailwind",
        category: "frontend",
        level: "expert",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
        descriptionKey: "technologies.descriptions.tailwind"
    },
    {
        id: "formik",
        nameKey: "technologies.formik",
        category: "frontend",
        level: "advanced",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.formik"
    },
    {
        id: "yup",
        nameKey: "technologies.yup",
        category: "frontend",
        level: "advanced",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        descriptionKey: "technologies.descriptions.yup"
    },
    {
        id: "i18next",
        nameKey: "technologies.i18next",
        category: "frontend",
        level: "advanced",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.i18next"
    },
    {
        id: "framer-motion",
        nameKey: "technologies.framerMotion",
        category: "frontend",
        level: "intermediate",
        color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
        descriptionKey: "technologies.descriptions.framerMotion"
    },
    //BE
    {
        id: "java",
        nameKey: "technologies.java",
        category: "backend",
        level: "intermediate",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        descriptionKey: "technologies.descriptions.java"
    },
    {
        id: "spring-boot",
        nameKey: "technologies.springBoot",
        category: "backend",
        level: "intermediate",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.springBoot"
    },
    {
        id: "spring-security",
        nameKey: "technologies.springSecurity",
        category: "backend",
        level: "intermediate",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.springSecurity"
    },
    {
        id: "spring-data",
        nameKey: "technologies.springData",
        category: "backend",
        level: "intermediate",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.springData"
    },
    {
        id: "hibernate",
        nameKey: "technologies.hibernate",
        category: "backend",
        level: "intermediate",
        color: "bg-brown-100 text-brown-800 dark:bg-brown-900 dark:text-brown-200",
        descriptionKey: "technologies.descriptions.hibernate"
    },
    {
        id: "rest-api",
        nameKey: "technologies.restApi",
        category: "backend",
        level: "advanced",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.restApi"
    },
    {
        id: "jwt",
        nameKey: "technologies.jwt",
        category: "backend",
        level: "advanced",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        descriptionKey: "technologies.descriptions.jwt"
    },
    //Other
    {
        id: "git",
        nameKey: "technologies.git",
        category: "tools",
        level: "advanced",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        descriptionKey: "technologies.descriptions.git"
    },
    {
        id: "docker",
        nameKey: "technologies.docker",
        category: "tools",
        level: "intermediate",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        descriptionKey: "technologies.descriptions.docker"
    },
    {
        id: "maven",
        nameKey: "technologies.maven",
        category: "tools",
        level: "beginner",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        descriptionKey: "technologies.descriptions.maven"
    },
    {
        id: "gradle",
        nameKey: "technologies.gradle",
        category: "tools",
        level: "beginner",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.gradle"
    },
    {
        id: "swagger",
        nameKey: "technologies.swagger",
        category: "tools",
        level: "intermediate",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        descriptionKey: "technologies.descriptions.swagger"
    },
    {
        id: "vite",
        nameKey: "technologies.vite",
        category: "tools",
        level: "advanced",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        descriptionKey: "technologies.descriptions.vite"
    }
];

export const getFrontendTechnologies = (): Technology[] =>
    fullTechnologyStack.filter(tech => tech.category === 'frontend');

export const getBackendTechnologies = (): Technology[] =>
    fullTechnologyStack.filter(tech => tech.category === 'backend');

export const getTechnologiesByCategory = (category: Technology['category']): Technology[] =>
    fullTechnologyStack.filter(tech => tech.category === category);

export const getTechnologiesByLevel = (level: Technology['level']): Technology[] =>
    fullTechnologyStack.filter(tech => tech.level === level);

export const getFooterTechnologies = (t: (key: string) => string): Array<{ name: string, color?: string }> =>
    footerTechnologies.map(tech => ({
        name: t(tech.nameKey),
        color: tech.color
    }));

export const getTranslatedTechnologies = (t: (key: string) => string): Array<Technology & { name: string, description?: string }> =>
    fullTechnologyStack.map(tech => ({
        ...tech,
        name: t(tech.nameKey),
        description: tech.descriptionKey ? t(tech.descriptionKey) : undefined
    }));