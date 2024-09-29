import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: () => void;
}

export const PrimaryButton = ({
  text,
  margin,
  type = "submit",
  width,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${margin} ${width}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
