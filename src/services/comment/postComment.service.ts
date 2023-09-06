import { axiosInstance } from "../../apis";
import { GetCommentRes } from "./";

//댓글 등록
export interface PostCreateCommentReq {
  userEmail: string;
  couponId: number;
  comment: string;
  satisfied: boolean;
  unsatisfied: boolean;
}

//댓글 조회
export interface PostCommentReq {
  userEmail: string;
  couponName: string;
}

//댓글 등록
export function postCreateComment(data: PostCreateCommentReq) {
  const res = axiosInstance.post("/comment/create", data);
  return res;
}

//댓글 조회
export function postComment(data: PostCommentReq) {
  const res = axiosInstance.post<GetCommentRes>("/comment", data);
  return res;
}
