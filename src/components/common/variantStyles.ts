export const typographyVariantStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold font-heading leading-tight',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold font-heading leading-tight',
    p: 'text-base md:text-lg font-normal font-body leading-relaxed',
    subtitle: 'text-lg md:text-xl font-medium font-body leading-relaxed',
    caption: 'text-sm font-normal font-body leading-normal',
    code: 'text-sm font-mono bg-background-elevated px-2 py-1 rounded'
};

export const buttonVariantStyles = {
    primary: 'bg-primary text-white border-2 border-primary hover:bg-primary/90 hover:border-primary/90 focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-primary/80',
    secondary: 'bg-secondary text-white border-2 border-secondary hover:bg-secondary/90 hover:border-secondary/90 focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-secondary/80',
    outlined: 'bg-transparent text-text-primary border-2 border-border hover:bg-hover hover:border-border-hover focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-active',
    ghost: 'bg-transparent text-text-primary border-2 border-transparent hover:bg-hover hover:border-border-light focus:outline-none active:bg-active'
};

export const buttonSizeStyles = {
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-base font-medium',
    lg: 'px-6 py-3 text-lg font-medium'
};

export const inputVariantStyles = {
    normal: 'w-full px-4 py-2 font-body text-base border-2 border-border bg-background text-text-primary rounded-lg transition-all duration-200 placeholder:text-text-muted focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-focus-ring',
    error: 'w-full px-4 py-2 font-body text-base border-2 border-error bg-background text-text-primary rounded-lg transition-all duration-200 placeholder:text-text-muted focus:outline-none focus:border-error focus:ring-2 focus:ring-error/30',
    disabled: 'w-full px-4 py-2 font-body text-base border-2 border-border bg-background-muted text-disabled rounded-lg transition-all duration-200 placeholder:text-text-muted focus:outline-none cursor-not-allowed opacity-60'
};

export const labelVariantStyles = {
    normal: 'block text-sm font-medium font-body mb-2 text-text-secondary',
    error: 'block text-sm font-medium font-body mb-2 text-error',
    disabled: 'block text-sm font-medium font-body mb-2 text-disabled'
};

export const errorMessageStyles = 'mt-1 text-sm font-body text-error';

export const cardVariantStyles = {
    default: 'bg-background border border-border rounded-lg shadow-sm',
    elevated: 'bg-background-elevated border border-border rounded-lg shadow-lg',
    outlined: 'bg-background border-2 border-border rounded-lg shadow-none',
    tech: 'bg-tech-card border border-border rounded-xl shadow-md overflow-hidden',
    project: 'bg-project-card border border-border rounded-2xl shadow-lg overflow-hidden',
    social: 'bg-background border border-border rounded-lg shadow-sm hover:shadow-md',
    'skill-cloud': 'bg-skill-cloud border border-border-light rounded-full shadow-sm'
};

export const cardSizeStyles = {
    sm: 'p-3 max-w-sm',
    md: 'p-4 max-w-md',
    lg: 'p-6 max-w-lg',
    xl: 'p-8 max-w-xl',
    auto: 'p-4 w-full'
};

export const cardInteractiveStyles = {
    base: 'transition-all duration-300 ease-in-out cursor-pointer',
    hover: 'hover:shadow-lg hover:scale-105 hover:bg-hover',
    active: 'active:scale-95 active:bg-active',
    focus: 'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2'
};

export const cardResponsiveStyles = 'w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl';

export const switchSizeStyles = {
    sm: {
        container: 'w-8 h-4 p-[2px]',
        toggle: 'w-3 h-3',
        translate: 'translate-x-4',
        icon: 'w-2 h-2 m-0.5'
    },
    md: {
        container: 'w-10 h-5 p-[2px]',
        toggle: 'w-4 h-4',
        translate: 'translate-x-5',
        icon: 'w-2.5 h-2.5 m-[6px]'
    },
    lg: {
        container: 'w-12 h-6 p-[2px]',
        toggle: 'w-5 h-5',
        translate: 'translate-x-6',
        icon: 'w-3 h-3 m-1'
    }
};

export const switchVariantStyles = {
    base: 'relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 cursor-pointer border-2 border-border-light',
    enabled: 'bg-primary',
    disabled: 'bg-border',
    toggle: {
        base: 'inline-block rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out',
        enabled: '',
        disabled: ''
    }
};