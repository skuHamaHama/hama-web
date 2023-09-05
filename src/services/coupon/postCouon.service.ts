import { axiosInstance } from "../../apis";

export interface PostCouponDataReq {
  brandName: string;
  couponName: string;
  couponCode: string;
  couponUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}

//쿠폰 등록
export function postCoupon(data: PostCouponDataReq) {
  const res = axiosInstance.post("/coupon/create", data);
  return res;
}
