import { postLogin, PostLoginReq } from "@services/auth";

export function usePostLogin() {
  const login = async (data: PostLoginReq) => {
    try {
      const res = await postLogin(data);

      const accessToken = res.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      const refreshToken = res.data.data.refreshToken;
      document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
    } catch (error) {
      alert("없는 아이디 혹은 비밀번호 오류");
    }
  };
  return login;
}
