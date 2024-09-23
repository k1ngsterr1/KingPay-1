import { createBrowserRouter } from "react-router-dom";

import { Registration } from "@pages/Registration/Registration";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";

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
    path: "/payment-methods",
    element: <PaymentMethods />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
