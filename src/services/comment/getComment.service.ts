import { axiosInstance, getHeader } from "../../apis";

export interface GetCommentRes {
  brandName: string;
  couponName: string;
  comment: string;
}

//메인 페이지 댓글 조회
export function getComment() {
  const res = axiosInstance.get<GetCommentRes[]>("/comments/main", {
    headers: getHeader(),
  });
  return res;
}

//모든 댓글 목록
export function getCommentList() {
  const res = axiosInstance.get<GetCommentRes[]>("/comment/list");
  return res;
}

//쿠폰에 대한 댓글 목록
export function getSearchCommentList(couponId: number) {
  const res = axiosInstance.get<GetCommentRes[]>(`comments/${couponId}`);
  return res;
}

//유저가 작성한 댓글 목록
export function getUserCommentList() {
  const res = axiosInstance.get<GetCommentRes[]>(`/comments/couponlist`);
  return res;
}
