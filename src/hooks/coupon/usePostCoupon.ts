import {
  PostCouponReq,
  deleteCoupon,
  postCoupon,
  postLikeCoupon,
  putUpdateCoupon,
} from "../../services";
import { useMutation } from "react-query";

//쿠폰 등록
export function usePostCoupon() {
  return useMutation(["postCoupon"], postCoupon);
}

//쿠폰 수정
export function usePutUpdateCoupon(couponId: number, data: PostCouponReq) {
  return useMutation(["putUpdateCoupon", couponId, data], () =>
    putUpdateCoupon(couponId, data)
  );
}

//쿠폰 삭제
export function useDeleteCoupon(couponId: number) {
  return useMutation(["deleteCoupon", couponId], () => deleteCoupon(couponId));
}

//쿠폰 즐겨찾기
export function usePostLikeCoupon() {
  return useMutation(["postLikeCoupon"], postLikeCoupon);
}
