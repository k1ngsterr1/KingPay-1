import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
export var TabButton = function (_a) {
    var icon = _a.icon, text = _a.text, isActive = _a.isActive;
    return (_jsxs("button", { className: "".concat(styles.tab_btn, " cursor-pointer flex items-center gap-4 transition-all"), children: [_jsx(FontAwesomeIcon, { icon: icon, className: "".concat(styles.tab_btn__icon, " ").concat(isActive ? "text-[#6A6A6A]" : "text-black", " text-2xl") }), _jsx("span", { className: "".concat(styles.tab_btn__text, " ").concat(isActive ? "text-[#6A6A6A]" : "text-black", " text-2xl"), children: text })] }));
};
