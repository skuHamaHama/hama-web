//쿠폰 조회
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
