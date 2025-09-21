export { socialLinksData, getSocialLinksWithLabels } from './socialLinks';

export { contactInfo, getContactsData } from './contactData';
export type { ContactInfo } from './contactData';

export {
    footerTechnologies,
    fullTechnologyStack,
    getFrontendTechnologies,
    getBackendTechnologies,
    getTechnologiesByCategory,
    getTechnologiesByLevel,
    getFooterTechnologies,
    getTranslatedTechnologies
} from './technologies';
export type { Technology, TechStackItem } from './technologies';

export {
    projectsData,
    getFeaturedProjects,
    getProjectsByCategory,
    getProjectsByStatus,
    getCompletedProjects,
    getProjectById,
    getTranslatedProjects,
    getTranslatedProjectById
} from './projects';
export type { Project } from './projects';

export {
    softSkillsData,
    getSoftSkillsByCategory,
    getSoftSkillsByLevel,
    getTopSoftSkills,
    getSoftSkillById,
    groupedSoftSkills,
    getTranslatedSoftSkills,
    getTranslatedSoftSkillById
} from './softSkills';
export type { SoftSkill } from './softSkills';

export {
    personalInfo,
    getExperienceText,
    getAge,
    getResumeLink,
    getAvailabilityStatus,
    getLocationText,
    getTimezoneText
} from './personalInfo';
export type { PersonalInfo } from './personalInfo';