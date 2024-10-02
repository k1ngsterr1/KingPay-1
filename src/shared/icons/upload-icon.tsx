function UploadIcon({
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
      style={{ cursor: "pointer" }} // Optional: add cursor styling
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.666 16a1 1 0 00-1 1v1c0 7.24 3.093 10.333 10.333 10.333h8c7.24 0 10.334-3.093 10.334-10.333v-1a1 1 0 10-2 0v1c0 6.147-2.187 8.333-8.334 8.333h-8c-6.146 0-8.333-2.186-8.333-8.333v-1a1 1 0 00-1-1z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        d="M19.999 9.68a.989.989 0 01-.707-.293l-3.293-3.294-3.294 3.294a1.006 1.006 0 01-1.413 0 1.006 1.006 0 010-1.414l4-4a1.006 1.006 0 011.413 0l4 4a1.006 1.006 0 010 1.414c-.2.2-.453.293-.706.293z"
      ></path>
      <path
        fill={color}
        d="M16 20c-.547 0-1-.573-1-1.263V5.263C15 4.573 15.453 4 16 4c.547 0 1 .573 1 1.263v13.474c0 .707-.453 1.263-1 1.263z"
      ></path>
    </svg>
  );
}

export default UploadIcon;
