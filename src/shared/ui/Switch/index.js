import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Switch = function (_a) {
    var isChecked = _a.isChecked, onToggle = _a.onToggle;
    return (_jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "sr-only peer", checked: isChecked, onChange: onToggle }), _jsx("div", { className: "w-12 h-[19px] bg-gray-200 rounded-full peer peer-checked:bg-black", children: _jsx("div", { className: "absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all ".concat(isChecked ? "translate-x-[16px]" : "") }) })] }));
};
export default Switch;
