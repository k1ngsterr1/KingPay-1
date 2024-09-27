import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import IconText from "@shared/ui/IconText";
import styles from "./styles.module.scss";
import { personalTabs } from "@shared/lib/content/personalTabsContent";
export var TabNavigation = function () {
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var handleClick = function (index) {
        setActiveIndex(index);
    };
    return (_jsx("div", { className: styles.tab_navigation, children: personalTabs.map(function (tab, index) {
            return (_jsx("div", { className: "flex flex-col", children: _jsx(IconText, { icon: tab.icon(activeIndex === index), text: tab.text, isActive: activeIndex === index, onClick: function () { return handleClick(index); } }) }, index));
        }) }));
};
