import React from "react";
import { Button } from "../../common";
import type { ButtonsSectionProps } from "./types";
import { scrollToElement } from "../../../utils/navItems";

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ className = "" }) => {
  const handleViewProjectsClick = () => {
    scrollToElement("my-projects");
  };
  const handleContactMeClick = () => {
    //TODO open modal
  };
  return (
    <div className={className}>
      <Button className="w-[40%]" onClick={handleViewProjectsClick}>
        View Projects
      </Button>
      <Button className="w-[40%]">Contact Me</Button>
    </div>
  );
};

export default ButtonsSection;
