import {
  getComment,
  getCommentList,
  getSearchCommentList,
  getUserCommentList,
} from "../../services";
import { useQuery } from "@tanstack/react-query";

//메인 페이지 댓글 목록
export function useGetComment() {
  return useQuery(["getComment"], getComment);
}

//모든 댓글 목록
export function useGetCommentList() {
  return useQuery(["getCommentList"], getCommentList);
}

//쿠폰에 대한 댓글 목록
export function useGetSearchCommentList(couponId: number) {
  return useQuery(["getSearchCommentList", couponId], () =>
    getSearchCommentList(couponId)
  );
}

//유저가 작성한 댓글 목록
export function useGetUserCommentList() {
  return useQuery(["getUserCommentList"], getUserCommentList);
}
