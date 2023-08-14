import { postNicknameAccess, PostNicknameConfirmReq } from "../../../services";

export function usePostNicknameAccess() {
  const nicknameAccess = async (data: PostNicknameConfirmReq) => {
    try {
      await postNicknameAccess(data);
      alert("인증이 완료되었습니다.");
    } catch (error) {
      alert("인증 오류");
    }
  };
  return nicknameAccess;
}
