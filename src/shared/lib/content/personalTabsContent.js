import { jsx as _jsx } from "react/jsx-runtime";
import UserIcon from "@shared/icons/user-icon";
import CardIcon from "@shared/icons/card-icon";
import ShieldIcon from "@shared/icons/shield-icon";
import MailIcon from "@shared/icons/mail-icon";
import ApiIcon from "@shared/icons/api-icon";
export var personalTabs = [
    {
        icon: function (isActive) { return (_jsx(UserIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Личные данные",
    },
    {
        icon: function (isActive) { return (_jsx(CardIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Платёжные данные",
    },
    {
        icon: function (isActive) { return (_jsx(ShieldIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Безопасность",
    },
    {
        icon: function (isActive) { return (_jsx(MailIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Уведомления",
    },
    {
        icon: function (isActive) { return (_jsx(ApiIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "API",
    },
];
