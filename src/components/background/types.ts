export interface HexagonBackgroundProps {
    /** Цвет фона */
    backgroundColor?: string;
    /** Базовый цвет шестиугольников */
    baseColor?: string;
    /** Цвет активации (при наведении/анимации) */
    activeColor?: string;
    /** Размер шестиугольников */
    hexagonSize?: number;
    /** Радиус эффекта */
    effectRadius?: number;
    /** Скорость выцветания (0.001 - 0.1) */
    fadeSpeed?: number;
    /** Включить рандомную анимацию */
    enableRandomAnimation?: boolean;
    /** Количество рандомных точек */
    randomPointsCount?: number;
    /** Скорость движения рандомных точек */
    randomAnimationSpeed?: number;
    /** Класс стилей */
    className?: string;
    /** Цвета для темной темы */
    darkTheme?: {
        backgroundColor?: string;
        baseColor?: string;
        activeColor?: string;
    };
}

export interface AnimationPoint {
    x: number;
    y: number;
    vx: number; // velocity x
    vy: number; // velocity y
    intensity: number;
}

export interface Hexagon {
    x: number;
    y: number;
    intensity: number;
    targetIntensity: number;
}

export interface HexagonColors {
    background: string;
    base: string;
    active: string;
}