import { useTranslation } from "../../hooks/useTranslation";
import { useThemeStore } from "../../stores/themeStore";
import { Typography, Switch } from "../common";
import NavMenu from "./NavMenu";

function Header() {
  const { changeLanguage, isLanguage } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();

  const handleLanguageChange = (isRu: boolean) => {
    changeLanguage(isRu ? "ru" : "en");
  };

  const handleThemeChange = () => {
    toggleTheme()
  }

  const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className = "w-full h-full",
    ...props
  }) => (
    <svg
      className={className}
      fill="#e0c01f"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
  
  const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className = "w-full h-full",
    ...props
  }) => (
    <svg
      className={className}
      fill="#2b0a69"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  return (
    <div className="fixed flex flex-row left-0 top-0 z-20 bg-background-secondary w-full justify-between items-center px-2 h-12 border-b-2 border-border-light shadow-xl shadow-accent/40">
      <Typography variant="h1" color="primary">
        PLACEHOLDER
      </Typography>
      <NavMenu />
      <div className="flex flex-row space-x-1">
        <Switch
          size="md"
          textInside
          checked={isLanguage("ru")}
          onChange={handleLanguageChange}
          colorLeft="bg-border"
          colorRight="bg-primary"
          iconLeft="RU"
          iconRight="EN"
          labelLeft="EN"
          labelRight="RU"
        />
        <Switch
          size="md"
          checked={theme === "dark"}
          onChange={handleThemeChange}
          colorLeft="bg-warning"
          colorRight="bg-accent"
          iconLeft={<SunIcon />}
          iconRight={<MoonIcon />}
        />
      </div>
    </div>
  );
}

export default Header;
