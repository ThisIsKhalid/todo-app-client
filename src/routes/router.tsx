import { createBrowserRouter } from "react-router-dom";
import Focus from "../components/Focus";
import List from "../components/List";
import MainLayout from "../components/MainLayout";
import SignIn from "../Pages/SignIn";
import SignUP from "../Pages/SignUP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <List></List>,
      },
      {
        path: "/list",
        element: <List></List>,
      },
      {
        path: "/focus",
        element: <Focus></Focus>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
