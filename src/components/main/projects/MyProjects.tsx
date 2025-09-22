import ProjectsSection from "./ProjectsSection";
import TextSection from "./TextSection";
import type { MyProjectsProps } from "./types";

const MyProjects: React.FC<MyProjectsProps> = ({ className }) => {
  return (
    <div className={className} id="my-projects">
      <TextSection />
      <ProjectsSection />
    </div>
  );
};

export default MyProjects;
