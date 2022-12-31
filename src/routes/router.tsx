import { createBrowserRouter } from "react-router-dom";
import Focus from "../components/Focus";
import MainLayout from "../components/MainLayout";
import TodoList from "../components/TodoList";
import SignIn from "../Pages/SignIn";
import SignUP from "../Pages/SignUP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <TodoList></TodoList>,
      },
      {
        path: "/list",
        element: <TodoList></TodoList>,
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
