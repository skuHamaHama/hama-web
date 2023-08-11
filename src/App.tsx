import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as coupon from "./screens/coupon";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.LoginScreen /> },
    { path: "/join", element: <auth.JoinScreen /> },
    { path: "/user/help", element: <auth.IdIncuryScreen /> },
    { path: "/user/help/pwInquiry", element: <auth.PsIncuryScreen /> },
    { path: "/main", element: <main.Home /> },
    { path: "/usecoupon", element: <coupon.UseCoupon /> },
  ]);

  return <RouterProvider router={router} />;
}
