export { default as Main } from './Main';

export { default as Hero } from './hero/Hero';
export { default as HeroImage } from './hero/HeroImage';
export { default as HeroTextSection } from './hero/TextSection';
export { default as HeroButtonsSection } from './hero/ButtonsSection';

export { default as Stack } from './stack/Stack';
export { default as ActivityFieldSwitch } from './stack/ActivityFieldSwitch';
export { default as Technologies } from './stack/Technologies';
export { default as StackTextSection } from './stack/TextSection';

export { default as MySoftSkills } from './soft/MySoftSkills';
export { default as SoftSkillsSection } from './soft/SoftSkillsSection';
export { default as SoftTextSection } from './soft/TextSection';

export { default as MyProjects } from './projects/MyProjects';
export { default as ProjectsSection } from './projects/ProjectsSection';
export { default as ProjectsTextSection } from './projects/TextSection';

export { default as ContactMe } from './contact/ContactMe';
export { default as SocialLinks } from './contact/SocialLinks';
export { default as ContactTextSection } from './contact/TextSection';

export type {
    HeroProps,
    HeroImageProps,
    TextSectionProps as HeroTextSectionProps,
    ButtonsSectionProps
} from './hero/types';

export type {
    StackProps,
    TechnologiesProps,
    ActivityFieldSwitchProps,
    TextSectionProps as StackTextSectionProps
} from './stack/types';

export type {
    MySoftSkillsProps,
    SoftSkillsSectionProps,
    TextSectionProps as SoftTextSectionProps
} from './soft/types';

export type {
    MyProjectsProps,
    ProjectsSectionProps,
    TextSectionProps as ProjectsTextSectionProps
} from './projects/types';

export type {
    ContactMeProps,
    SocialLinksProps,
    TextSectionProps as ContactTextSectionProps
} from './contact/types';