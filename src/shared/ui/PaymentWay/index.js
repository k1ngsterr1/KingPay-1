import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Switch from "../Switch";
export var PaymentWay = function (_a) {
    var image = _a.image, image2 = _a.image2, name = _a.name, isVisa = _a.isVisa;
    var _b = useState(false), isSwitchOn = _b[0], setIsSwitchOn = _b[1];
    var handleToggle = function () {
        setIsSwitchOn(!isSwitchOn);
    };
    return (_jsxs("div", { className: "flex items-center justify-between w-full py-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex flex-col items-center", children: [isVisa && _jsx("img", { src: image2, alt: "paymentway", className: "w-8 h-8" }), _jsx("img", { src: image, alt: "paymentway", className: "w-12 h-12" })] }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-lg", children: name }), isVisa && (_jsx("span", { className: "text-[#B7B7B7] text-sm -mt-2", children: "RUB, UAH, KZT" }))] }), _jsx("span", { className: "text-[#B7B7B7] ", children: " 7,9%" })] })] }), _jsx(Switch, { isChecked: isSwitchOn, onToggle: handleToggle })] }));
};
