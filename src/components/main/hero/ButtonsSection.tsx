import React from "react";
import { Button } from "../../common";
import type { ButtonsSectionProps } from "./types";

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ className = "" }) => {
  const handleViewProjectsClick = () => {};
  const handleContactMeClick = () => {};
  return (
    <div>
      <Button>View Projects</Button>
      <Button>Contact Me</Button>
    </div>
  );
};

export default ButtonsSection;
