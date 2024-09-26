import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@shared/ui/Avatar";
import { Balance } from "@shared/ui/Balance";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-end gap-4 mt-8">
      <Balance balance="315 780" />
      <FontAwesomeIcon icon={faBell} className="text-black text-2xl" />
      <Avatar letter="F" />
    </header>
  );
};
