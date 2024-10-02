function BigFolderIcon({
  color,
  onClick,
}: {
  color: string;
  onClick: () => void;
}) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M22.666 30.333H9.333c-5.88 0-7.667-1.786-7.667-7.666V9.333c0-5.88 1.787-7.666 7.667-7.666h2c2.333 0 3.066.76 4 2l2 2.666c.44.587.506.667 1.333.667h4c5.88 0 7.667 1.787 7.667 7.667v8c0 5.88-1.787 7.666-7.667 7.666zM9.333 3.667c-4.76 0-5.667.906-5.667 5.666v13.334c0 4.76.907 5.666 5.667 5.666h13.333c4.76 0 5.667-.906 5.667-5.666v-8c0-4.76-.907-5.667-5.667-5.667h-4c-1.707 0-2.267-.587-2.933-1.467l-2-2.666c-.694-.92-.894-1.2-2.4-1.2h-2z"
      ></path>
    </svg>
  );
}

export default BigFolderIcon;
