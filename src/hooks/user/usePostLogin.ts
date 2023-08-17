import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLoginReq, PostLoginRes } from "../../services";
import { axiosInstance } from "../../apis";

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  userEmail: string;
}

export function usePostLogin() {
  const [authToken, setAuthToken] = useState<AuthToken>({
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userEmail: "",
  });
  const navigate = useNavigate();
  const login = async (postReq: PostLoginReq) => {
    try {
      const res: PostLoginRes = await axiosInstance.post("/login", postReq, {
        headers: { "Content-type": "application/json" },
      });

      //constext 설정 변수 -> setAuth에 전달
      setAuthToken({
        ...authToken,
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        isAuthenticated: true,
        userEmail: postReq.email,
      });

      //로컬스토리지 저장
      localStorage.setItem("authToken", JSON.stringify(authToken));
      console.log(JSON.stringify(authToken)); //테스트
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  return login;
}
