import { axiosInstance } from "../../apis/axiosInstance";

export interface GetCouponDataRes {
  couponId: number;
  couponName: string;
  brandName: string;
  category: string;
  brandId: number;
  startDate: string;
  endDate: string;
  brandImgUrl: string;
  couponCode: string;
  couponUrl: string;
  description: string;
  popularity: number;
  useCount: number;
  likeCount: number;
  dislikeCount: number;
}

//메인 페이지 쿠폰 조회
export function getMainCoupon(orderBy: string) {
  const res = axiosInstance.get<GetCouponDataRes[]>(
    `/coupon/main?orderby=${orderBy}`
  );
  return res;
}

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function getCoupon(couponId: number) {
  const res = axiosInstance.get<GetCouponDataRes[]>(`/coupon/${couponId}`);
  return res;
}

//브랜드 해당 쿠폰 리스트
export function getCouponList(brandName: string) {
  const res = axiosInstance.get<GetCouponDataRes[]>(
    `/coupon/${brandName}/list`
  );
  return res;
}
