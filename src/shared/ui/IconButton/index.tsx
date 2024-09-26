import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IIconButton {
  icon: IconDefinition;
  isActive: boolean;
  onClick: () => void;
}

export const IconButton: React.FC<IIconButton> = ({
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-1 relative">
      {isActive && (
        <div className="bg-primary absolute left-[0px]  rounded-e-full w-[6px] h-[40px]" />
      )}
      <button className="cursor-pointer flex" onClick={onClick}>
        <FontAwesomeIcon
          icon={icon}
          className={`${
            isActive ? "text-black" : "text-[#292D32"
          } text-3xl transition-all hover:text-primary`}
        />
      </button>
    </div>
  );
};
