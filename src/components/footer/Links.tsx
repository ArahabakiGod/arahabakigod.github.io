import React from "react";
import { Button, Typography } from "../common";
import { useTranslation } from "../../hooks/useTranslation";
import { getSocialLinksWithLabels } from "../../constants";

const Links: React.FC = () => {
  const { t } = useTranslation("portfolio");

  const socialLinks = getSocialLinksWithLabels(t);

  const handleSocialClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full md:w-[25%]">
      <Typography variant="h4" color="secondary" className="mb-4">
        {t("footer.links")}
      </Typography>

      <div className="space-y-2">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            icon={social.icon}
            variant="outlined"
            onClick={() => handleSocialClick(social.href)}
            className="pl-1 pb-1 pt-1 w-[75%] justify-start"
          >
            {social.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Links;
