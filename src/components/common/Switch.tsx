import React from "react";
import type { SwitchProps } from "./types";
import { switchSizeStyles, switchVariantStyles } from "./variantStyles";

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  size = "md",
  disabled = false,
  className = "",
  colorLeft = "bg-border",
  colorRight = "bg-primary",
  labelLeft,
  labelRight,
  iconLeft,
  iconRight,
  textInside = false,
}) => {
  const sizeConfig = switchSizeStyles[size];

  const getCurrentColor = () => (checked ? colorRight : colorLeft);
  const getCurrentIcon = () => (checked ? iconRight : iconLeft);

  const containerClassName = `
    ${switchVariantStyles.base}
    ${sizeConfig.container}
    ${getCurrentColor()}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const toggleClassName = `
    ${switchVariantStyles.toggle.base}
    ${sizeConfig.toggle}
    ${checked ? sizeConfig.translate : "translate-x-0"}
    flex items-center justify-center
  `
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!disabled && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onChange(!checked);
    }
  };

  if (textInside) {
    return (
      <button
        type="button"
        className={`${containerClassName} relative overflow-hidden`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
      >
        <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-white">
          <span
            className={`transition-opacity duration-200 ${
              !checked ? "opacity-0" : "opacity-100"
            }`}
          >
            {labelRight}
          </span>
          <span
            className={`transition-opacity duration-200 ${
              checked ? "opacity-0" : "opacity-100"
            }`}
          >
            {labelLeft}
          </span>
        </div>

        <span className={toggleClassName}>
          {getCurrentIcon() && (
            <span className="text-gray-600 text-xs">{getCurrentIcon()}</span>
          )}
        </span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {labelLeft && (
        <label
          className={`text-sm font-medium font-body cursor-pointer ${
            !checked ? "text-text-primary" : "text-text-muted"
          }`}
          onClick={handleClick}
        >
          {labelLeft}
        </label>
      )}

      <button
        type="button"
        className={containerClassName}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
      >
        <span className={toggleClassName}>
          {getCurrentIcon() && (
            <span className="text-gray-600 text-xs">{getCurrentIcon()}</span>
          )}
        </span>
      </button>

      {labelRight && (
        <label
          className={`text-sm font-medium font-body cursor-pointer ${
            checked ? "text-text-primary" : "text-text-muted"
          }`}
          onClick={handleClick}
        >
          {labelRight}
        </label>
      )}
    </div>
  );
};

export default Switch;