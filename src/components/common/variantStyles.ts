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
    primary: {
        base: 'border-2 focus:ring-2 focus:ring-focus-ring focus:outline-none',
        full: 'bg-primary text-white border-2 border-primary hover:bg-primary/90 hover:border-primary/90 focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-primary/80'
    },
    secondary: {
        base: 'border-2 focus:ring-2 focus:ring-focus-ring focus:outline-none',
        full: 'bg-secondary text-white border-2 border-secondary hover:bg-secondary/90 hover:border-secondary/90 focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-secondary/80'
    },
    outlined: {
        base: 'bg-transparent border-2 focus:ring-2 focus:ring-focus-ring focus:outline-none',
        full: 'bg-transparent text-text-primary border-2 border-border hover:bg-hover hover:border-border-hover focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-active'
    },
    ghost: {
        base: 'bg-transparent border-2 border-transparent focus:outline-none',
        full: 'bg-transparent text-text-primary border-2 border-transparent hover:bg-hover hover:border-border-light focus:outline-none active:bg-active'
    }
};

export const buttonColorStyles = {
    primary: 'bg-primary text-white border-primary hover:bg-primary/90 hover:border-primary/90 active:bg-primary/80',
    secondary: 'bg-secondary text-white border-secondary hover:bg-secondary/90 hover:border-secondary/90 active:bg-secondary/80',
    accent: 'bg-accent text-white border-accent hover:bg-accent/90 hover:border-accent/90 active:bg-accent/80',
    success: 'bg-success text-white border-success hover:bg-success/90 hover:border-success/90 active:bg-success/80',
    warning: 'bg-warning text-text-primary border-warning hover:bg-warning/90 hover:border-warning/90 active:bg-warning/80',
    error: 'bg-error text-white border-error hover:bg-error/90 hover:border-error/90 active:bg-error/80',
    info: 'bg-info text-white border-info hover:bg-info/90 hover:border-info/90 active:bg-info/80',
    neutral: 'bg-background-muted text-text-primary border-border hover:bg-hover hover:border-border-hover active:bg-active',
    custom: ''
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
    elevated: 'bg-background-elevated border border-border rounded-lg shadow-md',
    outlined: 'bg-background border-2 border-border rounded-lg shadow-none',
    tech: 'bg-tech-card border border-border rounded-xl shadow-sm overflow-hidden',
    project: 'bg-project-card border border-border rounded-2xl shadow-md overflow-hidden',
    social: 'bg-background border border-border rounded-lg shadow-sm hover:shadow-md',
    'skill-cloud': 'bg-skill-cloud border border-border-light rounded-full shadow-sm'
};

export const cardSizeStyles = {
    sm: 'p-3 max-w-sm',
    md: 'p-4 max-w-md',
    lg: 'p-6 max-w-lg',
    xl: 'p-8 max-w-xl',
    auto: 'p-4 w-full',
    custom: ''
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