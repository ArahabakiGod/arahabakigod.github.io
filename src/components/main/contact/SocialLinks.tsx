import React from "react";
import { Typography, Card } from "../../common";
import type { SocialLinksProps } from "./types";
import { useTranslation } from "../../../hooks/useTranslation";
import { socialLinksData } from "../../../constants";

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");

  const handleSocialClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={className}>
      <Typography variant="h3" color="secondary" className="mb-6 text-center">
        {t("contact.social.title")}
      </Typography>

      <div className="flex flex-col flex-wrap items-center gap-4 xl:flex-row xl:gap-3">
        {socialLinksData.map((social) => (
          <Card
            key={social.name}
            variant="social"
            size="sm"
            interactive
            clickable
            onClick={() => handleSocialClick(social.href)}
            className="group cursor-pointer xl:flex-1"
            aria-label={`Visit ${social.name} profile`}
          >
            <div className="flex items-center gap-3 p-2">
              <div
                className={`
                  text-xl transition-colors duration-200
                  text-text-muted group-hover:text-primary
                  ${social.color}
                `}
              >
                {social.icon}
              </div>

              <div className="flex-grow">
                <Typography
                  variant="subtitle"
                  color="primary"
                  className="group-hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {social.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="muted"
                  className="group-hover:text-text-primary transition-colors duration-200"
                >
                  {t(`contact.social.${social.name.toLowerCase()}`)}
                </Typography>
              </div>

              <div className="text-text-muted text-4xl group-hover:text-primary transition-all duration-200 transform group-hover:translate-x-1">
                →
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
