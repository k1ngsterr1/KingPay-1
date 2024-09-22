import { createBrowserRouter } from "react-router-dom";

import { Registration } from "@pages/Registration/Registration";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";

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
]);
