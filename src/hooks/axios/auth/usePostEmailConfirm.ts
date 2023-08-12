import { postEmailVerify, PostEmailVerifyReq } from "@services/auth";

export function usePostEmailConfirm() {
  const emailConfirm = async (data: PostEmailVerifyReq) => {
    try {
      await postEmailVerify(data);
    } catch (error) {
      alert("인증 요청 오류");
    }
  };
  return emailConfirm;
}
