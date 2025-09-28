import React from "react";
import { Button } from "../../common";
import { ExternalLink } from "lucide-react";
import ProjectsSection from "./ProjectsSection";
import TextSection from "./TextSection";
import { useTranslation } from "../../../hooks/useTranslation";
import { scrollToElement } from "../../../utils/navItems";
import type { MyProjectsProps } from "./types";
import { getSectionStyles } from "../sectionStyles";

const MyProjects: React.FC<MyProjectsProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");

  const handleViewAllProjects = () => {
    // TODO: Implement navigation to full projects page or expand view
    console.log("View all projects");
  };

  const handleContactMe = () => {
    scrollToElement("contact-me");
  };

  return (
    <div className={className + " items-center"} id="my-projects">
      <TextSection className={getSectionStyles.left()} />

      <div className={getSectionStyles.right() + " 2xl:!pl-6"}>
        <ProjectsSection className="mb-8 w-[100%]" />

        <div className={getSectionStyles.actions("multipleButtons") + " pl-6 hidden"}>
          <Button
            variant="outlined"
            onClick={handleViewAllProjects}
            icon={<ExternalLink className="w-4 h-4" />}
            className="w-[100%] 2xl:w-[45%]"
          >
            {t("projectsSection.viewProject")}
          </Button>

          <Button
            variant="primary"
            onClick={handleContactMe}
            className="w-[100%] 2xl:w-[45%]"
          >
            {t("hero.contactMe")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;