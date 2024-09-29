import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export var Input = function (_a) {
    var placeholder = _a.placeholder, type = _a.type, margin = _a.margin, width = _a.width, _b = _a.isIcon, isIcon = _b === void 0 ? true : _b, fontSize = _a.fontSize;
    return (_jsxs("div", { className: "".concat(styles.container, " ").concat(margin, " ").concat(width), children: [isIcon && (_jsx(FontAwesomeIcon, { className: "".concat(styles.container__icon), icon: type === "email"
                    ? faEnvelope
                    : type === "password"
                        ? faLock
                        : type === "text" && faUser })), _jsx("input", { placeholder: placeholder, type: type, className: "".concat(styles.container__input, " ").concat(fontSize) })] }));
};
