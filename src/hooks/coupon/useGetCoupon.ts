import { axiosInstance } from "../../apis";
import { GetCouponDataRes } from "../../services";

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetCoupon() {
  const getCoupon = async (couponId: number) => {
    try {
      const response = await axiosInstance.get<GetCouponDataRes>(
        `/coupon/${couponId}`
      );
      console.log("쿠폰정보" + response.data);
      return response.data;
    } catch (error) {
      console.log("쿠폰조회" + error);
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
          headers: { "Content-type": "application/json" },
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
          headers: { "Content-type": "application/json" },
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
  const orderByCoupon = async (
    orderBy: string
  ): Promise<GetCouponDataRes[]> => {
    try {
      const response = await axiosInstance.get<GetCouponDataRes[]>(
        `/coupon/main?orderby=${orderBy}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      console.log("메인페이지 쿠폰" + response.data);
      return response.data;
    } catch (error) {
      console.log("댓글 요청 오류" + error);
      return error;
    }
  };
  return orderByCoupon;
}
