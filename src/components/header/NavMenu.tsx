import React, { useEffect, useRef, useState } from "react";
import { navItems, scrollToElement } from "../../utils/navItems";
import NavItem from "./NavItem";
import type { NavMenuProps } from "./types";
import { Button } from "../common";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const NavMenu: React.FC<NavMenuProps> = ({ className = "" }) => {
  const [visibleItems, setVisibleItems] = useState(navItems.length);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("navigation");

  const breakpoints = [
    { maxWidth: 1400, visibleCount: 5 },
    { maxWidth: 1300, visibleCount: 3 },
    { maxWidth: 1100, visibleCount: 2 },
    { maxWidth: 1024, visibleCount: 1 },
  ];

  const calculateVisibleItems = () => {
    const windowWidth = window.innerWidth;

    for (const breakpoint of breakpoints) {
      if (windowWidth >= breakpoint.maxWidth) {
        return breakpoint.visibleCount;
      }
    }

    return 0;
  };

  const handleResize = () => {
    const newVisibleCount = calculateVisibleItems();
    setVisibleItems(newVisibleCount);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const visibleNavItems = navItems.slice(0, visibleItems);
  const hiddenNavItems = navItems.slice(visibleItems);

  return (
    <nav
      className={`flex flex-row gap-2 items-center ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {visibleNavItems.map((item) => (
        <NavItem
          key={item.scrollTarget}
          title={item.titleKey}
          scrollTarget={item.scrollTarget}
          className="hidden lg:flex"
        />
      ))}
      <div ref={dropdownRef} className={`relative ${className}`}>
        {hiddenNavItems.length > 0 && (
          <Button
            onClick={toggleDropdown}
            variant="ghost"
            size="md"
            aria-label="Open more navigation items"
            className="mr-2"
          >
            {t("more")}
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
        {isDropdownOpen && (
          <div
            className="
            absolute top-full right-0 mt-1 z-50
            bg-background border-2 border-border
            rounded-lg shadow-lg shadow-accent/20
            overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
          "
            role="listbox"
            aria-label="More nav items"
          >
            {hiddenNavItems.map((item) => (
              <Button
                variant="ghost"
                className="w-[100%] text-nowrap sm:rounded-none"
                onClick={() => {
                  scrollToElement(item.scrollTarget);
                }}
              >
                {t(item.titleKey.split(".")[1])}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
