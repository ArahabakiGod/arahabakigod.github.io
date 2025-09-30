import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button, Card, Typography } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import type { ProjectCardProps } from "./types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  className = "",
  currentProject,
}) => {
  const { t, currentLanguage } = useTranslation("portfolio");

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getStatusLabel = (status: string) => {
    if (currentLanguage === "en") {
      switch (status) {
        case "completed":
          return "Completed";
        case "in-progress":
          return "In Progress";
        case "planned":
          return "Planned";
        default:
          return status;
      }
    } else if (currentLanguage === "ru") {
      switch (status) {
        case "completed":
          return "Завершен";
        case "in-progress":
          return "В процессе";
        case "planned":
          return "Запланирован";
        default:
          return status;
      }
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Card
      variant="project"
      className={`h-[100%] min-w-[calc(100%-calc(var(--spacing)*6))] w-[100%] overflow-hidden mx-6 rounded-none px-2 ${className}`}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
          <div className="flex-grow">
            <Typography
              variant="h3"
              color="primary"
              className="mb-2 !text-xl sm:!text-2xl md:!text-3xl"
            >
              {currentProject.title}
            </Typography>

            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${
                    currentProject.status === "completed"
                      ? "bg-success text-white"
                      : currentProject.status === "in-progress"
                      ? "bg-warning text-text-primary"
                      : "bg-info text-white"
                  }
                `}
              >
                {getStatusLabel(currentProject.status)}
              </span>

              <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-text-secondary">
                {getCategoryLabel(currentProject.category)}
              </span>
            </div>
          </div>

          {currentProject.company && (
            <div className="mt-2 sm:mt-0 hidden sm:block">
              <Typography
                variant="caption"
                color="secondary"
                className="font-medium text-nowrap"
              >
                @ {currentProject.company}
              </Typography>
            </div>
          )}
        </div>

        <div className="mb-3 sm:mb-4">
          <Typography variant="p" color="primary" className="hidden md:block">
            {currentProject.description}
          </Typography>
          <Typography
            variant="p"
            color="primary"
            className="block md:hidden line-clamp-3"
          >
            {currentProject.shortDescription || currentProject.description}
          </Typography>
        </div>

        <div className="mb-3 sm:mb-4">
          <Typography
            variant="caption"
            color="muted"
            className="mb-2 block text-xs sm:text-sm"
          >
            {t("projects.technologiesTitle")}
          </Typography>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {currentProject.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 bg-background-elevated text-text-primary rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
            {currentProject.technologies.length > 4 && (
              <span className="px-2 sm:px-3 py-1 bg-border text-text-muted rounded-full text-xs sm:text-sm">
                +{currentProject.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {currentProject.features && currentProject.features.length > 0 && (
          <div className="mb-4 sm:mb-6 hidden sm:block">
            <Typography variant="caption" color="muted" className="mb-2 block">
              {t("projects.keyFeaturesTitle")}
            </Typography>
            <ul className="space-y-1">
              {currentProject.features
                .slice(0, window.innerWidth >= 768 ? 3 : 2)
                .map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 mt-1.5">
                    <span className="text-accent-light text-sm sm:text-base">
                      {">"}
                    </span>
                    <Typography
                      variant="caption"
                      color="secondary"
                      className="text-xs sm:text-sm"
                    >
                      {feature}
                    </Typography>
                  </li>
                ))}
              {currentProject.features.length >
                (window.innerWidth >= 768 ? 3 : 2) && (
                <li className="flex items-start gap-2 mt-1.5">
                  <Typography
                    variant="caption"
                    color="muted"
                    className="text-xs sm:text-sm"
                  >
                    ...{" "}
                    {t("projects.placeholders.moreFeatures", {
                      count:
                        currentProject.features.length -
                        (window.innerWidth >= 768 ? 3 : 2),
                    })}
                  </Typography>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {currentProject.links.demo && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleExternalLink(currentProject.links.demo!)}
              icon={<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />}
              className="flex-1 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">
                {t("projectsSection.liveDemo")}
              </span>
              <span className="sm:hidden">Demo</span>
            </Button>
          )}

          {currentProject.links.github && (
            <Button
              variant="outlined"
              size="sm"
              onClick={() => handleExternalLink(currentProject.links.github!)}
              icon={<Github className="w-3 h-3 sm:w-4 sm:h-4" />}
              className="flex-1 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">
                {t("projectsSection.sourceCode")}
              </span>
              <span className="sm:hidden">Code</span>
            </Button>
          )}

          {!currentProject.links.demo && !currentProject.links.github && (
            <Typography
              variant="caption"
              color="muted"
              className="text-center py-2 text-xs sm:text-sm"
            >
              {t("projects.placeholders.linksUnavailable")}
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
