import React, { ReactNode } from "react";

interface IconTextProps {
  icon: ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const IconText: React.FC<IconTextProps> = ({
  icon,
  text,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center gap-4 focus:outline-none flex-row ${
        isActive ? "text-black" : "text-gray-700"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm sm:text-base lg:text-lg">{text}</span>
    </button>
  );
};

export default IconText;
