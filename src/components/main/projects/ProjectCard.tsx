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
      <div className="p-6">
        {/* Title and status */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-grow">
            <Typography variant="h3" color="primary" className="mb-2">
              {currentProject.title}
            </Typography>

            <div className="flex items-center gap-2 mb-2">
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

          {/* Company */}
          {currentProject.company && (
            <div className="mt-2 sm:mt-0">
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

        {/* Desc */}
        <Typography variant="p" color="primary" className="mb-4">
          {currentProject.description}
        </Typography>

        {/* Technologies */}
        <div className="mb-4">
          <Typography variant="caption" color="muted" className="mb-2 block">
            {t("projects.technologiesTitle")}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {currentProject.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background-elevated text-text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
            {currentProject.technologies.length > 6 && (
              <span className="px-3 py-1 bg-border text-text-muted rounded-full text-sm">
                {t("projects.placeholders.moreTechnologies", {
                  count: currentProject.technologies.length - 6,
                })}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        {currentProject.features && currentProject.features.length > 0 && (
          <div className="mb-6">
            <Typography variant="caption" color="muted" className="mb-2 block">
              {t("projects.keyFeaturesTitle")}
            </Typography>
            <ul className="space-y-1">
              {currentProject.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 mt-1.5">
                  <span className="text-accent-light">{">"}</span>
                  <Typography variant="caption" color="secondary">
                    {feature}
                  </Typography>
                </li>
              ))}
              {currentProject.features.length > 3 && (
                <li className="flex items-start gap-2  mt-1.5">
                  <Typography variant="caption" color="muted">
                    ...{" "}
                    {t("projects.placeholders.moreFeatures", {
                      count: currentProject.features.length - 3,
                    })}
                  </Typography>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3">
          {currentProject.links.demo && (
            <Button
              variant="primary"
              size="md"
              onClick={() => handleExternalLink(currentProject.links.demo!)}
              icon={<ExternalLink className="w-4 h-4" />}
              className="flex-1"
            >
              {t("projectsSection.liveDemo")}
            </Button>
          )}

          {currentProject.links.github && (
            <Button
              variant="outlined"
              size="md"
              onClick={() => handleExternalLink(currentProject.links.github!)}
              icon={<Github className="w-4 h-4" />}
              className="flex-1"
            >
              {t("projectsSection.sourceCode")}
            </Button>
          )}

          {!currentProject.links.demo && !currentProject.links.github && (
            <Typography
              variant="caption"
              color="muted"
              className="text-center py-2"
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
