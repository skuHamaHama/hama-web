import { createAPIService } from "../../apis";

//쿠폰 등록
export interface CouponDataReq {
  brandName: string;
  couponName: string;
  couponCode: string;
  couponUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface PostCouponLikeReq {
  couponId: string;
}

//쿠폰 등록
export const postCreate = (data: PostCouponLikeReq) =>
  createAPIService<CouponDataReq>()({
    config: { method: "POST", url: `/coupon/${data.couponId}/like` },
  });

//쿠폰 수정
export const putUpdate = createAPIService<CouponDataReq>()({
  config: { method: "POST", url: "/coupon/create" },
});

//쿠폰 즐겨찾기
export const postCouponLike = (data: PostCouponLikeReq) =>
  createAPIService<PostCouponLikeReq>()({
    config: { method: "POST", url: `/coupon/${data.couponId}/like` },
  });
