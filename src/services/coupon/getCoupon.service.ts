import { createAPIService } from "../../apis";

export interface GetCouponDataRes {
  brand: string;
  couponName: string;
  startDate: string;
  endDate: string;
  couponImg: string;
}

export const GetCouponData = (param: string) => {
  createAPIService<GetCouponDataRes>()({
    config: { method: "GET", url: "/coupon/:urlParam" },
    urlParams: { urlParam: param },
  });
};
export const getSearchCouponData = (searchKeyword: string) =>
  createAPIService<GetCouponDataRes>()({
    config: {
      method: "GET",
      url: `/coupon/search/list?searchKeyword=${searchKeyword}`,
    },
  });
