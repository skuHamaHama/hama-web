//쿠폰 단일 조회
export interface GetCouponDetailDataRes {
  couponId: number;
  couponName: string;
  brandName: string;
}
//쿠폰 조회
export interface GetCouponDataRes {
  brandName: string;
  couponName: string;
  startDate: string;
  endDate: string;
  couponImg: string;
}
