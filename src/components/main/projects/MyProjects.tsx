import ProjectsSection from "./ProjectsSection"
import TextSection from "./TextSection"
import type { MyProjectsProps } from "./types"

const MyProjects: React.FC<MyProjectsProps> = () => {
  return (
    <div>
        <TextSection />
        <ProjectsSection />
    </div>
  )
}

export default MyProjects