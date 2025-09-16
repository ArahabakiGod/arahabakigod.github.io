import React from "react";
import { Typography } from "../common";
import Links from "./Links";
import Contacts from "./Contacts";
import TechStack from "./TechStack";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("portfolio");

  return (
    <footer className="bg-background-secondary opacity-90 border-t border-accent py-4 px-4 inset-shadow-sm inset-shadow-accent/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between">
          <Links />
          <Contacts />
          <TechStack />
        </div>
        <div className="mt-8 pt-4 border-t border-border text-center">
          <Typography variant="caption" color="muted">
            {t("footer.copyright")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
