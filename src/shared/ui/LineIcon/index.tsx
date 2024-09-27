import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ILineIcon {
  icon?: IconDefinition;
  name: string;
  content: string;
}

export const LineIcon: React.FC<ILineIcon> = ({ icon, name, content }) => {
  return (
    <div className="w-full gap-4 flex items-center justify-between">
      <span className="text-primary-grey text-sm">{name}</span>
      <span className="text-black text-sm">{content}</span>
      <FontAwesomeIcon
        icon={icon}
        className="text-[#B7B7B7] text-base transition-all cursor-pointer hover:text-primary"
      />
    </div>
  );
};
