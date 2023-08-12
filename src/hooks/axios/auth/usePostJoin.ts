import { postJoin, PostJoinReq } from "@services/auth";

export function usePostJoin() {
  const join = async (data: PostJoinReq) => {
    try {
      await postJoin(data);
    } catch (error) {
      alert("회원가입 오류");
    }
  };
  return join;
}
