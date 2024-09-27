import { jsx as _jsx } from "react/jsx-runtime";
export var TextButton = function (_a) {
    var text = _a.text, href = _a.href, fontSize = _a.fontSize, color = _a.color;
    return (_jsx("a", { href: href, children: _jsx("button", { className: "{styles.button} ".concat(fontSize, ", ").concat(color), children: text }) }));
};
