import menu from "@assets/menu.svg";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@shared/ui/Avatar";
import { Balance } from "@shared/ui/Balance";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-end gap-6 mt-8">
      <Balance balance="315 780" />
      <FontAwesomeIcon
        icon={faBell}
        className="text-black text-2xl"
        style={{ zIndex: 9999 }}
      />
      <Avatar letter="F" />
      <img src={menu} className="w-[32px] h-[32px]" style={{ zIndex: 9999 }} />
    </header>
  );
};
