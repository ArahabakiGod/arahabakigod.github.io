import { getSectionStyles } from "../sectionStyles";
import ActivityFieldSwitch from "./ActivityFieldSwitch"
import Technologies from "./Technologies"
import TextSection from "./TextSection"
import type { StackProps } from "./types"

const Stack: React.FC<StackProps> = ({ className }) => {
  return (
    <div className={className} id="my-stack">
      <TextSection className={getSectionStyles.left()} />
      <div className={getSectionStyles.right()}>
        <ActivityFieldSwitch className="mb-4" />
        <Technologies className="mb-8" />
      </div>
    </div>
  );
};

export default Stack