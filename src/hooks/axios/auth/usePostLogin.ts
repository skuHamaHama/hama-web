import { useNavigate } from "react-router-dom";
import { postLogin, PostLoginReq } from "../../../services";

export function usePostLogin() {
  const navigate = useNavigate();
  const login = async (data: PostLoginReq) => {
    try {
      const res = await postLogin(data);

      const accessToken = res.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      const refreshToken = res.data.data.refreshToken;
      document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;

      navigate("/user/main");
    } catch (error) {
      alert("없는 아이디 혹은 비밀번호 오류");
    }
  };
  return login;
}
