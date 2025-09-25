import React, { useState } from "react";
import { Button } from "../../common";
import type { ButtonsSectionProps } from "./types";
import { scrollToElement } from "../../../utils/navItems";
import { useTranslation } from "../../../hooks/useTranslation";
import { ContactModal } from "../../modal";

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProjectsClick = () => {
    scrollToElement("my-projects");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={className}>
      <Button className="w-[45%]" onClick={handleViewProjectsClick}>
        {t("hero.viewProjects")}
      </Button>
      <Button className="w-[45%]" color="secondary" onClick={handleOpenModal}>
        {t("hero.contactMe")}
      </Button>

      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ButtonsSection;
