import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const PrimaryButton = ({
  text,
  margin,
  type = "submit",
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${margin}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
