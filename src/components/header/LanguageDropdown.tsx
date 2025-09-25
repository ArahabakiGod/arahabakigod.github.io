import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "../common";
import {
  availableLanguages,
  getLanguageByCode,
  getDefaultLanguage,
} from "../../constants/languages";
import type { LanguageDropdownProps } from "./types";
import { useTranslation } from "../../hooks/useTranslation";

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentLanguage, changeLanguage } = useTranslation();

  const currentLang =
    getLanguageByCode(currentLanguage) || getDefaultLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const handleLanguageSelect = async (languageCode: string) => {
    console.log("Language selected:", languageCode);
    try {
      await changeLanguage(languageCode);
      setIsOpen(false);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <Button
        variant="outlined"
        size="sm"
        onClick={toggleDropdown}
        className="
          flex items-center gap-2 min-w-[4rem]
          hover:bg-hover border-border
        "
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="w-3 h-3" />
        <span className="font-medium">{currentLang.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div
          className="
            absolute top-full right-0 mt-1 z-50
            bg-background border-2 border-border
            rounded-lg shadow-lg shadow-accent/20
            overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
          "
          role="listbox"
          aria-label="Language options"
        >
          {availableLanguages.map((language) => (
            <Button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              variant="ghost"
              className={`
                w-full px-2 py-0.5 text-left
                flex items-center gap-3
                hover:bg-hover transition-colors duration-150
                focus:bg-hover focus:outline-none
                rounded-none
                ${
                  currentLanguage === language.code
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-text-primary"
                }
              `}
              role="option"
              aria-selected={currentLanguage === language.code}
            >
              <span className="flex-shrink-0">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {language.code.toUpperCase()}
                </span>
                <span className="text-xs text-text-muted">
                  {language.nativeName}
                </span>
              </div>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
