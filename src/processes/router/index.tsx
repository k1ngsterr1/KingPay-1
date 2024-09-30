import { Project } from "@pages/Project";
import { Registration } from "@pages/Registration/Registration";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { ControlPanel } from "@pages/ControlPanel";
import { PaymentAcceptance } from "@pages/PaymentAcceptance";
import { Payment } from "@pages/Payment";
import { PaymentFailed } from "@pages/PaymentFailed";
import { PaymentSucceed } from "@pages/PaymentSucceed";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const createAppRouter = (selectedPayment, setSelectedPayment) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/payment-failed",
      element: <PaymentFailed />,
    },
    {
      path: "/payment-succeed",
      element: <PaymentSucceed />,
    },
    {
      path: "/payment-acceptance",
      element: <PaymentAcceptance selectedPayment={selectedPayment} />,
    },
    {
      path: "/payment",
      element: <Payment selectedPayment={selectedPayment} />,
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
      element: <PaymentMethods setSelectedPayment={setSelectedPayment} />,
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
