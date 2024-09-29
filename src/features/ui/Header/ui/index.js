import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import menu from "@assets/menu.svg";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@shared/ui/Avatar";
import { Balance } from "@shared/ui/Balance";
export var Header = function () {
    return (_jsxs("header", { className: "w-full flex items-center justify-end gap-6 mt-8", children: [_jsx(Balance, { balance: "315 780" }), _jsx(FontAwesomeIcon, { icon: faBell, className: "text-black text-2xl" }), _jsx(Avatar, { letter: "F" }), _jsx("img", { src: menu, className: "w-[32px] h-[32px]" })] }));
};
