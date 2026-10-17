import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Login,
        index: true,
      },
      {
        Component: Register,
        path: "register",
      }
    ],
  },
]);
