import React from "react";
import { getSectionStyles } from "../sectionStyles";
import SoftSkillsSection from "./SoftSkillsSection";
import TextSection from "./TextSection";
import type { MySoftSkillsProps } from "./types";

const MySoftSkills: React.FC<MySoftSkillsProps> = ({ className = "" }) => {
  return (
    <div className={className + " items-center"} id="soft-skills">
      <TextSection className={getSectionStyles.left()} />
      <div className={getSectionStyles.right()}>
        <SoftSkillsSection className="w-[100%]" />
      </div>
    </div>
  );
};

export default MySoftSkills;
