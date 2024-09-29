import { jsx as _jsx } from "react/jsx-runtime";
import store from "@redux/store";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./processes/router";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(RouterProvider, { router: router }) }) }));
