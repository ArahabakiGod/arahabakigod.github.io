import { SiTelegram, SiGithub, SiLinkedin } from "react-icons/si";
import type { SocialLink } from "../components/footer/types";

export const socialLinksData: SocialLink[] = [
  {
    name: "Telegram",
    icon: <SiTelegram className="w-4 h-4" />,
    href: "https://t.me/spac1e",
    color: "",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-4 h-4" />,
    href: "https://github.com/arahabakigod",
    color: "",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="w-4 h-4" />,
    href: "https://linkedin.com/in/arahabaki",
    color: "",
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
