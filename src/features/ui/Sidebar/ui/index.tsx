import logo from "@assets/short_logo.svg";
import {
  faFolder,
  faShareSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActive } from "@redux/slices/menuSlice";
import { RootState } from "@redux/store";
import { IconButton } from "@shared/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.menu.activeCategory
  );
  const navigate = useNavigate();

  const handleUserClick = () => {
    dispatch(setActive({ name: "user" }));
    navigate("/personal-account");
  };

  const handleFolderClick = () => {
    dispatch(setActive({ name: "folder" }));
    navigate("/project");
  };

  return (
    <div className="flex fixed left-0 top-0 flex-col items-center justify-between bg-white h-full w-[90px] py-5">
      <img src={logo} alt="Logo" />
      <nav className="w-full flex items-center flex-col gap-8">
        <IconButton
          icon={faFolder}
          isActive={activeCategory === "folder"}
          onClick={handleFolderClick}
        />
        <IconButton
          icon={faShareSquare}
          isActive={activeCategory === "share"}
          onClick={() => dispatch(setActive({ name: "share" }))}
        />
        <IconButton
          icon={faUser}
          isActive={activeCategory === "user"}
          onClick={handleUserClick}
        />
      </nav>
      <FontAwesomeIcon icon={faBars} className="text-2xl opacity-[0.5]" />
    </div>
  );
};
