import React from "react";
import { Typography } from "../../common";
import type { TextSectionProps } from "./types";
import { useTranslation } from "react-i18next";
import { getAvailabilityStatus, getExperienceText, getLocationText, getTimezoneText } from "../../../constants";

const TextSection: React.FC<TextSectionProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className={className}>
      <Typography variant="h2" color="accent" className="">
        {t("hero.title")}
      </Typography>
      <Typography variant="subtitle" color="secondary">
        {t("hero.subtitle")}
      </Typography>
      <div className="py-4">
        <Typography>{t("hero.description")}</Typography>
        <Typography color="secondary" className="pt-4">
          {getExperienceText(t)}
        </Typography>
        <Typography color="secondary" className="inline">
          {t("personal.availabilityTitle")}
        </Typography>
        <Typography className="inline" color="primary">
          {" " + getAvailabilityStatus(t)}
        </Typography>
        <div></div>
        <Typography color="secondary" className="inline">
          {t("personal.locationTitle")}
        </Typography>
        <Typography className="inline" color="primary">
          {" " + getLocationText(t) + " | "}
        </Typography>
        <Typography className="inline" color="secondary">
          {getTimezoneText(t)}
        </Typography>
      </div>
    </div>
  );
};

export default TextSection;
