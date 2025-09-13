import React from "react";
import type { ButtonProps } from "./types";
import { buttonVariantStyles, buttonSizeStyles } from "./variantStyles";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  icon,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-body rounded-lg transition-all duration-200 cursor-pointer select-none";

  const disabledStyles = "opacity-60 cursor-not-allowed pointer-events-none";

  const loadingStyles = "cursor-wait";

  const combinedClassName = `
    ${baseStyles}
    ${buttonVariantStyles[variant]}
    ${buttonSizeStyles[size]}
    ${disabled || loading ? disabledStyles : ""}
    ${loading ? loadingStyles : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  
  const getIconSize = () => {
    switch (size) {
      case "sm":
        return "w-3 h-3";
      case "md":
        return "w-4 h-4";
      case "lg":
        return "w-5 h-5";
      default:
        return "w-4 h-4";
    }
  };

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading ? (
        <svg
          className={`animate-spin -ml-1 mr-2 ${getIconSize()}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && (
          <span className={`${getIconSize()} mr-2 flex-shrink-0`}>{icon}</span>
        )
      )}
      {children}
    </button>
  );
};

export default Button;
