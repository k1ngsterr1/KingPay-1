import styles from "./styles.module.scss";

interface ILineInput extends HTMLInputElement {
  labelText: string;
}

export const LineInput: React.FC<ILineInput> = ({ labelText }) => {
  return (
    <div className={styles.line_input}>
      <span className={styles.line_input__text}>{labelText}</span>
      <input className={styles.line_input__line} />
    </div>
  );
};
