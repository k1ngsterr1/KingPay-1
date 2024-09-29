var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import IconText from "@shared/ui/IconText";
import { tabs } from "@shared/lib/content/projectContent";
import { Input } from "@shared/ui/Input";
import styles from "./styles.module.scss";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import TechnicalInformation from "@entities/technical-information";
import PaymentWays from "@entities/payment-project-ways";
import TestRequest from "@entities/test-request";
export var ProjectScreen = function () {
    var _a = useState(null), activeButton = _a[0], setActiveButton = _a[1];
    var handleButtonClick = function (button) {
        setActiveButton(button);
    };
    var _b = useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
    var _c = useState(false), isOverrideURLSwitchOn = _c[0], setIsOverrideURLSwitchOn = _c[1];
    var _d = useState(false), isSignatureAlgorithmSwitchOn = _d[0], setIsSignatureAlgorithmSwitchOn = _d[1];
    var handleToggleOverrideURL = function () {
        setIsOverrideURLSwitchOn(!isOverrideURLSwitchOn);
    };
    var handleToggleSignatureAlgorithm = function () {
        setIsSignatureAlgorithmSwitchOn(!isSignatureAlgorithmSwitchOn);
    };
    var _e = useState({
        notification: "POST",
        success: "GET",
        failure: "GET",
    }), selectedMethod = _e[0], setSelectedMethod = _e[1];
    var handleMethodChange = function (event, key) {
        setSelectedMethod(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = event.target.value, _a)));
        });
    };
    var handleClick = function (index) {
        setActiveIndex(index);
    };
    var renderContent = function () {
        switch (activeIndex) {
            case 0:
                return (_jsx("div", { className: "bg-[#FFFFFF] mt-8 rounded-[20px] ", children: _jsx(TechnicalInformation, { selectedMethod: selectedMethod, handleMethodChange: handleMethodChange, isOverrideURLSwitchOn: isOverrideURLSwitchOn, handleToggleOverrideURL: handleToggleOverrideURL, isSignatureAlgorithmSwitchOn: isSignatureAlgorithmSwitchOn, handleToggleSignatureAlgorithm: handleToggleSignatureAlgorithm }) }));
            case 1:
                return (_jsx("div", { className: "bg-[#FFFFFF] mt-8 rounded-[20px] w-full ", children: _jsx(PaymentWays, {}) }));
            case 2:
                return (_jsx("div", { className: "bg-[#FFFFFF] mt-8 rounded-[20px] w-full ", children: _jsx("div", { className: "p-8 mb-12", children: _jsx("span", { className: "text-3xl font-light", children: "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F" }) }) }));
            case 3:
                return (_jsx("div", { className: "bg-[#FFFFFF] mt-8 rounded-[20px] w-full ", children: _jsx(TestRequest, {}) }));
            case 4:
                return (_jsx("div", { className: "bg-[#FFFFFF] mt-8 rounded-[20px] w-full ", children: _jsxs("div", { className: "p-8 mb-12", children: [_jsx("span", { className: "text-3xl font-light", children: "\u0424\u043E\u0440\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B" }), _jsxs("div", { className: "flex flex-col mt-12 ", children: [_jsxs("div", { className: "flex flex-row items-center gap-24", children: [_jsx("span", { className: "", children: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430" }), _jsx(Input, { placeholder: "" })] }), _jsxs("div", { className: "flex flex-row items-center gap-24 mt-10", children: [_jsx("span", { className: "", children: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u2800\u2800" }), _jsxs("div", { className: "flex flex-row gap-8", children: [_jsx(Input, { placeholder: "" }), _jsx("select", { className: "p-2 bg-transparent ", children: _jsx("option", { value: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E", children: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E" }) })] })] }), _jsxs("div", { className: "flex flex-row items-center gap-24 mt-10", children: [_jsx("span", { className: "", children: "\u0421\u0443\u043C\u043C\u0430\u2800\u2800\u2800\u2800\u2800\u2800" }), _jsxs("div", { className: "flex flex-row gap-8 items-center", children: [_jsx(Input, { placeholder: "" }), _jsx("select", { className: "p-2 bg-transparent ", children: _jsx("option", { value: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E", children: "RUB" }) }), _jsx("select", { className: "p-2 bg-transparent ", children: _jsx("option", { value: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E", children: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E" }) })] })] }), _jsxs("div", { className: "flex flex-row items-center gap-56 mt-10", children: [_jsx("span", { children: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800" }), _jsx("select", { className: "p-2 bg-transparent ", children: _jsx("option", { value: "\u0423\u043A\u0430\u0437\u0430\u043D\u043E", children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C" }) })] }), _jsxs("div", { className: "flex flex-row items-center mt-10", children: [_jsx("span", { children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430\u2800\u2800\u2800\u2800\u2800" }), _jsxs("div", { className: "gap-4 flex flex-row ".concat(styles.buttons), children: [_jsx("button", { className: "border-[1px] px-3 py-2 rounded-md items-center justify-center ".concat(activeButton === "ФИО"
                                                            ? "border-[#47E1DD]"
                                                            : "border-black"), onClick: function () { return handleButtonClick("ФИО"); }, children: "\u0424\u0418\u041E" }), _jsx("button", { className: "border-[1px] px-3 py-2 rounded-md items-center justify-center ".concat(activeButton === "Телефон"
                                                            ? "border-[#47E1DD]"
                                                            : "border-black"), onClick: function () { return handleButtonClick("Телефон"); }, children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }), _jsx("button", { className: "border-[1px] px-3 py-2 rounded-md items-center justify-center ".concat(activeButton === "Адрес"
                                                            ? "border-[#47E1DD]"
                                                            : "border-black"), onClick: function () { return handleButtonClick("Адрес"); }, children: "\u0410\u0434\u0440\u0435\u0441" })] })] }), _jsx("div", { className: "".concat(styles.button_widget, " mt-12"), children: _jsx(PrimaryButton, { text: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443" }) })] })] }) }));
            default:
                return (_jsx("div", { className: "p-8", children: _jsx("span", { className: "text-2xl", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B" }) }));
        }
    };
    return (_jsx("div", { className: "flex overflow-x-hidden -mt-10", children: _jsxs("div", { className: "flex-1 md:ml-[90px]", children: [_jsx("div", { className: "flex justify-between w-[98%] mb-2", children: _jsx("span", { className: "text-[#B7B7B7]", children: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C" }) }), _jsx("span", { className: "text-4xl", children: "DONATEBASE.CC" }), _jsxs("div", { className: "flex flex-row ", children: [_jsx("div", { className: "flex flex-col w-[20%]", children: tabs.map(function (tab, index) {
                                return (_jsx("div", { className: "flex flex-col mt-8", children: _jsx(IconText, { icon: tab.icon(activeIndex === index), text: tab.text, isActive: activeIndex === index, onClick: function () { return handleClick(index); } }) }, index));
                            }) }), _jsx("div", { className: " ml-20 w-full", children: renderContent() })] })] }) }));
};
