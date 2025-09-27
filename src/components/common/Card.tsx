import React from "react";
import type { CardProps } from "./types";
import {
  cardVariantStyles,
  cardSizeStyles,
  cardInteractiveStyles,
  cardResponsiveStyles,
} from "./variantStyles";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  size = "custom",
  interactive = false,
  href,
  clickable = false,
  onClick,
  ...props
}) => {
  const baseStyles = `${cardVariantStyles[variant]} ${cardResponsiveStyles} ${cardSizeStyles[size]}`;

  const interactiveClasses =
    interactive || clickable || href
      ? `${cardInteractiveStyles.base} ${cardInteractiveStyles.hover} ${cardInteractiveStyles.active} ${cardInteractiveStyles.focus}`
      : "";

  const combinedClassName = `${baseStyles} ${interactiveClasses} ${className}`
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (clickable && onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      (interactive || clickable) &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      if (clickable && onClick) {
        onClick(event as any);
      }
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...props}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {children}
      </a>
    );
  }

  if (interactive || clickable) {
    return (
      <div
        className={combinedClassName}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role={clickable ? "button" : "article"}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;