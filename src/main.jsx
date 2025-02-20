import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Froms/LogIn";
import SingUp from "./Components/Froms/SingUp";
import Authcontext from "./Providers/AuthContext";
import Privet from "./Providers/Privet";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Privet>
        <Home></Home>
      </Privet>
    ),
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
