import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var PrimaryButton = function (_a) {
    var text = _a.text, margin = _a.margin, _b = _a.type, type = _b === void 0 ? "submit" : _b, onClick = _a.onClick;
    return (_jsx("button", { className: "".concat(styles.button, " ").concat(margin), type: type, onClick: onClick, children: text }));
};
