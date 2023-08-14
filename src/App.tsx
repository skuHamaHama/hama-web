import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as user from "./screens/user";
import * as coupon from "./screens/coupon";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },

    { path: "/login", element: <auth.LoginScreen /> },
    { path: "/join", element: <auth.JoinScreen /> },
    { path: "/user/help", element: <auth.IdIncuryScreen /> }, //아이디 찾기
    { path: "/user/help/pwInquiry", element: <auth.PsIncuryScreen /> }, //비밀번호 찾기
    { path: "/user/help/profile", element: <auth.ProfileScreen /> }, //프로필 수정

    { path: "/main", element: <main.MainScreen /> }, //메인 페이지
    { path: "/user/me", element: <user.MyPageScreen /> }, //마이 페이지
    { path: "/user/me/recent", element: <user.RecentCouponScreen /> },
    { path: "/user/me", element: <user.MyPageScreen /> }, //마이페이지
    { path: "/usecoupon", element: <coupon.UseCoupon /> },
    { path: "/usecoupon", element: <coupon.UseCoupon /> }, //쿠폰 사용하려고 할때 나오는 화면
  ]);

  return <RouterProvider router={router} />;
}
