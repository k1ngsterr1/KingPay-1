import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Registration } from "@pages/Registration/Registration";
import { Login } from "@pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
