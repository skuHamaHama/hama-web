import { useNavigate } from "react-router-dom";
import { postProfile, PostProfileReq } from "../../services";

export function usePostProfile() {
  const navigate = useNavigate();
  const nicknameAccess = async (data: PostProfileReq) => {
    try {
      await postProfile(data);
      alert("프로필 수정이 완료되었습니다.");
      navigate("/user/me");
    } catch (error) {
      alert("수정 오류");
    }
  };
  return nicknameAccess;
}
