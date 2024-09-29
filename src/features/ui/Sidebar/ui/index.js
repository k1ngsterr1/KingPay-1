import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from "@assets/short_logo.svg";
import { faFolder, faShareSquare, faUser, } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActive } from "@redux/slices/menuSlice";
import { IconButton } from "@shared/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export var Sidebar = function () {
    var dispatch = useDispatch();
    var activeCategory = useSelector(function (state) { return state.menu.activeCategory; });
    var navigate = useNavigate();
    useEffect(function () {
        if (!activeCategory) {
            dispatch(setActive({ name: "user" }));
        }
    }, [dispatch, activeCategory]);
    var handleUserClick = function () {
        dispatch(setActive({ name: "user" }));
        navigate("/personal-account");
    };
    var handleFolderClick = function () {
        dispatch(setActive({ name: "folder" }));
        navigate("/project");
    };
    return (_jsxs("div", { className: "flex fixed left-0 top-0 flex-col items-center justify-between bg-white h-full w-[90px] py-5", children: [_jsx("img", { src: logo, alt: "Logo" }), _jsxs("nav", { className: "w-full flex items-center flex-col gap-8", children: [_jsx(IconButton, { icon: faFolder, isActive: activeCategory === "folder", onClick: handleFolderClick }), _jsx(IconButton, { icon: faShareSquare, isActive: activeCategory === "share", onClick: function () { return dispatch(setActive({ name: "share" })); } }), _jsx(IconButton, { icon: faUser, isActive: activeCategory === "user", onClick: handleUserClick })] }), _jsx(FontAwesomeIcon, { icon: faBars, className: "text-2xl opacity-[0.5]" })] }));
};
