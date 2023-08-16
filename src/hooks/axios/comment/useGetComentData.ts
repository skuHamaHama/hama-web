import {
  getCommentData,
  getCouponIdCommentData,
  getSearchCommentData,
} from "../../../services";

export function useGetCommentData(data: string) {
  const commentData = async () => {
    try {
      await getCommentData(data);
      //받은 데이터들을 화면에 뿌려줌
      //받은 데이터가 false일 경우 alert을 띄어주고 로그인페이지로 이동
      alert("댓글 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert("데이터 요청 오류");
    }
  };
  return commentData;

  const searchCommentData = async () => {
    try {
      //
      await getSearchCommentData(data);
      alert("유저가 작성한 댓글 리스트 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert("데이터 요청 오류");
    }
  };
  return searchCommentData;

  const couponIdCommentData = async () => {
    try {
      await getCouponIdCommentData(data);
      alert("댓글 데이터 요청이 완료되었습니다.");
    } catch (error) {
      alert("데이터 요청 오류");
    }
  };
  return couponIdCommentData;
}
