import { useThemeStore } from "../../stores/themeStore";
import { useCompactLayout } from "../../hooks/useBrowserDetection";
import { Switch } from "../common";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import { SunIcon, MoonIcon } from "./ThemeIcons";
import type { HeaderProps } from "./types";
import MobileMenu from "./MobileMenu";
import LanguageDropdown from "./LanguageDropdown";

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useThemeStore();
  const needsCompactLayout = useCompactLayout();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-20 
        w-full h-12 
        flex flex-row items-center justify-between 
        ${needsCompactLayout ? "px-2 sm:px-3 lg:px-4" : "px-4 sm:px-6 lg:px-8"}
        bg-background-secondary/95 
        backdrop-blur-md
        border-b-2 border-border-light 
        shadow-xl shadow-border/60
        transition-all duration-300
        ${className}
      `}
      role="banner"
    >
      {/* Logo */}
      <div
        className={`flex-shrink-0 ${
          needsCompactLayout ? "hidden lg:block" : "hidden sm:block"
        }`}
      >
        <Logo className="transition-transform duration-300" />
      </div>

      {/* Navigation */}
      <div className="flex-grow flex justify-start sm:justify-center overflow-hidden">
        <NavMenu className="hidden lg:flex" />

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      {/* Controls */}
      <div
        className={`flex flex-row items-center flex-shrink-0 ${
          needsCompactLayout ? "space-x-1" : "space-x-2"
        }`}
      >
        <LanguageDropdown />

        <Switch
          size={needsCompactLayout ? "sm" : "md"}
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
