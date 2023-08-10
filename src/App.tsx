import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./hooks/screens/auth/index";
import * as main from "./hooks/screens/main/index";
import * as coupon from "./hooks/screens/coupon/index";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.Login /> },
    { path: "/join", element: <auth.Join /> },
    { path: "/main", element: <main.Home /> },
    { path: "/usecoupon", element: <coupon.UseCoupon /> }
  ]);

  return <RouterProvider router={router} />;
}
