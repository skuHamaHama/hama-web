import { axiosInstance } from "../../apis";
import {} from "../../hooks";
import { GetCommentDataRes, GetCouponDataRes } from "../../services";

//Temp Auth
const accessToken = "accessToken";
//마이페이지 댓글
export function useGetMyPageInfo() {
  const getMyPageComment = async (order: string) => {
    try {
      const res: GetCommentDataRes = await axiosInstance.get(
        `mypage/${order}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
      return;
    }
  };
  return getMyPageComment;
}

//마이페이지 쿠폰
export function useGetMyPageCoupon() {
  const getMyPageCoupon = async (order: string) => {
    try {
      const res: GetCouponDataRes[] = await axiosInstance.get(
        `mypage/${order}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
      return;
    }
  };
  return getMyPageCoupon;
}
