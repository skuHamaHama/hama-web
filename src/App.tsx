import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as user from "./screens/user";
import * as coupon from "./screens/coupon";
export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },
    { path: "/main", element: <main.MainScreen /> }, //메인 페이지
    { path: "/login", element: <auth.LoginScreen /> },
    { path: "/join", element: <auth.JoinScreen /> },
    { path: "/user/help", element: <auth.IdIncuryScreen /> }, //아이디 찾기
    { path: "/user/help/pwInquiry", element: <auth.PsIncuryScreen /> }, //비밀번호 찾기
    { path: "/user/me", element: <user.MyPageScreen /> }, //마이페이지
    { path: "/usecoupon", element: <coupon.UseCoupon /> }, //쿠폰 사용하려고 할때 나오는 화면
  ]);

  return <RouterProvider router={router} />;
}
