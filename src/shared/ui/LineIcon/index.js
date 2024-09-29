import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export var LineIcon = function (_a) {
    var icon = _a.icon, name = _a.name, content = _a.content, margin = _a.margin, gap = _a.gap;
    return (_jsxs("div", { className: "w-full gap-12 flex items-center justify-between ".concat(margin), children: [_jsx("span", { className: "text-primary-grey text-sm", children: name }), _jsx("span", { className: "text-black text-sm ".concat(gap), children: content }), _jsx(FontAwesomeIcon, { icon: icon, className: "text-[#B7B7B7] text-base transition-all cursor-pointer hover:text-primary" })] }));
};
