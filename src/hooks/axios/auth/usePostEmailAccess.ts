import { postEmailAccess, PostEmailConfirmReq } from "@services/auth";

export function usePostEmailAccess() {
  const emailAccess = async (data: PostEmailConfirmReq) => {
    try {
      await postEmailAccess(data);
    } catch (error) {
      alert("인증 확인 오류");
    }
  };
  return emailAccess;
}
