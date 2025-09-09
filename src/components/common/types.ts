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

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'outlined';
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