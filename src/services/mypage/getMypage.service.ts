import { axiosInstance } from "../../apis/axiosInstance";
import { GetCouponRes, GetCommentRes } from "../../services";

export interface GetMyPageBrandRes {
  brandId: number;
  category: string;
  brandName: string;
  brandEnglishName: string; //웹푸시용
  brandImgUrl: string;
}

//마이페이지 댓글
export function getMyPageComment() {
  const res = axiosInstance.get<GetCommentRes[]>("/mypage/crateComment");
  return res;
}

//등록 쿠폰 -> createCoupon, 사용 쿠폰 -> usedCoupons
export function getMyPageCoupon(order: string) {
  const res = axiosInstance.get<GetCouponRes[]>(`/mypage/${order}`);
  return res;
}

//마이페이지 즐겨찾기 쿠폰
export function getMyPageLikeCoupon(email: string) {
  const res = axiosInstance.get<GetCouponRes[]>(
    `mypage/likeCoupon?email=${email}`
  );
  return res;
}

//마이페이지 즐겨찾기 브랜드
export function getMyPageBrand(email: string) {
  const res = axiosInstance.get<GetMyPageBrandRes[]>(
    `mypage/likeBrand?email=${email}`
  );
  return res;
}
