import { getCommentData } from "../../../services";

export function useGetCommentData(data: string) {
  const commentData = async () => {
    try {
      await getCommentData(data);
      alert("댓글 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert("데이터 요청 오류");
    }
  };
  return commentData;
}
