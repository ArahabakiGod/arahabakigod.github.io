import { getSectionStyles } from "../sectionStyles";
import SoftSkillsSection from "./SoftSkillsSection";
import TextSection from "./TextSection";
import type { MySoftSkillsProps } from "./types";

const MySoftSkills: React.FC<MySoftSkillsProps> = ({ className }) => {
  return (
    <div className={className} id="soft-skills">
      <TextSection className={getSectionStyles.left()} />
      <div className={getSectionStyles.right()}>
        <SoftSkillsSection />
      </div>
    </div>
  );
};

export default MySoftSkills;
