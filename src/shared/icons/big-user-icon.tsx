function BigUserIcon({
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
        d="M16 17c-4.226 0-7.666-3.44-7.666-7.667 0-4.226 3.44-7.666 7.667-7.666 4.226 0 7.666 3.44 7.666 7.666 0 4.227-3.44 7.667-7.666 7.667zm0-13.333a5.679 5.679 0 00-5.666 5.666A5.68 5.68 0 0016.001 15a5.679 5.679 0 005.666-5.667 5.679 5.679 0 00-5.666-5.666zM27.453 30.333c-.546 0-1-.453-1-1C26.453 24.733 21.76 21 16 21S5.547 24.733 5.547 29.333c0 .547-.453 1-1 1-.547 0-1-.453-1-1C3.547 23.64 9.134 19 16 19c6.867 0 12.453 4.64 12.453 10.333 0 .547-.453 1-1 1z"
      ></path>
    </svg>
  );
}

export default BigUserIcon;
