import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typography, Button } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import {
  getFeaturedProjects,
  getTranslatedProjectById,
} from "../../../constants";
import type { ProjectsSectionProps } from "./types";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  className = "",
}) => {
  const { t } = useTranslation("portfolio");
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProjects = getFeaturedProjects();
  const totalProjects = featuredProjects.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  if (totalProjects === 0) {
    return (
      <div className={className}>
        <Typography variant="p" color="muted">
          No projects available
        </Typography>
      </div>
    );
  }

  const currentProject = getTranslatedProjectById(
    featuredProjects[currentIndex].id,
    t
  );

  if (!currentProject) return null;

  return (
    <div className={className}>
      <div className="relative w-full flex flex-row">
        <ProjectCard currentProject={currentProject} />

        {totalProjects > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevProject}
              color="custom"
              className="z-10 w-8 sm:w-10 max-w-10 h-[100%] p-0 absolute left-0 rounded-r-none text-accent hover:text-white hover:bg-primary/90 hover:border-primary/90 active:bg-primary/80"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextProject}
              color="custom"
              className="z-10 w-8 sm:w-10 max-w-10 h-[100%] p-0 absolute -right-6 rounded-l-none text-accent hover:text-white hover:bg-primary/90 hover:border-primary/90 active:bg-primary/80"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </>
        )}
      </div>

      {totalProjects > 1 && (
        <>
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`
                  w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200
                  ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-border hover:bg-border-hover"
                  }
                `}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-2">
            <Typography
              variant="caption"
              className="text-base sm:text-xl"
              color="muted"
            >
              {t("projects.placeholders.currentPreview")} {currentIndex + 1}/
              {totalProjects}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsSection;
