import ActivityFieldSwitch from "./ActivityFieldSwitch"
import Technologies from "./Technologies"
import TextSection from "./TextSection"
import type { StackProps } from "./types"

const Stack: React.FC<StackProps> = () => {
  return (
    <div>
        <TextSection />
        <ActivityFieldSwitch />
        <Technologies />
    </div>
  )
}

export default Stack