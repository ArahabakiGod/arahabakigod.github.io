import React, { useState } from "react";
import { Card, Typography } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import { getTranslatedSoftSkills } from "../../../constants";
import type { SoftSkillsSectionProps } from "./types";

const SoftSkillsSection: React.FC<SoftSkillsSectionProps> = ({
  className = "",
}) => {
  const { t } = useTranslation("portfolio");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const translatedSkills = getTranslatedSoftSkills(t);

  const handleMouseEnter = (skillId: string, event: React.MouseEvent) => {
    setHoveredSkill(skillId);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "border-success hover:border-success/70";
      case "advanced":
        return "border-primary hover:border-primary/70";
      case "proficient":
        return "border-warning hover:border-warning/70";
      case "developing":
        return "border-info hover:border-info/70";
      default:
        return "border-border hover:border-border-hover";
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-success text-white";
      case "advanced":
        return "bg-primary text-white";
      case "proficient":
        return "bg-warning text-text-primary";
      case "developing":
        return "bg-info text-white";
      default:
        return "bg-background-muted text-text-primary";
    }
  };

  const currentHoveredSkill = translatedSkills.find(
    (skill) => skill.id === hoveredSkill
  );

  return (
    <div className={className}>
      {/* Skills Cloud */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center 2xl:justify-start mb-6">
        {translatedSkills.map((skill) => (
          <Card
            key={skill.id}
            variant="skill-cloud"
            interactive
            className={`
              group cursor-pointer transition-all duration-300 ease-in-out
              relative border-2 ${getLevelColor(skill.level)}
              hover:scale-110 hover:shadow-lg hover:shadow-accent/20
              px-3 sm:px-4 py-2 rounded-full
              bg-skill-cloud hover:bg-background-elevated
              min-w-fit
            `}
            onMouseEnter={(e: React.MouseEvent) =>
              handleMouseEnter(skill.id, e)
            }
            onMouseLeave={handleMouseLeave}
          >
            {/* Адаптивная структура: вертикальная на маленьких экранах, горизонтальная на больших */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Typography
                variant="caption"
                color="primary"
                className="font-medium text-xs sm:text-sm whitespace-nowrap group-hover:text-accent transition-colors duration-200 text-center sm:text-left"
              >
                {skill.name}
              </Typography>

              <span
                className={`
                  px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-200
                  ${getLevelBadgeColor(skill.level)}
                  group-hover:scale-105
                  whitespace-nowrap
                `}
              >
                {skill.level}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {hoveredSkill && currentHoveredSkill && (
        <div
          className="fixed z-50 pointer-events-none hidden lg:block"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <Card
            variant="elevated"
            size="md"
            className="
              max-w-xs shadow-xl shadow-accent/30 border-2 border-accent/50
              bg-background-elevated backdrop-blur-sm
              animate-in fade-in slide-in-from-bottom-2 duration-200
            "
          >
            <div className="p-4">
              <Typography
                variant="subtitle"
                color="accent"
                className="mb-2 font-semibold"
              >
                {currentHoveredSkill.name}
              </Typography>

              <Typography
                variant="caption"
                color="primary"
                className="leading-relaxed"
              >
                {currentHoveredSkill.description}
              </Typography>

              <div className="flex items-center gap-2 mt-3">
                <span
                  className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${getLevelBadgeColor(currentHoveredSkill.level)}
                `}
                >
                  {currentHoveredSkill.level}
                </span>

                <span className="px-2 py-1 rounded-full text-xs font-medium bg-background-muted text-text-secondary">
                  {currentHoveredSkill.category}
                </span>
              </div>
            </div>

            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent/50"></div>
            </div>
          </Card>
        </div>
      )}

      {/* Summary Stats - адаптивная сетка */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
        {["expert", "advanced", "proficient", "developing"].map((level) => {
          const count = translatedSkills.filter(
            (skill) => skill.level === level
          ).length;
          if (count === 0) return null;

          return (
            <div
              key={level}
              className="text-center p-2 sm:p-3 rounded-lg bg-background-secondary border border-border hover:border-border-hover transition-colors duration-200"
            >
              <Typography
                variant="h4"
                color="primary"
                className="mb-1 !text-xl sm:!text-2xl"
              >
                {count}
              </Typography>
              <Typography
                variant="caption"
                color="secondary"
                className="capitalize text-xs sm:text-sm"
              >
                {level}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftSkillsSection;
