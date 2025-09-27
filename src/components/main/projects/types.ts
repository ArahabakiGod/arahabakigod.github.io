import type { Project } from "../../../constants";

export interface MyProjectsProps {
    className?: string;
}

export interface ProjectsSectionProps {
    className?: string;
}

export interface TextSectionProps {
    className?: string;
}
export interface TranslatedProject extends Omit<Project, 'titleKey' | 'descriptionKey' | 'shortDescriptionKey' | 'featuresKey' | 'challengesKey'> {
    title: string;
    description: string;
    shortDescription: string;
    features: string[];
    challenges?: string[];
}

export interface ProjectCardProps {
    className?: string;
    currentProject: TranslatedProject;
}