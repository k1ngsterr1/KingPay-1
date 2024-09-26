
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { Registration } from "@pages/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { Registration } from "@pages/Registration/Registration";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { Project } from "@pages/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/personal-account",
    element: <PersonalAccount />,
  },
  {
    path: "/payment-methods",
    element: <PaymentMethods />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
