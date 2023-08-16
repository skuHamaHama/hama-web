import { getOrderByCouponData } from "../../../services";

//메인 페이지 속 쿠폰 정렬
//인기순 -> likeCount, 최신순 -> createDate
export function useGetOrderByCouponData() {
  const orderByCouponDat = async (orderBy: string) => {
    try {
      await getOrderByCouponData(orderBy);
      alert("test : 쿠폰 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert(error + ": 데이터 요청 오류");
    }
  };
  return orderByCouponDat;
}
