import { SiTelegram, SiGithub, SiLinkedin } from "react-icons/si";
import type { SocialLink } from "../components/footer/types";

export const socialLinksData: SocialLink[] = [
  {
    name: "Telegram",
    icon: <SiTelegram className="w-4 h-4" />,
    href: "https://t.me/spac1e",
    color: "text-text-primary hover:text-[#0088cc]",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-4 h-4" />,
    href: "https://github.com/arahabakigod",
    color: "hover:text-text-primary",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="w-4 h-4" />,
    href: "https://linkedin.com/in/arahabaki",
    color: "hover:text-[#0a66c2]",
  },
];

export const getSocialLinksWithLabels = (
  t: (key: string) => string
): SocialLink[] => {
  return socialLinksData.map((link) => ({
    ...link,
    ariaLabel: t(`footer.labels.${link.name.toLowerCase()}`),
  }));
};
