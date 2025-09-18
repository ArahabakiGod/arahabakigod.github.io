import React from "react";
import { navItems } from "../../utils/navItems";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import type { NavMenuProps } from "./types";

const NavMenu: React.FC<NavMenuProps> = ({ className = "" }) => {
  return (
    <nav
      className={`flex flex-row gap-2 items-center ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <NavItem
          key={item.scrollTarget}
          title={item.titleKey}
          scrollTarget={item.scrollTarget}
          className="hidden lg:flex"
        />
      ))}

      <MobileMenu />
    </nav>
  );
};

export default NavMenu;
