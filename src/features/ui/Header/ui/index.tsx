import menu from "@assets/menu.svg";
import { Menu } from "@features/ui/Menu/ui";
import { toggleMenu } from "@redux/slices/burgerMenuSlice";
import { RootState } from "@redux/store";
import CloseIcon from "@shared/icons/close-icon";
import NotificationIcon from "@shared/icons/notification-icon";
import { Avatar } from "@shared/ui/Avatar";
import { Balance } from "@shared/ui/Balance";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.burgerMenu.isOpen);

  return (
    <header className="w-full flex items-center justify-end gap-6 mt-8">
      <Balance balance="315 780" />
      <NotificationIcon />
      <Avatar letter="F" />
      {isOpen ? (
        <>
          <CloseIcon onClick={() => dispatch(toggleMenu())} />
        </>
      ) : (
        <img
          src={menu}
          className="w-[32px] h-[32px]"
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      {isOpen && <Menu />}
    </header>
  );
};
