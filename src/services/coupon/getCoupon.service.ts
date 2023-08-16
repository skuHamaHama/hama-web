import { createAPIService } from "../../apis";

export interface GetCouponDataRes {
  brand: string;
  couponName: string;
  startDate: string;
  endDate: string;
  couponImg: string;
}

//단일 쿠폰 조회
export const getCouponData = (couponId: string) => {
  createAPIService<GetCouponDataRes>()({
    config: { method: "GET", url: "/coupon/:urlParam" },
    urlParams: { urlParam: couponId },
  });
};

//브랜드 해당 쿠폰 리스트
export const getCouponListData = (brandId: string) =>
  createAPIService<GetCouponDataRes>()({
    config: {
      method: "GET",
      url: `/coupon/search/list?searchKeyword=${brandId}`,
    },
  });

//키워드 검색 쿠폰 리스트
export const getSearchCouponData = (searchKeyword: string) =>
  createAPIService<GetCouponDataRes>()({
    config: {
      method: "GET",
      url: `/coupon/search/list?searchKeyword=${searchKeyword}`,
    },
  });

//메인 페이지 속 쿠폰 정렬
//인기순 -> likeCount, 최신순 -> createDate
export const getOrderByCouponData = (orderBy: string) =>
  createAPIService<GetCouponDataRes>()({
    config: {
      method: "GET",
      url: `/coupon/main?orderby==${orderBy}`,
    },
  });
