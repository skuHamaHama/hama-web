import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Screen from "./screens/index";
// import "./App.css";

function App() {
  const router = createBrowserRouter([
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
