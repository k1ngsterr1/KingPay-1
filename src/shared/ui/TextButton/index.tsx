import styles from "./styles.module.scss";

interface ITextButton {
  text: string;
  href?: string;
}

export const TextButton = ({ text, href }: ITextButton) => {
  return (
    <a href={href}>
      <button className={styles.button}>{text}</button>
    </a>
  );
};
