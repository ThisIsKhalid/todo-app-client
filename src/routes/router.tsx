import { createBrowserRouter } from "react-router-dom";
import Focus from "../components/Focus";
import TaskList from "../components/TaskList";
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
        element: <TaskList></TaskList>,
      },
      {
        path: "/list",
        element: <TaskList></TaskList>,
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
