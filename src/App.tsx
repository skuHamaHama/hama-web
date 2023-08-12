import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as coupon from "./screens/coupon";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },
    { path: "/login", element: <auth.LoginScreen /> },
    { path: "/join", element: <auth.JoinScreen /> },
    { path: "/user/help", element: <auth.IdIncuryScreen /> }, //아이디 찾기
    { path: "/user/help/pwInquiry", element: <auth.PsIncuryScreen /> }, //비밀번호 찾기
    { path: "/user/me", element: <auth.PsIncuryScreen /> }, //마이페이지
    { path: "/main", element: <main.MainScreen /> },
    { path: "/usecoupon", element: <coupon.UseCoupon /> },
  ]);

  return <RouterProvider router={router} />;
}
