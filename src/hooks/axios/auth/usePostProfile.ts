import { postProfile, PostProfileReq } from "../../../services";

export function usePostProfile() {
  const nicknameAccess = async (data: PostProfileReq) => {
    try {
      await postProfile(data);
      alert("프로필 수정이 완료되었습니다.");
    } catch (error) {
      alert("수정 오류");
    }
  };
  return nicknameAccess;
}
