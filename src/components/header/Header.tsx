import { useThemeStore } from "../../stores/themeStore";
import { Switch } from "../common";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import { SunIcon, MoonIcon } from "./ThemeIcons";
import type { HeaderProps } from "./types";
import MobileMenu from "./MobileMenu";
import LanguageDropdown from "./LanguageDropdown";

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useThemeStore();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-20 
        w-full h-12 
        flex flex-row items-center justify-between 
        px-4 sm:px-6 lg:px-8
        bg-background-secondary/95 
        backdrop-blur-md
        border-b-2 border-border-light 
        shadow-xl shadow-border/60
        transition-all duration-300
        ${className}
      `}
      role="banner"
    >
      <div className="flex-shrink-0 hidden sm:block">
        <Logo className="transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex-grow flex justify-start sm:justify-center">
        <NavMenu className="hidden lg:flex" />

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className="flex flex-row items-center space-x-2 flex-shrink-0">
        <LanguageDropdown />

        <Switch
          size="md"
          checked={theme === "dark"}
          onChange={handleThemeChange}
          colorLeft="bg-warning"
          colorRight="bg-accent"
          iconLeft={<SunIcon />}
          iconRight={<MoonIcon />}
          aria-label="Theme switcher"
        />
      </div>
    </header>
  );
};

export default Header;
