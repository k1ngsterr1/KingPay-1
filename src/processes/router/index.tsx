import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { Project } from "@pages/Project";
import { Registration } from "@pages/Registration/Registration";
import { Support } from "@pages/Support/Support";
import { Withdraw } from "@pages/Withdraw/Withdraw";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
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
    path: "/support",
    element: <Support />,
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
