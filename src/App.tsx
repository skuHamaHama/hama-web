import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as auth from "./screens/auth";
import * as main from "./screens/main";
import * as user from "./screens/user";
import * as coupon from "./screens/coupon";
import * as brand from "./screens/brand";
import * as admin from "./screens/admin";
import { WriteReview } from "./screens/review";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <main.Intro /> },

    { path: "/login", element: <auth.LoginScreen /> },
    { path: "/join", element: <auth.JoinScreen /> },
    { path: "/user", element: <auth.IdIncuryScreen /> }, //아이디 찾기

    { path: "/user/help", element: <auth.IdIncuryScreen /> }, //아이디 찾기
    { path: "/user/help/pwInquiry", element: <auth.PsIncuryScreen /> }, //비밀번호 찾기
    { path: "/user/help/profile", element: <auth.ProfileScreen /> }, //프로필 수정

    { path: "/main", element: <main.MainScreen /> }, //메인 페이지
    {
      path: "/coupon/brand/:categoryId",
      element: <coupon.CouponBrandScreen />,
    }, //카테고리 쿠폰 페이지

    { path: "/user/me", element: <user.MyPageScreen /> }, //마이 페이지
    {
      path: "/coupon/category:categoryId",
      element: <coupon.CouponCategoryScreen />,
    }, //카테고리 브랜드 페이지
    { path: "/user/me/recent", element: <user.RecentCouponScreen /> },
    { path: "/user/me/wish", element: <user.WishCouponScreen /> },
    { path: "/user/me/used", element: <user.UsedCouponScreen /> },
    { path: "/user/me/favor", element: <user.FavorBrandScreen /> },

    { path: "/coupon/registration", element: <coupon.CouponRegistration /> }, //쿠폰 등록
    // { path: "/coupon/category/", element: <coupon.CategoryScreen /> },
    { path: "/brand/search", element: <brand.SearchBrandScreen /> }, //브랜드 찾기
    { path: "/brand/search/keyword", element: <brand.SearchResultScreen /> },

    { path: "/usecoupon", element: <coupon.UseCoupon /> }, //쿠폰 사용하려고 할때 나오는 화면
    { path: "/writereview", element: <WriteReview /> }, //후기 작성

    { path: "/admin", element: <admin.Admin /> }, //관리자 페이지
    { path: "/admin/coupon", element: <admin.AdminCoupon /> }, //쿠폰관리자 페이지
  ]);

  return <RouterProvider router={router} />;
}
