import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { Registration } from "@pages/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
