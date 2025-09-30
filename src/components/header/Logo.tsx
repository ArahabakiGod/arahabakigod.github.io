import React, { useState } from "react";
import { Typography, AnimatedLogo } from "../common";
import type { LogoProps } from "./types";
import { useTranslation } from "../../hooks/useTranslation";

const Logo: React.FC<LogoProps> = ({ className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            flex items-center justify-center
            rounded-lg 
            shadow-md
            group-hover:shadow-lg
            transition-shadow duration-300
          "
        >
          <AnimatedLogo isHovered={isHovered} className="w-full h-full" />
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
