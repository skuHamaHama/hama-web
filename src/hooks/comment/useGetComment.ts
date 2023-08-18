import { axiosInstance } from "../../apis";
import { GetCommentDataRes } from "../../services";

//메인 페이지 댓글 목록
export function useGetComment() {
  const getComment = async () => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get("comments", {
        headers: { "Content-type": "application/json" },
      });
      return res;
    } catch (error) {
      console.log("댓글 요청 오류:" + error);
      return;
    }
  };
  return getComment;
}

//모든 댓글 목록
export function useGetCommentList() {
  const getCommentList = async () => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get("comment/list", {
        headers: { "Content-type": "application/json" },
      });
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getCommentList;
}

//쿠폰에 대한 댓글 목록
export function useGetSearchCommentList() {
  const getSearchCommentList = async (couponId: string) => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get(
        `comments/${couponId}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getSearchCommentList;
}

//유저가 작성한 댓글 목록
export function useGetUserCommentList() {
  const getUserCommentList = async () => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get(
        `comments/couponlist`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getUserCommentList;
}
