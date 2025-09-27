import { useTranslation } from "../../hooks/useTranslation";
import { scrollToElement } from "../../utils/navItems";
import { Button } from "../common";
import type { NavItemProps } from "./types";

const NavItem: React.FC<NavItemProps> = ({
  title,
  scrollTarget,
  className = "",
}) => {
  const { t } = useTranslation("navigation");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToElement(scrollTarget);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToElement(scrollTarget);
    }
  };

  const getTranslationKey = (titleKey: string): string => {
    const parts = titleKey.split(".");
    return parts.length > 1 ? parts[1] : titleKey;
  };

  return (
    <Button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      variant="ghost"
      size="md"
      className={`
        hover:bg-hover hover:text-primary
        focus:ring-2 focus:ring-focus-ring
        transition-all duration-200
        whitespace-nowrap text-xl
        ${className}
      `}
      aria-label={`Navigate to ${t(getTranslationKey(title))}`}
    >
      {t(getTranslationKey(title))}
    </Button>
  );
};

export default NavItem;
