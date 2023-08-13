import { useNavigate } from "react-router-dom";
import { postJoin, PostJoinReq } from "../../../services";

export function usePostJoin() {
  const navigate = useNavigate();
  const join = async (data: PostJoinReq) => {
    try {
      await postJoin(data);
      navigate("/login");
    } catch (error) {
      alert("회원가입 오류");
    }
  };
  return join;
}
