import { axiosInstance } from "../../apis";
import { GetCouponDataRes } from "../../services";

//Temp Auth
const accessToken = "accessToken";
//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetCoupon() {
  const getCoupon = async (couponId: string) => {
    try {
      const res: GetCouponDataRes = await axiosInstance.get(
        `/coupon/${couponId}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      alert("DetailPage coupon Data");
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getCoupon;
}

//브랜드 해당 쿠폰 리스트
export function useGetCouponList() {
  const getCouponList = async (brandId: string) => {
    try {
      const res: GetCouponDataRes[] = await axiosInstance.get(
        `/coupon/${brandId}/list`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      alert("Brand coupon Data");
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getCouponList;
}

//키워드 검색 쿠폰 리스트
export function useGetSearchCoupon() {
  const getSearchCoupon = async (searchKeyword: string) => {
    try {
      const res: GetCouponDataRes[] = await axiosInstance.get(
        `/coupon/search/list?searchKeyword=${searchKeyword}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      alert("Keyword coupon Data");
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getSearchCoupon;
}

//메인 페이지 속 쿠폰 정렬
//인기순 -> likeCount, 최신순 -> createDate
export function useGetOrderByCoupon() {
  const orderByCoupon = async (orderBy: string) => {
    try {
      const res: GetCouponDataRes[] = await axiosInstance.get(
        `/coupon/main?orderby==${orderBy}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      alert("MainPage coupon Data");
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return orderByCoupon;
}