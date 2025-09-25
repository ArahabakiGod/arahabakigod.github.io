import React from "react";
import { Typography } from "../common";
import type { LogoProps } from "./types";
import { useTranslation } from "../../hooks/useTranslation";

const Logo: React.FC<LogoProps> = ({ className = "", onClick }) => {
    const { t } = useTranslation("portfolio");

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`cursor-pointer select-none group ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <div
          className="
          w-10 h-10 
          bg-gradient-to-br from-primary to-accent 
          border-1 border-border
          rounded-lg 
          flex items-center justify-center
          shadow-md
          group-hover:shadow-lg
          group-hover:scale-105
          transition-all duration-300
        "
        >
          <Typography
            variant="h4"
            className="text-white font-bold text-lg leading-none"
          >
            {t("header.logoShort")}
          </Typography>
        </div>

        <div className="hidden sm:block">
          <Typography
            variant="h4"
            color="primary"
            className="
              font-bold 
              group-hover:text-secondary 
              transition-colors duration-300
              tracking-tight
            "
          >
            {t("header.logo")}
          </Typography>
          <Typography
            variant="caption"
            color="muted"
            className="
              -mt-1 
              block
              group-hover:text-text-secondary 
              transition-colors duration-300
            "
          >
            {t("header.developer")}
          </Typography>
        </div>

        <div className="sm:hidden">
          <Typography
            variant="h4"
            color="primary"
            className="
              font-bold 
              group-hover:text-secondary 
              transition-colors duration-300
            "
          >
            {t("header.logoShort")}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Logo;
