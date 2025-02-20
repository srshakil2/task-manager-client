import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Froms/LogIn";
import SingUp from "./Components/Froms/SingUp";
import Authcontext from "./Providers/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authcontext>
      <RouterProvider router={router} />
    </Authcontext>
  </StrictMode>
);
