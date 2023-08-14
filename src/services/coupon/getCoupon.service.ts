import { createAPIService } from "../../apis";

export interface GetCouponDataRes {
  brand: string;
  couponName: string;
  startDate: string;
  endDate: string;
  couponImg: string;
}

export const GetCouponData = createAPIService<GetCouponDataRes>()({
  config: { method: "GET", url: "/coupon/like" },
});
