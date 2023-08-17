import { axiosInstance } from "../../apis";
import { GetCouponDataRes, GetBrandDataRes } from "../../services";

//Temp Auth
const accessToken = "accessToken";
//즐겨찾기한 쿠폰
export function useGetLikeCoupon() {
  const getLikeCoupon = async () => {
    try {
      const res: GetCouponDataRes = await axiosInstance.get(
        "mypage/likeCoupon",
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getLikeCoupon;
}

//즐겨찾기한 브랜드
export function useGetLikeBrand() {
  const getLikeBrand = async () => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        "mypage/likeBrand",
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getLikeBrand;
}
