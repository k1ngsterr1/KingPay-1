import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "@features/ui/Header/ui";
import { Sidebar } from "@features/ui/Sidebar/ui";
import { Heading } from "@shared/ui/Heading";
export var PersonalLayout = function (_a) {
    var children = _a.children, heading = _a.heading;
    return (_jsxs("main", { children: [_jsx(Sidebar, {}), _jsxs("div", { className: "w-[85%]  m-auto", children: [_jsx(Header, {}), _jsx(Heading, { text: heading, margin: "-mt-10 md:ml-[90px]" }), children] })] }));
};
