export interface TextSectionProps {
    className?: string;
}

export interface TechnologiesProps {
    className?: string;
}

export interface StackProps {
    className?: string;
}

export interface ActivityFieldSwitchProps {
    className?: string;
}

export interface ActivityFieldSwitchComponentProps extends ActivityFieldSwitchProps {
    selectedField: 'frontend' | 'backend';
    onFieldChange: (field: 'frontend' | 'backend') => void;
}

export interface TechnologiesComponentProps extends TechnologiesProps {
    selectedField: 'frontend' | 'backend';
}

export type TechnologyCategory = 'frontend' | 'backend' | 'tools' | 'other';

export type TechnologyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';