import React from "react";
import { Card, Typography } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import {
  getFrontendTechnologies,
  getBackendTechnologies,
  getTechnologiesByCategory,
} from "../../../constants";
import type { TechnologiesProps } from "./types";

interface TechnologiesComponentProps extends TechnologiesProps {
  selectedField: "frontend" | "backend";
}

const Technologies: React.FC<TechnologiesComponentProps> = ({
  className = "",
  selectedField,
}) => {
  const { t } = useTranslation("portfolio");

  // Получаем технологии в зависимости от выбранного поля
  const getTechnologies = () => {
    if (selectedField === "frontend") {
      return getFrontendTechnologies();
    } else {
      // Для backend показываем backend + tools
      return [
        ...getBackendTechnologies(),
        ...getTechnologiesByCategory("tools"),
      ];
    }
  };

  const technologies = getTechnologies();

  // Функция для получения цвета уровня
  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-success/20 text-success border-success/30";
      case "advanced":
        return "bg-primary/20 text-primary border-primary/30";
      case "intermediate":
        return "bg-warning/20 text-warning border-warning/30";
      case "beginner":
        return "bg-info/20 text-info border-info/30";
      default:
        return "bg-background-muted text-text-muted border-border";
    }
  };

  // Функция для получения иконки уровня
  const getLevelIcon = (level: string) => {
    switch (level) {
      case "expert":
        return "⭐⭐⭐";
      case "advanced":
        return "⭐⭐";
      case "intermediate":
        return "⭐";
      case "beginner":
        return "◯";
      default:
        return "";
    }
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <Card
            key={tech.id}
            variant="tech"
            size="custom"
            interactive
            className="p-4 group hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="text-center">
              {/* Technology Name */}
              <Typography
                variant="h4"
                color="primary"
                className="mb-2 group-hover:text-secondary transition-colors duration-200"
              >
                {t(tech.nameKey)}
              </Typography>

              {/* Level Badge */}
              <div className="flex items-center justify-center mb-3">
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium border
                    ${getLevelColor(tech.level)}
                  `}
                >
                  <span className="mr-1">{getLevelIcon(tech.level)}</span>
                  {tech.level.charAt(0).toUpperCase() + tech.level.slice(1)}
                </span>
              </div>

              {/* Category */}
              <Typography
                variant="caption"
                color="muted"
                className="mb-2 block"
              >
                {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
              </Typography>

              {/* Description (если есть) */}
              {tech.descriptionKey && (
                <Typography
                  variant="caption"
                  color="secondary"
                  className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {t(tech.descriptionKey)}
                </Typography>
              )}
            </div>
          </Card>
        ))}
      </div>

      {technologies.length === 0 && (
        <div className="text-center py-8">
          <Typography variant="p" color="muted">
            No technologies found for {selectedField}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Technologies;
