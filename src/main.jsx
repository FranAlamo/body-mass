import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile.jsx";
import Limitations from "../pages/Limitations.jsx";
import Tips from "../pages/Tips.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/limitations",
    element: <Limitations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
