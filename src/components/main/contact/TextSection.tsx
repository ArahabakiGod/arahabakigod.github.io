import { useTranslation } from "../../../hooks/useTranslation";
import type { TextSectionProps } from "./types"

const TextSection: React.FC<TextSectionProps> = () => {
    const { t } = useTranslation("common");
  return (
    <div>TextSection</div>
  )
}

export default TextSection