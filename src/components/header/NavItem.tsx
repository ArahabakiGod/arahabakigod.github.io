import { useTranslation } from "react-i18next";
import { scrollToElement } from "../../utils/navItems";
import { Button } from "../common";

interface NavItemProps {
  title: string;
  scrollTarget: string;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  title,
  scrollTarget,
  className = "",
}) => {
  const { t } = useTranslation("navigation");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(scrollTarget);
  };

  return (
    <Button onClick={handleClick} variant="outlined" className={className}>
      {t(title.split(".")[1])}
    </Button>
  );
};

export default NavItem;
