import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Screen from "./screens/index";
// import "./App.css";
import Layout from './components/Layout/Layout'

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
    {
      path: "/layout",
      element: <Layout/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
