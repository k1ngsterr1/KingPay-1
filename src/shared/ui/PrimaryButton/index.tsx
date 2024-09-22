import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
}

export const PrimaryButton = ({
  text,
  margin,
  type = "submit",
}: IButtonProps) => {
  return (
    <button className={`${styles.button} ${margin}`} type={type}>
      {text}
    </button>
  );
};
