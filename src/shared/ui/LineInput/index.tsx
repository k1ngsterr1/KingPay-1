import styles from "./styles.module.scss";

interface ILineInput {
  labelText: string;
  width?: string;
  gap?: string;
}

export const LineInput: React.FC<ILineInput> = ({ labelText, width, gap }) => {
  return (
    <div className={`${styles.line_input} ${width} ${gap}`}>
      <span className={styles.line_input__text}>{labelText}</span>
      <input className={styles.line_input__line} />
    </div>
  );
};
