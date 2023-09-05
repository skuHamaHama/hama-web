import { axiosInstance } from "../../apis";

export interface PostJoinReq {
  email: string;
  password: string;
  nickname: string;
}

export function postJoin(data: PostJoinReq) {
  const res = axiosInstance.post("/join", data);
  return res;
}
