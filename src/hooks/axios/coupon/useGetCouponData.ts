import { GetCouponData } from "../../../services";

export function useGetBrandData() {
  const brandData = async (dataType: string) => {
    try {
      await GetCouponData(dataType);
      alert("쿠폰 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert("데이터 요청 오류");
    }
  };
  return brandData;
}
