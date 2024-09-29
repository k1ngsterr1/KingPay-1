interface ITextButton {
  text: string;
  href?: string;
  fontSize?: string;
  color?: string;
}

export const TextButton = ({ text, href, fontSize, color }: ITextButton) => {
  return (
    <a href={href}>
      <button className={`{styles.button} ${fontSize}, ${color}`}>
        {text}
      </button>
    </a>
  );
};
