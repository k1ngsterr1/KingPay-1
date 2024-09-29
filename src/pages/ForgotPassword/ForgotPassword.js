import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import styles from "./styles.module.scss";
import "../../shared/styles/global.scss";
export var ForgotPassword = function () {
    var _a = useState(false), isRecover = _a[0], setIsRecover = _a[1];
    var _b = useState(null), captchaValue = _b[0], setCaptchaValue = _b[1];
    var onCaptchaChange = function (value) {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };
    var handleRecover = function () {
        setIsRecover(!isRecover);
    };
    var handleToLogin = function () {
        window.location.href = "/login";
    };
    return (_jsxs("div", { className: "".concat(styles.container), children: [_jsx(Logo, { margin: "mt-14 mb-24" }), isRecover ? (_jsxs("div", { className: "".concat(styles.container__form, " py-8"), children: [_jsx("span", { className: "w-[58%] text-base", children: "\u041D\u0430 \u0430\u0434\u0440\u0435\u0441 swer****@gmail.com \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C." }), _jsx("span", { className: "w-[58%] mt-4 text-base", children: "\u0414\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0432 \u043D\u0435\u043C." }), _jsx(PrimaryButton, { text: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C", margin: "mt-8", onClick: handleToLogin })] })) : (_jsxs("div", { className: "".concat(styles.container__form, " px-14 py-8"), children: [_jsx(Input, { placeholder: "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430", type: "email", margin: "mt-4" }), _jsx("div", { className: "" }), _jsx(PrimaryButton, { text: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C", margin: "mt-8", type: "submit", onClick: handleRecover })] }))] }));
};
