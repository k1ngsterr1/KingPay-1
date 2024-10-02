import logo from "@assets/short_logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActive } from "@redux/slices/menuSlice";
import { RootState } from "@redux/store";
import BigFolderIcon from "@shared/icons/big-folder-icon";
import BigUserIcon from "@shared/icons/big-user-icon";
import UploadIcon from "@shared/icons/upload-icon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.menu.activeCategory
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeCategory) {
      dispatch(setActive({ name: "user" }));
    }
  }, [dispatch, activeCategory]);

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
        <div className="flex">
          {activeCategory === "folder" && (
            <div className="bg-primary absolute left-[0px]  rounded-e-full w-[6px] h-[40px]" />
          )}
          <BigFolderIcon
            color={activeCategory === "folder" ? "black" : "#6A6A6A"}
            onClick={() => dispatch(setActive({ name: "folder" }))}
          />
        </div>
        <div className="flex">
          {activeCategory === "share" && (
            <div className="bg-primary absolute left-[0px]  rounded-e-full w-[6px] h-[40px]" />
          )}
          <UploadIcon
            color={activeCategory === "share" ? "black" : "#6A6A6A"}
            onClick={() => dispatch(setActive({ name: "share" }))}
          />
        </div>
        <div className="flex">
          {activeCategory === "user" && (
            <div className="bg-primary absolute left-[0px]  rounded-e-full w-[6px] h-[40px]" />
          )}
          <BigUserIcon
            color={activeCategory === "user" ? "black" : "#6A6A6A"}
            onClick={() => dispatch(setActive({ name: "user" }))}
          />
        </div>
      </nav>
      <FontAwesomeIcon icon={faBars} className="text-2xl opacity-[0.5]" />
    </div>
  );
};
