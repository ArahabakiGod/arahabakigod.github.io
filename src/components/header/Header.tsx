import React from "react";
import { useLanguageStore } from "../../stores/languageStore";
import { useThemeStore } from "../../stores/themeStore";
import { Switch } from "../common";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import { SunIcon, MoonIcon } from "./ThemeIcons";
import type { HeaderProps } from "./types";
import MobileMenu from "./MobileMenu";

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const { theme, toggleTheme } = useThemeStore();

  const handleLanguageChange = (isRu: boolean) => {
    const newLanguage = isRu ? "ru" : "en";
    setLanguage(newLanguage);
  };

  const handleThemeChange = () => {
    toggleTheme();
  };

  const isRussian = currentLanguage === "ru";

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
        shadow-xl shadow-accent/40
        transition-all duration-300
        ${className}
      `}
      role="banner"
    >
      <div className="flex-shrink-0">
        <Logo className="transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex-grow flex justify-center">
        <NavMenu className="hidden lg:flex" />

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className="flex flex-row items-center space-x-2 flex-shrink-0">
        <Switch
          size="md"
          textInside
          checked={isRussian}
          onChange={handleLanguageChange}
          colorLeft="bg-border"
          colorRight="bg-primary"
          labelLeft="RU"
          labelRight="EN"
          iconLeft="EN"
          iconRight="RU"
          aria-label="Language switcher"
          className="min-w-[3rem]"
        />

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
