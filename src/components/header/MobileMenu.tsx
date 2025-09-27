import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../utils/navItems";
import NavItem from "./NavItem";
import { Button } from "../common";

interface MobileMenuProps {
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("[data-mobile-menu]")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`lg:hidden ${className}`} data-mobile-menu>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        className="p-2"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="
            fixed top-12 left-0 right-0 z-40
            bg-background-secondary/95 
            backdrop-blur-md
            border-b-2 border-border-light
            shadow-lg shadow-border/40
            animate-in slide-in-from-top-5 duration-200
          "
          >
            <nav className="py-4 px-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.scrollTarget} onClick={handleNavItemClick}>
                  <NavItem
                    title={item.titleKey}
                    scrollTarget={item.scrollTarget}
                    className="w-full justify-start text-left"
                  />
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
