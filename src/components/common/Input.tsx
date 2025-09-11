import { forwardRef } from "react";
import type { InputProps } from "./types";
import {
  inputVariantStyles,
  labelVariantStyles,
  errorMessageStyles,
} from "./variantStyles";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      placeholder,
      type = "text",
      required = false,
      disabled = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`;

    const getInputState = (): "normal" | "error" | "disabled" => {
      if (disabled) return "disabled";
      if (error) return "error";
      return "normal";
    };

    const inputState = getInputState();

    const inputClassName =
      `${inputVariantStyles[inputState]} ${className}`.trim();
    const labelClassName = labelVariantStyles[inputState];

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelClassName}>
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClassName}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {error && (
          <div
            id={`${inputId}-error`}
            className={errorMessageStyles}
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
