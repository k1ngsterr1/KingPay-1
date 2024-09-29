import styles from "./styles.module.scss";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IInputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
  margin?: string;
  width?: string;
  isIcon?: boolean;
  fontSize?: string;
}

export const Input = ({
  placeholder,
  type,
  margin,
  width,
  isIcon = true,
  fontSize,
}: IInputProps) => {
  return (
    <div className={`${styles.container} ${margin} ${width}`}>
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
        className={`${styles.container__input} ${fontSize}`}
      />
    </div>
  );
};
