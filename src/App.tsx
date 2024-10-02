import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./processes/router";

export const App = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const router = createAppRouter(selectedPayment, setSelectedPayment);

  return <RouterProvider router={router} />;
};
