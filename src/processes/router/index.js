import { jsx as _jsx } from "react/jsx-runtime";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Project } from "@pages/Project";
import { Registration } from "@pages/Registration/Registration";
export var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Navigate, { to: "/login" }),
    },
    {
        path: "/registration",
        element: _jsx(Registration, {}),
    },
    {
        path: "/login",
        element: _jsx(Login, {}),
    },
    {
        path: "/personal-account",
        element: _jsx(PersonalAccount, {}),
    },
    {
        path: "/payment-methods",
        element: _jsx(PaymentMethods, {}),
    },
    {
        path: "/project",
        element: _jsx(Project, {}),
    },
    {
        path: "/forgot-password",
        element: _jsx(ForgotPassword, {}),
    },
]);
