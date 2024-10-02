import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export const PrimaryButton = ({
  text,
  margin,
  type = "submit",
  width,
  onClick,
  icon,
}: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${margin} ${width} text-base flex items-center`}
      type={type}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};
