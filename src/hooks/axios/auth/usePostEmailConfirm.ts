import { postEmailVerify, PostEmailVerifyReq } from "../../../services";

export function usePostEmailConfirm() {
  const emailConfirm = async (data: PostEmailVerifyReq) => {
    try {
      await postEmailVerify(data);
      alert("인증 요청이 완료되었습니다.");
    } catch (error) {
      alert("인증 요청 오류");
    }
  };
  return emailConfirm;
}
