import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { LineIcon } from "@shared/ui/LineIcon";
import styles from "./styles.module.scss";
export var Contacts = function () {
    return (_jsxs("div", { className: styles.contacts, children: [_jsx("h2", { className: styles.contacts__heading, children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }), _jsxs("div", { className: "w-full flex flex-col items-start gap-4 mt-8", children: [_jsx(LineIcon, { name: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", content: "email***@gmail.com" }), _jsx(LineIcon, { name: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", content: "+7 (495) 765 56 22", icon: faPlus, margin: "mt-6" }), _jsx(LineIcon, { name: "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C", content: "@765***22", icon: faTrash, margin: "mt-6" })] })] }));
};
