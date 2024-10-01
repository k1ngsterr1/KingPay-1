import React from "react";
import styles from "./styles.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IInputProps {
  placeholder: string;
  type?: "text" | "password" | "email" | "tel";
  margin?: string;
  width?: string;
  isIcon?: boolean;
  fontSize?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

export const Input = ({
  placeholder,
  type = "text",
  margin,
  width,
  isIcon = true,
  fontSize,
  name,
  value,
  onChange,
  disabled = false,
  error,
}: IInputProps) => {
  return (
    <div className={`flex flex-col ${margin} `}>
      <div
        className={`${styles.container} ${
          error ? "border-red-500" : ""
        } ${width}`}
      >
        {isIcon && (
          <FontAwesomeIcon
            className={`${styles.container__icon}`}
            icon={
              type === "email"
                ? faEnvelope
                : type === "password"
                ? faLock
                : type === "text" && faUser
            }
          />
        )}
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${styles.container__input} ${fontSize}`}
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};
