import { axiosInstance } from "../../apis";

export interface PostCouponReq {
  brandName: string;
  couponName: string;
  couponCode: string;
  couponUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}

//쿠폰 등록
export function postCoupon(data: PostCouponReq) {
  const res = axiosInstance.post("/coupon/create", data);
  return res;
}

//쿠폰 즐겨찾기
export function postLikeCoupon(couponId: number) {
  const res = axiosInstance.post(`/coupon/${couponId}/like`);
  return res;
}

//쿠폰 수정
export function putUpdateCoupon(couponId: number, data: PostCouponReq) {
  const res = axiosInstance.put(`/coupon/${couponId}/update`, data);
  return res;
}

//쿠폰 삭제
export function deleteCoupon(couponId: number) {
  const res = axiosInstance.delete(`/coupon/${couponId}/delete`);
  return res;
}
