import { jsx as _jsx } from "react/jsx-runtime";
import LogoImage from "@assets/logo.svg";
import styles from "./styles.module.scss";
export var Logo = function (_a) {
    var margin = _a.margin;
    return (_jsx("img", { src: LogoImage, alt: "Logo", className: "".concat(styles.logo, " ").concat(margin) }));
};
