import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var Heading = function (_a) {
    var text = _a.text, margin = _a.margin;
    return _jsx("h1", { className: " ".concat(margin, " ").concat(styles.heading), children: text });
};
