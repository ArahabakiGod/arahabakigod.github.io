import React from "react";
import { Typography } from "../../common";
import type { TextSectionProps } from "./types";
import { useTranslation } from "../../../hooks/useTranslation";

const TextSection: React.FC<TextSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className={className}>
      <Typography variant="h2" color="accent" className="">
        {t("contact.title")}
      </Typography>
      <Typography variant="subtitle" color="secondary" className="mt-2">
        {t("contact.subtitle")}
      </Typography>
    </div>
  );
};

export default TextSection;