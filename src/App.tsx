import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import * as Screen from "./screens/index";
// import "./App.css";
// import Layout from './components/Layout/Layout'
=======
import * as auth from "./hooks/screens/auth/index";
import * as main from "./hooks/screens/main/index";
>>>>>>> 534c59590480a7168f7a05c9141037fb93e19ce7

export function App() {
  const router = createBrowserRouter([
<<<<<<< HEAD
    {
      path: "/",
      element: <Screen.Intro />,
    },
    {
      path: "/login",
      element: <Screen.Login />,
    },
    {
      path: "/join",
      element: <Screen.Join />,
    },
    // {
    //   path: "/layout",
    //   element: <Layout/>,
    // },
=======
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.Login /> },
    { path: "/join", element: <auth.Join /> },
>>>>>>> 534c59590480a7168f7a05c9141037fb93e19ce7
  ]);

  return <RouterProvider router={router} />;
}
