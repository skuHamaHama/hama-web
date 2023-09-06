import {
  PostCouponDataReq,
  deleteCoupon,
  postCoupon,
  postLikeCoupon,
  putUpdateCoupon,
} from "../../services";
import { useMutation } from "react-query";

//쿠폰 등록
export function usePostCoupon(data: PostCouponDataReq) {
  return useMutation(["postCoupon"], () => postCoupon(data));
}

//쿠폰 수정
export function usePutUpdateCoupon(couponId: number, data: PostCouponDataReq) {
  return useMutation(["putUpdateCoupon"], () =>
    putUpdateCoupon(couponId, data)
  );
}

//쿠폰 삭제
export function useDeleteCoupon(couponId: number) {
  return useMutation(["deleteCoupon"], () => deleteCoupon(couponId));
}

//쿠폰 즐겨찾기
export function usePostLikeCoupon(couponId: number) {
  return useMutation(["postLikeCoupon"], () => postLikeCoupon(couponId));
}
