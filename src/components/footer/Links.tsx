import React from "react";
import { Button, Typography } from "../common";
import { SiTelegram, SiGithub, SiLinkedin } from "react-icons/si";
import type { SocialLink } from "./types";
import { useTranslation } from "react-i18next";

const Links: React.FC = () => {
  const { t } = useTranslation("portfolio");

  const socialLinks: SocialLink[] = [
    {
      name: "Telegram",
      icon: <SiTelegram className="w-4 h-4" />,
      href: "https://t.me/spac1e",
      color: "text-text-primary hover:text-[#0088cc]",
<<<<<<< HEAD
      ariaLabel: t("footer.labels.telegram"),
=======
      ariaLabel: "Написать в Telegram",
>>>>>>> ba18ed770b6a7077078e92f853ff7c7228259813
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-4 h-4" />,
      href: "https://github.com/arahabakigod",
      color: "hover:text-text-primary",
<<<<<<< HEAD
      ariaLabel: t("footer.labels.github"),
=======
      ariaLabel: "Посмотреть профиль на GitHub",
>>>>>>> ba18ed770b6a7077078e92f853ff7c7228259813
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/arahabaki",
      color: "hover:text-[#0a66c2]",
<<<<<<< HEAD
      ariaLabel: t("footer.labels.linkedin"),
=======
      ariaLabel: "Подключиться в LinkedIn",
>>>>>>> ba18ed770b6a7077078e92f853ff7c7228259813
    },
  ];

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full md:w-[25%]">
      <Typography variant="h4" color="secondary" className="mb-4">
        {t("footer.links")}
      </Typography>

      <div className="space-y-2">
        {socialLinks.map((social) => (
          <Button
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
