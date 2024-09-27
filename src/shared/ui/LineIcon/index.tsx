import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ILineIcon {
  icon?: IconDefinition;
  name: string;
  content: string;
  margin?: string;
  gap?: string;
}

export const LineIcon: React.FC<ILineIcon> = ({
  icon,
  name,
  content,
  margin,
  gap,
}) => {
  return (
    <div
      className={`w-full gap-12 flex items-center justify-between ${margin}`}
    >
      <span className="text-primary-grey text-sm">{name}</span>
      <span className={`text-black text-sm ${gap}`}>{content}</span>
      <FontAwesomeIcon
        icon={icon}
        className="text-[#B7B7B7] text-base transition-all cursor-pointer hover:text-primary"
      />
    </div>
  );
};
