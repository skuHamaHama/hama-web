import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import * as Screen from "./screens/index";
// import "./App.css";

import * as auth from "./hooks/screens/auth/index";
import * as main from "./hooks/screens/main/index";


export function App() {
  const router = createBrowserRouter([

    // {
    //   path: "/",
    //   element: <Screen.Intro />,
    // },
    // {
    //   path: "/login",
    //   element: <Screen.Login />,
    // },
    // {
    //   path: "/join",
    //   element: <Screen.Join />,
    // },
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.Login /> },
    { path: "/join", element: <auth.Join /> },

  ]);

  return <RouterProvider router={router} />;
}
