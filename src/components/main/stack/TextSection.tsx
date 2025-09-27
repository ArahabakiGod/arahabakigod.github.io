import React from "react";
import { Typography } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import type { TextSectionProps } from "./types";

const TextSection: React.FC<TextSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className={className}>
      <Typography variant="h2" color="accent" className="">
        {t("stack.title")}
      </Typography>
      <Typography variant="subtitle" color="secondary" className="mt-2">
        {t("stack.description")}
      </Typography>
    </div>
  );
};

export default TextSection;
