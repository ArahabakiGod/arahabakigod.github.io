import React from "react";
import type { TypographyProps } from "./types";
import { typographyVariantStyles as variantStyles } from "./variantStyles";

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  className = "",
  color = "primary",
  ...props
}) => {
  const Component =
    variant === "p" ||
    variant === "subtitle" ||
    variant === "caption"
      ? "p"
      : variant;

  const colorClasses = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    accent: "text-accent",
  };

  const combinedClassName = `${variantStyles[variant]} ${colorClasses[color]} ${className}`;

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
