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
    ghost: 'bg-transparent text-text-primary border-2 border-transparent hover:bg-hover hover:border-border-light focus:ring-2 focus:ring-focus-ring focus:outline-none active:bg-active'
};

export const buttonSizeStyles = {
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-base font-medium',
    lg: 'px-6 py-3 text-lg font-medium'
};

export const cardVariantStyles = {
    default: 'bg-background border border-border',
    elevated: 'bg-background-elevated shadow-lg',
    outlined: 'bg-background border-2 border-border'
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