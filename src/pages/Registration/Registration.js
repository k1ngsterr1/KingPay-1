import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { TextButton } from "@shared/ui/TextButton";
import "../../shared/styles/global.scss";
import styles from "./styles.module.scss";
export var Registration = function () {
    var categories = ["Россия", "Другие страны"];
    var _a = useState("Россия"), activeCategory = _a[0], setActiveCategory = _a[1];
    var handleRedirect = function () {
        window.location.href = "/login";
    };
    return (_jsxs("div", { className: "".concat(styles.container), children: [_jsx(Logo, { margin: "mt-14 mb-24" }), _jsxs("div", { className: styles.container__form, children: [_jsx("span", { className: "text-4xl font-extralight mt-8", children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }), _jsxs("div", { className: "flex flex-row items-center mt-2 gap-2", children: [_jsx("span", { className: "text-primary-grey text-lg", children: "\u0423\u0436\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435?" }), _jsx(TextButton, { text: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435", href: "/login", fontSize: "text-lg", color: "text-[#3DB7CC]" })] }), _jsx("div", { className: styles.container__tabs, children: categories.map(function (category) { return (_jsx("button", { className: "bg-[#F8F8F8] rounded-md mt-4 px-9 py-4 ".concat(activeCategory === category
                                ? "bg-[#FFFFFF] border-[1px] border-black"
                                : ""), onClick: function () { return setActiveCategory(category); }, children: category }, category)); }) }), _jsxs("div", { className: "flex flex-col mt-6", children: [_jsx(Input, { placeholder: "\u0424.\u0418.\u041E.", type: "text" }), _jsx(Input, { placeholder: "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430", type: "email", margin: "mt-4" }), _jsx(Input, { placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", type: "password", margin: "mt-4" }), _jsx(Input, { placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", type: "password", margin: "mt-4" })] }), _jsx(PrimaryButton, { text: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", margin: "mt-8 mb-14", onClick: handleRedirect })] }), _jsxs("p", { className: styles.container__terms, children: ["\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F, \u0432\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u044B \u0441 ", _jsx("a", { href: "#", children: "\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u0441\u0430\u0439\u0442\u0443" }), " \u0438 \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430", " ", _jsx("a", { href: "#", children: "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445" }), "."] })] }));
};
