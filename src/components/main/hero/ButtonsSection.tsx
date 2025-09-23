import React from "react";
import { Button } from "../../common";
import type { ButtonsSectionProps } from "./types";
import { scrollToElement } from "../../../utils/navItems";
import { useTranslation } from "react-i18next";

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");
  
  const handleViewProjectsClick = () => {
    scrollToElement("my-projects");
  };
  const handleContactMeClick = () => {
    //TODO open modal
  };
  return (
    <div className={className}>
      <Button className="w-[45%]" onClick={handleViewProjectsClick}>
        {t("hero.viewProjects")}
      </Button>
      <Button
        className="w-[45%]"
        color="secondary"
        onClick={handleContactMeClick}
      >
        {t("hero.contactMe")}
      </Button>
    </div>
  );
};

export default ButtonsSection;
