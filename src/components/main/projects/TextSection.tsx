import { Typography } from "../../common"
import type { TextSectionProps } from "./types"

const TextSection: React.FC<TextSectionProps> = () => {
  return (
    <div>
      <Typography variant="h2">Title</Typography>
      <Typography>Description</Typography>
    </div>
  );
}

export default TextSection