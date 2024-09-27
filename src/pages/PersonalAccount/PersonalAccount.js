import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Contacts } from "@features/ui/Contacts";
import { Passport } from "@features/ui/Passport";
import { TabNavigation } from "@features/ui/TabNavigation";
import { PersonalLayout } from "@widgets/PersonalLayout";
export var PersonalAccount = function () {
    return (_jsx(_Fragment, { children: _jsx(PersonalLayout, { heading: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442", children: _jsxs("div", { className: "mt-16 md:ml-[90px] flex items-start justify-between", children: [_jsx(TabNavigation, {}), _jsx(Passport, {}), _jsx(Contacts, {})] }) }) }));
};
