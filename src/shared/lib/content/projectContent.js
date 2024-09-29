import { jsx as _jsx } from "react/jsx-runtime";
import GearIcon from "@shared/icons/gear-icon";
import CardIcon from "@shared/icons/card-icon";
import StatsIcon from "@shared/icons/stats-icon";
import CodeIcon from "@shared/icons/code-icon";
import WidgetIcon from "@shared/icons/widget-icon";
export var tabs = [
    {
        icon: function (isActive) { return (_jsx(GearIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Основное",
    },
    {
        icon: function (isActive) { return (_jsx(CardIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Способы оплаты",
    },
    {
        icon: function (isActive) { return (_jsx(StatsIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Статистика",
    },
    {
        icon: function (isActive) { return (_jsx(CodeIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Тестирование",
    },
    {
        icon: function (isActive) { return (_jsx(WidgetIcon, { color: isActive ? "black" : "#6A6A6A" })); },
        text: "Виджеты",
    },
];
