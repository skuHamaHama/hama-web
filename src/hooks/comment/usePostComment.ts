import {
  postCreateComment,
  postComment,
  PostCommentReq,
  PostCreateCommentReq,
} from "../../services";
import { useMutation } from "@tanstack/react-query";

//댓글 등록
export function usePostCreateComment(data: PostCreateCommentReq) {
  return useMutation(["postCreateComment"], () => postCreateComment(data));
}

//댓글 조회
export function usePostComment(data: PostCommentReq) {
  return useMutation(["postComment"], () => postComment(data));
}
