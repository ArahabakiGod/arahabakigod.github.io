import { Button } from "../../common";
import type { ActivityFieldSwitchProps } from "./types";

const ActivityFieldSwitch: React.FC<ActivityFieldSwitchProps> = () => {
  const handleActivitySwitchClick = () => {};
  return (
    <div>
      <Button>As frontend dev</Button>
      <Button>As backend dev</Button>
    </div>
  );
};

export default ActivityFieldSwitch;
