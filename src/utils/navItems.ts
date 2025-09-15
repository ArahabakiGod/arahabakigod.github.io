interface NavItem {
    titleKey: string;
    scrollTarget: string;
    href?: string;
}

export const navItems: NavItem[] = [
    {
        titleKey: "navigation.aboutMe",
        scrollTarget: "about-me"
    },
    {
        titleKey: "navigation.myStack",
        scrollTarget: "my-stack"
    },
    {
        titleKey: "navigation.softSkills",
        scrollTarget: "soft-skills"
    },
    {
        titleKey: "navigation.myProjects",
        scrollTarget: "my-projects"
    },
    {
        titleKey: "navigation.contactMe",
        scrollTarget: "contact-me"
    }
];

export const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};