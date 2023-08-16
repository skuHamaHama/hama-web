import { axiosInstance } from "../../apis";
import { GetCommentDataRes } from "../../services";

//Temp Auth
const accessToken = "accessToken";
//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetComment() {
  const getComment = async () => {
    try {
      const res: GetCommentDataRes = await axiosInstance.get("comment/main", {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getComment;
}

//모든 댓글 목록
export function useGetCommentList() {
  const getCommentList = async () => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get("comment/list", {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      return res;
    } catch (error) {
      alert(error);
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
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getSearchCommentList;
}

//유저가 작성한 댓글 목록
export function useGetUserCommentList() {
  const getUserCommentList = async (orderBy: string) => {
    try {
      const res: GetCommentDataRes[] = await axiosInstance.get(
        `comments/couponlist`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getUserCommentList;
}