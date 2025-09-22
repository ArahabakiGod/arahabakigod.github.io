import React from "react";
import { Typography } from "../../common";
import type { TextSectionProps } from "./types";
import { useTranslation } from "react-i18next";

const TextSection: React.FC<TextSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className={className}>
      <Typography variant="h2" color="accent" className="pb-0.5">
        {t("hero.title")}
      </Typography>
      <Typography variant="h4" color="secondary">
        {t("hero.subtitle")}
      </Typography>
      <Typography className="py-4">{t("hero.description")}</Typography>
    </div>
  );
};

export default TextSection;
