import {
  getMainCoupon,
  getCoupon,
  getCouponList,
  getSearchCoupon,
} from "../../services";
import { useQuery } from "@tanstack/react-query";

//메인 페이지 쿠폰 조회
//인기순 -> likeCount, 최신순 -> createDate
export function useGetMainCoupon(orderBy: string) {
  return useQuery(["getMainCoupon", orderBy], () => getMainCoupon(orderBy));
}

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetCoupon(couponId: number) {
  return useQuery(["getCoupon", couponId], () => getCoupon(couponId));
}

//브랜드 해당 쿠폰 리스트
export function useGetCouponList(brandName: string) {
  return useQuery(["getCouponList", brandName], () => getCouponList(brandName));
}

//키워드 검색 쿠폰 리스트
export function useGetSearchCoupon(searchKeyword: string) {
  return useQuery(["getSearchCoupon", searchKeyword], () =>
    getSearchCoupon(searchKeyword)
  );
}
