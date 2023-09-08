import { axiosInstance, getHeader } from "../../apis/axiosInstance";

export interface GetCouponRes {
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
  const res = axiosInstance.get<GetCouponRes[]>(
    `/coupon/main?orderby=${orderBy}`,
    {
      headers: getHeader(),
    }
  );
  return res;
}

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function getCoupon(couponId: number) {
  const res = axiosInstance.get<GetCouponRes>(`/coupon/${couponId}`);
  return res;
}

//브랜드 해당 쿠폰 리스트
export function getCouponList(brandName: string) {
  const res = axiosInstance.get<GetCouponRes[]>(`/coupon/${brandName}/list`);
  return res;
}

//키워드 검색 쿠폰 리스트
export function getSearchCoupon(searchKeyword: string) {
  const res = axiosInstance.get<GetCouponRes[]>(
    `/coupon/search/list?searchKeyword=${searchKeyword}`
  );
  return res;
}
