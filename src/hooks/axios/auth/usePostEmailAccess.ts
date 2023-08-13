import { postEmailAccess, PostEmailConfirmReq } from "../../../services";

export function usePostEmailAccess() {
  const emailAccess = async (data: PostEmailConfirmReq) => {
    try {
      await postEmailAccess(data);
      alert("인증이 완료되었습니다.");
    } catch (error) {
      alert("인증번호 오류");
    }
  };
  return emailAccess;
}
