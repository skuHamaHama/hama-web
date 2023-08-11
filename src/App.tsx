import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as coupon from "./screens/coupon";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.Login /> },
    { path: "/join", element: <auth.Join /> },
    { path: "/main", element: <main.Home /> },
    { path: "/usecoupon", element: <coupon.UseCoupon /> },
  ]);

  return <RouterProvider router={router} />;
}
