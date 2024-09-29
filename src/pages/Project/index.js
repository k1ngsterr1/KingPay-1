import { jsx as _jsx } from "react/jsx-runtime";
import { PersonalLayout } from "@widgets/PersonalLayout";
import { ProjectScreen } from "@widgets/project";
export var Project = function () {
    return _jsx(PersonalLayout, { children: _jsx(ProjectScreen, {}), heading: "" });
};
