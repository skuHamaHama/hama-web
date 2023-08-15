import {
  postEmailVerify,
  PostEmailVerifyReq,
  postNicknameAccess,
  PostNicknameConfirmReq,
} from "../../../services";

//인증요청
export function usePostEmailConfirm() {
  const emailConfirm = async (email: PostEmailVerifyReq) => {
    try {
      await postEmailVerify(email);
      alert("인증 요청이 완료되었습니다.");
    } catch (error) {
      alert("인증 요청 오류");
    }
  };
  return emailConfirm;
}

//중복 확인
export function usePostNicknameAccess() {
  const nicknameAccess = async (data: PostNicknameConfirmReq) => {
    try {
      await postNicknameAccess(data.nickname);
      alert("인증이 완료되었습니다.");
    } catch (error) {
      alert("인증 오류");
    }
  };
  return nicknameAccess;
}
