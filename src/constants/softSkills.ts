export interface SoftSkill {
    id: string;
    nameKey: string; 
    descriptionKey: string; 
    category: 'communication' | 'leadership' | 'problem-solving' | 'creativity' | 'personal' | 'teamwork';
    level: 'developing' | 'proficient' | 'advanced' | 'expert';
    color?: string;
    icon?: string;
}

export const softSkillsData: SoftSkill[] = [
    {
        id: "proactive-problem-solver",
        nameKey: "softSkills.proactiveProblemSolver.name",
        descriptionKey: "softSkills.proactiveProblemSolver.description",
        category: "problem-solving",
        level: "expert",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
        id: "growth-oriented-learner",
        nameKey: "softSkills.growthOrientedLearner.name",
        descriptionKey: "softSkills.growthOrientedLearner.description",
        category: "personal",
        level: "expert",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
        id: "collaborative-team-player",
        nameKey: "softSkills.collaborativeTeamPlayer.name",
        descriptionKey: "softSkills.collaborativeTeamPlayer.description",
        category: "teamwork",
        level: "advanced",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    },
    {
        id: "quality-focused",
        nameKey: "softSkills.qualityFocused.name",
        descriptionKey: "softSkills.qualityFocused.description",
        category: "personal",
        level: "advanced",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    },
    {
        id: "mentorship-mindset",
        nameKey: "softSkills.mentorshipMindset.name",
        descriptionKey: "softSkills.mentorshipMindset.description",
        category: "leadership",
        level: "advanced",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
    },
    {
        id: "creative-ui-ux-approach",
        nameKey: "softSkills.creativeUiUxApproach.name",
        descriptionKey: "softSkills.creativeUiUxApproach.description",
        category: "creativity",
        level: "advanced",
        color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    },
    {
        id: "long-term-commitment",
        nameKey: "softSkills.longTermCommitment.name",
        descriptionKey: "softSkills.longTermCommitment.description",
        category: "personal",
        level: "advanced",
        color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    },
    {
        id: "results-driven",
        nameKey: "softSkills.resultsDriven.name",
        descriptionKey: "softSkills.resultsDriven.description",
        category: "personal",
        level: "advanced",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    },
    {
        id: "analytical-thinking",
        nameKey: "softSkills.analyticalThinking.name",
        descriptionKey: "softSkills.analyticalThinking.description",
        category: "problem-solving",
        level: "advanced",
        color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    },
    {
        id: "cross-browser-compatibility",
        nameKey: "softSkills.crossBrowserCompatibility.name",
        descriptionKey: "softSkills.crossBrowserCompatibility.description",
        category: "personal",
        level: "advanced",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    },
    {
        id: "responsive-design-expertise",
        nameKey: "softSkills.responsiveDesignExpertise.name",
        descriptionKey: "softSkills.responsiveDesignExpertise.description",
        category: "creativity",
        level: "expert",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
    },
    {
        id: "international-communication",
        nameKey: "softSkills.internationalCommunication.name",
        descriptionKey: "softSkills.internationalCommunication.description",
        category: "communication",
        level: "advanced",
        color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
    }
];

export const getSoftSkillsByCategory = (category: SoftSkill['category']): SoftSkill[] =>
    softSkillsData.filter(skill => skill.category === category);

export const getSoftSkillsByLevel = (level: SoftSkill['level']): SoftSkill[] =>
    softSkillsData.filter(skill => skill.level === level);

export const getTopSoftSkills = (count: number = 6): SoftSkill[] =>
    softSkillsData
        .filter(skill => skill.level === 'expert' || skill.level === 'advanced')
        .slice(0, count);

export const getSoftSkillById = (id: string): SoftSkill | undefined =>
    softSkillsData.find(skill => skill.id === id);

export const groupedSoftSkills = {
    communication: getSoftSkillsByCategory('communication'),
    leadership: getSoftSkillsByCategory('leadership'),
    'problem-solving': getSoftSkillsByCategory('problem-solving'),
    creativity: getSoftSkillsByCategory('creativity'),
    personal: getSoftSkillsByCategory('personal'),
    teamwork: getSoftSkillsByCategory('teamwork'),
};

export const getTranslatedSoftSkills = (t: (key: string) => string): Array<SoftSkill & {
    name: string;
    description: string;
}> =>
    softSkillsData.map(skill => ({
        ...skill,
        name: t(skill.nameKey),
        description: t(skill.descriptionKey)
    }));

export const getTranslatedSoftSkillById = (id: string, t: (key: string) => string) => {
    const skill = getSoftSkillById(id);
    if (!skill) return undefined;

    return {
        ...skill,
        name: t(skill.nameKey),
        description: t(skill.descriptionKey)
    };
};