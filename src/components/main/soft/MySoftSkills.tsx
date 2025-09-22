import SoftSkillsSection from "./SoftSkillsSection"
import TextSection from "./TextSection"
import type { MySoftSkillsProps } from "./types"

const MySoftSkills: React.FC<MySoftSkillsProps> = ({ className }) => {
  return (
    <div className={className} id="soft-skills">
      <TextSection />
      <SoftSkillsSection />
    </div>
  );
};

export default MySoftSkills