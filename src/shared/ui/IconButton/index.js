import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export var IconButton = function (_a) {
    var icon = _a.icon, isActive = _a.isActive, onClick = _a.onClick;
    return (_jsxs("div", { className: "w-full flex items-center justify-center gap-1 relative", children: [isActive && (_jsx("div", { className: "bg-primary absolute left-[0px]  rounded-e-full w-[6px] h-[40px]" })), _jsx("button", { className: "cursor-pointer flex", onClick: onClick, children: _jsx(FontAwesomeIcon, { icon: icon, className: "".concat(isActive ? "text-black" : "text-[#292D32", " text-3xl transition-all hover:text-primary") }) })] }));
};
