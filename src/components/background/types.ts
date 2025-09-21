export interface HexagonBackgroundProps {
    backgroundColor?: string;
    baseColor?: string;
    activeColor?: string;
    hexagonSize?: number;
    effectRadius?: number;
    fadeSpeed?: number;
    enableRandomAnimation?: boolean;
    randomPointsCount?: number;
    randomAnimationSpeed?: number;
    className?: string;
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