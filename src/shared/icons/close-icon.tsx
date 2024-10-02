function CloseIcon(props) {
  return (
    <svg
      className="cursor-pointer"
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#000"
        d="m25.333 8.547-1.88-1.88-7.454 7.453-7.453-7.453-1.88 1.88L14.119 16l-7.453 7.453 1.88 1.88 7.453-7.453 7.454 7.453 1.88-1.88L17.879 16z"
      />
    </svg>
  );
}
export default CloseIcon;
