import { Login } from "@pages/Login/Login";
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
]);
