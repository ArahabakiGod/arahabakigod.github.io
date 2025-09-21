import SoftSkillsSection from "./SoftSkillsSection"
import TextSection from "./TextSection"
import type { MySoftSkillsProps } from "./types"

const MySoftSkills: React.FC<MySoftSkillsProps> = () => {
  return (
    <div>
        <TextSection />
        <SoftSkillsSection />
    </div>
  )
}

export default MySoftSkills