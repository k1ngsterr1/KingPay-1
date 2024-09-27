import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { TextButton } from "@shared/ui/TextButton";
import { Logo } from "@shared/ui/Logo";
import ScreenImage from "@assets/LoginScreen.webp";
import styles from "./styles.module.scss";
import "@shared/styles/global.scss";
export var Login = function () {
    var _a = useState(null), captchaValue = _a[0], setCaptchaValue = _a[1];
    var onCaptchaChange = function (value) {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };
    var handleRedirect = function () {
        window.location.href = "/personal-account";
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.container__image, children: _jsx("img", { src: ScreenImage, alt: "", className: styles.container__screen_image }) }), _jsxs("div", { className: "".concat(styles.container__form, " flex items-center justify-center h-[100vh]"), children: [_jsx(Logo, {}), _jsxs("div", { className: " mt-24 items-center justify-center flex flex-col", children: [_jsx(Input, { placeholder: "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430", type: "email" }), _jsx(Input, { placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", type: "password", margin: "mt-6" }), _jsx(PrimaryButton, { text: "\u0412\u043E\u0439\u0442\u0438", margin: "mt-4", onClick: handleRedirect }), _jsxs("div", { className: " flex flex-row items-center justify-between w-[100%] mt-4 ", children: [_jsx(TextButton, { text: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", href: "/registration", color: "text-[#6A6A6A]" }), _jsx(TextButton, { text: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C", color: "text-[#6A6A6A]", href: "/forgot-password" })] })] }), _jsx("div", { className: "" })] })] }));
};
