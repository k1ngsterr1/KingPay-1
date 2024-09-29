import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var IconText = function (_a) {
    var icon = _a.icon, text = _a.text, isActive = _a.isActive, onClick = _a.onClick;
    return (_jsxs("button", { className: "flex items-center gap-4 focus:outline-none flex-row ".concat(isActive ? "text-black" : "text-gray-700"), onClick: onClick, children: [icon, _jsx("span", { className: "text-sm sm:text-base lg:text-lg", children: text })] }));
};
export default IconText;
