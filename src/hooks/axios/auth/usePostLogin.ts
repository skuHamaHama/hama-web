import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, PostLoginReq } from "../../../services";

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
}
export function usePostLogin() {
  const [authToken, setAuthToken] = useState<AuthToken>({
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
  });
  const navigate = useNavigate();
  const login = async (data: PostLoginReq) => {
    try {
      const res = await postLogin(data);
      setAuthToken({
        ...authToken,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        isAuthenticated: true,
      });
      localStorage.setItem("authToken", JSON.stringify(authToken));
      console.log(res);
      navigate("/user/main");
    } catch (error) {
      console.log(error);
      alert("없는 아이디 혹은 비밀번호 오류");
    }
  };
  return login;
}
