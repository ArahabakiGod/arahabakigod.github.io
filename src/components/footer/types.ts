export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    href: string;
    color?: string;
    ariaLabel?: string;
}

export interface FooterContact {
    type: 'phone' | 'email';
    label: string;
    value: string;
    href: string;
}

export interface TechStackItem {
    name: string;
    color?: string;
}