export interface Project {
    id: string;
    titleKey: string;
    descriptionKey: string;
    shortDescriptionKey: string;
    technologies: string[];
    category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
    status: 'completed' | 'in-progress' | 'planned';
    images: string[];
    links: {
        demo?: string;
        github?: string;
        figma?: string;
        other?: { nameKey: string; url: string; }[];
    };
    featuresKey: string[];
    challengesKey?: string[];
    startDate: string;
    endDate?: string;
    featured: boolean;
    company?: string;
}

export const projectsData: Project[] = [
    {
        id: "advertising-aggregator",
        titleKey: "projects.advertisingAggregator.title",
        descriptionKey: "projects.advertisingAggregator.description",
        shortDescriptionKey: "projects.advertisingAggregator.shortDescription",
        technologies: ["react", "material-ui", "jwt", "typescript"],
        category: "frontend",
        status: "completed",
        images: [
            "/projects/advertising-aggregator/dashboard.jpg",
            "/projects/advertising-aggregator/analytics.jpg",
            "/projects/advertising-aggregator/verification.jpg"
        ],
        links: {

        },
        featuresKey: [
            "projects.advertisingAggregator.features.analytics",
            "projects.advertisingAggregator.features.verification",
            "projects.advertisingAggregator.features.financial",
            "projects.advertisingAggregator.features.roleBasedUI",
            "projects.advertisingAggregator.features.errorHandling"
        ],
        challengesKey: [
            "projects.advertisingAggregator.challenges.realTimeStats",
            "projects.advertisingAggregator.challenges.multiPlatform",
            "projects.advertisingAggregator.challenges.performance"
        ],
        startDate: "2024-01",
        endDate: "2024-12",
        featured: true,
        company: "Starkad"
    },
    {
        id: "grace-bakery",
        titleKey: "projects.graceBakery.title",
        descriptionKey: "projects.graceBakery.description",
        shortDescriptionKey: "projects.graceBakery.shortDescription",
        technologies: ["react", "typescript", "material-ui", "tailwind", "react-router", "i18next", "formik", "yup", "axios"],
        category: "fullstack",
        status: "completed",
        images: [
            "/projects/grace-bakery/catalog.jpg",
            "/projects/grace-bakery/cart.jpg",
            "/projects/grace-bakery/admin.jpg"
        ],
        links: {

        },
        featuresKey: [
            "projects.graceBakery.features.productCatalog",
            "projects.graceBakery.features.cartSystem",
            "projects.graceBakery.features.multilingual",
            "projects.graceBakery.features.adminPanel",
            "projects.graceBakery.features.formValidation",
            "projects.graceBakery.features.imageUpload"
        ],
        challengesKey: [
            "projects.graceBakery.challenges.cartMerging",
            "projects.graceBakery.challenges.realTimeLanguage",
            "projects.graceBakery.challenges.performance"
        ],
        startDate: "2024-06",
        endDate: "2024-12",
        featured: true,
        company: "AIT"
    },
    {
        id: "portfolio-spa",
        titleKey: "projects.portfolioSpa.title",
        descriptionKey: "projects.portfolioSpa.description",
        shortDescriptionKey: "projects.portfolioSpa.shortDescription",
        technologies: ["react", "typescript", "tailwind", "framer-motion", "i18next", "vite"],
        category: "frontend",
        status: "in-progress",
        images: [
            "/projects/portfolio/hero.jpg",
            "/projects/portfolio/dark-theme.jpg",
            "/projects/portfolio/mobile.jpg"
        ],
        links: {
            demo: "https://your-portfolio.com",
            github: "https://github.com/ArahabakiGod/portfolio"
        },
        featuresKey: [
            "projects.portfolioSpa.features.responsive",
            "projects.portfolioSpa.features.themeSwitch",
            "projects.portfolioSpa.features.multilingual",
            "projects.portfolioSpa.features.animations",
            "projects.portfolioSpa.features.contactForm",
            "projects.portfolioSpa.features.performance"
        ],
        challengesKey: [
            "projects.portfolioSpa.challenges.canvasAnimations",
            "projects.portfolioSpa.challenges.themeImplementation",
            "projects.portfolioSpa.challenges.mobilePerformance"
        ],
        startDate: "2024-12",
        featured: true
    },
    {
        id: "wishbag-mobile",
        titleKey: "projects.wishbagMobile.title",
        descriptionKey: "projects.wishbagMobile.description",
        shortDescriptionKey: "projects.wishbagMobile.shortDescription",
        technologies: ["react-native", "typescript"],
        category: "mobile",
        status: "in-progress",
        images: [
            "/projects/wishbag/main.jpg",
            "/projects/wishbag/wishlist.jpg",
            "/projects/wishbag/profile.jpg"
        ],
        links: {

        },
        featuresKey: [
            "projects.wishbagMobile.features.crossPlatform",
            "projects.wishbagMobile.features.sharedWishlist",
            "projects.wishbagMobile.features.modernUI",
            "projects.wishbagMobile.features.realTimeSync"
        ],
        challengesKey: [
            "projects.wishbagMobile.challenges.crossPlatform",
            "projects.wishbagMobile.challenges.realTimeSync",
            "projects.wishbagMobile.challenges.mobileUX"
        ],
        startDate: "2024-11",
        featured: false
    }
];

export const getFeaturedProjects = (): Project[] =>
    projectsData.filter(project => project.featured);

export const getProjectsByCategory = (category: Project['category']): Project[] =>
    projectsData.filter(project => project.category === category);

export const getProjectsByStatus = (status: Project['status']): Project[] =>
    projectsData.filter(project => project.status === status);

export const getCompletedProjects = (): Project[] =>
    projectsData.filter(project => project.status === 'completed');

export const getProjectById = (id: string): Project | undefined =>
    projectsData.find(project => project.id === id);

export const getTranslatedProjects = (t: (key: string) => string): Array<Project & {
    title: string;
    description: string;
    shortDescription: string;
    features: string[];
    challenges?: string[];
}> =>
    projectsData.map(project => ({
        ...project,
        title: t(project.titleKey),
        description: t(project.descriptionKey),
        shortDescription: t(project.shortDescriptionKey),
        features: project.featuresKey.map(key => t(key)),
        challenges: project.challengesKey?.map(key => t(key))
    }));

export const getTranslatedProjectById = (id: string, t: (key: string) => string) => {
    const project = getProjectById(id);
    if (!project) return undefined;

    return {
        ...project,
        title: t(project.titleKey),
        description: t(project.descriptionKey),
        shortDescription: t(project.shortDescriptionKey),
        features: project.featuresKey.map(key => t(key)),
        challenges: project.challengesKey?.map(key => t(key))
    };
};