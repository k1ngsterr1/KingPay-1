import logo from "@assets/short_logo.svg";
import {
  faFolder,
  faShareSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { IconButton } from "@shared/ui/IconButton";

export const Sidebar = () => {
  return (
    <div className="flex fixed left-0 flex-col items-center justify-between bg-white h-full w-[90px] py-5">
      <img src={logo} alt="Logo" />
      <nav className="w-full  flex items-center flex-col gap-4">
        <IconButton icon={faFolder} isActive />
        <IconButton icon={faShareSquare} isActive />
        <IconButton icon={faUser} isActive />
      </nav>
    </div>
  );
};

// https://trafogram.com
