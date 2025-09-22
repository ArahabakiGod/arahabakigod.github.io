import ActivityFieldSwitch from "./ActivityFieldSwitch"
import Technologies from "./Technologies"
import TextSection from "./TextSection"
import type { StackProps } from "./types"

const Stack: React.FC<StackProps> = ({ className }) => {
  return (
    <div className={className} id="my-stack">
      <TextSection />
      <ActivityFieldSwitch />
      <Technologies />
    </div>
  );
};

export default Stack