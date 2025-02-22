import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Froms/LogIn";
import SingUp from "./Components/Froms/SingUp";
import Authcontext from "./Providers/AuthContext";
import Privet from "./Providers/Privet";
import AddTask from "./Components/Froms/AddTask";
import Task from "./Components/Task/Task";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeBanner from "./Components/HomeBanner/HomeBanner";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Privet>
        <Home></Home>
      </Privet>
    ),
    children: [
      {
        path: "/",
        element: (
          <Privet>
            <HomeBanner></HomeBanner>
          </Privet>
        ),
      },
      {
        path: "/addtask",
        element: (
          <Privet>
            <AddTask></AddTask>
          </Privet>
        ),
      },
      {
        path: "/task",
        element: (
          <Privet>
            <Task></Task>
          </Privet>
        ),
      },
    ],
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authcontext>
  </StrictMode>
);
