import { axiosInstance } from "../../apis";

//중복 확인
export interface GetRegisterNicknameRes {
  status: boolean; //true -> 가입 가능
}

//닉네임 중복 확인
export function getRegisterNickname(nickname: string) {
  const res = axiosInstance.get<GetRegisterNicknameRes>(
    `/user/register/${nickname}`
  );
  return res;
}
