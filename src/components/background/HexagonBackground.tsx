import React, { useRef, useEffect, useCallback } from "react";
import { useThemeStore } from "../../stores/themeStore";
import type { HexagonBackgroundProps, AnimationPoint, Hexagon } from "./types";

const HexagonBackground: React.FC<HexagonBackgroundProps> = ({
  backgroundColor = "transparent",
  baseColor = "#374151",
  activeColor = "#6366f1",
  hexagonSize = 25,
  effectRadius = 180,
  fadeSpeed = 0.02,
  enableRandomAnimation = true,
  randomPointsCount = 4,
  randomAnimationSpeed = 1.2,
  className = "",
  darkTheme = {
    backgroundColor: "transparent",
    baseColor: "#4b5563",
    activeColor: "#8b5cf6",
  },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);
  const hexagonsRef = useRef<Hexagon[]>([]);
  const randomPointsRef = useRef<AnimationPoint[]>([]);
  const { theme } = useThemeStore();

  // Получаем текущие цвета в зависимости от темы
  const getCurrentColors = useCallback(() => {
    const isDark = theme === "dark";
    return {
      background: isDark
        ? darkTheme.backgroundColor || backgroundColor
        : backgroundColor,
      base: isDark ? darkTheme.baseColor || baseColor : baseColor,
      active: isDark ? darkTheme.activeColor || activeColor : activeColor,
    };
  }, [theme, backgroundColor, baseColor, activeColor, darkTheme]);

  // Парсинг цвета в RGB
  const parseColor = useCallback((color: string): [number, number, number] => {
    // Если цвет в формате #rrggbb
    if (color.startsWith("#")) {
      const hex = color.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return [r, g, b];
    }

    // Если цвет в формате rgb(r, g, b)
    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      return [
        parseInt(rgbMatch[1]),
        parseInt(rgbMatch[2]),
        parseInt(rgbMatch[3]),
      ];
    }

    // Fallback для серого цвета
    return [107, 114, 128];
  }, []);

  // Функция для создания точек шестиугольника
  const getHexagonPoints = useCallback(
    (centerX: number, centerY: number, size: number) => {
      const points: Array<[number, number]> = [];
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = centerX + size * Math.cos(angle);
        const y = centerY + size * Math.sin(angle);
        points.push([x, y]);
      }
      return points;
    },
    []
  );

  // Функция для рисования шестиугольника
  const drawHexagon = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      size: number,
      intensity: number
    ) => {
      const points = getHexagonPoints(centerX, centerY, size);
      const colors = getCurrentColors();

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }

      ctx.closePath();

      // Интерполяция цвета между базовым и активным
      const baseColorRGB = parseColor(colors.base);
      const activeColorRGB = parseColor(colors.active);

      const r = Math.round(
        baseColorRGB[0] + (activeColorRGB[0] - baseColorRGB[0]) * intensity
      );
      const g = Math.round(
        baseColorRGB[1] + (activeColorRGB[1] - baseColorRGB[1]) * intensity
      );
      const b = Math.round(
        baseColorRGB[2] + (activeColorRGB[2] - baseColorRGB[2]) * intensity
      );

      ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.lineWidth = intensity > 0.1 ? 1.8 : 1;

      // Добавляем тонкое свечение для эффектности
      if (intensity > 0.15) {
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${intensity * 0.3})`;
        ctx.shadowBlur = 8 * intensity;
      }

      ctx.stroke();
      ctx.shadowBlur = 0;
    },
    [getHexagonPoints, getCurrentColors, parseColor]
  );

  // Инициализация рандомных точек анимации
  const initializeRandomPoints = useCallback(
    (width: number, height: number) => {
      if (!enableRandomAnimation) return;

      const points: AnimationPoint[] = [];
      for (let i = 0; i < randomPointsCount; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * randomAnimationSpeed * 2,
          vy: (Math.random() - 0.5) * randomAnimationSpeed * 2,
          intensity: 0.2 + Math.random() * 0.5, // Более мягкая интенсивность для фона
        });
      }
      randomPointsRef.current = points;
    },
    [enableRandomAnimation, randomPointsCount, randomAnimationSpeed]
  );

  // Обновление позиций рандомных точек
  const updateRandomPoints = useCallback(
    (width: number, height: number) => {
      if (!enableRandomAnimation) return;

      randomPointsRef.current.forEach((point) => {
        // Обновляем позицию
        point.x += point.vx;
        point.y += point.vy;

        // Отражение от границ
        if (point.x <= 0 || point.x >= width) {
          point.vx *= -1;
          point.x = Math.max(0, Math.min(width, point.x));
        }
        if (point.y <= 0 || point.y >= height) {
          point.vy *= -1;
          point.y = Math.max(0, Math.min(height, point.y));
        }
      });
    },
    [enableRandomAnimation]
  );

  // Инициализация honeycomb-сетки
  const initializeHexagons = useCallback(
    (width: number, height: number) => {
      const hexagons: Hexagon[] = [];

      const hexWidth = hexagonSize * 2;
      const hexHeight = hexagonSize * Math.sqrt(3);
      const xSpacing = hexWidth * 0.75;
      const ySpacing = hexHeight;

      const cols = Math.ceil(width / xSpacing) + 4;
      const rows = Math.ceil(height / ySpacing) + 4;

      for (let row = -2; row < rows; row++) {
        for (let col = -2; col < cols; col++) {
          const x = col * xSpacing;
          const yOffset = col % 2 === 1 ? ySpacing / 2 : 0;
          const y = row * ySpacing + yOffset;

          hexagons.push({
            x,
            y,
            intensity: 0,
            targetIntensity: 0,
          });
        }
      }

      hexagonsRef.current = hexagons;
      initializeRandomPoints(width, height);
    },
    [hexagonSize, initializeRandomPoints]
  );

  // Обновление интенсивности
  const updateIntensities = useCallback(() => {
    const mouse = mouseRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Обновляем рандомные точки
    updateRandomPoints(canvas.width, canvas.height);

    hexagonsRef.current.forEach((hexagon) => {
      let maxIntensity = 0;

      // Влияние курсора мыши
      const mouseDistance = Math.sqrt(
        Math.pow(mouse.x - hexagon.x, 2) + Math.pow(mouse.y - hexagon.y, 2)
      );

      if (mouseDistance <= effectRadius) {
        maxIntensity = Math.max(maxIntensity, 1 - mouseDistance / effectRadius);
      }

      // Влияние рандомных точек
      if (enableRandomAnimation) {
        randomPointsRef.current.forEach((point) => {
          const distance = Math.sqrt(
            Math.pow(point.x - hexagon.x, 2) + Math.pow(point.y - hexagon.y, 2)
          );

          if (distance <= effectRadius) {
            const pointIntensity =
              (1 - distance / effectRadius) * point.intensity;
            maxIntensity = Math.max(maxIntensity, pointIntensity);
          }
        });
      }

      hexagon.targetIntensity = maxIntensity;

      // Плавное изменение интенсивности
      const diff = hexagon.targetIntensity - hexagon.intensity;
      hexagon.intensity += diff * fadeSpeed;

      if (Math.abs(diff) < 0.001) {
        hexagon.intensity = hexagon.targetIntensity;
      }
    });
  }, [effectRadius, fadeSpeed, enableRandomAnimation, updateRandomPoints]);

  // Основная функция рендера
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = getCurrentColors();

    // Полная очистка канваса
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Устанавливаем фон если не прозрачный
    if (colors.background && colors.background !== "transparent") {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Обновляем интенсивности
    updateIntensities();

    // Рисуем только активные шестиугольники (с интенсивностью > 0.02)
    let activeCount = 0;
    hexagonsRef.current.forEach((hexagon) => {
      if (hexagon.intensity > 0.02) {
        drawHexagon(ctx, hexagon.x, hexagon.y, hexagonSize, hexagon.intensity);
        activeCount++;
      }
    });

    // Продолжаем анимацию
    animationRef.current = requestAnimationFrame(render);
  }, [updateIntensities, drawHexagon, hexagonSize, getCurrentColors]);

  // Обработчик движения мыши
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  // Обработчик изменения размера окна
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initializeHexagons(canvas.width, canvas.height);
  }, [initializeHexagons]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, handleResize, render]);

  // Перезапускаем анимацию при изменении темы
  useEffect(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    render();
  }, [theme, render]);

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default HexagonBackground;
