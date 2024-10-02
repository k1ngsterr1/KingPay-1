import { ControlPanel } from "@pages/ControlPanel";
import { ForgotPassword } from "@pages/ForgotPassword/ForgotPassword";
import { Login } from "@pages/Login/Login";
import { Payment } from "@pages/Payment";
import { PaymentAcceptance } from "@pages/PaymentAcceptance";
import { PaymentFailed } from "@pages/PaymentFailed";
import { PaymentMethods } from "@pages/PaymentMethods";
import { PaymentSucceed } from "@pages/PaymentSucceed";
import { PersonalAccount } from "@pages/PersonalAccount/PersonalAccount";
import { Project } from "@pages/Project";
import { Registration } from "@pages/Registration/Registration";
import { Support } from "@pages/Support/Support";
import { Withdraw } from "@pages/Withdraw/Withdraw";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const createAppRouter = (selectedPayment, setSelectedPayment) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
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
      path: "/support",
      element: <Support />,
    },
    {
      path: "/withdraw",
      element: <Withdraw />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/control-panel",
      element: <ControlPanel />,
    },
  ]);
