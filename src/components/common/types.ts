import type { HTMLAttributes } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'subtitle' | 'caption' | 'code';
export type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    children: React.ReactNode;
    className?: string;
    color?: TypographyColor;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'neutral'
    | 'custom';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode;
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'file';
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'tech' | 'project' | 'social' | 'skill-cloud';
export type CardSize = 'sm' | 'md' | 'lg' | 'xl' | 'auto' | 'custom';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: CardVariant;
    size?: CardSize;
    interactive?: boolean;
    href?: string;
    clickable?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    [key: string]: any;
}

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: SwitchSize;
    disabled?: boolean;
    className?: string;
    colorLeft?: string;
    colorRight?: string;
    labelLeft?: string;
    labelRight?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    textInside?: boolean;
}