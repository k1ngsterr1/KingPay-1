import { Project } from "@pages/Project";
import { Registration } from "@pages/Registration/Registration";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { ControlPanel } from "@pages/ControlPanel";
import { PaymentAcceptance } from "@pages/PaymentAcceptance";

import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/payment-acceptance",
    element: <PaymentAcceptance />,
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
    path: "/control-panel",
    element: <ControlPanel />,
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
