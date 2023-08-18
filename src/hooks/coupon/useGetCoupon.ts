import { axiosInstance } from "../../apis";
import { GetCouponDataRes } from "../../services";

//Temp Auth
const authTokenString = localStorage.getItem("authToken");
const authToken = authTokenString ? JSON.parse(authTokenString) : null;
const accessToken = authToken.accessToken;

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetCoupon() {
  const getCoupon = async (
    couponId: number
  ): Promise<GetCouponDataRes | undefined> => {
    try {
      const res: GetCouponDataRes = await axiosInstance.get(
        `/coupon/${couponId}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getCoupon;
}

//브랜드 해당 쿠폰 리스트
export function useGetCouponList() {
  const getCouponList = async (brandId: number) => {
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
      console.log(error);
      return;
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
      console.log(error);
      return;
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
        `/coupon/main?orderby=${orderBy}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      alert("MainPage coupon Data");
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return orderByCoupon;
}
