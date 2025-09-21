export interface NavItemProps {
    title: string;
    scrollTarget: string;
    className?: string;
}

export interface LogoProps {
    className?: string;
    onClick?: () => void;
}

export interface NavMenuProps {
    className?: string;
}

export interface MobileMenuProps {
    className?: string;
}

export interface HeaderProps {
    className?: string;
}

export interface ThemeIconProps {
    className?: string;
}

export interface NavItem {
    titleKey: string;
    scrollTarget: string;
    href?: string;
}

export interface LanguageDropdownProps {
    className?: string;
}