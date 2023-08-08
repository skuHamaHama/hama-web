import { postLogin, PostLoginReq } from "@services/auth";

const usePostLogin = async (data: PostLoginReq) => {
  try {
    const res = await postLogin("localhost:8080/api/auth/login");

    const accessToken = res.data.accessToken;
    localStorage.setItem("accessToken", accessToken);

    const refreshToken = res.data.refreshToken;
    document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
  } catch (error) {
    alert("없는 아이디 혹은 비밀번호 오류");
  }
};
