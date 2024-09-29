import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var LineInput = function (_a) {
    var labelText = _a.labelText;
    return (_jsxs("div", { className: styles.line_input, children: [_jsx("span", { className: styles.line_input__text, children: labelText }), _jsx("input", { className: styles.line_input__line })] }));
};
